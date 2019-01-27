<template>
  <el-breadcrumb class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        v-if="item.meta.title && item.meta.breadcrumb !== false"
        :key="item.path"
      >
        <span v-if="item.redirect === 'noredirect' || index === levelList.length -1" class="no-redirect">{{
          generateTitle(item.meta.title)}}</span>
        <a v-else @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  import {generateTitle} from '@/utils/i18n'
  import pathToRegexp from 'path-to-regexp'

  export default {
    methods: {
      generateTitle,
      pathCompile(path) {
        const {params} = this.$route
        return pathToRegexp.compile(path)(params)
      },
      handleLink(item) {
        const {redirect, path} = item
        if (redirect) {
          return this.$router.push(redirect)
        }
        this.$router.push(this.pathCompile(path))
      }
    },
    computed: {
      levelList() {
        let matched = this.$route.matched.filter((item) => {
          if (item.name) {
            return true
          }
        })
        const first = matched[0]
        if (first && first.name.trim().toLowerCase() !== 'Dashboard'.toLowerCase()) {
          matched = [{path: '/dashboard', meta: {title: 'dashboard'}}].concat(matched)
        }
        return matched
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    margin-left: 10px;
    line-height: 50px;
    font-size: 14px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
