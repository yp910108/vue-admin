import {loginByUserName} from 'api/login'
import {setToken} from 'utils/auth'

const user = {
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    loginByUserName({commit}, userInfo) {
      const {username, password} = userInfo
      return new Promise(async (resolve, reject) => {
        try {
          const res = await loginByUserName(username.trim(), password)
          const data = res.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}

export default user
