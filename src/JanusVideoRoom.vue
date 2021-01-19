<template>
  <div class="relative bg-black vh-100 vw-100">
    <div class="streaming-control-area" v-if="room && streamEnabled">
      <button
        class="bg-green-600 hover:bg-green-700 text-white font-bold text-center rounded mx-3 py-2 px-4"
        v-if="!room.streaming"
        @click="startBroadcasting"
      >
        Start Live Streaming
      </button>

      <button
        class="bg-red-600 hover:bg-red-700 text-white font-bold text-center rounded mx-3 py-2 px-4"
        v-if="room.streaming && streamingLocally"
        @click="stopBroadcasting"
      >
        Stop Live Streaming
      </button>

      <!-- Stream preview - displayed once stream started - top right -->
      <video
        ref="previewStreamElement"
        autoplay
        playsinline
        class="bg-black absolute top-15 right-3 hidden stream-preview-window border-2 border-white p-1"
      ></video>
      <!-- End stream preview -->
    </div>

    <div class="absolute top-3 left-32">
      <div class="flex text-center shadow-outline-white" v-if="liveIndicator">
        <div class="lds-ripple my-auto inline-block">
          <div></div>
          <div></div>
        </div>
        <h6 class="text-white text-xl inline-block ml-3 my-auto">
          You are now live!
        </h6>
        <small class="inline-block text-red-50 ml-3 my-auto"
          >Stream being recorded</small
        >
      </div>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center"
      v-if="remoteStreams === 0 && !showPermissionsPrompt"
    >
      <div class="waiting">
        <div class="text-center">
          <h4 class="text-white text-3xl">
            Waiting for participant to join...
          </h4>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center"
      v-if="showPermissionsPrompt"
    >
      <div class="waiting">
        <div class="text-center">
          <h4 class="text-white text-3xl">
            Please allow camera and microphone permissions
          </h4>
          <p class="text-white">
            This can be set at the top left of the browser
          </p>
        </div>
      </div>
    </div>

    <!-- Countdown -->
    <div
      class="absolute inset-0 flex items-center justify-center"
      v-if="streamEnabled"
    >
      <div class="countdown">
        <div
          class="text-center"
          v-if="streamingCountdown > 0 && streamingCountdown <= 5"
        >
          <h4 class="text-white text-6xl">{{ streamingCountdown }}</h4>
        </div>
      </div>
    </div>

    <!-- End countdown -->

    <!-- Streaming Canvas - hidden from view - this is what is broadcast -->
    <canvas ref="streamingCanvas" class="hidden"></canvas>
    <!-- End streaming canvas -->

    <!-- Remote Video - displays full screen if no screen being shared to user -->
    <div
      class="remote-videos flex flex-wrap justify-center items-center h-full md:px-8"
      ref="remoteVideosContainer"
    >
      <!-- <div v-for="s in remoteStreams" :key="s.id" :class="widthOfRemoteVideo" class="p-2">
        <video
          :ref="'remoteVideo' + s.id"
          :srcObject.prop="s.stream"
          class="bg-black border border-white"
          autoplay
          playsinline
          style="width: 100%"
        />
      </div> -->
    </div>
    <!-- End remote video -->

    <!-- Remote screen video - displays -->
    <video
      ref="remoteScreenVideoElement"
      class="bg-black screen-video hidden object-cover w-full"
      width="100%"
      height="auto"
      autoplay
      playsinline
    />
    <!-- End remote screen video -->

    <!-- Local video - plays bottom right -->
    <div ref="localVideoContainer" class="">
      <div
        v-if="!videoEnabled"
        class="flex bg-white rounded text-center"
        style="width: 200px; height: 150px"
      >
        <div class="m-auto">
          <h5 class="m-auto">Camera Disabled</h5>
        </div>
      </div>
      <video
        class="hidden"
        ref="localVideoElementStream"
        autoplay
        playsinline
        muted="muted"
      />

      <video
        class="rounded bg-black border border-white absolute top-0 md:bottom-0 right-0 mr-2 mt-2 w-1/2 md:w-1/4 h-auto"
        ref="localVideoElement"
        autoplay
        playsinline
        muted="muted"
      />
    </div>

    <!-- End local video -->

    <div class="absolute bottom-0 left-0 md:mb-4 mb-2 ml-2 md:ml-4">
      <div class="flex flex-wrap mb-3 ml-4">
        <!-- Mini screen - displays a small preview of the current screen share -->
        <!-- Grows on hover -->
        <video
          ref="miniScreen"
          autoplay
          playsinline
          class="hidden bg-green border-2 border-white screen-preview-window"
        ></video>
        <!-- End mini screen -->
      </div>

      <!-- Controls -->
      <div class="flex flex-wrap">
        <button
          class="btn-circle btn-circle-xl mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
          v-if="audioEnabled"
          @click="toggleMute"
          v-tooltip.top="'Your mic is currently on, click to mute'"
        >
          <i class="fad fa-microphone"></i>
        </button>
        <button
          class="btn-circle btn-circle-xl mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
          v-if="!audioEnabled"
          @click="toggleMute"
          v-tooltip.top="'Your mic is currently off, click to unmute'"
        >
          <i class="fad fa-microphone-slash"></i>
        </button>

        <!-- Camera -->
        <button
          class="btn-circle btn-circle-xl mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
          v-if="videoEnabled"
          @click="toggleVideo"
          v-tooltip.top="'Your camera is currently on, click to turn it off'"
        >
          <i class="fad fa-video"></i>
        </button>
        <button
          class="btn-circle btn-circle-xl mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
          v-if="!videoEnabled"
          @click="toggleVideo"
          v-tooltip.top="'Your camera is currently off, click to turn it on'"
        >
          <i class="fad fa-video-slash"></i>
        </button>
        <!-- End camera -->

        <button
          class="sm:hidden btn-circle btn-circle-xl mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
          v-if="!localScreenShare && !screenShare"
          :disabled="screenShare || screenButtonBusy"
          @click="enableScreenShare"
          v-tooltip.top="
            'You are not sharing your screen, click to begin sharing'
          "
        >
          <i class="fad fa-desktop"></i>
        </button>
        <button
          class="sm:hidden btn-circle btn-circle-xl mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
          v-if="localScreenShare"
          :disabled="screenButtonBusy"
          @click="endScreenShare"
          v-tooltip.top="
            'You are currently sharing your screen, click to stop sharing'
          "
        >
          <i class="fad fa-desktop"></i>
        </button>

        <button
          class="btn-circle btn-circle-xl mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
          @click="publishOwnFeed(true)"
          v-if="!published"
        >
          <i class="fad fa-play"></i>
        </button>
        <button
          class="btn-circle btn-circle-xl mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
          @click="unpublishOwnFeed"
          v-if="published"
          v-tooltip.top="'Leave the video chat'"
        >
          <i class="fad fa-stop"></i>
        </button>
      </div>
      <!-- End controls -->
    </div>
    <!-- Settings Area -->
    <div class="absolute top-2 left-2" v-if="streamEnabled">
      <button
        class="btn-circle btn-circle-xl mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center"
        @click="showSettings = !showSettings"
        v-tooltip.top="'Open / Close settings'"
      >
        <i class="fad fa-sliders-v-square"></i>
      </button>
    </div>
    <div
      class="absolute bg-white p-6 rounded shadow top-24 left-2 md:w-1/3"
      v-if="showSettings"
    >
      <div
        class="close-settings absolute top-1 right-1 cursor-pointer"
        @click="showSettings = false"
      >
        <i class="fad fa-times-circle"></i>
      </div>
      <h4 class="font-bold underline mb-3">Screen Capture Settings</h4>
      <div class="w-full">
        <label for="screenCursor">Capture mouse on screen share?</label>
        <select
          id="screenCursor"
          class="form-select mt-1 block w-full"
          v-model="screenCaptureSettings.cursor"
        >
          <option value disabled>Select option</option>
          <option value="never">Never</option>
          <option value="motion">When cursor moves</option>
          <option value="always">Always</option>
        </select>
      </div>
    </div>
    <!-- End settings Area -->

    <!-- Electron Screen Capturer -->
    <electron-screen-selector
      v-if="screenSources.length > 0"
      :sources="screenSources"
      @selected="selectScreenSourceElectron"
      @close="screenSources = []"
    ></electron-screen-selector>

    <!--  -->
  </div>
