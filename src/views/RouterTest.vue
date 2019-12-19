<template>
  <div class="all-wraper">
    <HeadCommon :title="'路由测试'" />

    <p class="text">路由测试</p>
    <p class="text-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis excepturi unde praesentium voluptatum dolorum iure odit expedita temporibus, nemo sequi delectus saepe commodi, a, mollitia vel asperiores architecto aperiam.</p>
  </div>  
</template>

<script>
import HeadCommon from '../components/header/HeadCommon';

export default {
  name: 'RouterTest',
  data() {
    return {

    }
  },
  components: {
    HeadCommon
  }
}
</script>

<style lang="scss" scoped>
  .text {
    color: green !important;
  }
  .text-lorem {
    color: salmon;
    font-size: 30px;
  }
</style>