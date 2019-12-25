import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

import Header from './components/header/HeadCommon.vue';
Vue.component('app-header', Header);

// 引入组件（注册所有）
// import CookieUI from 'vue-cookie-ui';
// import 'vue-cookie-ui/lib/cookieui.css';
// Vue.use(CookieUI);
// 按需加载
// 引入组件
import Button from 'vue-cookie-ui/lib/packages/button/button.js';
import 'vue-cookie-ui/lib/packages/button/button.css';
Vue.use(Button)
// 引入modal
import Toast from 'vue-cookie-ui/lib/packages/toast/toast.js';
import 'vue-cookie-ui/lib/packages/toast/toast.css';
Vue.prototype.$toast = Toast;
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');