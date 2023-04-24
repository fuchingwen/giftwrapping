import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import TestPage from "@/components/TestPage";
import List from "@/components/List";
import Detail from "@/components/Detail";

import CMSMenu from "@/components/CMSMenu";
import CMSLogin from "@/components/CMSLogin";
import CMSCategory from "@/components/CMSCategory";
import CMSItemsBoard from "@/components/CMSItemsBoard";
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
      path: "/detail2",
      name: "TestPage",
      component: TestPage
    },
    {
      path: "/cms/login",
      name: "CMSLogin",
      component: CMSLogin
    },
    {
      path: "/cms",
      name: "CMS",
      component: CMSMenu,
      children: [
        {
          path: "category",
          component: CMSCategory
        },
        {
          path: "items",
          component: CMSItemsBoard
        }
      ]
    }
  ]
});
