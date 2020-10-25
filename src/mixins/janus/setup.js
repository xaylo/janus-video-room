export const janusSetupMixin = {
    data() {
        return {
            room: this.roomData,
            server: this.serverUrl,
            janus: null,
            xayloConnection: null,
            webinarRoomId: parseInt(this.roomData.id),
            rtcState: null,
            // 
            userName: null,
            myJanusId: null,
            myPrivateId: null,
            // 
            screenUserName: null,
            myScreenId: null,
            myPrivateScreenId: null,
            // 
            published: false,
            role: "publisher",
            // 
            feeds: [],
        }
    },
    computed: {
        currentUser() {
            return {
                userName: this.userData.email,
                screenUserName: "***SCREEN***" + this.userData.email,
            };
        },
        opaqueId() {
            return "videoroom-" + this.Janus.randomString(12);
        },

        screenOpaqueId() {
            return "screen-" + this.Janus.randomString(12);
        },
    },
    watch: {
        Janus: (val, oldVal) => {
            if (val != null) {
                this.setupJanus()
            }
        }
    },
    methods: {

        processFeeds(list) {
            this.Janus.debug("Got a list of available publishers/feeds:", list);
            for (var f in list) {
                var id = list[f]["id"];
                var display = list[f]["display"];
                var audio = list[f]["audio_codec"];
                var video = list[f]["video_codec"];
                this.Janus.debug(
                    "  >> [" +
                    id +
                    "] " +
                    display +
                    " (audio: " +
                    audio +
                    ", video: " +
                    video +
                    ")"
                );
                console.log("incoming feed from - " + display + " gonna add it now");
                if (display != this.currentUser.screenUserName) {
                    this.newRemoteFeed(id, display, audio, video);
                }
            }
        },
        checkRoom() {
            var exists = {
                request: "exists",
                room: this.webinarRoomId,
            };

            var create = {
                request: "create",
                room: this.webinarRoomId,
            };

            this.xayloConnection.send({
                message: exists,
                success: (result) => {
                    console.log("checking if room exists: ", result);
                    if (result.exists) {
                        //   good stuff
                        this.registerUsername();
                        return true;
                    } else {
                        this.xayloConnection.send({
                            message: create,
                            success: (result) => {
                                this.checkRoom();
                            },
                        });
                    }
                },
            });
        },
        setupJanus() {
            this.Janus.init({
                debug: "all",
                callback: () => {
                    // Make sure the browser supports WebRTC
                    if (!this.Janus.isWebrtcSupported()) {
                        console.log("WebRTC is not supported, please use Chrome");
                        // console.log("No WebRTC support... ");
                        return;
                    }

                    this.startJanus();
                },
            });
        },
        startJanus() {
            this.janus = new this.Janus({
                server: this.server,
                success: () => {
                    // Attach to VideoRoom plugin
                    this.janus.attach({
                        plugin: "janus.plugin.videoroom",
                        opaqueId: this.opaqueId,
                        success: (pluginHandle) => {
                            this.xayloConnection = pluginHandle;

                            this.checkRoom();
                        },
                        error: (error) => {
                            console.log("Error attaching plugin... " + error);
                        },
                        iceState: (state) => {
                            this.Janus.log("ICE state changed to " + state);
                        },
                        mediaState: (medium, on) => {
                            this.Janus.log(
                                "Xaylo Janus " +
                                (on ? "started" : "stopped") +
                                " receiving our " +
                                medium
                            );
                        },
                        webrtcState: (on) => {
                            this.Janus.log(
                                "Xaylo Janus says our WebRTC PeerConnection is " +
                                (on ? "up" : "down") +
                                " now"
                            );
                            this.rtcState = on;
                            if (on) {
                                this.xayloConnection.send({
                                    message: {
                                        request: "configure",
                                        bitrate: 0
                                    },
                                });
                            }
                        },
                        onmessage: (msg, jsep) => {
                            var event = msg["videoroom"];

                            if (event) {
                                if (event === "joined") {
                                    this.myId = msg["id"];
                                    this.myPrivateId = msg["private_id"];

                                    this.publishOwnFeed(true);

                                    // Any new feed to attach to?

                                    if (msg["publishers"]) {
                                        var list = msg["publishers"];
                                        this.processFeeds(list);
                                    }
                                } else if (event === "destroyed") {
                                    // The room has been destroyed
                                    this.Janus.warn("The room has been destroyed!");
                                    console.log("The room has been destroyed", () => {
                                        // window.location.reload();
                                    });
                                } else if (event === "event") {
                                    // Any new feed to attach to?
                                    if (msg["publishers"]) {
                                        var list = msg["publishers"];
                                        this.processFeeds(list);
                                    } else if (msg["leaving"]) {
                                        // One of the publishers has gone away?

                                        var leaving = msg["leaving"];
                                        this.Janus.log("Publisher left: " + leaving);
                                        var remoteFeed = null;
                                        for (var i = 1; i < 6; i++) {
                                            if (this.feeds[i] && this.feeds[i].rfid == leaving) {
                                                remoteFeed = this.feeds[i];
                                                break;
                                            }
                                        }
                                        if (remoteFeed != null) {
                                            this.Janus.debug(
                                                "Feed " +
                                                remoteFeed.rfid +
                                                " (" +
                                                remoteFeed.rfdisplay +
                                                ") has left the room, detaching"
                                            );

                                            this.feeds[remoteFeed.rfindex] = null;
                                            remoteFeed.detach();
                                        }
                                    } else if (msg["unpublished"]) {
                                        // One of the publishers has unpublished?
                                        var unpublished = msg["unpublished"];
                                        this.Janus.log("Publisher left: " + unpublished);
                                        if (unpublished === "ok") {
                                            // That's us
                                            this.xayloConnection.hangup();
                                            return;
                                        }
                                        var remoteFeed = null;
                                        for (var i = 1; i < 6; i++) {
                                            if (this.feeds[i] && this.feeds[i].rfid == unpublished) {
                                                remoteFeed = this.feeds[i];
                                                break;
                                            }
                                        }
                                        if (remoteFeed != null) {
                                            this.Janus.debug(
                                                "Feed " +
                                                remoteFeed.rfid +
                                                " (" +
                                                remoteFeed.rfdisplay +
                                                ") has left the room, detaching"
                                            );

                                            console.log("other persons screen is leaving");
                                            if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
                                                this.screenShare = false;
                                                this.$refs.remoteVideoElement.classList.remove(
                                                    "screen-active"
                                                );
                                                this.$refs.remoteScreenVideoElement.classList.add(
                                                    "hidden"
                                                );
                                            }

                                            this.feeds[remoteFeed.rfindex] = null;
                                            remoteFeed.detach();
                                        }
                                    } else if (msg["error"]) {
                                        if (msg["error_code"] === 426) {
                                            // This is a "no such room" error: give a more meaningful description
                                            console.log("no such room");
                                        } else {
                                            console.log(msg["error"]);
                                        }
                                    }
                                }
                            }
                            if (jsep) {
                                this.Janus.debug("Handling SDP as well...", jsep);
                                this.xayloConnection.handleRemoteJsep({
                                    jsep: jsep
                                });
                                // Check if any of the media we wanted to publish has
                                // been rejected (e.g., wrong or unsupported codec)
                                var audio = msg["audio_codec"];
                                if (
                                    this.localStream &&
                                    this.localStream.getAudioTracks() &&
                                    this.localStream.getAudioTracks().length > 0 &&
                                    !audio
                                ) {
                                    // Audio has been rejected
                                    console.log(
                                        "Our audio stream has been rejected, viewers won't hear us"
                                    );
                                }
                                var video = msg["video_codec"];
                                if (
                                    this.localStream &&
                                    this.localStream.getVideoTracks() &&
                                    this.localStream.getVideoTracks().length > 0 &&
                                    !video
                                ) {
                                    // Video has been rejected
                                    console.log(
                                        "Our video stream has been rejected, viewers won't see us"
                                    );
                                    // Hide the webcam video
                                }
                            }
                        },
                        onlocalstream: (stream) => {
                            this.Janus.debug(" ::: Got a local stream :::", stream);
                            this.localStream = stream;
                            this.$refs.localVideoElement.srcObject = stream;
                            this.$refs.localVideoElement.muted = "muted";

                            //   this.Janus.attachMediaStream($("#myvideo").get(0), stream);
                            this.drawLocalVideo();

                            if (
                                this.xayloConnection.webrtcStuff.pc.iceConnectionState !==
                                "completed" &&
                                this.xayloConnection.webrtcStuff.pc.iceConnectionState !==
                                "connected"
                            ) {
                                console.log("connecting local video");
                                // show a spinner or something
                            }
                            var videoTracks = stream.getVideoTracks();
                            if (!videoTracks || videoTracks.length === 0) {
                                // No webcam
                            }
                        },
                        onremotestream: (stream) => {
                            // The publisher stream is sendonly, we don't expect anything here
                        },
                        oncleanup: () => {
                            this.Janus.log(
                                " ::: Got a cleanup notification: we are unpublished now :::"
                            );
                            this.localStream = null;
                            this.published = false;
                        },
                    });
                },
                error: (error) => {
                    this.Janus.error(error);
                    console.log(error, () => {
                        window.location.reload();
                    });
                },
                destroyed: () => {
                    //   window.location.reload();
                    this.unpublishOwnFeed();
                },
            });
        },
    },

    mounted() {
        if (this.Janus) {
            this.setupJanus();
        }
        window.addEventListener("beforeunload", () => {
            this.streamingLocally = false;
            this.updateRoomStreaming();
            this.janus.destroy();
        });
    },
    beforeDestroy() {
        this.streamingLocally = false;
        this.updateRoomStreaming();
        this.janus.destroy();
    },
}