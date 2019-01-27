<template>
  <p>
    this is markdown
    <input/>
  </p>
</template>

<script>
  export default {
    name: 'MarkdownDemo',
    mounted() {
      console.log(this.$store.getters.visitedViews)
    }
  }
</script>

<style lang="scss" scoped>

</style>
