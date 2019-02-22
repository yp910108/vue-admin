/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table'),
      name: 'DynamicTable',
      meta: {
        title: 'dynamicTable'
      }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: {
        title: 'dragTable'
      }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: {
        title: 'inlineEditTable'
      }
    }
  ]
}

export default tableRouter
