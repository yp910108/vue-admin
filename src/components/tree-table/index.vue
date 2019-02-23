<template>
  <el-table
    v-bind="$attrs"
    :data="normalizedData"
    :row-style="rowStyle"
  >
    <el-table-column width="150">
      <template slot-scope="scope">
        <span v-for="space in scope.row.level" :key="space" class="ms-tree-space"/>
        <span v-if="!scope.row.isLeaf" class="icon-wrapper" @click="scope.row.expand = !scope.row.expand">
          <i v-if="!scope.row.expand" class="el-icon-plus"/>
          <i v-else class="el-icon-minus"/>
        </span>
        {{scope.$index}}
      </template>
    </el-table-column>
    <slot/>
  </el-table>
</template>

<script>

  export default {
    inheritAttrs: false,
    props: {
      data: {
        type: Array,
        required: true
      },
      expandAll: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      _normalizeData(data, level = 1, parent) {
        if (!data.length) return []
        let ret = []
        data.forEach((d) => {
          let {children} = d
          d = {
            ...d,
            level,
            parent,
            expand: this.expandAll,
            isLeaf: !(children && children.length)
          }
          delete d.children
          ret.push(d)
          if (children && children.length) {
            ret = ret.concat(this._normalizeData(children, level + 1, d))
          }
        })
        return ret
      },
      rowStyle({row}) {
        const show = (row.parent ? (row.parent.expand && row.parent.show) : true)
        row.show = show
        return show ? 'animation: treeTableShow 1s;-webkit-animation: treeTableShow 1s;' : 'display:none;'
      }
    },
    computed: {
      normalizedData() {
        return this._normalizeData([...this.data])
      }
    }
  }
</script>

<style>
  @keyframes treeTableShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes treeTableShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
<style lang="scss" scoped>
  $space-width: 18px;
  .el-table /deep/ {
    .ms-tree-space {
      display: inline-block;
      vertical-align: top;
      width: $space-width;
      height: 23px;
    }
    .icon-wrapper {
      display: inline-block;
      vertical-align: top;
      margin-left: -18px;
      color: #2196F3;
      cursor: pointer;
    }
  }
</style>
