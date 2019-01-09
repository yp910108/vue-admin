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
        component: () => import('views/dashboard'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard'
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
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation1',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation2',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation4',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation5',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation6',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation7',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation8',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation9',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation10',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation11',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation12',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation14',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation15',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation16',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation17',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation18',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation19',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation20',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/documentation21',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('views/documentation'),
        meta: {
          title: 'documentation1',
          icon: 'documentation'
        }
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
