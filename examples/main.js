import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

// 引入组件
import CookieUI from '../packages/index';
import '../packages/style/index.scss';
Vue.use(CookieUI.Button);
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');