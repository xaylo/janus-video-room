<template>
  <div class="screen-selector p-2 text-white">
    <div class="container">
      <div class="flex">
        <div class="ml-auto">
          <button class="btn btn-light btn-sm" @click="close">
            <i class="fad fa-times"></i>
          </button>
        </div>
      </div>
      <div class="flex mb-3 text-center">
        <div class="col">
          <h5 class="mb-0">
            Please select the screen or application you wish to share
          </h5>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-1/3 mb-3 px-2 my-2" v-for="s in sources" :key="s.id">
          <div
            class="card h-100 border-0 shadow-sm cursor-pointer"
            @click="selectSource(s)"
          >
            <img
              :src="getImageUrl(s.thumbnail)"
              :alt="s.name"
              class="card-img-top w-100 h-56"
            />
            <div class="card-body">
              <h5 class="card-title">{{ s.name }}</h5>
            </div>

            <light-button
              type="button"
              @click="selectSource(s)"
              class="text-center"
              >Share this
            </light-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LightButton from "../components/LightButton";

export default {
  props: ["sources"],
  methods: {
    getImageUrl(thumb) {
      return thumb.toDataURL();
    },
    selectSource(source) {
      this.$emit("selected", source);
    },
    close() {
      this.$emit("close");
    },
  },
  components: {
    LightButton,
  },
};
</script>

<style>
.screen-selector {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #000;
  z-index: 999999 !important;
}
</style>