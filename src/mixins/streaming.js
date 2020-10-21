export const streamingMixin = {
    data() {
        return {
            streamingCountdown: 6,
            liveIndicator: false,
            // 
            webSocket: null,
            streamingLocally: false,
            canvasStream: null,
            audioElement: null,
            combinedStreams: null,
            mediaRecorder: null,
            mediaRecorderOptions: {
                mimeType: "video/webm;codecs=h264,opus,vp9",
                videoBitsPerSecond: 3 * 1024 * 1024,
            },
        }
    },
    computed: {
        uniqueStreamUrl() {
            return "wss://broadcast.swandoola.com/wss/" + this.webinarRoomId;
        },
    },
    methods: {
        checkIfStreaming() {
            setInterval(() => {
                axios
                    .get("/admin/media/" + this.room.id + "/is-streaming")
                    .then(({
                        data
                    }) => {
                        if (data.streaming == "true") {
                            this.room.streaming = true;
                        } else {
                            this.room.streaming = false;
                        }
                    });
            }, 5000);
        },
        updateRoomStreaming() {
            axios
                .post("/admin/media/" + this.room.id, {
                    streaming: this.streamingLocally ? 1 : 0,
                })
                .then(({
                    data
                }) => {
                    // console.log(data);
                });
        },
        beginCountdown() {
            var int = setInterval(() => {
                if (this.streamingCountdown) {
                    this.streamingCountdown--;
                } else {
                    this.liveIndicator = true;
                    clearInterval(int)
                }
            }, 1000);
        },
        startBroadcasting() {
            // update the room.streaming thing

            this.streamingLocally = true;
            this.room.streaming = true;
            this.updateRoomStreaming();
            this.startStreaming();
            this.beginCountdown();
        },

        stopBroadcasting() {
            // update the room.streaming thing
            this.liveIndicator = false;
            this.streamingLocally = false;
            this.room.streaming = false;
            this.updateRoomStreaming();
            this.startStreaming();
            this.unpublishOwnFeed();
        },
        setupWebSocket() {
            this.webSocket = new WebSocket(this.uniqueStreamUrl);
        },
        startStreaming() {
            if (this.webSocket) {
                this.stopStreamViaWebSocket();
            } else {
                this.startStreamViaWebSocket();
            }
        },
        startStreamViaWebSocket() {
            this.setupWebSocket();
            if (this.webSocket) {
                this.webSocket.addEventListener("open", (e) => {
                    console.log("WebSocket is now open Open:", e);

                    this.canvasStream = this.$refs.streamingCanvas.captureStream(30);

                    if (this.localStream && this.remoteStream) {
                        const audioContext = new AudioContext();

                        var audioIn_01 = audioContext.createMediaStreamSource(
                            this.localStream
                        );
                        var audioIn_02 = audioContext.createMediaStreamSource(
                            this.remoteStream
                        );

                        const dest = audioContext.createMediaStreamDestination();

                        audioIn_01.connect(dest);
                        audioIn_02.connect(dest);

                        this.combinedStreams = new MediaStream([
                            dest.stream.getAudioTracks()[0],
                            ...this.canvasStream.getTracks(),
                        ]);
                    } else if (this.localStream && !this.remoteStream) {
                        this.combinedStreams = new MediaStream([
                            this.localStream.getAudioTracks()[0],
                            ...this.canvasStream.getTracks(),
                        ]);
                    } else {
                        this.combinedStreams = new MediaStream(this.canvasStream);
                    }

                    this.$refs.previewStreamElement.srcObject = this.canvasStream;

                    this.$refs.previewStreamElement.classList.remove("hidden");

                    this.mediaRecorder = new MediaRecorder(
                        this.combinedStreams,
                        this.mediaRecorderOptions
                    );

                    this.mediaRecorder.addEventListener("dataavailable", (e) => {
                        console.log("Sending data through the websocket");
                        this.webSocket.send(e.data);
                    });

                    this.mediaRecorder.addEventListener("stop", (e) => {
                        console.log("Stopped sending data, closing websocket");
                        this.webSocket.close.bind(this.webSocket);
                        this.mediaRecorder = null;
                    });

                    this.mediaRecorder.start(1000);
                });

                this.webSocket.addEventListener("close", (e) => {
                    console.log("WebSocket is now closed:", e);
                    if (this.mediaRecorder) {
                        this.mediaRecorder.stop();
                    }
                    this.webSocket = null;
                });
            } else {
                console.log("Web socket doesn't seem to be connected!");
            }
        },
        stopStreamViaWebSocket() {
            this.$refs.previewStreamElement.classList.add("hidden");
            this.mediaRecorder.stop();
            this.$nextTick(() => {
                this.screenDevice = null;
                this.cameraDevice = null;
                this.audioDevice = null;
                this.pictureInPicture = false;
                this.canvasStream = null;
                this.audioEnabled = false;
                this.audioStream = null;
                this.audioElement = null;
                this.selectedCameraId = null;
            });
        },
    },
    mounted() {
        if (this.streamEnabled) {
            this.checkIfStreaming();
        }
    },
}