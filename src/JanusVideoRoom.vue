<template>
  <div class="relative bg-black h-screen w-screen overflow-hidden">
    <div
      class="permissions-prompt absolute top-0 left-0 bg-yellow-400 p-4"
      v-if="showPermissionsPrompt"
    >
      <h1 class="text-white text-2xl font-bold">
        You need to enable permissions
      </h1>
    </div>
    <div
      class="full-screen-video flex flex-wrap justify-center items-center h-screen bg-blue-400"
    ></div>
    <div
      class="video-gallery absolute w-full bottom-0 h-1/6 flex flex-wrap bg-red-400 items-center"
    >
      <div class="control-buttons ml-2 mr-auto items-center">
        <control-area
          :connected="connected"
          :audio-muted="audioMuted"
          :video-muted="videoMuted"
          :local-screen-share="localScreenShare"
          :sharing-screen="sharingScreen"
          @toggleAudioMute="toggleAudioMute"
          @toggleVideoMute="toggleVideoMute"
          @startScreenShare="startScreenShare"
          @endScreenShare="endScreenShare"
          @endConnection="endConnection"
        ></control-area>
      </div>
      <div
        id="remote-videos-container"
        class="remote-videos h-28 flex flex-wrap ml-auto"
      ></div>
      <div
        id="local-video-container"
        class="local-video h-28 w-40 bg-black mr-2"
      >
        <div id="no-local-camera" class="w-full h-full bg-white">No camera</div>
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
      subscriberMode: false,
      janusConnection: null,
      sfutest: null,
      showPermissionsPrompt: true,
      connected: false,
      myid: null,
      mypvtid: null,
      mystream: null,
      remoteFeed: null,
      feeds: [],

      //
      audioMuted: false,
      videoMuted: false,
      localScreenShare: false,
      sharingScreen: false,
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
  },
  methods: {
    toggleAudioMute() {
      // do something
    },
    toggleVideoMute() {
      // do something
    },
    startScreenShare() {
      // do something
    },
    endScreenShare() {
      // do something
    },
    endConnection() {
      // end connection and quit
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

          // If the local video doesnt exist
          // add it here

          var localVideoContainer = document.getElementById(
            "local-video-container"
          );

          var localVideoElement = document.createElement("video");

          localVideoElement.ref = "local-video-player";
          localVideoElement.id = "local-video-player";
          localVideoElement.classList += "w-full h-full";
          localVideoElement.playsInline = true;
          localVideoElement.autoplay = true;
          localStorage.muted = true;

          localVideoContainer.appendChild(localVideoElement);

          // Insert video into the container

          // if ($("#myvideo").length === 0) {
          //   $("#videolocal").append(
          //     '<video class="rounded centered" id="myvideo" width="100%" height="100%" autoplay playsinline muted="muted"/>'
          //   );
          //   // Add a 'mute' button
          //   $("#videolocal").append(
          //     '<button class="btn btn-warning btn-xs" id="mute" style="position: absolute; bottom: 0px; left: 0px; margin: 15px;">Mute</button>'
          //   );
          //   $("#mute").click(this.toggleAudioMute);
          //   // Add an 'unpublish' button
          //   $("#videolocal").append(
          //     '<button class="btn btn-warning btn-xs" id="unpublish" style="position: absolute; bottom: 0px; right: 0px; margin: 15px;">Unpublish</button>'
          //   );
          //   $("#unpublish").click(this.unpublishOwnFeed);
          // }
          // $("#publisher").removeClass("hide").html(myusername).show();
          Janus.attachMediaStream(localVideoElement, stream);
          localVideoElement.muted = "muted";
          if (
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "completed" &&
            this.sfutest.webrtcStuff.pc.iceConnectionState !== "connected"
          ) {
            // Show connecting spinner or something?
            // $("#videolocal")
            //   .parent()
            //   .parent()
            //   .block({
            //     message: "<b>Publishing...</b>",
            //     css: {
            //       border: "none",
            //       backgroundColor: "transparent",
            //       color: "white",
            //     },
            //   });
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
              // if (!remoteFeed.spinner) {
              //   var target = document.getElementById(
              //     "videoremote" + remoteFeed.rfindex
              //   );
              //   remoteFeed.spinner = new Spinner({ top: 100 }).spin(target);
              // } else {
              //   remoteFeed.spinner.spin();
              // }
              Janus.log(
                "Successfully attached to feed " +
                  remoteFeed.rfid +
                  " (" +
                  remoteFeed.rfdisplay +
                  ") in room " +
                  msg["room"]
              );

              // Show the remote feed - what is the html in the rfdisplay - ah its display username!!

              // $("#remote" + remoteFeed.rfindex)
              //   .removeClass("hide")
              //   .html(remoteFeed.rfdisplay)
              //   .show();
            } else if (event === "event") {
              // Check if we got a simulcast-related event from this publisher
              // var substream = msg["substream"];
              // var temporal = msg["temporal"];
              // if (
              //   (substream !== null && substream !== undefined) ||
              //   (temporal !== null && temporal !== undefined)
              // ) {
              //   if (!remoteFeed.simulcastStarted) {
              //     remoteFeed.simulcastStarted = true;
              //     // Add some new buttons
              //     addSimulcastButtons(
              //       remoteFeed.rfindex,
              //       remoteFeed.videoCodec === "vp8" ||
              //         remoteFeed.videoCodec === "h264"
              //     );
              //   }
              //   // We just received notice that there's been a switch, update the buttons
              //   updateSimulcastButtons(remoteFeed.rfindex, substream, temporal);
              // }
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

          var remoteVideosContainer = document.getElementById(
            "remote-videos-container"
          );

          var remoteVideoExists = document.getElementById(
            "remote-video-div-" + remoteFeed.rfindex
          );
          if (!remoteVideoExists) {
            var divAppend = document.createElement("div");
            divAppend.classList += "ml-auto h-28 w-auto bg-black mr-4";
            divAppend.id = "remote-video-div-" + remoteFeed.rfindex;

            var actualVideoEl = document.createElement("video");
            actualVideoEl.ref = "remote-video-" + remoteFeed.rfindex;
            actualVideoEl.id = "remote-video-" + remoteFeed.rfindex;
            actualVideoEl.classList += "h-full w-auto";
            actualVideoEl.autoplay = true;
            actualVideoEl.playsinline = true;

            divAppend.appendChild(actualVideoEl);

            remoteVideosContainer.appendChild(divAppend);
          } else {
            var actualVideoEl = document.getElementById(
              "remote-video-" + remoteFeed.rfindex
            );
          }

          //

          // var addButtons = false;
          // if ($("#remotevideo" + remoteFeed.rfindex).length === 0) {
          //   // addButtons = true;
          //   // No remote video yet

          //   $("#videoremote" + remoteFeed.rfindex).append(
          //     '<video class="rounded centered" id="waitingvideo' +
          //       remoteFeed.rfindex +
          //       '" width="100%" height="100%" />'
          //   );
          //   $("#videoremote" + remoteFeed.rfindex).append(
          //     '<video class="rounded centered relative hide" id="remotevideo' +
          //       remoteFeed.rfindex +
          //       '" width="100%" height="100%" autoplay playsinline/>'
          //   );
          //   $("#videoremote" + remoteFeed.rfindex).append(
          //     '<span class="label label-primary hide" id="curres' +
          //       remoteFeed.rfindex +
          //       '" style="position: absolute; bottom: 0px; left: 0px; margin: 15px;"></span>' +
          //       '<span class="label label-info hide" id="curbitrate' +
          //       remoteFeed.rfindex +
          //       '" style="position: absolute; bottom: 0px; right: 0px; margin: 15px;"></span>'
          //   );
          //   // Show the video, hide the spinner and show the resolution when we get a playing event
          //   $("#remotevideo" + remoteFeed.rfindex).bind("playing", () => {
          //     if (remoteFeed.spinner) remoteFeed.spinner.stop();
          //     remoteFeed.spinner = null;
          //     $("#waitingvideo" + remoteFeed.rfindex).remove();
          //     if (this.videoWidth)
          //       $("#remotevideo" + remoteFeed.rfindex)
          //         .removeClass("hide")
          //         .show();
          //     var width = this.videoWidth;
          //     var height = this.videoHeight;
          //     $("#curres" + remoteFeed.rfindex)
          //       .removeClass("hide")
          //       .text(width + "x" + height)
          //       .show();
          //     if (Janus.webRTCAdapter.browserDetails.browser === "firefox") {
          //       // Firefox Stable has a bug: width and height are not immediately available after a playing
          //       setTimeout(() => {
          //         var width = $("#remotevideo" + remoteFeed.rfindex).get(0)
          //           .videoWidth;
          //         var height = $("#remotevideo" + remoteFeed.rfindex).get(0)
          //           .videoHeight;
          //         $("#curres" + remoteFeed.rfindex)
          //           .removeClass("hide")
          //           .text(width + "x" + height)
          //           .show();
          //       }, 2000);
          //     }
          //   });
          // }

          Janus.attachMediaStream(actualVideoEl, stream);

          var videoTracks = stream.getVideoTracks();
          if (!videoTracks || videoTracks.length === 0) {
            // No remote video
            // $("#remotevideo" + remoteFeed.rfindex).hide();
            // if (
            //   $("#videoremote" + remoteFeed.rfindex + " .no-video-container")
            //     .length === 0
            // ) {
            //   $("#videoremote" + remoteFeed.rfindex).append(
            //     '<div class="no-video-container">' +
            //       '<i class="fa fa-video-camera fa-5 no-video-icon"></i>' +
            //       '<span class="no-video-text">No remote video available</span>' +
            //       "</div>"
            //   );
            // }
          } else {
            // $(
            //   "#videoremote" + remoteFeed.rfindex + " .no-video-container"
            // ).remove();
            // $("#remotevideo" + remoteFeed.rfindex)
            //   .removeClass("hide")
            //   .show();
          }
          // if (!addButtons) return;
          // if (
          //   Janus.webRTCAdapter.browserDetails.browser === "chrome" ||
          //   Janus.webRTCAdapter.browserDetails.browser === "firefox" ||
          //   Janus.webRTCAdapter.browserDetails.browser === "safari"
          // ) {
          //   $("#curbitrate" + remoteFeed.rfindex)
          //     .removeClass("hide")
          //     .show();
          //   bitrateTimer[remoteFeed.rfindex] = setInterval(() => {
          //     // Display updated bitrate, if supported
          //     var bitrate = remoteFeed.getBitrate();
          //     $("#curbitrate" + remoteFeed.rfindex).text(bitrate);
          //     // Check if the resolution changed too
          //     var width = $("#remotevideo" + remoteFeed.rfindex).get(0)
          //       .videoWidth;
          //     var height = $("#remotevideo" + remoteFeed.rfindex).get(0)
          //       .videoHeight;
          //     if (width > 0 && height > 0)
          //       $("#curres" + remoteFeed.rfindex)
          //         .removeClass("hide")
          //         .text(width + "x" + height)
          //         .show();
          //   }, 1000);
          // }
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
          }

          // $("#remotevideo" + remoteFeed.rfindex).remove();
          // $("#waitingvideo" + remoteFeed.rfindex).remove();
          // $("#novideo" + remoteFeed.rfindex).remove();
          // $("#curbitrate" + remoteFeed.rfindex).remove();
          // $("#curres" + remoteFeed.rfindex).remove();
          // if (bitrateTimer[remoteFeed.rfindex])
          // clearInterval(bitrateTimer[remoteFeed.rfindex]);
          // bitrateTimer[remoteFeed.rfindex] = null;
          remoteFeed.simulcastStarted = false;
          // $("#simulcast" + remoteFeed.rfindex).remove();
        },
      });
    },
  },
  created() {
    // this.Janus = janusConnector;
    this.initializeJanus();
  },
  mixins: [],
  components: {
    ControlArea,
  },
};
</script>

<style lang="scss">
</style>