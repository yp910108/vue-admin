<template>
  <div :class="{hidden}" class="pagination-container">
    <el-pagination
      v-bind="$attrs"
      :layout="layout"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleChange"
      @current-change="handleChange"
    />
  </div>
</template>

<script>
  import {scrollTo} from '@/utils/scrollTo'

  export default {
    name: 'Pagination',
    props: {
      hidden: {
        type: Boolean,
        default: false
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      background: {
        type: Boolean,
        default: true
      },
      page: {
        type: Number,
        default: 1
      },
      limit: {
        type: Number,
        default: 20
      },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      total: {
        required: true,
        type: Number
      },
      autoScroll: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleChange() {
        this.$emit('pagination')
        if (this.autoScroll) {
          scrollTo(0)
        }
      }
    },
    computed: {
      currentPage: {
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: {
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination-container {
    background: #fff;
    padding: 32px 16px;
  }

  .pagination-container.hidden {
    display: none;
  }
</style>
