<template>
  <div class="relative bg-black h-screen flex-col w-screen overflow-hidden">
    <div class="absolute top-2 mx-2 w-full">
      <div
        v-if="showPermissionsPrompt"
        class="permissions-prompt mb-2 flex w-full"
      >
        <p
          class="rounded bg-gray-200 p-2 text-gray md:text-2xl font-bold inline"
        >
          Please enable permissions for mic & camera
        </p>
      </div>

      <div
        v-if="this.remoteFeedCount == 0"
        class="permissions-prompt flex w-full"
      >
        <p
          class="rounded bg-gray-200 p-2 text-gray md:text-2xl font-bold inline"
        >
          Waiting for participant to join
        </p>
      </div>

      <video
        ref="miniScreen"
        class="hidden bg-yellow-200 z-30 mt-4 border"
        autoplay
        playsinline
        muted
        width="500px"
        height="300px"
      ></video>
    </div>

    <div
      class="full-screen-video flex flex-wrap justify-center items-center h-screen bg-black"
    >
      <video
        ref="remoteScreenVideoElement"
        class="remote-screen-video hidden h-full w-auto"
        autoplay
        playsinline
        muted
      ></video>

      <div
        ref="remoteVideosFull"
        class="remote-videos-full flex justify-center h-full grid gap-4"
        :class="'grid-cols-' + remoteGridColumns"
      ></div>
    </div>
    <div
      class="video-gallery absolute w-full bottom-0 h-1/6 flex flex-wrap items-center bg-gray-400 border-top-2 border-gray-200 bg-opacity-75"
    >
      <div class="control-buttons ml-2 mr-auto items-end">
        <control-area
          :connected="connected"
          :audio-muted="audioMuted"
          :video-muted="videoEnabled"
          :local-screen-share="localScreenShare"
          :sharing-screen="sharingScreen"
          :screen-button-busy="screenButtonBusy"
          @toggleAudioMute="toggleAudioMute"
          @toggleVideoMute="toggleVideoMute"
          @startScreenShare="startScreenShare"
          @endScreenShare="endScreenShare"
          @endConnection="endConnection"
        ></control-area>
      </div>
      <div
        ref="remoteVideosGallery"
        id="remote-videos-container"
        class="remote-videos h-28 flex flex-wrap ml-auto"
      ></div>
      <div id="local-video-container" class="local-video rounded h-28 mr-2">
        <video
          ref="localVideoElement"
          class="local-video rounded hidden h-full w-24 md:w-auto"
          autoplay
          playsinline
          muted
        ></video>
        <div
          ref="noLocalCamera"
          id="no-local-camera"
          class="w-24 md:w-36 h-full bg-gray-200 flex justify-center items-center"
        >
          <p>No camera</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/styles/app.scss";
import { Janus } from "janus-gateway";
//
import ControlArea from "./components/ControlArea.vue";

