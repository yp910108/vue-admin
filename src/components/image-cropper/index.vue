<template>
  <div class="vue-image-crop-upload">
    <div class="vicp-wrapper">
      <div class="vicp-close">
        <i class="vicp-icon4"/>
      </div>
      <div class="vicp-step1">
        <div class="vicp-drop-area">
          <i class="vicp-icon1">
            <i class="vicp-icon1-arrow"/>
            <i class="vicp-icon1-body"/>
            <i class="vicp-icon1-bottom"/>
          </i>
          <span class="vicp-hint">{{lang.hint}}</span>
        </div>
        <div class="vicp-operate">
          <a v-ripple>{{lang.btn.off}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import language from './utils/language'
  import ripple from '@/directive/ripple'

  export default {
    props: {
      // 语言类型
      langType: {
        type: String,
        'default': 'en'
      }
    },
    directives: {
      ripple
    },
    data() {
      return {
        lang: language[this.langType] ? language[this.langType] : language['en']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vue-image-crop-upload {
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    .vicp-wrapper {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 2px;
      padding: 25px;
      width: 600px;
      height: 330px;
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
      .vicp-close {
        position: absolute;
        right: -30px;
        top: -30px;
        cursor: pointer;
        .vicp-icon4 {
          position: relative;
          display: block;
          width: 30px;
          height: 30px;
          transition: transform 0.18s;
          &:hover {
            transform: rotate(90deg);
          }
          &:before,
          &:after {
            content: "";
            position: absolute;
            left: 4px;
            top: 12px;
            width: 20px;
            height: 3px;
            background: #fff;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        }
      }
      .vicp-step1 {
        .vicp-drop-area {
          position: relative;
          border: 1px dashed rgba(0, 0, 0, 0.08);
          padding: 35px;
          height: 170px;
          text-align: center;
          background: rgba(0, 0, 0, 0.03);
          .vicp-icon1 {
            display: block;
            margin: 0 auto 6px;
            width: 42px;
            height: 42px;
            .vicp-icon1-arrow {
              display: block;
              margin: 0 auto;
              width: 0;
              border-bottom: 14.7px solid rgba(0, 0, 0, 0.3);
              border-left: 14.7px solid transparent;
              border-right: 14.7px solid transparent;
            }
            .vicp-icon1-body {
              display: block;
              margin: 0 auto;
              width: 12.6px;
              height: 14.7px;
              background: rgba(0, 0, 0, 0.3);
            }
            .vicp-icon1-bottom {
              display: block;
              border: 6px solid rgba(0, 0, 0, 0.3);
              border-top: none;
              height: 12.6px;
            }
          }
          .vicp-hint {
            display: block;
            padding: 15px;
            line-height: 30px;
            font-size: 14px;
            color: #666;
          }
        }
      }
      .vicp-operate {
        position: absolute;
        right: 20px;
        bottom: 20px;
        a {
          float: left;
          margin-left: 10px;
          border-radius: 2px;
          width: 100px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          color: #4a7;
          cursor: pointer;
          user-select: none;
          &:hover {
            background: rgba(0, 0, 0, 0.03);
          }
        }
      }
    }
  }
</style>
