<template>
  <div v-if="!item.hidden && item.children">
    <template
      v-if="hasOneShowingChild(item.children, item) &&
       (!onlyOneChild.children || onlyOneChild.noShowingChild) &&
       !item.alwaysShow"
    >
      <app-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown': !isNest}"
        >
          <item
            v-if="onlyOneChild.meta"
            :icon="onlyOneChild.meta.icon || item.meta.icon"
            :title="generateTitle(onlyOneChild.meta.title)"
          />
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu
      v-else
      ref="submenu"
      :index="resolvePath(item.path)"
    >
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="generateTitle(item.meta.title)"
        ></item>
      </template>
      <template
        v-for="child in item.children"
        v-if="!child.hidden"
      >
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
        />
        <app-link
          v-else
          :key="child.name"
          :to="resolvePath(child.path)"
        >
          <el-menu-item :index="resolvePath(child.path)">
            <item
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="generateTitle(child.meta.title)"
            />
          </el-menu-item>
        </app-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'
  import {isExternal} from 'utils'
  import {generateTitle} from 'utils/i18n'
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
      return {
        onlyOneChild: null
      }
    },
    methods: {
      hasOneShowingChild(children, parent) {
        const showingChildren = children.filter((child) => {
          return !child.hidden
        })
        if (showingChildren.length === 0) {
          this.onlyOneChild = {...parent, path: '', noShowingChild: true}
          return true
        }
        if (showingChildren.length === 1) {
          this.onlyOneChild = children[0]
          return true
        }
        return false
      },
      resolvePath(routePath) {
        if (isExternal(routePath)) {
          return routePath
        }
        return path.resolve(this.basePath, routePath)
      },
      generateTitle
    }
  }
</script>
