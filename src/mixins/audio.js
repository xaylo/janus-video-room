export const audioMixin = {
    data() {
        return {
            audioEnabled: true,
        }
    },
    methods: {
        toggleMute() {
            this.audioEnabled = this.xayloConnection.isAudioMuted() ? false : true;

            this.Janus.log(
                (this.audioEnabled ? "Unmuting" : "Muting") + " local audio stream..."
            );

            if (this.audioEnabled) {
                this.xayloConnection.muteAudio()
            } else {
                this.xayloConnection.unmuteAudio()
            }

            this.audioEnabled = this.xayloConnection.isAudioMuted() ? false : true;
        },
    }
}
