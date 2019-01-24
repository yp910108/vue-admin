<template>
  <a :class="className" class="link--mallki" href="#">
    {{text}}
    <span :data-letters="text"/>
    <span :data-letters="text"/>
  </a>
</template>
<script>
  export default {
    props: {
      className: {
        type: String,
        defaut: ''
      },
      text: {
        type: String,
        default: 'vue-admin'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .link--mallki {
    position: relative;
    display: inline-block;
    line-height: 1;
    font-weight: 800;
    font-family: 'Dosis', sans-serif;
    outline: none;
    text-decoration: none;
    color: #4dd9d5;
    overflow: hidden;
  }
</style>
