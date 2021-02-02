<template>
  <div class="relative bg-black h-screen w-screen overflow-hidden">
    <div
      class="full-screen-video flex flex-wrap justify-center items-center h-screen bg-blue-400"
    ></div>
    <div
      class="video-gallery absolute w-full bottom-0 h-1/6 flex flex-wrap bg-red-400 items-center"
    >
      <div class="control-buttons ml-2 mr-auto h-24 w-40 bg-green-300"></div>
      <div class="remote-videos ml-auto">
        <div class="ml-auto h-28 w-40 bg-black mr-4"></div>
      </div>
      <div class="local-video h-28 w-40 bg-black mr-2">
        <i class="far fa-check text-white fa-4x"></i>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import "./assets/styles/app.scss";
import { Janus } from "janus-gateway";

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
  data() {
    return {};
  },
  created() {
    // this.Janus = janusConnector;
    console.log(Janus.init);
  },
  mounted() {},
  mixins: [],
};
</script>

<style lang="scss">
</style>