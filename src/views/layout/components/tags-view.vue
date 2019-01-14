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
      >
        {{generateTitle(tag.title)}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
  import {generateTitle} from 'utils/i18n'
  import ScrollPane from 'components/scroll-pane'

  export default {
    components: {
      ScrollPane
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
      async closeSelectedTag(tag) {
        const {visitedViews} = await this.$store.dispatch('deleteView', tag)
        if (this.isActive(tag)) {
          const latestView = visitedViews.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
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
  }
</style>
