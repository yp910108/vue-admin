import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from 'utils/auth'

NProgress.configure({showSpinner: false})

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
          next({path: to.path, replace: true}) // hack 确保刷新页面时可以加载当前路由, set repace: true so the navigation will not leave a history record
        } catch (e) {
          next()
        }
      } else {
        next()
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      // 否则全部重定向到登录页
      next('/login')
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
