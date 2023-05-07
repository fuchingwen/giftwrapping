// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vueResource from "vue-resource";
import axios from "axios";
import jquery from "jquery";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper);

// import ViewUIPlus from "view-ui-plus";
// import "view-ui-plus/dist/styles/viewuiplus.css";

Vue.config.productionTip = false;
Vue.prototype.$ = jquery;
Vue.use(ViewUI);
// App.use(ViewUIPlus);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  vueResource,
  axios,
  components: { App },
  template: "<App/>"
});
