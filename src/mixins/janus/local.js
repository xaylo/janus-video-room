export const janusLocalMixin = {
    data() {
        return {
            localStream: null,
        }
    },
    methods: {
        publishOwnFeed(useAudio) {
            // Publish our stream
            this.xayloConnection.createOffer({
                media: {
                    audioRecv: false,
                    videoRecv: false,
                    audioSend: useAudio,
                    videoSend: true,
                    video: "hires"
                },
                success: (jsep) => {
                    this.Janus.debug("Got publisher SDP!", jsep);
                    var publish = {
                        request: "configure",
                        audio: useAudio,
                        video: true
                    };
                    this.xayloConnection.send({
                        message: publish,
                        jsep: jsep
                    });
                    this.published = true;
                },
                error: (error) => {
                    this.Janus.error("WebRTC error:", error);
                    if (useAudio) {
                        this.publishOwnFeed(false);
                    } else {
                        console.log("WebRTC error... " + error.message);
                        this.publishOwnFeed(true);
                    }
                },
            });
        },
        unpublishOwnFeed() {
            // Unpublish our stream
            var unpublish = {
                request: "unpublish"
            };
            this.xayloConnection.send({
                message: unpublish,
                success: () => {
                    this.published = false;
                },
            });
            this.streamingLocally = false;
            this.updateRoomStreaming();

            window.close("", "_parent", "");
        },

        registerUsername() {
            var register = {
                request: "join",
                room: this.webinarRoomId,
                ptype: "publisher",
                display: this.currentUser.userName,
                quality: 0,
            };

            this.xayloConnection.send({
                message: register
            });
            //   this.published = true;
        },
    }
}