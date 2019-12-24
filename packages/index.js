/* 组件库对外导出的组件集合，对整个组件进行导出 */

// 导入主样式文件（用于注册所有组件时使用）
// import './style/index.scss';
// 导入组件（用于注册所有组件）
import Button from './components/button';

import Toast from './components/toast';
import Dialog from './components/dialog';


// 定义组件列表
const componentsList = [
  Button
];

const install = function(Vue) {
  // 判断是否安装过
  if(install.installed) return;

  // 注册所有组件
  componentsList.map((component) => {
    Vue.component(component.name, component);
  })

  Vue.prototype.$toast = Toast;
  Vue.prototype.$dialog = Dialog;
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 这个如果你是导入所有组件的话，这句就够了，然后在你的项目的main.js里面写这句（这个不一定对）
/*
  // 引入所有组件
  import CookieUI from '../packages/index';
  Vue.use(CookieUI);
*/
export default {
  install,
  Button,
  Toast,
  Dialog
}

// 如果你还想实现按需加载各个组件，比如我想单独引用button组件，那么你还要加上下面这句
// 然后呢在你的项目的main.js加上下面代码才会生效（这个持保留意见）
/*
  // 按需要引入
  import { Button, Cell } from '../packages/index';
  Vue.use(Button).use(Cell);
*/
// export {
//   Button
// }
