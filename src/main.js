import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

// 按需注册vant组件
import { Button } from 'vant';
Vue.use(Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');