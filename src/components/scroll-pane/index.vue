<template>
  <el-scrollbar ref="scrollContainer" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot/>
  </el-scrollbar>
</template>

<script>
  export default {
    methods: {
      update() {
        this.$refs.scrollContainer.update()
      },
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 40
        const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
        $scrollWrapper.scrollLeft += eventDelta / 4
      },
      moveToTarget(target) {
        const vnodes = this.$slots.default
        // if not pass target or no has vnodes, return direct
        if (!target || !vnodes || !vnodes.length) {
          return
        }
        const $container = this.$refs.scrollContainer.$el
        const $containerWidth = $container.offsetWidth
        const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
        const $scrollWidth = $scrollWrapper.scrollWidth
        // if scrollWidth less than containerWidth, return direct
        if ($scrollWidth <= $containerWidth) {
          return
        }
        const $els = vnodes.map((vnode) => vnode.elm)
        const currentIndex = $els.findIndex(($el) => $el === target)
        // if not found target in list, return direct
        if (currentIndex === -1) {
          return
        }
        let $prev = target
        let $next = target
        if ($els.length > 1 && currentIndex !== 0) {
          $prev = $els[currentIndex - 1]
        }
        if ($els.length > 2 && currentIndex !== $els.length - 1) {
          $next = $els[currentIndex + 1]
        }
        const $scrollLeft = $scrollWrapper.scrollLeft
        const $prevScrollLeft = $prev.offsetLeft
        const $nextScrollLeft = $next.offsetLeft + $next.offsetWidth
        if ($prevScrollLeft < $scrollLeft) {
          $scrollWrapper.scrollLeft = $prevScrollLeft
        } else if ($nextScrollLeft > $scrollLeft + $containerWidth) {
          $scrollWrapper.scrollLeft = $nextScrollLeft - $containerWidth
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-container /deep/ {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
