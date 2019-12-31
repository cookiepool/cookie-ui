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
// import Button from 'vue-cookie-ui/lib/packages/button';
// import 'vue-cookie-ui/lib/packages/button/style.css';
// Vue.use(Button)
// // 引入modal
// import Toast from 'vue-cookie-ui/lib/packages/toast';
// import 'vue-cookie-ui/lib/packages/toast/style.css';
// Vue.prototype.$toast = Toast;
// 使用babel-plugin-component
import { Button, Toast, Dialog } from 'vue-cookie-ui';
Vue.use(Button);
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;

 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');