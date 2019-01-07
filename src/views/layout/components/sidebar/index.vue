<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :show-timeout="200"
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
        'sidebar',
        'permission_routers'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
