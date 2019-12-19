/* 组件库对外导出的组件集合，对整个组件进行导出 */

// 导入组件
import Button from './button';
import Cell from './cell';

// 定义组件列表
const componentsList = [
  Button,
  Cell
];

const install = function(Vue) {
  // 判断是否安装过
  if(install.installed) return;

  // 注册所有组件
  componentsList.map((component) => {
    Vue.component(component.name, component);
  })
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 这个如果你是导入所有组件的话，这句就够了，然后在你的项目的main.js里面写这句
/*
  // 引入所有组件
  import CookieUI from '../packages/index';
  Vue.use(CookieUI);
*/
export default install;

// 如果你还想实现按需加载各个组件，比如我想单独引用button组件，那么你还要加上下面这句
// 然后呢在你的项目的main.js加上下面代码才会生效
/*
  // 按需要引入
  import { Button, Cell } from '../packages/index';
  Vue.use(Button).use(Cell);
*/
export {
  Button,
  Cell
}

