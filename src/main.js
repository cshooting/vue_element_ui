import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueRouter from 'vue-router';
import routers from "./router/router";
const router = new vueRouter({ //这里名字只能是router
  mode: 'history',
  routes: routers
})
Vue.use(vueRouter);
Vue.use(ElementUI, {
  size: 'medium'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
