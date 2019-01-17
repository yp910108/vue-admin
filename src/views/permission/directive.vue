<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange"/>
    <div style="margin-top: 30px;">
      <div>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
  import SwitchRoles from './components/switch-roles'

  export default {
    name: 'DirectivePermission',
    components: {
      SwitchRoles
    },
    methods: {
      handleRolesChange() {
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
