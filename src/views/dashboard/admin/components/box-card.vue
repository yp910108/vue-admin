<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
    </div>
  </el-card>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .box-card-component /deep/ {
    .el-card__header {
      padding: 0;
    }
    .box-card-header {
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
</style>
