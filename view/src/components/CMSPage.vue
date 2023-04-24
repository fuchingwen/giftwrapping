<template>
  <div>
    <router-link :to="'/list'"
      ><a href="#" class="product">作品集展示sssss</a></router-link
    >
    <router-view />
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
<style scoped></style>
