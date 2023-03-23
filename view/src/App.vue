<template>
  <div id="app">
    <div id="header-page">
      <div class="header-logo">logo</div>
      <div class="header-menu">
        <a><router-link :to="'/'">作品集展示&emsp;|&emsp;</router-link></a>
        <a><router-link :to="'/'"> 關於我們&emsp;|&emsp;</router-link></a>
        <a><router-link :to="'/'"> 聯絡我們</router-link></a>
      </div>
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
  margin-top: 0px;
}

a {
  text-decoration: none;
}

#header-page {
  padding: 10px;
  width: 100%;
  height: 88px;

  margin: 0;
  padding: 0;
  list-style: none;
  /* background-color: #f4f4f4; */
}

.header-logo {
  width: 200px;
  height: 88px;
  /* background-color: rgb(251, 108, 239); */
  display: inline-block;
  float: left;
  background-color: #818181;
}
.header-menu {
  display: inline-block;
  float: right;
  width: 376px;
  height: 34px;
  list-style: none;
  margin-top: 31px;
  margin-bottom: 23px;
  /* margin-right: 50px; */
}
.header-menu a {
  color: #818181;
}
</style>
