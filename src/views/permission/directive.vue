<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange"/>
    <div style="margin-top: 30px;">
      <span v-permission="['admin']" class="permission-alert">
        Only
        <el-tag class="permission-tag" size="small">admin</el-tag> can see this
      </span>
      <span v-permission="['editor']" class="permission-alert">
        Only
        <el-tag class="permision-tag" size="small">eidtor</el-tag> can see this
      </span>
      <span v-permission="['admin', 'editor']" class="permission-alert">
        Both
        <el-tag class="permission-tag" size="small">admin</el-tag> and
        <el-tag class="permission-tag" size="small">editor</el-tag> can see this
      </span>
    </div>
  </div>
</template>
<script>
  import permission from '@/directive/permission'
  import SwitchRoles from './components/switch-roles'

  export default {
    name: 'DirectivePermission',
    directives: {
      permission
    },
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
