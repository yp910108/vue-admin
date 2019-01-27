<template>
  <p>
    this is tinymce
    <el-button type="primary" @click="toMarkDown">to mackdown</el-button>
  </p>
</template>

<script>
  export default {
    methods: {
      toMarkDown() {
        this.$router.push('/components/markdown?id=123456')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
