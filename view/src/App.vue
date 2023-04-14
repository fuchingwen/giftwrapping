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
                  ><a href="#" class="product"
                    >作品集展示&emsp;|</a
                  ></router-link
                >
              </li>
              <li>
                <a href="#關於我們" class="about">關於我們&emsp;|</a>
              </li>
              <li>
                <a href="#聯絡我們" class="about">聯絡我們</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="goo-main">
      <router-view />
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

.goo-main {
  margin-top: 88px;
}
</style>