</template>

<script>
import "./assets/styles/app.scss";
import janusConnector from "./meetecho/janus";

import { janusSetupMixin } from "./mixins/janus/setup";
import { janusLocalMixin } from "./mixins/janus/local";
import { janusRemoteMixin } from "./mixins/janus/remote";

import { streamingMixin } from "./mixins/streaming";
import { canvasMixin } from "./mixins/canvas";

import { videoMixin } from "./mixins/video";
import { audioMixin } from "./mixins/audio";
import { screenMixin } from "./mixins/screen";

import { settingsMixin } from "./mixins/settings";

import ElectronScreenSelector from "./electron/ScreenSelector";

export default {
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
    isElectron: {
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
  computed: {
    widthOfRemoteVideo() {
      if (this.remoteStreams === 1) {
        return "w-full";
      } else if (this.remoteStreams === 2) {
        return "w-1/2";
      } else if (this.remoteStreams === 3) {
        return "w-1/3";
      } else {
        return "w-full";
      }
    },
  },
  data() {
    return {};
  },
  created() {
    this.Janus = janusConnector;
  },
  mounted() {
    console.log(this.userData);
  },
  mixins: [
    janusSetupMixin,
    janusLocalMixin,
    janusRemoteMixin,
    streamingMixin,
    canvasMixin,
    videoMixin,
    audioMixin,
    screenMixin,
    settingsMixin,
  ],
  components: {
    ElectronScreenSelector,
  },
};
</script>

<style lang="scss">
.video-wrapper {
  margin: 0 !important;
  overflow: hidden;
  width: 100%;
  background: black !important;
}

.inside-wrapper {
  padding-top: 0rem !important;
  margin-top: 0rem !important;
  overflow: hidden;
}

.video-wrapper {
  height: 100vh;
  width: 100vw;
}

// .remote-video {
//     width: 100%;
//     height: 100%;
// }
// .remote-videos {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// }
.remote-videos video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;
  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;
}

// .remote-videos video {
//     width: 100% !important;
//     height: 100% !important;
// }
.screen-active {
  position: absolute !important;
  bottom: 0.5rem !important;
  right: 240px !important;
  height: 150px !important;
}

.screen-active video {
  width: 200px !important;
  height: 150px !important;
  border-radius: 0.25rem;
}

.local-video video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  /* Safari and Chrome */
  -moz-transform: rotateY(180deg);
  /* Firefox */
}

.screen-video {
  width: auto;
  max-width: 100% !important;
}

.control-area {
  position: absolute;
  bottom: 1rem;
  width: 100%;
  z-index: 99999 !important;
}

.streaming-control-area {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: auto;
  z-index: 9999;
}

.bg-black {
  background: black;
}
</style>