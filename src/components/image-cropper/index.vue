<template>
  <div v-show="visible" class="vue-image-crop-upload">
    <div class="vicp-wrapper">
      <div class="vicp-close" @click="close">
        <i class="vicp-icon4"/>
      </div>
      <div v-show="step === 1" class="vicp-step1">
        <div class="vicp-drop-area" @click="selectFile">
          <i class="vicp-icon1">
            <i class="vicp-icon1-arrow"/>
            <i class="vicp-icon1-body"/>
            <i class="vicp-icon1-bottom"/>
          </i>
          <span v-show="loading !== 1" class="vicp-hint">{{lang.hint}}</span>
          <input
            ref="fileInput"
            type="file"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            style="display: none;"
            @change="fileChange"
          />
        </div>
        <div v-show="hasError" class="vicp-error">
          <i class="vicp-icon2"/> {{errorMsg}}
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
      visible: {
        type: Boolean,
        default: false
      },
      // 语言类型
      langType: {
        type: String,
        'default': 'en'
      },
      // 单文件大小限制
      maxSize: {
        type: Number,
        'default': 10240
      },
      // 剪裁图片的宽
      width: {
        type: Number,
        default: 200
      },
      // 剪裁图片的高
      height: {
        type: Number,
        default: 200
      }
    },
    directives: {
      ripple
    },
    data() {
      return {
        step: 1, // 步骤 1选择文件 2剪裁 3上传
        loading: 0, // 上传状态及进度 0未开始 1正在 2成功 3错误
        hasError: false, // 是否有错误信息
        errorMsg: '', // 错误信息
        sourceImgUrl: ''
      }
    },
    methods: {
      close() {
        this.$emit('update:visible', false)
      },
      // 重置错误信息
      resetError() {
        this.hasError = false
        this.errorMsg = ''
      },
      // 重置file, 再次选择同一张图片时还会触发change方法
      resetFile(el) {
        el.setAttribute('type', 'text')
        el.setAttribute('type', 'file')
      },
      // 点击上传按钮
      selectFile() {
        if (this.loading === 1) {
          return
        }
        this.$refs.fileInput.click()
      },
      // 检查文件是否符合要求
      checkFile(file) {
        return new Promise((resolve) => {
          if (file.type.indexOf('image') === -1) {
            this.hasError = true
            this.errorMsg = this.lang.error.onlyImg
            return
          }
          if (file.size / 1024 > this.maxSize) {
            this.hasError = true
            this.errorMsg = this.lang.error.outOfSize + this.maxSize + 'kb'
            return
          }
          resolve()
        })
      },
      // file触发change事件
      fileChange(e) {
        const file = e.target.files[0]
        if (!file) {
          return
        }
        this.resetError()
        this.resetFile(e.target)
        this.checkFile(file).then(() => {
          let _this = this
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function() {
            _this.sourceImgUrl = this.result
          }
        })
      }
    },
    computed: {
      lang() {
        return language[this.langType] ? language[this.langType] : language['en']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes vicp {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

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
      animation: vicp 0.12s ease-in;
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
          cursor: pointer;
          &:hover {
            border-color: rgba(0, 0, 0, 0.1);
            background: rgba(0, 0, 0, 0.05);
          }
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
      .vicp-error {
        margin-top: 5px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #d10;
        text-align: center;
        .vicp-icon2 {
          position: relative;
          display: inline-block;
          vertical-align: top;
          width: 20px;
          height: 20px;
          &:after,
          &:before {
            content: "";
            position: absolute;
            left: 4px;
            top: 9px;
            width: 13px;
            height: 2px;
            background: #d10;
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
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
