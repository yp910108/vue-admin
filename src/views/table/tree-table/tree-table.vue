<template>
  <div class="app-container">
    <el-tag style="margin-bottom:20px;">
      <a href="https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/TreeTable" target="_blank">Documentation</a>
    </el-tag>
    <tree-table :data="data" border>
      <el-table-column label="事件">
        <template slot-scope="scope">
          {{scope.row.event}}
        </template>
      </el-table-column>
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="时间线">
        <template slot-scope="scope">
          {{scope.row.timeLine}}
        </template>
      </el-table-column>
      <el-table-column label="备注">
        <template slot-scope="scope">
          {{scope.row.comment}}
        </template>
      </el-table-column>
    </tree-table>
  </div>
</template>

<script>
  import treeTable from '@/components/tree-table'

  export default {
    name: 'TreeTableDemo',
    components: {
      treeTable
    },
    data() {
      return {
        data: [
          {
            id: 0,
            event: '事件0',
            timeLine: 50,
            comment: '无'
          },
          {
            id: 1,
            event: '事件1',
            timeLine: 100,
            comment: '无',
            children: [
              {
                id: 2,
                event: '事件2',
                timeLine: 10,
                comment: '无'
              },
              {
                id: 3,
                event: '事件3',
                timeLine: 90,
                comment: '无',
                children: [
                  {
                    id: 4,
                    event: '事件4',
                    timeLine: 5,
                    comment: '无'
                  },
                  {
                    id: 5,
                    event: '事件5',
                    timeLine: 10,
                    comment: '无'
                  },
                  {
                    id: 6,
                    event: '事件6',
                    timeLine: 75,
                    comment: '无',
                    children: [
                      {
                        id: 7,
                        event: '事件7',
                        timeLine: 50,
                        comment: '无',
                        children: [
                          {
                            id: 71,
                            event: '事件71',
                            timeLine: 25,
                            comment: 'xx'
                          },
                          {
                            id: 72,
                            event: '事件72',
                            timeLine: 5,
                            comment: 'xx'
                          },
                          {
                            id: 73,
                            event: '事件73',
                            timeLine: 20,
                            comment: 'xx'
                          }
                        ]
                      },
                      {
                        id: 8,
                        event: '事件8',
                        timeLine: 25,
                        comment: '无'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
