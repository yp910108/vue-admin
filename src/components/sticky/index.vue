<template>
  <div>
    <div ref="container" :class="className" :style="{position, zIndex, top: `${stickyTop}px`}">
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sticky',
    props: {
      zIndex: {
        type: Number,
        default: 1
      },
      stickyTop: {
        type: Number,
        default: 0
      },
      className: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isSticky: false,
        position: ''
      }
    },
    methods: {
      sticky() {
        this.isSticky = true
        this.position = 'fixed'
        const $container = this.$refs.container
        $container.style.width = `${$container.clientWidth}px`
      },
      reset() {
        this.isSticky = false
        this.position = ''
        const $container = this.$refs.container
        $container.style.width = 'auto'
      },
      handleScroll() {
        const $el = this.$el
        const rect = $el.getBoundingClientRect()
        if (rect.top < this.stickyTop) {
          if (this.isSticky) return
          this.sticky()
        } else {
          if (!this.isSticky) return
          this.reset()
        }
      },
      handleResize() {
        if (this.isSticky) {
          const $el = this.$el
          const $container = this.$refs.container
          $container.style.width = `${$el.clientWidth}px`
        }
      }
    },
    mounted() {
      const $el = this.$el
      $el.style.height = `${$el.clientHeight}px`
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="scss" scoped>

</style>
