<template>
  <div v-if="visiable" class="menu-wrapper">
    <template
      v-if="linkingChild
      && (!linkingChild.children || !linkingChild.children.length)
      && !item.alwaysShow"
    >
      <app-link :to="resolvePath(linkingChild.path)">
        <el-menu-item
          :index="resolvePath(linkingChild.path)"
          :class="{'first-level': !isNest}"
        >
          <item
            v-if="linkingChild.meta"
            :icon="linkingChild.meta.icon"
            :title="generateTitle(linkingChild.meta.title)"
          ></item>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="generateTitle(item.meta.title)"
        />
      </template>
      <template v-for="child in item.children" v-if="!child.hidden">
        <sidebar-item
          v-if="child.children && child.children.length"
          :key="resolvePath(child.path)"
          :item="child"
          :is-nest="true"
          :base-path="resolvePath(child.path)"
        />
        <app-link
          v-else
          :key="resolvePath(child.path)"
          :to="resolvePath(child.path)"
        >
          <el-menu-item
            :index="resolvePath(child.path)"
          >
            <item
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="generateTitle(child.meta.title)"
            ></item>
          </el-menu-item>
        </app-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'
  import {isExternal} from '@/utils'
  import {generateTitle} from '@/utils/i18n'
  import AppLink from './link'
  import Item from './item'

  export default {
    name: 'SidebarItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    components: {
      AppLink,
      Item
    },
    data() {
      return {}
    },
    methods: {
      resolvePath(url) {
        if (isExternal(url)) {
          return url
        }
        return path.resolve(this.basePath, url)
      },
      generateTitle
    },
    computed: {
      visiable() {
        return !this.item.hidden && this.item.children && !!this.item.children.length
      },
      linkingChild() {
        let {children} = this.item
        let visiableChildren = children.filter((child) => {
          return !child.hidden
        })
        if (!visiableChildren.length) {
          return {...this.item, path: '', children: null}
        }
        if (visiableChildren.length === 1) {
          return visiableChildren[0]
        }
        return null
      }
    }
  }
</script>
