import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * note: Submenu only appear when children.length>=1
 */

/**
 * hidden: true                    if set true will not show in the slidebar(default is false)
 * alwaysShow: true                if set true will always show the root menu, whatever its child routes length
 *                                 if not set alwaysShow, only more than one route under the children
 *                                 it will becomes nested mode, otherwise now show the root menu
 * redirect: 'noredirect'          if set noredirect will no redirect in the breadcrumb
 * name: 'route-name'              this name is used by <keep-alive> (must set!!!)
 * meta: {
     roles: ['admin', 'editor'],   will control the page roles(you can set multiple roles)
     title: 'title',               the name show in submenu and breadcrumb(recommend set)
     icon: 'svg-name',             the icon show in the slidebar
     noCache: true,                if set true the page will no be cached(default is false)
     breadcrumb: false             if set false, the item will hidden in the breadcrumb(default is true)
  }
 */

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('views/login'),
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
})
