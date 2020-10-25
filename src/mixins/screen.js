export const screenMixin = {
    data() {
        return {
            screenVideoElement: null,
            screenShare: null,
            screenSources: [],
            localScreenShare: false,
            remoteScreenShare: false,
            selectedScreenSource: null,
            screenButtonBusy: false,
            localScreenStream: null,
            // 
            screenCaptureSettings: {
                cursor: "never" // always, motion, never
            },
        }
    },
    computed: {
        miniScreen() {
            return this.$refs.miniScreen;
        },
    },
    methods: {
        endScreenShare() {
            this.screenButtonBusy = true;
            var unpublish = {
                request: "unpublish"
            };
            this.xayloScreenConnection.send({
                message: unpublish,
                success: () => {
                    this.localScreenShare = false;
                    this.screenButtonBusy = false;

                    this.localScreenStream.getTracks()
                        .forEach(track => track.stop())

                    this.localScreenStream = null;
                    this.miniScreen.srcObject = null
                    this.miniScreen.classList.add('hidden')
                    this.screenShare = null
                    this.screenVideoElement = null
                },
            });
        },

        registerScreenUsername() {
            // Create a new room
            this.Janus.log("Screen sharing session created: " + this.webinarRoomId);
            var register = {
                request: "join",
                room: this.webinarRoomId,
                ptype: "publisher",
                display: this.currentUser.screenUserName,
                quality: 0,
            };
            this.screenUserName = this.currentUser.screenUserName;
            this.xayloConnection.send({
                message: register
            });
        },

        enableScreenShare() {
            if (this.isElectron) {
                this.enableScreenShareElectron()
            } else {
                var displayMediaOptions = {
                    video: {
                        cursor: this.screenCaptureSettings.cursor,
                    },
                    audio: false,
                };

                var stream =
                    navigator.mediaDevices.getDisplayMedia(
                        displayMediaOptions
                    );
                this.selectScreenSource(stream);
            }
        },

        enableScreenShareElectron() {
            console.log('helloenableScreenShareElectron')
            this.desktopCapturer
                .getSources({
                    types: ["window", "screen"],
                    thumbnailSize: {
                        width: 1280,
                        height: 720
                    },
                })
                .then(async (sources) => {
                    this.screenSources = sources;
                });
        },


        async selectScreenSource(stream) {
            this.screenShare = true;
            this.localScreenShare = true;
            this.publishScreen(stream);
            this.screenSources = [];
        },

        async selectScreenSourceElectron(source) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: source.id,
                            // minWidth: 1280,
                            // maxWidth: 1280,
                            // minHeight: 720,
                            // maxHeight: 720,
                        },
                    },
                });
                this.screenShare = true;
                this.localScreenShare = true;
                this.publishScreen(stream);
                this.screenSources = [];
            } catch (e) {
                console.log(e);
            }
        },

        listenForScreenShareEnd(stream) {
            stream.getVideoTracks()[0].addEventListener('ended', () => {
                console.log('Stop button pressed in browser')
                this.endScreenShare()
            })
        },
        publishScreen(stream) {

            this.listenForScreenShareEnd(stream);
            this.registerScreenUsername();

            this.janus.attach({
                plugin: "janus.plugin.videoroom",
                opaqueId: this.screenOpaqueId,
                success: (pluginHandle) => {
                    this.xayloScreenConnection = pluginHandle;
                    var subscribe = {
                        request: "join",
                        room: this.webinarRoomId,
                        ptype: "publisher",
                        private_id: this.myPrivateScreenId,
                        display: this.currentUser.screenUserName,
                        quality: 0,
                    };

                    this.xayloScreenConnection.send({
                        message: subscribe
                    });
                },
                error: (error) => {
                    this.Janus.error("  -- Error attaching plugin...", error);
                    console.log("Error attaching plugin... " + error);
                },
                onmessage: (msg, jsep) => {
                    this.Janus.debug(" ::: Got a message (publisher) :::", msg);
                    var event = msg["videoroom"];
                    this.Janus.debug("Event: " + event);
                    if (event) {
                        if (event === "joined") {
                            this.myscreenid = msg["id"];
                            this.myPrivateScreenId = msg["private_id"];
                            this.Janus.log(
                                "Successfully joined room " +
                                msg["room"] +
                                " with ID " +
                                this.myScreenId
                            );
                            if (this.role === "publisher") {
                                this.xayloScreenConnection.createOffer({
                                    stream: stream,
                                    media: {
                                        video: true,
                                        audioSend: true,
                                        videoRecv: false,
                                    }, // Screen sharing Publishers are sendonly
                                    success: (jsep) => {
                                        this.Janus.debug("Got publisher SDP!", jsep);
                                        var publish = {
                                            request: "configure",
                                            audio: true,
                                            video: true,
                                        };
                                        this.xayloScreenConnection.send({
                                            message: publish,
                                            jsep: jsep,
                                        });
                                    },
                                    error: (error) => {
                                        this.Janus.error("WebRTC error:", error);
                                        console.log("WebRTC error... " + error.message);
                                    },
                                });
                            }
                        }
                    }
                    if (jsep) {
                        this.Janus.debug("Handling SDP as well...", jsep);
                        this.xayloScreenConnection.handleRemoteJsep({
                            jsep: jsep
                        });
                    }
                },
                onlocalstream: (stream) => {
                    this.Janus.debug(" ::: Got a local screen stream :::", stream);
                    this.localScreenStream = stream;
                    this.miniScreen.srcObject = stream;
                    this.miniScreen.classList.remove("hidden");

                    this.screenVideoElement = document.createElement("video");
                    this.screenVideoElement.srcObject = stream;
                    this.screenVideoElement.autoplay = true;

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
                webrtcState: (on) => {
                    // this.Janus.log(
                    //   "Xaylo Janus says this WebRTC PeerConnection (feed #" +
                    //     remoteFeed.rfindex +
                    //     ") is " +
                    //     (on ? "up" : "down") +
                    //     " now"
                    // );

                    if (on) {
                        this.xayloScreenConnection.send({
                            message: {
                                request: "configure",
                                bitrate: 0
                            },
                        });
                    }
                },
            });
        },

    }
}