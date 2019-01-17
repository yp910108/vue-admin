<template>
  <div class="login-wrapper">
    <el-form ref="form" :model="form" :rules="rules" class="login-form">
      <div class="title-wrapper">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="username">
        <span class="svg-wrapper">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          v-model="form.username"
          type="text"
          :placeholder="$t('login.username')"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-wrapper">
          <svg-icon icon-class="password"/>
        </span>
        <el-input
          v-model="form.password"
          :type="passwordType"
          :placeholder="$t('login.password')"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%;"
        :loading="loading"
        @click="handleLogin">
        {{$t('login.logIn')}}
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import {isValidUserName} from 'utils/validate'
  import LangSelect from 'components/lang-select'

  export default {
    components: {
      LangSelect
    },
    data() {
      const validateUserName = (rule, value, callback) => {
        if (!isValidUserName(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        form: {
          username: 'admin',
          password: '1111111'
        },
        rules: {
          username: [
            {required: true, validator: validateUserName, trigger: 'blur'}
          ],
          password: [
            {required: true, validator: validatePassword, trigger: 'blur'}
          ]
        },
        passwordType: 'password',
        loading: false
      }
    },
    methods: {
      showPwd() {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },
      handleLogin() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true
            try {
              await this.$store.dispatch('loginByUserName', this.form)
              this.loading = false
              let {query} = this.$route
              this.$router.push(query.redirect || '/')
            } catch (e) {
              this.loading = false
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  $bg_fill: #283443;
  $cursor: #fff;
  .login-wrapper /deep/ {
    min-height: 100%;
    background: $bg;
    overflow: hidden;
    .login-form {
      position: relative;
      margin: 0 auto;
      padding: 160px 35px 0;
      max-width: 100%;
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
    .el-form-item {
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      .svg-wrapper {
        display: inline-block;
        vertical-align: middle;
        padding: 6px 5px 6px 15px;
        width: 30px;
        color: $dark_gray;
      }
      .el-input {
        width: 85%;
        height: 47px;
        input {
          // 目前不知道作用
          /*-webkit-appearance: none;*/
          border: none;
          border-radius: 0;
          padding: 12px 5px 12px 15px;
          height: 47px;
          background: transparent;
          color: $light_gray;
          caret-color: $cursor;
          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px $bg_fill inset;
            -webkit-text-fill-color: $cursor;
          }
        }
        @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
          input {
            color: $cursor;
            &::first-line {
              color: $light_gray;
            }
          }
        }
      }
      .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
