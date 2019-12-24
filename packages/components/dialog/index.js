import Vue from 'vue';
import dialogComponent from './Dialog.vue';
import './dialog.scss';

const dialogConstructor = Vue.extend(dialogComponent);
let instance;

export default {
  /**
   * @param options {Object} 表示自定义的内容。
   * options.title表示自定义标题，默认为‘温馨提示’
   * options.content表示自定义内容，不可省略
   * options.confirmBtnText表示自定义确定按钮内容，默认为‘确定’
   * options.cancelBtnText表示自定义取消按钮内容，默认为‘取消’
  **/
   alert(options) {
    if(options === undefined || options === null) {
      return;
    }

    options.title === undefined ? options.title = '温馨提示' : options.title;
    options.confirmBtnText === undefined ? options.confirmBtnText = '确定' : options.confirmBtnText;
    
    return new Promise((resolve, reject) => {
      if(!instance) {
        instance = new dialogConstructor({
          el: document.createElement('div')
        })
      }

      instance.showAlertPop = true;
      instance.title = options.title;
      instance.content = options.content;
      instance.confirmBtnText = options.confirmBtnText;
      document.body.appendChild(instance.$el);
      instance.showAlert().then(() => {
        resolve();
      })
    });
  },
  confirm(options) {
    if(options === undefined || options === null) {
      return;
    }

    options.title === undefined ? options.title = '温馨提示' : options.title;
    options.confirmBtnText === undefined ? options.confirmBtnText = '确定' : options.confirmBtnText;
    options.cancelBtnText === undefined ? options.cancelBtnText = '取消' : options.cancelBtnText; 
    
    return new Promise((resolve, reject) => {
      if(!instance) {
        instance = new dialogConstructor({
          el: document.createElement('div')
        })
      }

      instance.showConfirmPop = true;
      instance.title = options.title;
      instance.content = options.content;
      instance.confirmBtnText = options.confirmBtnText;
      instance.cancelBtnText = options.cancelBtnText;
      document.body.appendChild(instance.$el);
      // 确定按钮
      instance.showComfirm().then(() => {
        resolve();
      })
      // 取消按钮
      .catch(() => {
        reject();
      });
    });
  }
}