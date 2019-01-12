<template>
  <el-color-picker
    v-model="theme"
    popper-class="theme-picker-dropdown"
  />
</template>

<script>
  const ORIGINAL_THEME = '#409EFF'
  export default {
    data() {
      return {
        theme: ORIGINAL_THEME
      }
    }
  }
</script>

<style lang="scss">
  .theme-picker-dropdown {
    .el-color-dropdown__link-btn {
      display: none;
    }
  }
</style>
