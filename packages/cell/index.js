import Cell from './src/Cell.vue';

Cell.install = function(Vue) {
  Vue.component(Cell.name, Cell);
}

export default Cell;