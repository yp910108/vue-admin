<template>
  <div class="dashboard-editor-container">
    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/>
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
    <el-row style="margin-bottom: 32px;padding: 16px 16px 0;background: #fff;">
      <line-chart :chart-data="lineChartData"/>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" style="margin-bottom: 30px;padding-right: 8px;">
        <transaction-table/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="margin-bottom:30px;">
        <todo-list/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="margin-bottom:30px;">
        <box-card/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import GithubCorner from '@/components/github-corner'
  import PanelGroup from './components/panel-group'
  import LineChart from './components/line-chart'
  import RaddarChart from './components/raddar-chart'
  import PieChart from './components/pie-chart'
  import BarChart from './components/bar-chart'
  import TransactionTable from './components/transaction-table'
  import TodoList from './components/todo-list'
  import BoxCard from './components/box-card'

  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }

  export default {
    components: {
      GithubCorner,
      PanelGroup,
      LineChart,
      RaddarChart,
      PieChart,
      BarChart,
      TransactionTable,
      TodoList,
      BoxCard
    },
    data() {
      return {
        lineChartData: lineChartData.newVisitis
      }
    },
    methods: {
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      margin-bottom: 32px;
      padding: 16px 16px 0;
      background: #fff;
    }
  }
</style>
