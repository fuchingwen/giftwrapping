<template>
  <div id="app">
    <div id="header-page">
      <router-link :to="'/'">作品集專案</router-link> |
      <router-link :to="'/'">關於我們</router-link> |
      <router-link :to="'/'">聯絡我們</router-link>
    </div>
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
