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
        <img src="./assets/android_banner/Line_small.svg" />
        <div id="line-bg"></div>
      </div>
    </div>
    <!-- <conact-component /> -->

    <div class="footer">
      <div class="footer-info">
        <div class="my-content">
          <p>信箱 miiroxy921@gmail.com&emsp;|&emsp;傳真 (02)-2719-5403</p>
          <p>
            電話 +886-2-000-222&emsp;|&emsp;地址
            新北市中和區中正路45巷25弄6號5樓
          </p>
        </div>
        <div class="my-copyright">Copyright 2023 @ All right reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
// import ConactComponent from "./components/ConactComponent.vue";

export default {
  // components: {
  //   ConactComponent
  // },
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

.footer {
  height: 200px;
  width: 100%;
  background-color: #eae6e5;
  margin-bottom: 0px;
}

.footer-info {
  padding-top: 40px;
}
.my-content {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 25px;
  text-align: center;
}
.my-copyright {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  text-align: center;
  color: #9a9999;
}
</style>
