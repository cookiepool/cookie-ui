<template>
  <div class="all-wraper">
    <div class="header-box">
      <img @click="goBack" class="back-button" src="../../assets/images/back_arrow.png" alt="图标">
      <p class="title-name">{{ titleName }}</p>
      <p class="place-holder"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headcommon',
  props: {
    title: String
  },
  data() {
    return {
      titleName: this.title
    }
  },
  methods: {
    goBack() {
      history.length > 1 ? this.$router.go(-1) : this.$router.replace('/');
    }
  }
}
</script>

<style lang="scss">
  .all-wraper {
    height: 90px;
    .header-box {
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 90px;
      z-index: 10;
      background-color: #FFDC45;
      padding: 0 32px;
      box-sizing: border-box;
      .back-button {
        width: 20px;
      }
      .title-name {
        font-size: 36px;
        font-weight: 600;
        color: rgba(51,51,51,1);
        line-height: 50px;
      }
      .place-holder {
        flex: 0 0 auto;
        width: 20px;
        height: 100px;
      }
    }
  }
</style>