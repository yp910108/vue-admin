<template>
  <div class="tinymce-container editor-container">
    <textarea :id="id" class="tinymce-textarea"/>
  </div>
</template>
<script>
  export default {
    name: 'Tinymce',
    props: {
      id: {
        type: String,
        default() {
          return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
        }
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      initTinymce() {

      }
    },
    mounted() {
      this.initTinymce()
    }
  }
</script>
<style lang="scss" scoped>

</style>
