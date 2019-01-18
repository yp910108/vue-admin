import {Message} from 'element-ui'
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'

NProgress.configure({showSpinner: false})

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some((role) => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token */
    if (to.path === '/login') {
      next('/')
      NProgress.done() // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) { // 判断用户是否拉取完用户信息
        try {
          const userInfo = await store.dispatch('getUserInfo') // 拉取用户信息
          await store.dispatch('generateRoutes', userInfo)
          router.addRoutes(store.getters.addRouters)
          next({path: to.path, replace: true}) // hack 确保刷新页面时可以加载当前路由, set replace: true so the navigation will not leave a history record
        } catch (e) {
          await store.dispatch('fedLogout')
          Message.error(e.toString() || 'Verification failed, please login again')
          next({path: '/'})
        }
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({path: '/401', replace: true, query: {noGoBack: true}})
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      // 否则全部重定向到登录页
      next(`/login?redirect=${to.path}`)
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
