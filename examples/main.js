import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

import Header from './components/header/HeadCommon.vue';
Vue.component('app-header', Header);

// 引入组件（注册所有）
import CookieUI from '../lib/index.js';
import '../lib/index.css';
Vue.use(CookieUI);
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');