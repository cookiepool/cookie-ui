import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

// 引入组件（注册所有）
import CookieUI from '../packages/index';
Vue.use(CookieUI);
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');