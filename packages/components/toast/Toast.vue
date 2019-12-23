<template>
  <div v-if="show" class="cookie-toast--mask">
    <div class="cookie-toast--dialog">
      <p class="cookie-toast--content">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ck-toast',
  data() {
    return {
      show: false,
      message: ''
    }
  },
  methods: {

  }
}
</script>