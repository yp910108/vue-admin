<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange"/>
  </div>
</template>
<script>
  import SwitchRoles from './components/switch-roles'

  export default {
    name: 'PagePermission',
    components: {
      SwitchRoles
    },
    methods: {
      handleRolesChange() {
        this.$router.push({path: '/permission/index?' + +new Date()})
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
