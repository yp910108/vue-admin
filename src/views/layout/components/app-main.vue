<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    computed: {
      cachedViews() {
        return this.$store.getters.cachedViews
      },
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>
<style lang="scss" scoped>
  .app-main {
    position: relative;
    width: 100%;
    /*84 = navbar + tags-view = 50 +34 */
    min-height: calc(100vh - 84px);
    overflow: hidden;
  }
</style>
