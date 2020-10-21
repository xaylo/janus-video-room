export const videoMixin = {
    data() {
        return {
            videoEnabled: true,
        }
    },
    methods: {
        toggleVideo() {
            this.videoEnabled = !this.videoEnabled;

            this.Janus.log(
                (this.videoEnabled ? "Enabling" : "Disabling") + " local video stream..."
            );

            if (this.videoEnabled) {
                this.$refs.localVideoElement.classList.remove('hidden')
            } else {
                this.$refs.localVideoElement.classList.add('hidden')
            }
            this.xayloConnection.send({
                message: {
                    request: "configure",
                    video: this.videoEnabled
                }
            })
        },
    }
}
