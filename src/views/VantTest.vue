<template>
  <div class="all-wraper">
    <HeadCommon :title="'vant测试'" />

    <p class="text">测试页面</p>
    <div class="vant-test">
      <van-button @click="openDialog" type="primary">打开dialog</van-button>
      <p class="demo">点击返回发</p>
    </div>  
  </div>  
</template>

<script>
import HeadCommon from '../components/header/HeadCommon';
import { Dialog } from 'vant';

export default {
  name: 'RouterTest',
  data() {
    return {

    }
  },
  components: {
    HeadCommon,
  },
  methods: {
    openDialog() {
      Dialog.alert({
        title: '提示',
        message: 'hello'
      }).then(() => {
        
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .text {
    color: firebrick !important;
  }
  .vant-test {
    .demo {
      color: lawngreen;
      font-size: 32px;
      font-weight: bold;
    }
  }
</style>