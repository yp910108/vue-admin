<template>
  <div class="components-container">
    <code>drag-list base on
      <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
    </code>
    <div class="editor-contaner">
      <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool"/>
    </div>
  </div>
</template>
<script>
  import DndList from '@/components/dnd-list'
  import {fetchList} from '@/api/article'

  export default {
    components: {
      DndList
    },
    data() {
      return {
        list1: [],
        list2: []
      }
    },
    methods: {
      async getData() {
        const res = await fetchList()
        this.list1 = res.data.items.splice(0, 5)
        this.list2 = res.data.items
      }
    },
    created() {
      this.getData()
    }
  }
</script>
<style lang="scss" scoped>

</style>
