<template>
  <button
    :type="type"
    class="inline-block items-center px-4 py-2 bg-gray-200 border border-transparent rounded-md font-semibold text-sm text-gray-900 uppercase tracking-widest hover:bg-gray-400 active:bg-gray-600 focus:outline-none focus:border-gray-600 focus:shadow-outline-gray transition ease-in-out duration-150"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>
