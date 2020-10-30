export const canvasMixin = {
    data() {
        return {
            intervalDraw: null,
            stopCanvasLoop: null,
            osc: null,
            aCtx: null,
            silence: null,
            freq: null,
            stopped: null
        }
    },
    computed: {
        remoteVideoElements() {
            return document.getElementsByClassName('remote-video-el')
        },
        canvasContext() {
            return this.$refs.streamingCanvas.getContext("2d");
        },
    },
    methods: {
        drawLocalVideo() {
            if (!this.canvasContext) {
                this.canvasContext = this.$refs.streamingCanvas.getContext("2d", {
                    alpha: false
                });
            }



            if (this.screenVideoElement) {
                this.$refs.streamingCanvas.width = 1280;
                this.$refs.streamingCanvas.height = 900;
                this.canvasContext.drawImage(this.screenVideoElement, 0, 0, 1280, 720);

                this.canvasContext.drawImage(
                    this.$refs.localVideoElement,
                    this.$refs.streamingCanvas.width - 300,
                    this.$refs.streamingCanvas.height - 175,
                    300,
                    175
                );

                var remoteWidth = 610;

                for (let element of this.remoteVideoElements) {
                    this.canvasContext.drawImage(
                        element,
                        this.$refs.streamingCanvas.width - remoteWidth,
                        this.$refs.streamingCanvas.height - 175,
                        300,
                        175
                    );
                    remoteWidth = remoteWidth + 310;
                }

            } else {
                this.$refs.streamingCanvas.width = 1280;
                this.$refs.streamingCanvas.height = 720;

                var position = 0;
                var x, y;

                if (position == 0) {
                    x = 0;
                    y = 0;
                }


                this.canvasContext.drawImage(this.$refs.localVideoElement, x, y, this.$refs.streamingCanvas.width / 2, this.$refs.streamingCanvas.height / 2);

                position++;


                for (let element of this.remoteVideoElements) {

                    if (position == 1) {
                        x = this.$refs.streamingCanvas.width / 2;
                        y = 0;
                    }
                    if (position == 2) {
                        x = 0;
                        y = this.$refs.streamingCanvas.height / 2;
                    }
                    if (position == 3) {
                        x = this.$refs.streamingCanvas.width / 2;
                        y = this.$refs.streamingCanvas.height / 2;
                    }

                    // ctx.clearRect(v, x, y, this.$refs.streamingCanvas.width / 2, this.$refs.streamingCanvas.height / 2);
                    this.canvasContext.drawImage(element, x, y, this.$refs.streamingCanvas.width / 2, this.$refs.streamingCanvas.height / 2);

                    position++;
                    if (position > 3) {
                        position = 0;
                    }

                }


            }


            // Usually would use this to draw in a loop
            // When tab loses focus it cuts out though
            // that is the reason for the audio timer loop below
            // requestAnimationFrame(this.drawLocalVideo);
        },


        audioTimerLoop(frequency) {
            // AudioContext time parameters are in seconds
            this.freq = frequency / 1000;

            this.aCtx = new AudioContext();
            // Chrome needs our oscillator node to be attached to the destination
            // So we create a silent Gain Node
            this.silence = this.aCtx.createGain();
            this.silence.gain.value = 0;
            this.silence.connect(this.aCtx.destination);

            this.onOSCend();

            this.stopped = false;
            // return a function to stop our loop
            return () => {
                this.stopped = true;
            };
        },
        onOSCend() {
            this.osc = this.aCtx.createOscillator();
            this.osc.onended = this.onOSCend;
            this.osc.connect(this.silence);
            this.osc.start(0);
            this.osc.stop(this.aCtx.currentTime + this.freq);
            this.drawLocalVideo(this.aCtx.currentTime);
            if (this.stopped) {
                this.osc.onended = () => {
                    return;
                };
            }
        },

        startCanvasLoop() {
            this.stopCanvasLoop = this.audioTimerLoop(1000 / 30);
        },
        stop() {
            this.stopCanvasLoop()
        }
    },

    mounted() {
        // if (this.streamEnabled) {
        //     this.startCanvasLoop();
        // }
    },
}