<template>
  <div :class="{active: isActive}" class="share-dropdown-menu">
    <div class="share-dropdown-menu-wrapper">
      <span class="share-dropdown-menu-title" @click="clickTitle">
        {{title}}
      </span>
      <div
        v-for="(item, index) of items"
        :key="index"
        class="share-dropdown-menu-item"
      >
        <a v-if="item.href" :href="item.href" target="_blank">
          {{item.title}}
        </a>
        <span v-else>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type: String,
        default: 'vue'
      }
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      clickTitle() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="scss" scoped>
  $n: 8;
  $t: .1s;
  .share-dropdown-menu {
    position: relative;
    width: 250px;
    &-title {
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      background: #000;
      color: #fff;
      cursor: pointer;
    }
    &-wrapper {
      position: relative;
      z-index: 1;
    }
    &-item {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      background: #e0e0e0;
      transition: transform 0.28s ease;
      transform: translateY(-60px);
      cursor: pointer;
      &:hover {
        background: #000;
        color: #fff;
      }
      @for $i from 1 through $n {
        &:nth-of-type(#{$i}) {
          transition-delay: $i*$t;
        }
      }
    }
    &.active {
      .share-dropdown-menu-item {
        @for $i from 1 through $n {
          &:nth-of-type(#{$i}) {
            transition-delay: ($n - $i)*$t;
            transform: translateY(($i - 1)*60px);
          }
        }
      }
    }
  }
</style>
