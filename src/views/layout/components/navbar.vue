<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Hamburger from 'components/hamburger'
  import Breadcrumb from 'components/Breadcrumb'

  export default {
    components: {
      Hamburger,
      Breadcrumb
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('toggleSidebar')
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    .hamburger-container {
      float: left;
      padding: 0 10px;
      height: 50px;
      line-height: 58px;
    }
  }
</style>
