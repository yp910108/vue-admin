import {constantRouterMap, asyncRouterMap} from '@/router'

/**
 * 通过meta.roles判断是否与当前用户权限匹配
 * @param roles
 * @param route
 * @returns {*}
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param roles
 * @param routes
 */
function filterAsyncRouter(roles, routes) {
  const ret = []
  routes.forEach((route) => {
    const temp = {...route}
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRouter(roles, temp.children)
      }
      ret.push(temp)
    }
  })
  return ret
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS(state, routers) {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    generateRoutes({commit}, data) {
      return new Promise((resolve) => {
        const {roles} = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(roles, asyncRouterMap)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
