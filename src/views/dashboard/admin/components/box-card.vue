<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
    </div>
    <div style="position: relative;">
      <pan-thumb :image="avatar" width="60px" height="60px" class="pan-thumb"/>
      <mallki class-name="mallki-text" text="vue-admin"/>
      <div style="padding-top: 35px;" class="progress-item">
        <span>Vue</span>
        <el-progress :percentage="70"/>
      </div>
      <div class="progress-item">
        <span>JavaScript</span>
        <el-progress :percentage="18"/>
      </div>
      <div class="progress-item">
        <span>Css</span>
        <el-progress :percentage="12"/>
      </div>
      <div class="progress-item">
        <span>ESLint</span>
        <el-progress :percentage="100" status="success"/>
      </div>
    </div>
  </el-card>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PanThumb from '@/components/pan-thumb'
  import Mallki from '@/components/text-hover-effect/mallki'

  export default {
    components: {
      PanThumb,
      Mallki
    },
    computed: {
      ...mapGetters([
        'avatar'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .box-card-component /deep/ {
    .el-card__header {
      padding: 0;
    }
    .box-card-header {
      height: 220px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
    .pan-thumb {
      position: absolute;
      left: 0;
      top: -45px;
      border: 5px solid #fff;
      width: 70px !important;
      height: 70px !important;
      background: #fff;
    }
    .mallki-text {
      position: absolute;
      right: 0;
      top: 0;
      font-weight: bold;
      font-size: 20px;
    }
    .progress-item {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
</style>
