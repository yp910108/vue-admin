<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-wrapper"/>
    <div class="main-container">
      <navbar/>
    </div>
  </div>
</template>

<script>
  import {Sidebar, Navbar} from './components'

  export default {
    components: {
      Sidebar,
      Navbar
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      classObj() {
        return {
          'hide-sidebar': !this.sidebar.opened
        }
      }
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
