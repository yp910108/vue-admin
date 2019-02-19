<template>
  <div class="dnd-list clearfix">
    <div :style="{width: width1}" class="dnd-list-list">
      <h3>{{list1Title}}</h3>
      <draggable class="drag-area">
        <div v-for="element in list1" :key="element.id" class="list-complete-item">
          <div class="list-complete-item-handle">{{element.id}}[{{element.author}}] {{element.title}}</div>
          <div style="position:absolute; right:0px;">
            <span style="float: right; margin-top: -20px; margin-right:5px;" @click="deleteEle(element)">
              <i style="color:#ff4949" class="el-icon-delete"/>
            </span>
          </div>
        </div>
      </draggable>
    </div>
    <div :style="{width:width2}" class="dnd-list-list">
      <h3>{{list2Title}}</h3>
      <draggable class="drag-area">
        <div v-for="element in list2" :key="element.id" class="list-complete-item">
          <div class="list-complete-item-handle2" @click="pushEle(element)">
            {{element.id}} [{{element.author}}] {{element.title}}
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'DndList',
    components: {draggable},
    props: {
      list1: {
        type: Array,
        default() {
          return []
        }
      },
      list2: {
        type: Array,
        default() {
          return []
        }
      },
      list1Title: {
        type: String,
        default: 'list1'
      },
      list2Title: {
        type: String,
        default: 'list2'
      },
      width1: {
        type: String,
        default: '48%'
      },
      width2: {
        type: String,
        default: '48%'
      }
    },
    methods: {
      isNotInList1(v) {
        return this.list1.every((k) => v.id !== k.id)
      },
      isNotInList2(v) {
        return this.list2.every((k) => v.id !== k.id)
      },
      deleteEle(ele) {
        for (const item of this.list1) {
          if (item.id === ele.id) {
            const index = this.list1.indexOf(item)
            this.list1.splice(index, 1)
            break
          }
        }
        if (this.isNotInList2(ele)) {
          this.list2.unshift(ele)
        }
      },
      pushEle(ele) {
        for (const item of this.list2) {
          if (item.id === ele.id) {
            const index = this.list2.indexOf(item)
            this.list2.splice(index, 1)
            break
          }
        }
        if (this.isNotInList1(ele)) {
          this.list1.push(ele)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dnd-list {
    background: #fff;
    padding-bottom: 40px;
    .dnd-list-list {
      float: left;
      padding-bottom: 30px;
      &:first-of-type {
        margin-right: 2%;
      }
      .drag-area {
        margin-top: 15px;
        padding-bottom: 30px;
        min-height: 50px;
      }
    }
    .list-complete-item {
      position: relative;
      margin-top: 4px;
      border: 1px solid #bfcbd9;
      padding: 5px 12px;
      font-size: 14px;
      transition: all 1s;
      cursor: pointer;
    }
    .list-complete-item-handle {
      margin-right: 50px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .list-complete-item-handle2 {
      margin-right: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .list-complete-item.sortable-chosen {
    background: #4AB7BD;
  }

  .list-complete-item.sortable-ghost {
    background: #30B08F;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
  }
</style>
