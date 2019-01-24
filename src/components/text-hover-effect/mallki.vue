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
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 6px;
      background: #3888fa;
      transition: transform 0.4s;
      transform: translateX(-100%);
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50%;
      overflow: hidden;
      &:nth-child(2) {
        top: 50%;
      }
      &:before {
        content: attr(data-letters);
        position: absolute;
        left: 0;
        width: 100%;
        color: #3888fa;
        transition: transform 5s;
        transition-delay: 0.3s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      &:nth-child(1):before {
        top: 0;
        transform: translateY(-100%);
      }
      &:nth-child(2):before {
        bottom: 0;
        transform: translateY(100%);
      }
    }
    &:hover {
      &:before {
        transform: translateX(100%);
      }
      span:before {
        transform: translateY(0);
      }
    }
  }
</style>
