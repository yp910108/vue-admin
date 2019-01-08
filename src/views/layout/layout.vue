<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-wrapper"/>
    <div class="main-container"></div>
  </div>
</template>

<script>
  import {Sidebar} from './components'

  export default {
    components: {
      Sidebar
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
  }
</style>
