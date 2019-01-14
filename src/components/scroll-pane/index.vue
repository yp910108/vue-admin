<template>
  <el-scrollbar ref="scrollContainer" class="scroll-container">
    <slot/>
  </el-scrollbar>
</template>

<script>
  export default {
    methods: {
      update() {
        this.$refs.scrollContainer.update()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-container /deep/ {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    /*.el-scrollbar__bar {
      bottom: 0;
    }*/
  }
</style>
