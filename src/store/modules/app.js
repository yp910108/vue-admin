import Cookies from 'js-cookie'

const app = {
  state: {
    device: 'desktop',
    language: Cookies.get('language') || 'en',
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    }
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
        Cookies.set('sideBarStatus', 1)
      } else {
        Cookies.set('sideBarStatus', 0)
      }
    },
    CLOSE_SIDEBAR(state, withoutAnimation) {
      state.sidebar.opened = false
      Cookies.set('sideBarStatus', 0)
      state.sidebar.withoutAnimation = withoutAnimation
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
    closeSideBar({commit}, {withoutAnimation}) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    }
  }
}

export default app
