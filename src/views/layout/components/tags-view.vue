<template>
  <div class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        tag="span"
        class="tags-view-item"
        :key="tag.path"
        :to="tag.path"
        :class="{active: isActive(tag)}"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        {{generateTitle(tag.title)}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
      </router-link>
    </scroll-pane>
    <ul v-show="visible" class="contxtmenu" :style="styleMenu">
      <li @click="refreshSelectedTag(selectedTag)">{{$t('tagsView.refresh')}}</li>
      <li @click="closeSelectedTag(selectedTag)">{{$t('tagsView.close')}}</li>
      <li @click="closeOtherTags">{{$t('tagsView.closeOthers')}}</li>
      <li @click="closeAllTags">{{$t('tagsView.closeAll')}}</li>
    </ul>
  </div>
</template>

<script>
  import {generateTitle} from 'utils/i18n'
  import ScrollPane from 'components/scroll-pane'

  export default {
    components: {
      ScrollPane
    },
    data() {
      return {
        visible: false,
        styleMenu: {},
        selectedTag: {}
      }
    },
    methods: {
      generateTitle,
      isActive(route) {
        return route.path === this.$route.path
      },
      addViewTags() {
        const {name} = this.$route
        if (name) {
          this.$store.dispatch('addView', this.$route)
        }
      },
      refreshSelectedTag(view) {
        const {fullPath} = view
        this.$router.replace({
          path: `/redirect${fullPath}` // fullPath: /foo/index/123456?name=tom
        })
      },
      closeSelectedTag(view) {
        this.$store.dispatch('deleteView', view)
        if (this.isActive(view)) {
          const latestView = this.visitedViews.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      },
      closeOtherTags() {
        this.$store.dispatch('deleteOtherViews', this.selectedTag)
        this.$router.push(this.selectedTag)
      },
      closeAllTags() {
        this.$store.dispatch('deleteAllViews')
        this.$router.push('/')
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to === this.$route.path) {
              return this.$refs.scrollPane.moveToTarget(tag.$el)
            }
          }
        })
      },
      openMenu(tag, e) {
        const menuMinWidth = 105
        const {pageX, pageY} = e
        const {offsetWidth} = this.$el
        const $elLeft = this.$el.getBoundingClientRect().left
        const left = Math.min(pageX + 15, offsetWidth + $elLeft - menuMinWidth)
        this.styleMenu = {
          left: `${left}px`,
          top: `${pageY}px`
        }
        this.visible = true
        this.selectedTag = tag
      },
      docEv() {
        this.visible = false
      }
    },
    computed: {
      visitedViews() {
        return this.$store.getters.visitedViews
      }
    },
    watch: {
      $route() {
        this.addViewTags()
        this.moveToCurrentTag()
      },
      visitedViews() {
        this.$refs.scrollPane.update()
      }
    },
    mounted() {
      this.addViewTags()
      document.body.addEventListener('click', this.docEv, false)
    },
    destroyed() {
      document.body.removeEventListener('click', this.docEv, false)
    }
  }
</script>

<style lang="scss" scoped>
  .tags-view-container {
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    user-select: none;
    .tags-view-wrapper {
      .tags-view-item {
        position: relative;
        display: inline-block;
        margin: 4px 0 4px 5px;
        border: 1px solid #d8dce5;
        padding: 0 8px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        background: #fff;
        color: #495060;
        cursor: pointer;
        &:first-of-type {
          margin-left: 15px;
        }
        &:last-of-type {
          margin-right: 15px;
        }
        &.active {
          border-color: #42b983;
          background-color: #42b983;
          color: #fff;
          &:before {
            content: "";
            position: relative;
            display: inline-block;
            margin-right: 2px;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            background: #fff;
          }
        }
        .el-icon-close {
          vertical-align: top;
          margin-top: 5px;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          line-height: 17px;
          text-align: center;
          transition: all .3s cubic-bezier(.645, .045, .355, 1);
          &:before {
            display: inline-block;
            transform: scale(.6);
          }
          &:hover {
            background-color: #b4bccc;
            color: #fff;
          }
        }
      }
    }
    .contxtmenu {
      position: fixed;
      z-index: 100;
      list-style-type: none;
      margin: 0;
      border-radius: 4px;
      padding: 5px 0;
      font-weight: 400;
      font-size: 12px;
      background: #fff;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>
