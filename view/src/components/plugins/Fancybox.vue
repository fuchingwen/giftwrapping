<script>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  props: {
    options: Object
  },
  mounted() {
    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {})
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {})
    });
  },
  unmounted() {
    Fancybox.destroy();
  }
};
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style>
/* @import url("@fancyapps/ui/dist/fancybox/fancybox.css"); */
@import url("../../style/app.9b6dd939.css");
</style>
