import Vue from "vue";
import Router from "vue-router";
import demo from "@/page/demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/demo",
      name: "demo",
      component: demo
    },
    {
      path: "/",
      name: "demo",
      component: demo
    }
  ]
});
