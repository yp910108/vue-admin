<template>
  <div class="board-column">
    <div class="board-column-header">
      {{headerText}}
    </div>
    <draggable
      :list="list"
      :options="options"
      class="board-column-content">
      <div v-for="element in list" :key="element.id" class="board-item">
        {{element.name}} {{element.id}}
      </div>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'DragKanbanDemo',
    components: {
      draggable
    },
    props: {
      headerText: {
        type: String,
        default: 'Header'
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      list: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .board-column {
    border-radius: 3px;
    min-height: 100px;
    height: auto;
    overflow: hidden;
    background: #f0f0f0;
    .board-column-header {
      border-radius: 3px 3px 0 0;
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #333;
      color: #fff;
      overflow: hidden;
    }
    .board-column-content {
      padding: 5px 10px;
      min-height: 60px;
      height: auto;
      overflow: hidden;
      .board-item {
        margin: 10px 0;
        box-sizing: border-box;
        padding: 5px 10px;
        width: 100%;
        height: 64px;
        line-height: 54px;
        text-align: left;
        background-color: #fff;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
  }
</style>
