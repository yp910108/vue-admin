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
      return new Promise((resolve) => {
        dispatch('deleteVisitedView', view)
        dispatch('deleteCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    }
  }
}

export default tagsView
