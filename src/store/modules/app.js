import Cookies from 'js-cookie'

const app = {
  state: {
    device: 'desktop',
    language: Cookies.get('language') || 'en',
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
    size: Cookies.get('size') || 'medium'
  },
  mutations: {
    TOGGLE_DEVICE(state, device) {
      state.device = device
    },
    SET_LANGUAGE(state, language) {
      state.language = language
    },
    TOGGLE_SIDEBAR(state) {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR(state, withoutAnimation = false) {
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
      Cookies.set('sidebarStatus', 0)
    },
    SET_SIZE(state, size) {
      state.size = size
    }
  },
  actions: {
    toggleDevice({commit}, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setLanguage({commit}, language) {
      commit('SET_LANGUAGE', language)
      Cookies.set('language', language)
    },
    toggleSidebar({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSidebar({commit}, {withoutAnimation} = {}) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    setSize({commit}, size) {
      commit('SET_SIZE', size)
    }
  }
}

export default app
