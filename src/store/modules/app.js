import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'en'
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language
    }
  },
  actions: {
    setLanguage({commit}, language) {
      commit('SET_LANGUAGE', language)
      Cookies.set('language', language)
    }
  }
}

export default app
