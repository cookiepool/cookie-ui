<template>
  <div class="all-wraper">
    <HeadCommon :title="'首页'"/>

    <img src="../assets/images/erer434345.gif" alt="动图">
    <hr>
    <div class="container">
      <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias accusamus officiis officia dignissimos repudiandae, consequuntur debitis architecto sit rem odio ipsum quod ad sunt, dicta incidunt natus itaque similique? Veritatis.</p>
    </div>
    <hr>
    <div class="bg-test"></div>
    <hr>
    <button @click="jumpToRouterTest">路由测试</button>
    <button @click="jumpToVantTest">vant组件测试</button>
    <hr>
    <img class="static-test" src="static/bg_test.png" alt="图片">
  </div>
</template>

<script>
import HeadCommon from '../components/header/HeadCommon.vue';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    HeadCommon
  },
  mounted() {

  },
  methods: {
    jumpToRouterTest() {
      this.$router.push('/routertest');
    },
    jumpToVantTest() {
      this.$router.push('/vanttest');
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    .text {
      color: greenyellow;
    }
  }
  .bg-test {
    width: 288px;
    height: 288px;
    background-image: url('../assets/images/bg_test.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .static-test {
    width: 288px;
  }
</style>