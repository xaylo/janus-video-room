export const janusRemoteMixin = {
    data() {
        return {
            remoteStream: null,
            bitrateTimer: [],
            remoteStreams: []
        }
    },
    methods: {

        fetchParticipants(connection) {
            // We wait for the plugin to send us an offer
            var getParticipantsRequest = {
                request: "listparticipants",
                room: this.webinarRoomId
            };
            connection.send({
                message: getParticipantsRequest
            });
        },
        newRemoteFeed(id, display, audio, video) {
            // A new feed has been published, create a new plugin handle and attach to it as a subscriber
            var remoteFeed = null;

            this.janus.attach({
                plugin: "janus.plugin.videoroom",
                opaqueId: this.opaqueId,
                success: (pluginHandle) => {
                    remoteFeed = pluginHandle;
                    remoteFeed.simulcastStarted = false;
                    this.Janus.log(
                        "Plugin attached! (" +
                        remoteFeed.getPlugin() +
                        ", id=" +
                        remoteFeed.getId() +
                        ")"
                    );
                    this.Janus.log("-- This is a subscriber - id:", id);
                    // We wait for the plugin to send us an offer
                    var subscribe = {
                        request: "join",
                        room: this.webinarRoomId,
                        ptype: "subscriber",
                        feed: id,
                        private_id: this.myPrivateId,
                        quality: 0,
                    };
                    // In case you don't want to receive audio, video or data, even if the
                    // publisher is sending them, set the 'offer_audio', 'offer_video' or
                    // 'offer_data' properties to false (they're true by default), e.g.:
                    // 		subscribe["offer_video"] = false;
                    // For example, if the publisher is VP8 and this is Safari, let's avoid video
                    if (
                        this.Janus.webRTCAdapter.browserDetails.browser === "safari" &&
                        (video === "vp9" || (video === "vp8" && !this.Janus.safariVp8))
                    ) {
                        if (video) video = video.toUpperCase();
                        console.log(
                            "Publisher is using " +
                            video +
                            ", but Safari doesn't support it: disabling video"
                        );
                        subscribe["offer_video"] = false;
                    }
                    remoteFeed.videoCodec = video;
                    remoteFeed.send({
                        message: subscribe
                    });
                },
                error: (error) => {
                    this.Janus.error("-- Error attaching plugin...", error);
                    console.log("Error attaching plugin... " + error);
                },
                onmessage: (msg, jsep) => {
                    this.Janus.debug(" ::: Got a message (subscriber) :::", msg);

                    var event = msg["videoroom"];

                    this.Janus.debug("Event: " + event);

                    if (msg["error"]) {
                        console.log(msg["error"]);
                    } else if (event) {
                        if (event === "attached") {
                            // Subscriber created and attached
                            for (var i = 1; i < 6; i++) {
                                if (!this.feeds[i]) {
                                    this.feeds[i] = remoteFeed;
                                    remoteFeed.rfindex = i;
                                    break;
                                }
                            }
                            remoteFeed.rfid = msg["id"];
                            remoteFeed.rfdisplay = msg["display"];

                            console.log(remoteFeed);

                            this.Janus.log(
                                "Successfully attached to feed " +
                                remoteFeed.rfid +
                                " (" +
                                remoteFeed.rfdisplay +
                                ") in room " +
                                msg["room"]
                            );
                            //   was being put in as html
                            console.log(remoteFeed.rfdisplay);
                        } else {
                            // What has just happened?
                        }
                    }
                    if (jsep) {
                        this.Janus.debug("Handling SDP as well...", jsep);
                        // Answer and attach
                        remoteFeed.createAnswer({
                            jsep: jsep,
                            // Add data:true here if you want to subscribe to datachannels as well
                            // (obviously only works if the publisher offered them in the first place)
                            media: {
                                audioSend: false,
                                videoSend: false
                            }, // We want recvonly audio/video
                            success: (jsep) => {
                                this.Janus.debug("Got SDP!", jsep);
                                var body = {
                                    request: "start",
                                    room: this.webinarRoomId
                                };
                                remoteFeed.send({
                                    message: body,
                                    jsep: jsep
                                });
                            },
                            error: (error) => {
                                this.Janus.error("WebRTC error:", error);
                                console.log("WebRTC error... " + error.message);
                            },
                        });
                    }
                },
                iceState: (state) => {
                    this.Janus.log(
                        "ICE state of this WebRTC PeerConnection (feed #" +
                        remoteFeed.rfindex +
                        ") changed to " +
                        state
                    );
                },
                webrtcState: (on) => {
                    this.Janus.log(
                        "Xaylo Janus says this WebRTC PeerConnection (feed #" +
                        remoteFeed.rfindex +
                        ") is " +
                        (on ? "up" : "down") +
                        " now"
                    );
                },
                onlocalstream: (stream) => {
                    // The subscriber stream is recvonly, we don't expect anything here
                },
                onremotestream: (stream) => {
                    this.Janus.debug(
                        "Remote feed #" + remoteFeed.rfindex + ", stream:",
                        stream
                    );
                    console.log(
                        "Checking the remote feed isnt a screen",
                        remoteFeed.rfdisplay
                    );
                    if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
                        this.screenShare = true;
                        this.$refs.remoteVideosContainer.classList.add("screen-active");
                        this.$refs.remoteScreenVideoElement.classList.remove("hidden");
                        this.$refs.remoteScreenVideoElement.srcObject = stream;
                    } else {
                        this.screenShare = false;
                        this.remoteStream = stream;
                        // this.$refs.remoteVideoElement.srcObject = stream;
                        // 
                        // this.fetchParticipants(remoteFeed)
                        var remoteStreamIndex = this.remoteStreams.findIndex(stream => stream.id === remoteFeed.id)
                        console.log('does it exist yet?', remoteStreamIndex)
                        if (remoteStreamIndex === -1) {
                            var data = {
                                id: remoteFeed.id,
                                stream: stream
                            }
                            this.remoteStreams.push(data)


                            // this.$refs['remoteVideo' + remoteFeed.id].srcObject = stream;
                        }



                    }

                    var videoTracks = stream.getVideoTracks();
                    if (!videoTracks || videoTracks.length === 0) {
                        // No remote video
                        // Lets hide the main remote window?
                        // Display no remote video but there is audio?
                    } else {
                        // Show the remote video
                    }
                },
                oncleanup: () => {
                    this.Janus.log(
                        " ::: Got a cleanup notification (remote feed " + id + ") :::"
                    );


                    var remoteStreamIndex = this.remoteStreams.findIndex(stream => stream.id === remoteFeed.id);
                    this.remoteStreams.splice(remoteStreamIndex, 1)

                    // Hide this remote video?
                    if (remoteFeed.spinner);
                    remoteFeed.spinner = null;
                    // If showing bitrate and res reset it here
                    if (this.bitrateTimer[remoteFeed.rfindex])
                        clearInterval(this.bitrateTimer[remoteFeed.rfindex]);
                    this.bitrateTimer[remoteFeed.rfindex] = null;
                    remoteFeed.simulcastStarted = false;
                },
            });
        },
    }
}