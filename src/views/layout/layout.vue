<template>
  <div
    class="app-wrapper"
    :class="classApp"
  >
    <div v-if="mobile && sidebarOpend" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-wrapper"/>
    <div class="main-container">
      <navbar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import ResizeHandler from './mixin/ResizeHandler'
  import {Sidebar, Navbar} from './components'

  export default {
    mixins: [ResizeHandler],
    components: {
      Sidebar,
      Navbar
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('closeSidebar')
      }
    },
    computed: {
      sidebar() {
        return this.$store.getters.sidebar
      },
      device() {
        return this.$store.getters.device
      },
      mobile() {
        return this.device === 'mobile'
      },
      sidebarOpend() {
        return this.sidebar.opened
      },
      classApp() {
        return {
          'mobile': this.mobile,
          'hide-sidebar': !this.sidebarOpend,
          'without-animation': this.sidebar.withoutAnimation
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "styles/layout.scss";
</style>
