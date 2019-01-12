<template>
  <el-dropdown trigger="click">
    <div>
      <svg-icon class-name="size-icon" icon-class="size"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="size==='medium'" command="medium">Medium</el-dropdown-item>
      <el-dropdown-item :disabled="size==='small'" command="small">Small</el-dropdown-item>
      <el-dropdown-item :disabled="size==='mini'" command="mini">Mini</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    computed: {
      size() {
        return this.$store.getters.size
      }
    }
  }
</script>

<style lang="scss" scoped>
  .size-icon {
    font-size: 20px;
    cursor: pointer;
  }
</style>
