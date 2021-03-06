import {loginByUserName, getUserInfo, logout} from '@/api/login'
import {getToken, setToken, removeToken} from '@/utils/auth'

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
    // 登录
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
    // 获取用户信息
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
    },
    // 登出
    logout({commit}) {
      return new Promise(async (resolve, reject) => {
        try {
          await logout()
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    // 前端 登出
    fedLogout({commit}) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    changeRoles({commit, dispatch}, role) {
      return new Promise(async (resolve, reject) => {
        try {
          commit('SET_TOKEN', role)
          setToken(role)
          const res = await getUserInfo(role)
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
          dispatch('generateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}

export default user
