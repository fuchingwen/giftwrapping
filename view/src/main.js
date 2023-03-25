// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vueResource from "vue-resource";
import axios from "axios";
import jquery from "jquery";

Vue.config.productionTip = false;
Vue.prototype.$ = jquery;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  vueResource,
  axios,
  components: { App },
  template: "<App/>"
});
