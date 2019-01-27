<template>
  <div class="icons-container">
    <p class="warn-content">
      <a href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html" target="_blank">
        Add and use
      </a>
    </p>
    <div class="icons-wrapper">
      <div
        v-for="item of iconMap"
        :key="item"
        @click="handleClipboard(generateIconCode(item), $event)"
      >
        <el-tooltip placement="top">
          <div slot="content">
            {{generateIconCode(item)}}
          </div>
          <div class="icon-item">
            <svg-icon :icon-class="item" class-name="disabled"></svg-icon>
            <span>{{item}}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import icons from './requireIcons'
  import clipboard from '@/utils/clipboard'

  export default {
    name: 'Icons',
    data() {
      return {
        iconMap: icons
      }
    },
    methods: {
      generateIconCode(symbol) {
        return `<svg-icon icon-class="${symbol}"/>`
      },
      handleClipboard(text, event) {
        clipboard(text, event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    overflow: hidden;
    .icons-wrapper {
      margin: 0 auto;
    }
    .icon-item {
      float: left;
      margin: 20px;
      width: 110px;
      height: 110px;
      text-align: center;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }
    span {
      display: block;
      margin-top: 10px;
      font-size: 24px;
    }
    .disabled {
      pointer-events: none;
    }
  }
</style>
