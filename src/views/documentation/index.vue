<template>
  <div class="app-container documentation-container">
    <a class="document-btn">{{ $t('documentation.documentation') }}</a>
    <a class="document-btn">{{ $t('documentation.github') }}</a>
    <a class="document-btn">国内文档</a>
  </div>
</template>

<script>
  export default {
    name: 'Documentation'
  }
</script>

<style lang="scss" scoped>
  .documentation-container {
    margin: 50px;
    .document-btn {
      float: left;
      margin-left: 50px;
      width: 200px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      background: #000;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