export default {
  name: "JanusVideoRoom",
  props: {
    roomData: {
      type: Object,
      default: () => ({
        id: 2150,
      }),
      validator(x) {
        return x != null;
      },
    },
    userData: {
      type: Object,
      default: () => ({
        name: "Test Testingtons",
        email: "test@xaylo.com",
      }),
      validator(x) {
        return x != null;
      },
    },
    streamEnabled: {
      type: Boolean,
      default: false,
    },
    serverUrl: {
      type: String,
      default: "https://janus.xaylo.com/rtc",
    },
    desktopCapturer: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      role: "publisher",
      subscriberMode: false,
      janusConnection: null,
      sfutest: null,
      showPermissionsPrompt: true,
      connected: false,
      myid: null,
      mypvtid: null,
      mystream: null,
      feeds: [],
      remoteFeedCount: 0,

      //
      audioMuted: false,
      videoEnabled: false,
      sharingScreen: false,
      myScreenId: null,
      myPrivateScreenId: null,

      //

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
        cursor: "never", // always, motion, never
      },
    };
  },
  computed: {
    opaqueId() {
      return this.userData.email;
    },
    screenShareId() {
      return "***SCREEN***" + this.userData.email;
    },
    roomId() {
      return parseInt(this.roomData.id);
    },
    remoteGridColumns() {
      if (this.remoteFeedCount <= 3) {
        return this.remoteFeedCount;
      } else {
        return 3;
      }
    },
    miniScreen() {
      return this.$refs.miniScreen;
    },
  },
  methods: {
    toggleAudioMute() {
      this.audioMuted = this.sfutest.isAudioMuted();
      Janus.log((this.audioMuted ? "Unmuting" : "Muting") + " local stream...");
      if (this.audioMuted) {
        this.sfutest.unmuteAudio();
      } else {
        this.sfutest.muteAudio();
      }
      this.audioMuted = this.sfutest.isAudioMuted();
    },
    toggleVideoMute() {
      Janus.log(
        (this.videoEnabled ? "Enabling" : "Disabling") +
          " local video stream..."
      );

      if (this.videoEnabled) {
        this.$refs.localVideoElement.classList.remove("hidden");
        this.$refs.noLocalCamera.classList.add("hidden");
      } else {
        this.$refs.localVideoElement.classList.add("hidden");
        this.$refs.noLocalCamera.classList.remove("hidden");
      }
      this.sfutest.send({
        message: {
          request: "configure",
          video: this.videoEnabled,
        },
      });

      this.videoEnabled = !this.videoEnabled;
    },
    endConnection() {
      this.janusConnection.destroy();
      window.close();
    },

    //
    initializeJanus() {
      Janus.init({
        debug: true,
        dependencies: Janus.useDefaultDependencies(),
        callback: () => {
          console.log("Janus has been setup");
          this.connectToJanus();
        },
      });
    },

    connectToJanus() {
      this.janusConnection = new Janus({
        server: this.serverUrl,
        success: () => {
          // Done! attach to plugin XYZ
          this.attachVideoRoomPlugin();
        },
        error: (cause) => {
          // Error, can't go on...
        },
        destroyed: () => {
          // I should get rid of this
        },
      });
    },

    attachVideoRoomPlugin() {
      this.janusConnection.attach({
        plugin: "janus.plugin.videoroom",
        opaqueId: this.opaqueId,
        success: (pluginHandle) => {
          this.sfutest = pluginHandle;
          Janus.log(
            "Plugin attached! (" +
              this.sfutest.getPlugin() +
              ", id=" +
              this.sfutest.getId() +
              ")"
          );
          Janus.log("  -- This is a publisher/manager");

          this.checkJanusRoomExists();
        },
        error: (error) => {
          Janus.error("  -- Error attaching plugin...", error);
          console.log("Error attaching plugin... " + error);
        },
        consentDialog: (on) => {
          this.showPermissionsPrompt = on;
        },
        iceState: (state) => {
          Janus.log("ICE state changed to " + state);
        },
        mediaState: (medium, on) => {
          Janus.log(
            "Janus " + (on ? "started" : "stopped") + " receiving our " + medium
          );
        },
        webrtcState: (on) => {
          Janus.log(
            "Janus says our WebRTC PeerConnection is " +
              (on ? "up" : "down") +
              " now"
          );
        },
        onmessage: (msg, jsep) => {
          Janus.debug(" ::: Got a message (publisher) :::", msg);
          var event = msg["videoroom"];
          Janus.debug("Event: " + event);
          if (event) {
            if (event === "joined") {
              // Publisher/manager created, negotiate WebRTC and attach to existing this.feeds, if any
              this.myid = msg["id"];
              this.mypvtid = msg["private_id"];
              Janus.log(
                "Successfully joined room " +
                  msg["room"] +
                  " with ID " +
                  this.myid
              );
              if (this.subscriberMode) {
                // Should be able to see videos but not publish own feed
              } else {
                this.publishOwnFeed(true);
              }
              // Any new feed to attach to?
              if (msg["publishers"]) {
                var list = msg["publishers"];
                Janus.debug("Got a list of available publishers/feeds:", list);
                for (var f in list) {
                  var id = list[f]["id"];
                  var display = list[f]["display"];
                  var audio = list[f]["audio_codec"];
                  var video = list[f]["video_codec"];
                  Janus.debug(
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
                  this.newRemoteFeed(id, display, audio, video);
                }
              }
            } else if (event === "destroyed") {
              // The room has been destroyed
              Janus.warn("The room has been destroyed!");
              console.log("The room has been destroyed", () => {
                window.location.reload();
              });
            } else if (event === "event") {
              // Any new feed to attach to?
              if (msg["publishers"]) {
                var list = msg["publishers"];
                Janus.debug("Got a list of available publishers/feeds:", list);
                for (var f in list) {
                  var id = list[f]["id"];
                  var display = list[f]["display"];
                  var audio = list[f]["audio_codec"];
                  var video = list[f]["video_codec"];
                  Janus.debug(
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
                  this.newRemoteFeed(id, display, audio, video);
                }
              } else if (msg["leaving"]) {
                // One of the publishers has gone away?
                var leaving = msg["leaving"];
                Janus.log("Publisher left: " + leaving);
                var remoteFeed = null;
                for (var i = 1; i < 6; i++) {
                  if (this.feeds[i] && this.feeds[i].rfid == leaving) {
                    remoteFeed = this.feeds[i];
                    break;
                  }
                }
                if (remoteFeed != null) {
                  Janus.debug(
                    "Feed " +
                      remoteFeed.rfid +
                      " (" +
                      remoteFeed.rfdisplay +
                      ") has left the room, detaching"
                  );
                  $("#remote" + remoteFeed.rfindex)
                    .empty()
                    .hide();
                  $("#videoremote" + remoteFeed.rfindex).empty();
                  this.feeds[remoteFeed.rfindex] = null;
                  remoteFeed.detach();
                }
              } else if (msg["unpublished"]) {
                // One of the publishers has unpublished?
                var unpublished = msg["unpublished"];
                Janus.log("Publisher left: " + unpublished);
                if (unpublished === "ok") {
                  // That's us
                  this.sfutest.hangup();
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
                  Janus.debug(
                    "Feed " +
                      remoteFeed.rfid +
                      " (" +
                      remoteFeed.rfdisplay +
                      ") has left the room, detaching"
                  );
                  $("#remote" + remoteFeed.rfindex)
                    .empty()
                    .hide();
                  $("#videoremote" + remoteFeed.rfindex).empty();
                  this.feeds[remoteFeed.rfindex] = null;
                  remoteFeed.detach();
                }
              } else if (msg["error"]) {
                if (msg["error_code"] === 426) {
                  // This is a "no such room" error: give a more meaningful description
                  console.log("the room doesnt exist", this.roomId);
                } else {
                  console.log(msg["error"]);
                }
              }
            }
          }
          if (jsep) {
            Janus.debug("Handling SDP as well...", jsep);
            this.sfutest.handleRemoteJsep({ jsep: jsep });
            // Check if any of the media we wanted to publish has
            // been rejected (e.g., wrong or unsupported codec)
            var audio = msg["audio_codec"];
            if (
              this.mystream &&
              this.mystream.getAudioTracks() &&
              this.mystream.getAudioTracks().length > 0 &&
              !audio
            ) {
              // Audio has been rejected
              console.log(
                "Our audio stream has been rejected, viewers won't hear us"
              );
            }
            var video = msg["video_codec"];
            if (
              this.mystream &&
              this.mystream.getVideoTracks() &&
              this.mystream.getVideoTracks().length > 0 &&
              !video
            ) {
              // Video has been rejected
              console.log(
                "Our video stream has been rejected, viewers won't see us"
              );
              // Hide the webcam video
              $("#myvideo").hide();
              $("#videolocal").append(
                '<div class="no-video-container">' +
                  '<i class="fa fa-video-camera fa-5 no-video-icon" style="height: 100%;"></i>' +
                  '<span class="no-video-text" style="font-size: 16px;">Video rejected, no webcam</span>' +
                  "</div>"
              );
            }
          }
        },
        onlocalstream: (stream) => {
          Janus.debug(" ::: Got a local stream :::", stream);
          this.mystream = stream;
          Janus.attachMediaStream(this.$refs.localVideoElement, stream);
          if (
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "completed" &&
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "connected"
          ) {
            // Show connecting spinner or something?
          }
          var noLocalCameraImage = document.getElementById("no-local-camera");

          var videoTracks = stream.getVideoTracks();
          if (!videoTracks || videoTracks.length === 0) {
            // No webcam
            //  Show no camera image
            noLocalCameraImage.classList.remove("hidden");
          } else {
            // Hide no camera image
            // display local video
            this.$refs.localVideoElement.classList.remove("hidden");
            noLocalCameraImage.classList.add("hidden");
          }

          this.connected = true;
        },
        onremotestream: (stream) => {
          // The publisher stream is sendonly, we don't expect anything here
        },
        oncleanup: () => {
          Janus.log(
            " ::: Got a cleanup notification: we are unpublished now :::"
          );
          this.mystream = null;
          // Can reconnect at this stage using
          // this.publishOwnFeed(true);
        },
      });
    },
    checkJanusRoomExists() {
      var exists = {
        request: "exists",
        room: this.roomId,
      };

      var create = {
        request: "create",
        room: this.roomId,
        publishers: 6,
        audiolevel_ext: true,
        audiolevel_event: true,
        audio_active_packets: 100,
        audio_level_average: 25,
      };

      this.sfutest.send({
        message: exists,
        success: (result) => {
          console.log("checking if room exists: ", result);
          if (result.exists) {
            this.registerLocalUser();
            return true;
          } else {
            this.sfutest.send({
              message: create,
              success: () => {
                this.checkJanusRoomExists();
              },
            });
          }
        },
      });
    },
    registerLocalUser() {
      var register = {
        request: "join",
        room: this.roomId,
        ptype: "publisher",
        display: this.userData.email,
      };

      this.sendJanusMessage(register);
    },
    sendJanusMessage(message) {
      this.sfutest.send({
        message: message,
      });
    },

    publishOwnFeed(useAudio) {
      // Publish our stream
      this.sfutest.createOffer({
        // Add data:true here if you want to publish datachannels as well
        media: {
          audioRecv: false,
          videoRecv: false,
          audioSend: useAudio,
          videoSend: true,
        }, // Publishers are sendonly
        simulcast: false,
        simulcast2: false,
        success: (jsep) => {
          Janus.debug("Got publisher SDP!", jsep);
          var publish = { request: "configure", audio: useAudio, video: true };
          this.sfutest.send({ message: publish, jsep: jsep });
        },
        error: (error) => {
          Janus.error("WebRTC error:", error);
          if (useAudio) {
            this.publishOwnFeed(false);
          } else {
            console.log("WebRTC error... " + error.message);
            this.publishOwnFeed(true);
          }
        },
      });
    },

    newRemoteFeed(id, display, audio, video) {
      // A new feed has been published, create a new plugin handle and attach to it as a subscriber
      var remoteFeed = null;
      this.janusConnection.attach({
        plugin: "janus.plugin.videoroom",
        opaqueId: this.opaqueId,
        success: (pluginHandle) => {
          remoteFeed = pluginHandle;
          remoteFeed.simulcastStarted = false;
          Janus.log(
            "Plugin attached! (" +
              remoteFeed.getPlugin() +
              ", id=" +
              remoteFeed.getId() +
              ")"
          );
          Janus.log("  -- This is a subscriber");
          // We wait for the plugin to send us an offer
          var subscribe = {
            request: "join",
            room: this.roomId,
            ptype: "subscriber",
            feed: id,
            private_id: this.mypvtid,
          };
          // In case you don't want to receive audio, video or data, even if the
          // publisher is sending them, set the 'offer_audio', 'offer_video' or
          // 'offer_data' properties to false (they're true by default), e.g.:
          // 		subscribe["offer_video"] = false;
          // For example, if the publisher is VP8 and this is Safari, let's avoid video
          if (
            Janus.webRTCAdapter.browserDetails.browser === "safari" &&
            (video === "vp9" || (video === "vp8" && !Janus.safariVp8))
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
          remoteFeed.send({ message: subscribe });
        },
        error: (error) => {
          Janus.error("  -- Error attaching plugin...", error);
          console.log("Error attaching plugin... " + error);
        },
        onmessage: (msg, jsep) => {
          console.log("not sure what happened", msg, jsep);
          Janus.debug(" ::: Got a message (subscriber) :::", msg);
          var event = msg["videoroom"];
          Janus.debug("Event: " + event);
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

              Janus.log(
                "Successfully attached to feed " +
                  remoteFeed.rfid +
                  " (" +
                  remoteFeed.rfdisplay +
                  ") in room " +
                  msg["room"]
              );

              // Show the remote feed - what is the html in the rfdisplay - ah its display username!!
            } else if (event === "event") {
              // Check if we got a simulcast-related event from this publisher
            } else {
              // What has just happened?
              console.log("not sure what happened", msg, jsep);
            }
          }
          if (jsep) {
            Janus.debug("Handling SDP as well...", jsep);
            // Answer and attach
            remoteFeed.createAnswer({
              jsep: jsep,
              // Add data:true here if you want to subscribe to datachannels as well
              // (obviously only works if the publisher offered them in the first place)
              media: { audioSend: false, videoSend: false }, // We want recvonly audio/video
              success: (jsep) => {
                Janus.debug("Got SDP!", jsep);
                var body = { request: "start", room: this.roomId };
                remoteFeed.send({ message: body, jsep: jsep });
              },
              error: (error) => {
                Janus.error("WebRTC error:", error);
                console.log("WebRTC error... " + error.message);
              },
            });
          }
        },
        iceState: (state) => {
          Janus.log(
            "ICE state of this WebRTC PeerConnection (feed #" +
              remoteFeed.rfindex +
              ") changed to " +
              state
          );
        },
        webrtcState: (on) => {
          Janus.log(
            "Janus says this WebRTC PeerConnection (feed #" +
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
          Janus.debug(
            "Remote feed #" + remoteFeed.rfindex + ", stream:",
            stream
          );

          //

          if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
            // The incoing feed is a screen
            this.screenShare = true;

            if (!remoteFeed.rfdisplay.includes(this.userData.email)) {
              this.$refs.remoteScreenVideoElement.srcObject = stream;
              this.$refs.remoteScreenVideoElement.classList.remove("hidden");

              this.$refs.remoteVideosFull.classList.add(
                "screen-sharing-active"
              );
              var allRemoteVideos = document.getElementsByClassName(
                "remote-video-player"
              );
              allRemoteVideos.forEach((v) => {
                v.classList.remove("h-full");
                v.classList.add("h-28");
              });
            }
          } else {
            if (!remoteFeed.rfdisplay.includes(this.userData.email)) {
              var remoteVideoExists = document.getElementById(
                "remote-video-div-" + remoteFeed.rfindex
              );
              if (!remoteVideoExists) {
                var divAppend = document.createElement("div");
                divAppend.classList +=
                  "bg-black flex h-screen max-h-screen justify-center";
                divAppend.id = "remote-video-div-" + remoteFeed.rfindex;

                var actualVideoEl = document.createElement("video");
                actualVideoEl.ref = "remote-video-" + remoteFeed.rfindex;
                actualVideoEl.id = "remote-video-" + remoteFeed.rfindex;
                actualVideoEl.classList +=
                  "remote-video-player max-h-screen h-screen w-auto";
                actualVideoEl.autoplay = true;
                actualVideoEl.playsinline = true;

                divAppend.appendChild(actualVideoEl);

                this.$refs.remoteVideosFull.appendChild(divAppend);
                this.remoteFeedCount++;
              } else {
                var actualVideoEl = document.getElementById(
                  "remote-video-" + remoteFeed.rfindex
                );
              }
              Janus.attachMediaStream(actualVideoEl, stream);
            }
          }

          var videoTracks = stream.getVideoTracks();
          if (!videoTracks || videoTracks.length === 0) {
            // No remote video
          } else {
          }
        },
        oncleanup: () => {
          Janus.log(
            " ::: Got a cleanup notification (remote feed " + id + ") :::"
          );
          if (remoteFeed.spinner) remoteFeed.spinner.stop();
          remoteFeed.spinner = null;
          var remoteVideoDiv = document.getElementById(
            "remote-video-div-" + remoteFeed.rfindex
          );
          if (remoteVideoDiv) {
            remoteVideoDiv.remove();
            this.remoteFeedCount--;
          }

          if (remoteFeed.rfdisplay.includes("***SCREEN***")) {
            this.$refs.remoteVideosFull.classList.remove(
              "screen-sharing-active"
            );

            this.$refs.remoteScreenVideoElement.classList.add("hidden");
          }

          remoteFeed.simulcastStarted = false;
        },
      });
    },

    // Screen sharing

    async startScreenShare() {
      if (this.isElectron) {
        this.enableScreenShareElectron();
      } else {
        var displayMediaOptions = {
          video: {
            cursor: this.screenCaptureSettings.cursor,
          },
          audio: false,
        };

        var stream = await navigator.mediaDevices.getDisplayMedia(
          displayMediaOptions
        );
        this.selectScreenSource(stream);
      }
    },

    async selectScreenSource(stream) {
      this.screenShare = true;
      this.localScreenShare = true;
      this.publishScreen(stream);
      this.screenSources = [];
    },

    publishScreen(stream) {
      this.listenForScreenShareEnd(stream);
      this.registerScreenUsername();

      this.janusConnection.attach({
        plugin: "janus.plugin.videoroom",
        opaqueId: this.screenShareId,
        success: (pluginHandle) => {
          this.screenConnection = pluginHandle;
          var subscribe = {
            request: "join",
            room: this.roomId,
            ptype: "publisher",
            private_id: this.myPrivateScreenId,
            display: this.screenShareId,
            quality: 0,
          };

          this.screenConnection.send({
            message: subscribe,
          });
        },
        error: (error) => {
          Janus.error("  -- Error attaching plugin...", error);
          console.log("Error attaching plugin... " + error);
        },
        onmessage: (msg, jsep) => {
          Janus.debug(" ::: Got a message (publisher) :::", msg);
          var event = msg["videoroom"];
          Janus.debug("Event: " + event);
          if (event) {
            if (event === "joined") {
              this.myScreenId = msg["id"];
              this.myPrivateScreenId = msg["private_id"];
              Janus.log(
                "Successfully joined room " +
                  msg["room"] +
                  " with ID " +
                  this.myScreenId
              );
              if (this.role === "publisher") {
                this.screenConnection.createOffer({
                  stream: stream,
                  media: {
                    video: true,
                    audioSend: true,
                    videoRecv: false,
                  }, // Screen sharing Publishers are sendonly
                  success: (jsep) => {
                    Janus.debug("Got publisher SDP!", jsep);
                    var publish = {
                      request: "configure",
                      audio: true,
                      video: true,
                    };
                    this.screenConnection.send({
                      message: publish,
                      jsep: jsep,
                    });
                  },
                  error: (error) => {
                    Janus.error("WebRTC error:", error);
                    console.log("WebRTC error... " + error.message);
                  },
                });
              }
            }
          }
          if (jsep) {
            Janus.debug("Handling SDP as well...", jsep);
            this.screenConnection.handleRemoteJsep({
              jsep: jsep,
            });
          }
        },
        onlocalstream: (stream) => {
          Janus.debug(" ::: Got a local screen stream :::", stream);
          this.localScreenStream = stream;
          this.miniScreen.srcObject = stream;
          this.miniScreen.classList.remove("hidden");

          this.screenVideoElement = document.createElement("video");
          this.screenVideoElement.srcObject = stream;
          this.screenVideoElement.autoplay = true;

          if (
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "completed" &&
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "connected"
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
          if (on) {
            this.screenConnection.send({
              message: {
                request: "configure",
                bitrate: 0,
              },
            });
          }
        },
      });
    },

    listenForScreenShareEnd(stream) {
      stream.getVideoTracks()[0].addEventListener("ended", () => {
        console.log("Stop button pressed in browser");
        this.endScreenShare();
      });
    },

    endScreenShare() {
      this.screenButtonBusy = true;
      var unpublish = {
        request: "unpublish",
      };
      this.screenConnection.send({
        message: unpublish,
        success: () => {
          this.localScreenShare = false;
          this.screenButtonBusy = false;

          this.localScreenStream.getTracks().forEach((track) => track.stop());

          this.localScreenStream = null;
          this.miniScreen.srcObject = null;
          this.miniScreen.classList.add("hidden");
          this.screenShare = null;
          this.screenVideoElement = null;
        },
      });
    },

    registerScreenUsername() {
      // Create a new room
      Janus.log("Screen sharing session created: " + this.roomId);
      var register = {
        request: "join",
        room: this.roomId,
        ptype: "publisher",
        display: this.screenShareId,
        quality: 0,
      };

      this.sfutest.send({
        message: register,
      });
    },
  },
  created() {
    this.initializeJanus();
  },

  components: {
    ControlArea,
  },
};
</script>

<style lang="scss">
#router-view {
  padding: 0 !important;
}
.screen-sharing-active {
  position: absolute;
  bottom: 0.75rem;
  right: 11rem;
  width: auto;
  max-height: 10rem;
  z-index: 10;
}

video.local-video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  /* Safari and Chrome */
  -moz-transform: rotateY(180deg);
  /* Firefox */
}
</style>