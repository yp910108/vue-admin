<template>
  <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs"
    v-on="$listeners"
    multiple
    class="drag-select"
  >
    <slot/>
  </el-select>
</template>
<script>
  import Sortable from 'sortablejs'

  export default {
    name: 'DragSelect',
    props: {
      value: {
        type: Array,
        required: true
      }
    },
    methods: {
      setSort() {
        const $el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
        this.sortable = Sortable.create($el, {
          ghostClass: 'sortable-ghost',
          setData: function(dataTransfer) {
            dataTransfer.setData('Text', '')
          },
          onEnd: (e) => {
            const targetRow = this.value.splice(e.oldIndex, 1)[0]
            this.value.splice(e.newIndex, 0, targetRow)
          }
        })
      }
    },
    computed: {
      selectVal: {
        get() {
          return [...this.value]
        },
        set(val) {
          this.$emit('input', [...val])
        }
      }
    },
    mounted() {
      this.setSort()
    }
  }
</script>
<style lang="scss" scoped>
  .drag-select /deep/ {
    .el-tag {
      cursor: pointer;
    }
    .sortable-ghost {
      opacity: .8;
      background: #42b983 !important;
      color: #fff !important;
    }
  }
</style>
