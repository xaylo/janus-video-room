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

            this.$refs.streamingCanvas.width = 1280;
            this.$refs.streamingCanvas.height = 900;

            if (this.screenVideoElement) {
                this.canvasContext.drawImage(this.screenVideoElement, 0, 0, 1280, 720);
            }

            this.canvasContext.drawImage(
                this.$refs.localVideoElement,
                this.$refs.streamingCanvas.width - 300,
                this.$refs.streamingCanvas.height - 175,
                300,
                175
            );

            this.canvasContext.drawImage(
                this.$refs.remoteVideoElement,
                this.$refs.streamingCanvas.width - 610,
                this.$refs.streamingCanvas.height - 175,
                300,
                175
            );

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
        if (this.streamEnabled) {
            this.startCanvasLoop();
        }
    },
}