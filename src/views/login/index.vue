<template>
  <div class="login-wrapper">
    <el-form ref="form" :model="form" :rules="rules" class="login-form">
      <div class="title-wrapper">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
    </el-form>
  </div>
</template>

<script>
  import LangSelect from 'components/LangSelect'

  export default {
    components: {
      LangSelect
    },
    data() {
      return {
        form: {},
        rules: {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-wrapper {
    min-height: 100%;
    background: $bg;
    overflow: hidden;
    .login-form {
      position: relative;
      margin: 0 auto;
      padding: 160px 35px 0;
      width: 520px;
      overflow: hidden;
    }
    .title-wrapper {
      position: relative;
      .title {
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
        color: $light_gray;
      }
      .set-language {
        position: absolute;
        right: 0;
        top: 5px;
        color: #fff;
      }
    }
  }
</style>
