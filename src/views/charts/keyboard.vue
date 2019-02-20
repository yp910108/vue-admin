<template>
  <div class="chart-container">
    <chart width="100%" height="100%"/>
  </div>
</template>

<script>
  import Chart from '@/components/charts/keyboard'

  export default {
    name: 'KeyboardChart',
    components: {Chart}
  }
</script>

<style lang="scss" scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
</style>
