import Vue from 'vue';
import toastComponent from './Toast.vue';
import './toast.scss';

const toastConstructor =  Vue.extend(toastComponent);
let instance;

/**
 * 打开toast 
 * @param options {Object}  消息内容options.message，不可省略。停留时间options.duration，可省略，默认为2000（毫秒）
**/
let toast = function(options = {}) {
  if(!instance) {
    instance = new toastConstructor({
      el: document.createElement('div')
    });
  }

  if(instance.show === true) return;

  instance.message = options.message;
  instance.show = true;
  document.body.appendChild(instance.$el)

  let timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
  }, options.duration || 2000);
}

export default toast;