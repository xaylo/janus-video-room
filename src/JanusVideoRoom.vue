<template>
  <div class="video-wrapper">
    <div class="streaming-control-area" v-if="room && streamEnabled">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold text-center rounded mx-4 py-2 px-4"
        v-if="!room.streaming"
        @click="startBroadcasting"
      >
        Start Live Streaming
      </button>

      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded mx-4 py-2 px-4"
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

    <div class="absolute inset-0 flex items-center justify-center" v-if="streamEnabled">
      <div class="countdown">
        <div
          class="text-center"
          v-if="streamingCountdown > 0 && streamingCountdown <= 5"
        >
          <h4 class="text-white text-6xl">{{ streamingCountdown }}</h4>
        </div>
      </div>
    </div>

    <!-- Streaming Canvas - hidden from view - this is what is broadcast -->
    <canvas ref="streamingCanvas" class="hidden"></canvas>
    <!-- End streaming canvas -->

    <!-- Remote Video - displays full screen if no screen being shared to user -->
    <video
      ref="remoteVideoElement"
      class="bg-black remote-video"
      autoplay
      playsinline
    />
    <!-- End remote video -->

    <!-- Remote screen video - displays -->
    <video
      ref="remoteScreenVideoElement"
      class="bg-primary screen-video hidden"
      autoplay
      playsinline
    />
    <!-- End remote screen video -->

    <!-- Local video - plays bottom right -->
    <div ref="localVideoContainer" class="local-video-container">
      <i class="far fa-spinner fa-spin text-white" v-show="!published"></i>
      <div class="local-video">
        <div
          v-if="!videoEnabled"
          class="flex bg-white rounded text-center"
          style="width: 200px; height: 150px"
        >
          <div class="m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-10 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
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
          class="rounded bg-black local-video border-2 border-white"
          ref="localVideoElement"
          width="200"
          height="150"
          autoplay
          playsinline
          muted="muted"
        />
      </div>
    </div>
    <!-- End local video -->

    <div class="control-area">
      <div class="flex">
        <!-- Mini screen - displays a small preview of the current screen share -->
        <!-- Grows on hover -->
        <video
          ref="miniScreen"
          autoplay
          playsinline
          class="hidden bg-green absolute bottom-28 left-12 border-2 border-white screen-preview-window"
        ></video>
        <!-- End mini screen -->
      </div>

      <!-- Controls -->
      <div class="flex flex-wrap pl-6">
        <button
          class="btn-circle btn-circle-xl mr-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center"
          v-if="audioEnabled"
          @click="toggleMute"
          v-tooltip.top="'Your mic is currently on, click to mute'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>
        <button
          class="btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4"
          v-if="!audioEnabled"
          @click="toggleMute"
          v-tooltip.top="'Your mic is currently off, click to unmute'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>

        <!-- Camera -->
        <button
          class="btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center"
          v-if="videoEnabled"
          @click="toggleVideo"
          v-tooltip.top="'Your camera is currently on, click to turn it off'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button
          class="btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4"
          v-if="!videoEnabled"
          @click="toggleVideo"
          v-tooltip.top="'Your camera is currently off, click to turn it on'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <!-- End camera -->

        <button
          class="btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4"
          v-if="!localScreenShare && !screenShare"
          :disabled="screenShare || screenButtonBusy"
          @click="enableScreenShare"
          v-tooltip.top="
            'You are not sharing your screen, click to begin sharing'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button
          class="btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center mx-4"
          v-if="localScreenShare"
          :disabled="screenButtonBusy"
          @click="endScreenShare"
          v-tooltip.top="
            'You are currently sharing your screen, click to stop sharing'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white h-8 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>

        <button
          class="btn-circle btn-circle-xl mx-4 bg-green-500 hover:bg-green-700 text-white font-bold text-center mx-4"
          @click="publishOwnFeed(true)"
          v-if="!published"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 text-white mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
        <button
          class="btn-circle btn-circle-xl mx-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center mx-4"
          @click="unpublishOwnFeed"
          v-if="published"
          v-tooltip.top="'Leave the video chat'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 text-white mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
      </div>
      <!-- End controls -->
    </div>
    <!-- Settings Area -->
    <div class="absolute top-2 left-2">
      <button
        class="btn-circle btn-circle-xl mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center mx-4"
        @click="showSettings = !showSettings"
        v-tooltip.top="'Open / Close settings'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-8 text-white mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-8 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
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
  </div>
</template>

<script>
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

export default {
  props: ["roomData", "userData", "streamEnabled", "serverUrl"],
  data() {
    return {};
  },
  created() {
    this.Janus = janusConnector;
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
};
</script>

<style>
.video-wrapper {
  margin: 0 !important;
  overflow: hidden;
  width: 100%;
}

.inside-wrapper {
  padding-top: 0rem !important;
  margin-top: 0rem !important;
  overflow: hidden;
}

.search-for-anything,
.add-anything-menu {
  display: none !important;
}
.video-wrapper {
  height: 100vh;
  width: 100vw;
}

.remote-video {
  width: 100%;
  height: 100%;
}

.screen-active {
  position: absolute !important;
  bottom: 0.5rem !important;
  left: 1rem !important;
  width: 200px;
  height: 150px;
  border-radius: 0.25rem;
}

.remote-video video {
}

.local-video video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
}

.screen-video {
  width: 1280;
  height: 720;
}

.local-video-container {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  width: auto;
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

.btn-circle {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  padding: 0;
  border-radius: 50%;
}

.btn-circle i {
  position: relative;
  top: -1px;
}

.btn-circle-sm {
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 0.9rem;
}

.btn-circle-lg {
  width: 55px;
  height: 55px;
  line-height: 55px;
  font-size: 1.1rem;
}

.btn-circle-xl {
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 1.3rem;
}

.screen-preview-window {
  width: 250px !important;
}
.screen-preview-window:hover {
  width: 500px !important;
}

.stream-preview-window {
  width: 300px !important;
}
.stream-preview-window:hover {
  width: 500px !important;
}

/* Live indicator */

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -2s;
}
@keyframes lds-ripple {
  0% {
    top: 26px;
    left: 26px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 62px;
    height: 62px;
    opacity: 0;
  }
}
/* End live indicator */
</style>