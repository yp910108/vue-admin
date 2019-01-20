<template>
  <el-table :data="list" style="padding-top: 15px;width: 100%;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="props">
        {{props.row.order_no | orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="props">
        ¥{{props.row.price | toThousandFilter}}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="props">
        <el-tag :type="props.row.status | statusFilter"> {{props.row.status}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {fetchList} from '@/api/transaction'

  export default {
    data() {
      return {
        list: null
      }
    },
    methods: {
      fetchData() {
        fetchList().then((res) => {
          this.list = res.data.items.slice(0, 8)
        })
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          success: 'success',
          pending: 'danger'
        }
        return statusMap[status]
      },
      orderNoFilter(str) {
        return str.slice(0, 30)
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>
