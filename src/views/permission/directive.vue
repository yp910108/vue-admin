<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange"/>
    <div :key="key" style="margin-top: 30px;">
      <span v-permission="['admin']" class="permission-alert">
        Only
        <el-tag class="permission-tag" size="small">admin</el-tag> can see this
      </span>
      <span v-permission="['editor']" class="permission-alert">
        Only
        <el-tag class="permission-tag" size="small">editor</el-tag> can see this
      </span>
      <span v-permission="['admin', 'editor']" class="permission-alert">
        Both
        <el-tag class="permission-tag" size="small">admin</el-tag> and
        <el-tag class="permission-tag" size="small">editor</el-tag> can see this
      </span>
    </div>
    <div :key="`checkPermission${key}`" style="margin-top: 30px;">
      <code>
        {{ $t('permission.tips') }}
        <br> e.g.
      </code>
      <el-tabs type="border-card" style="width: 500px;">
        <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">Admin can see this</el-tab-pane>
        <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">Editor can see this</el-tab-pane>
        <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
          Both admin or editor can see this
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import checkPermission from '@/utils/permission'
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
    data() {
      return {
        key: 1 // 为了能每次切换权限的时候重新初始化指令
      }
    },
    methods: {
      checkPermission,
      handleRolesChange() {
        this.key++
      }
    }
  }
</script>
<style lang="scss" scoped>
  .app-container {
    .permission-alert {
      display: block;
      margin-top: 30px;
      border-radius: 4px;
      padding: 8px 16px;
      width: 320px;
      background-color: #f0f9eb;
      color: #67c23a;
    }
    .permission-tag {
      background-color: #ecf5ff;
    }
  }
</style>
