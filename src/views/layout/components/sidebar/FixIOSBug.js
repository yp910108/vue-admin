export default {
  methods: {
    fixBugInIOS() {
      const $submenu = this.$refs.submenu
      if ($submenu) {
        const handleMouseleave = $submenu.handleMouseleave
        $submenu.handleMouseleave = (e) => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  },
  computed: {
    device() {
      return this.$store.getters.device
    }
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseeleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS()
  }
}
