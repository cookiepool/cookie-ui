import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import App from '../App.vue';
// import Home from '../views/Home.vue';
// import RouterTest from '../views/RouterTest.vue';
// import VantTest from '../views/VantTest.vue';

//官方的懒加载方案，需要在webpack.config.js中配置@babel/plugin-syntax-dynamic-import这个插件，否则babel不支持以下语法会报错。
//下面的注释语法是打包生成的js的文件名，如果你想某几个组件打包到同一个文件，那么它们的注释语法的webpackChunkName的名字相同即可
const Home = () =>
  import(/* webpackChunkName: "group-foo-1" */ "../views/Home.vue");
const RouterTest = () =>
  import(/* webpackChunkName: "group-foo-1" */ "../views/RouterTest.vue");
const VantTest = () =>
  import(/* webpackChunkName: "group-foo-1" */ "../views/VantTest.vue");

const routes = [
  {
    path: '/',
    component: App, // 一级路由不要写name属性
    children: [
      {
        path: '/home',
        redirect: '/'
      },
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/routertest',
        name: 'routertest',
        component: RouterTest
      },
      {
        path: '/vanttest',
        name: 'vanttest',
        component: VantTest
      }
    ]
  }
]

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y:0 }
  }
})