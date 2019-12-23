import Vue from 'vue';
import dialogComponent from './Dialog.vue';
import './dialog.scss';

const dialogConstructor = Vue.extend(dialogComponent);
let instance;

export default {
  alert(options) {
    if(!instance) {
      
    }
  },
  confirm(options) {

  }
}