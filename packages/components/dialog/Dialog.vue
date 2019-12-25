<template>
  <div v-if="showAlertPop || showConfirmPop" class="cookie-dialog--mask" @touchmove.prevent>
    <div v-if="showAlertPop" class="cookie-dialog--board">
      <p class="title">{{ title }}</p>
      <p class="content">{{ content }}</p>
      <div class="button-alert-wrap">
        <div ref='alertPopBtn' class="confirm-alert-btn">{{ confirmBtnText }}</div>
      </div>
    </div>

    <div v-if="showConfirmPop" class="cookie-dialog--board">
      <p class="title">{{ title }}</p>
      <p class="content">{{ content }}</p>
      <div class="button-confirm-wrap">
        <div ref="confirmBtnCancel" class="common-btn cancel-btn">{{ cancelBtnText }}</div>
        <div ref="confirmBtnOk" class="common-btn confirm-btn">{{ confirmBtnText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ck-dialog',
  data() {
    return {
      showAlertPop: false, // 显示alert弹窗
      showConfirmPop: false, // 显示confirm弹窗
      title: '', // 标题
      contnet: '', // 内容
      confirmBtnText: '', // 确定按钮文本内容
      cancelBtnText: '', // 取消按钮文本内容
    }
  },
  methods: {
    showAlert() {
      return new Promise((resolve, reject) => {
        // 不写$nextTick会报错，要等到dom渲染完的下一个周期你才能取到this.$refs.alertPopBtn
        this.$nextTick(() => {
          this.$refs.alertPopBtn.addEventListener('click', () => {
            resolve();
            this.showAlertPop = false;
          }, false)
        });
      });
    },
    showComfirm() {
      return new Promise((resolve, reject) => {
        // 不写$nextTick会报错，要等到dom渲染完的下一个周期你才能取到this.$refs
        this.$nextTick(() => {
          this.$refs.confirmBtnOk.addEventListener('click', () => {
            resolve();
            this.showConfirmPop = false;
          }, false)

          this.$refs.confirmBtnCancel.addEventListener('click', () => {
            reject();
            this.showConfirmPop = false;
          }, false)
        });
      });
    }
  }
}
</script>