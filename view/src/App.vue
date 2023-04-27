<template>
  <div id="app">
    <div class="header">
      <div class="back-top hide" title="回頂部">
        <a href="#"> </a>
      </div>
      <div class="flex-container">
        <div class="div-logo">
          <router-link :to="'/'"
            ><a href="#" class="logo"
              ><img src="./assets/logo.svg" alt="好禮Logo"/></a
          ></router-link>
        </div>
        <div class="div-menu">
          <nav id="menu">
            <ul>
              <li>
                <router-link :to="'/list'"
                  ><a href="#">作品集展示</a></router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="goo-main">
      <router-view />
    </div>
    <button id="line-block1">
      <img src="./assets/line-icon.png" />
    </button>
    <div id="line-block2">
      <div id="line-qrcode">
        <img src="./assets/line-pic.svg" />
        <div id="line-bg"></div>
      </div>
    </div>
    <conact-component />
  </div>
</template>

<script>
import ConactComponent from "./components/ConactComponent.vue";

export default {
  components: {
    ConactComponent
  },
  name: "App"
};
</script>

<style scoped>
@import url("./style/header.css");
@import url("./style/back-top.css");
@import url("./style/line-block.css");

.goo-main {
  margin-top: 88px;
}
</style>
