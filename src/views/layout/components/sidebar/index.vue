<template>
  <el-scrollbar>
    <el-menu
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :default-active="$route.path"
      :collapse="isCollapse"
    >
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarItem from './sidebar-item'

  export default {
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'device',
        'sidebar',
        'permission_routers'
      ]),
      mobile() {
        return this.device === 'mobile'
      },
      isCollapse() {
        return !this.mobile && !this.sidebar.opened
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
