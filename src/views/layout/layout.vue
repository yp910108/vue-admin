<template>
  <div class="app-wrapper">
    <sidebar/>
    <router-view/>
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

</style>
