import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout/layout'

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
     roles: ['admin', 'editor'],   will control the page roles(you can set multiple roles), if not set means this page not require permission
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
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('views/dashboard'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: ':path*',
        component: () => import('views/redirect/index')
      }
    ]
  },
  {
    path: '/401',
    component: () => import('views/error-page/401'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('views/error-page/404'),
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        name: 'PagePermission',
        component: () => import('views/permission/page'),
        meta: {
          title: 'pagePermission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        name: 'DirectivePermission',
        component: () => import('views/permission/directive'),
        meta: {
          title: 'directivePermission'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
