// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import "../static/project/js/util.js";
import "../static/element/element.util.js"
import '../static/project/css/project.scss';
import 'element-ui/lib/theme-chalk/index.css';
import Menu from "./components/menu.vue";
Vue.component("v-menu", Menu);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
