<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Hamburger from 'components/hamburger'

  export default {
    components: {
      Hamburger
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
