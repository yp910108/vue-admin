const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW(state, view) {
      if (state.visitedViews.some((v) => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
    ADD_CACHED_VIEW(state, view) {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    DELETE_VISITED_VIEW(state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          return state.visitedViews.splice(i, 1)
        }
      }
    },
    DELETE_CACHED_VIEW(state, view) {
      for (const [i, v] of state.cachedViews.entries()) {
        if (v === view.name) {
          return state.cachedViews.splice(i, 1)
        }
      }
    },
    DELETE_OTHER_VISITED_VIEWS(state, view) {
      state.visitedViews =
        state.visitedViews.filter((v) => v.path === view.path)
    },
    DELETE_OTHER_CACHED_VIEWS(state, view) {
      state.cachedViews =
        state.cachedViews.filter((v) => v.name === view.name)
    },
    DELETE_ALL_VIEWS(state) {
      state.visitedViews = []
      state.cacheViews = []
    },
    UPDATE_VISITED_VIEW(state, view) {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  actions: {
    addVisitedView({commit}, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({commit}, view) {
      commit('ADD_CACHED_VIEW', view)
    },
    addView({dispatch}, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    deleteVisitedView({commit}, view) {
      commit('DELETE_VISITED_VIEW', view)
    },
    deleteCachedView({commit}, view) {
      commit('DELETE_CACHED_VIEW', view)
    },
    deleteView({dispatch, state}, view) {
      dispatch('deleteVisitedView', view)
      dispatch('deleteCachedView', view)
    },
    deleteOtherVisitedViews({commit}, view) {
      commit('DELETE_OTHER_VISITED_VIEWS', view)
    },
    deleteOtherCachedViews({commit}, view) {
      commit('DELETE_OTHER_CACHED_VIEWS', view)
    },
    deleteOtherViews({dispatch}, view) {
      dispatch('deleteOtherVisitedViews', view)
      dispatch('deleteOtherCachedViews', view)
    },
    deleteAllViews({commit}) {
      commit('DELETE_ALL_VIEWS')
    },
    updateVisitedView({commit}, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  }
}

export default tagsView
