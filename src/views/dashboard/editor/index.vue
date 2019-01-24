<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <pan-thumb :image="avatar" style="float: left;">
        Your roles:
        <span v-for="item in roles" :key="item" class="pan-info-roles">
          {{item}}
        </span>
      </pan-thumb>
      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/>
      <div class="info-container">
        <span class="display-name">{{name}}</span>
        <span style="display: inline-block; padding-top: 20px; font-size: 20px;">
          Editor's Dashboard
        </span>
      </div>
    </div>
    <div>
      <img :src="emptyGif" class="emptyGif">
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import PanThumb from '@/components/pan-thumb'
  import GithubCorner from '@/components/github-corner'

  export default {
    name: 'DashboardEditor',
    components: {
      PanThumb,
      GithubCorner
    },
    data() {
      return {
        emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'roles'
      ])
    }
  }
</script>
<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 50px 60px 0;
    min-height: 100vh;
    background-color: #e3e3e3;
    .pan-info-roles {
      display: block;
      font-weight: 700;
      font-size: 12px;
      color: #333;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display-name {
        position: absolute;
        top: 25px;
        line-height: 48px;
        font-size: 48px;
        color: #212121;
      }
    }
    .emptyGif {
      display: block;
      width: 45%;
      margin: 0 auto;
    }
  }
</style>
