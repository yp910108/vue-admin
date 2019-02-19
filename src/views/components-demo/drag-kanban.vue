<template>
  <div class="components-container">
    <el-row :gutter="30">
      <el-col :span="8">
        <kanban :key="1" :list="list1" :options="options" class="kanban todo" header-text="Todo"/>
      </el-col>
      <el-col :span="8">
        <kanban :key="2" :list="list2" :options="options" class="kanban working" header-text="Working"/>
      </el-col>
      <el-col :span="8">
        <kanban :key="3" :list="list3" :options="options" class="kanban done" header-text="Done"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Kanban from '@/components/kanban'

  export default {
    name: 'DragKanbanDemo',
    components: {
      Kanban
    },
    data() {
      return {
        options: {
          group: 'mission'
        },
        list1: [
          {name: 'Mission', id: 1},
          {name: 'Mission', id: 2},
          {name: 'Mission', id: 3},
          {name: 'Mission', id: 4}
        ],
        list2: [
          {name: 'Mission', id: 5},
          {name: 'Mission', id: 6},
          {name: 'Mission', id: 7}
        ],
        list3: [
          {name: 'Mission', id: 8},
          {name: 'Mission', id: 9},
          {name: 'Mission', id: 10}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .components-container /deep/ {
    .kanban {
      &.todo {
        .board-column-header {
          background: #4A9FF9;
        }
      }
      &.working {
        .board-column-header {
          background: #f9944a;
        }
      }
      &.done {
        .board-column-header {
          background: #2ac06d;
        }
      }
    }
  }
</style>
