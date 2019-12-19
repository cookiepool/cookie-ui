import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

// 引入组件
import { Button } from '../packages/index';
import '../packages/cookie_css/index.scss';
Vue.use(Button);
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');