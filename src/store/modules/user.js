import {loginByUserName, getUserInfo} from 'api/login'
import {getToken, setToken} from 'utils/auth'

const user = {
  state: {
    token: getToken(),
    roles: [],
    name: '',
    avatar: '',
    introduction: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_ROLES(state, roles) {
      state.roles = roles
    },
    SET_NAME(state, name) {
      state.name = name
    },
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction
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
    },
    getUserInfo({commit, state}) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getUserInfo(state.token)
          const data = res.data
          if (!data) {
            throw new Error('error')
          }
          const {roles, name, avatar, introduction} = data
          if (roles && roles.length > 0) {
            commit('SET_ROLES', data.roles)
          } else {
            throw new Error('getInfo: roles must be a non-null array!')
          }
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}

export default user
