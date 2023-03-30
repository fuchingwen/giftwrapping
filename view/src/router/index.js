import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import List from "@/components/List";
import Detail from "@/components/Detail";
import A from "@/components/a";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/a/",
      name: "A",
      component: A
    }
  ]
});
