import {debounce} from '@/utils'

export default {
  data() {
    return {
      sidebarElm: null
    }
  },
  methods: {
    __resizeHandler: debounce(function() {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100),
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.__resizeHandler)
    this.sidebarElm = document.getElementsByClassName('sidebar-wrapper')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHandler)
    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)
  }
}
