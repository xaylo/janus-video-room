<template>
  <div class="screen-selector p-5">
    <div class="container">
      <div class="row">
        <div class="col-auto ml-auto">
          <button class="btn btn-light btn-sm" @click="close">
            <i class="fad fa-times"></i>
          </button>
        </div>
      </div>
      <div class="row mb-3 text-center">
        <div class="col">
          <h5 class="mb-0 text-white">
            Please select the screen or application you wish to share
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-3" v-for="s in sources" :key="s.id">
          <div
            class="card h-100 border-0 shadow-sm cursor-pointer"
            @click="selectSource(s)"
          >
            <img
              :src="getImageUrl(s.thumbnail)"
              :alt="s.name"
              class="card-img-top"
              width="100%"
              height="120"
            />
            <div class="card-body">
              <h5 class="card-title">{{ s.name }}</h5>
            </div>

            <button
              class="btn btn-light btn-block btn-sm"
              @click="selectSource(s)"
            >
              <i class="fad fa-hand-pointer mr-2"></i>Select
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  z-index: 9999;
}
</style>