<template>
  <!-- Controls -->
  <div class="flex flex-wrap w-full justify-start">
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-gray-400 hover:bg-gray-500 text-gray font-bold text-center"
      v-if="!audioMuted"
      @click="toggleAudioMute"
      v-tooltip.top="'Your mic is currently on, click to mute'"
    >
      <i class="fad fa-microphone"></i>
    </button>
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-gray-100 hover:bg-gray-200 text-gray font-bold text-center"
      v-if="audioMuted"
      @click="toggleAudioMute"
      v-tooltip.top="'Your mic is currently off, click to unmute'"
    >
      <i class="fad fa-microphone-slash"></i>
    </button>

    <!-- Camera -->
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-gray-400 hover:bg-gray-500 text-gray font-bold text-center"
      v-if="!videoMuted"
      @click="toggleVideoMute"
      v-tooltip.top="'Your camera is currently on, click to turn it off'"
    >
      <i class="fad fa-video"></i>
    </button>
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-gray-100 hover:bg-gray-200 text-gray font-bold text-center"
      v-if="videoMuted"
      @click="toggleVideoMute"
      v-tooltip.top="'Your camera is currently off, click to turn it on'"
    >
      <i class="fad fa-video-slash"></i>
    </button>
    <!-- End camera -->

    <button
      class="hidden md:block btn-circle btn-circle-xl mx-2 md:mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
      v-if="!localScreenShare && !sharingScreen"
      :disabled="sharingScreen || screenButtonBusy"
      @click="startScreenShare"
      v-tooltip.top="'You are not sharing your screen, click to begin sharing'"
    >
      <i class="fad fa-desktop"></i>
    </button>
    <button
      class="hidden md:block btn-circle btn-circle-xl mx-2 md:mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
      v-if="localScreenShare"
      :disabled="screenButtonBusy"
      @click="endScreenShare"
      v-tooltip.top="
        'You are currently sharing your screen, click to stop sharing'
      "
    >
      <i class="fad fa-desktop"></i>
    </button>
    <!-- 
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-green-600 hover:bg-green-700 text-white font-bold text-center"
      @click="publishOwnFeed(true)"
      v-if="!published"
    >
      <i class="fad fa-play"></i>
    </button> -->
    <button
      class="btn-circle btn-circle-xl mx-2 md:mr-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center"
      @click="endConnection"
      v-if="connected"
      v-tooltip.top="'Leave the video chat'"
    >
      <i class="fad fa-stop"></i>
    </button>
  </div>
  <!-- End controls -->
</template>

<script>
export default {
  props: [
    "audioMuted",
    "videoMuted",
    "localScreenShare",
    "sharingScreen",
    "connected",
  ],
  data() {
    return {
      screenButtonBusy: false,
    };
  },
  methods: {
    toggleAudioMute() {
      this.$emit("toggleAudioMute");
    },
    toggleVideoMute() {
      this.$emit("toggleVideoMute");
    },
    startScreenShare() {
      this.$emit("startScreenShare");
    },
    endScreenShare() {
      this.$emit("endScreenShare");
    },
    endConnection() {
      this.$emit("endConnection");
    },
  },
};
</script>

<style>
</style>