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
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'PagePermission',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission'
        }
      },
      {
        path: 'index1',
        name: 'PagePermission1',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission1'
        }
      },
      {
        path: 'index2',
        name: 'PagePermission2',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission2'
        }
      },
      {
        path: 'index3',
        name: 'PagePermission3',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission3'
        }
      },
      {
        path: 'index4',
        name: 'PagePermission4',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission4'
        }
      },
      {
        path: 'index5',
        name: 'PagePermission5',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission5'
        }
      },
      {
        path: 'index6',
        name: 'PagePermission6',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission6'
        }
      },
      {
        path: 'index7',
        name: 'PagePermission7',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission7'
        }
      },
      {
        path: 'index8',
        name: 'PagePermission8',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission8'
        }
      },
      {
        path: 'index9',
        name: 'PagePermission9',
        component: () => import('views/permission'),
        meta: {
          title: 'pagePermission9'
        }
      }
    ]
  }
]
