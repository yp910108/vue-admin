const {body} = document
const WIDTH = 500

export default {
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.$store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop')
        if (isMobile) {
          this.$store.dispatch('closeSidebar', {withoutAnimation: true})
        }
      }
    }
  },
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.$store.dispatch('closeSidebar')
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.$store.dispatch('toggleDevice', 'mobile')
      this.$store.dispatch('closeSidebar', {withoutAnimation: true})
    }
  }
}
