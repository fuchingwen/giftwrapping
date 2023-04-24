<template>
  <div>
    <router-link :to="'/list'"
      ><a href="#" class="product">分類管理</a></router-link
    >
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
