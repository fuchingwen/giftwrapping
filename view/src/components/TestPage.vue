<template>
  <div>
    <!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Slider v-model="value" range />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [20, 50]
    };
  }
};
</script>
<style scoped>
@import url("https://unpkg.com/element-ui/lib/theme-chalk/index.css");
</style>
