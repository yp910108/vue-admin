<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb/>
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <el-tooltip :content="$t('navbar.screenfull')">
          <screenfull class="right-menu-item screenfull"/>
        </el-tooltip>
        <el-tooltip :content="$t('navbar.size')">
          <size-select class="right-menu-item international"/>
        </el-tooltip>
        <el-tooltip :content="$t('navbar.lang')">
          <lang-select class="right-menu-item international"/>
        </el-tooltip>
        <el-tooltip :content="$t('navbar.theme')">
          <theme-picker class="right-menu-item theme-picker"/>
        </el-tooltip>
      </template>
      <el-dropdown class="right-menu-item avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="`${avatar}?imageView2/1/w/80/h/80`" class="user-avatar"/>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('navbar.dashboard')}}
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/yp910108/vue-admin">
            <el-dropdown-item>
              {{$t('navbar.github')}}
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display: block;" @click="logout">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Hamburger from '@/components/hamburger'
  import Breadcrumb from '@/components/Breadcrumb'
  import Screenfull from '@/components/screenfull'
  import SizeSelect from '@/components/size-select'
  import LangSelect from '@/components/lang-select'
  import ThemePicker from '@/components/theme-picker'

  export default {
    components: {
      Hamburger,
      Breadcrumb,
      Screenfull,
      SizeSelect,
      LangSelect,
      ThemePicker
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('toggleSidebar')
      },
      async logout() {
        await this.$store.dispatch('logout')
        location.reload() // in order to re-instantiate the vue-router object to avoid bugs
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'device',
        'name',
        'avatar'
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
      margin: 0 10px;
      height: 50px;
      line-height: 58px;
    }
    .right-menu {
      float: right;
      height: 100%;
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
        vertical-align: top;
      }
      .screenfull {
        margin-top: 14px;
      }
      .international {
        margin-top: 14px;
        line-height: 20px;
      }
      .theme-picker {
        margin-top: 6px;
      }
      .avatar-container {
        margin-top: 5px;
        .avatar-wrapper {
          position: relative;
          padding-right: 30px;
          width: 70px;
          height: 40px;
          cursor: pointer;
          .user-avatar {
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }
          .el-icon-caret-bottom {
            position: absolute;
            right: 10px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
