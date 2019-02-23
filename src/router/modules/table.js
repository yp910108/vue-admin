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
    },
    {
      path: 'tree-table',
      component: () => import('@/views/table/tree-table/tree-table'),
      name: 'TreeTableDemo',
      meta: {
        title: 'treeTable'
      }
    },
    {
      path: 'custom-tree-table',
      component: () => import('@/views/table/tree-table/custom-tree-table'),
      name: 'CustomTreeTableDemo',
      meta: {
        title: 'customTreeTable'
      }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: {
        title: 'complexTable'
      }
    }
  ]
}

export default tableRouter
