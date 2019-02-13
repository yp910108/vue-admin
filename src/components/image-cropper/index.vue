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
      <div v-if="step === 2" class="vicp-step2">
        <div class="vicp-crop clearfix">
          <div class="vicp-crop-left">
            <div class="vicp-img-container">
              <img
                :src="sourceImgUrl"
                :style="sourceImgStyle"
                class="vicp-img"
              />
              <div :style="sourceImgShadeStyle" class="vicp-img-shade vicp-img-shade-1"/>
              <div :style="sourceImgShadeStyle" class="vicp-img-shade vicp-img-shade-2"/>
            </div>
            <div class="vicp-range">
              <input :value="scale.range" type="range" step="1" min="0" max="100">
              <i class="vicp-icon5"/>
              <i class="vicp-icon6"/>
            </div>
            <div v-if="!noRotate" class="vicp-rotate">
              <i>↺</i>
              <i>↻</i>
            </div>
          </div>
          <div class="vicp-crop-right">
            <div class="vicp-preview">
              <div v-if="!noSquare" class="vicp-preview-item">
                <img :src="createImgUrl" :style="previewStyle">
                <span>{{lang.preview}}</span>
              </div>
              <div v-if="!noCircle" class="vicp-preview-item vicp-preview-item-circle">
                <img :src="createImgUrl" :style="previewStyle">
                <span>{{lang.preview}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <canvas ref="canvas" :width="width" :height="height" style="display: none;"/>
    </div>
  </div>
</template>

<script>
  import language from './utils/language'
  import mimes from './utils/mimes'
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
      },
      // 不显示旋转功能
      noRotate: {
        type: Boolean,
        default: true
      },
      // 不预览圆形图片
      noCircle: {
        type: Boolean,
        default: false
      },
      // 不预览方形图片
      noSquare: {
        type: Boolean,
        default: false
      },
      // 图片上传格式
      imgFormat: {
        type: String,
        'default': 'png'
      }
    },
    directives: {
      ripple
    },
    data() {
      return {
        mime: (() => {
          const allowImgFormat = [
            'jpg',
            'png'
          ]
          const tempImgFormat = allowImgFormat.indexOf(this.imgFormat) === -1 ? 'jpg' : this.imgFormat
          return mimes[tempImgFormat]
        })(),
        step: 1, // 步骤 1选择文件 2剪裁 3上传
        loading: 0, // 上传状态及进度 0未开始 1正在 2成功 3错误
        hasError: false, // 是否有错误信息
        errorMsg: '', // 错误信息
        ratio: this.width / this.height, // 需求图宽高比
        sourceImg: null,
        sourceImgUrl: '', // 原图地址
        createImgUrl: '', // 生成图片地址
        // 生成图片预览的容器大小
        previewContainer: {
          width: 100,
          height: 100
        },
        // 原图容器宽高
        sourceImgContainer: { // sic
          width: 240,
          height: 184 // 如果生成图比例与此一致会出现bug，先改成特殊的格式吧
        },
        scale: {
          zoomAddOn: false, // 按钮缩放事件开启
          zoomSubOn: false, // 按钮缩放事件开启
          range: 1, // 最大100
          rotateLeft: false, // 按钮向左旋转事件开启
          rotateRight: false, // 按钮向右旋转事件开启
          degree: 0, // 旋转度数
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          maxWidth: 0,
          maxHeight: 0,
          minWidth: 0, // 最宽
          minHeight: 0,
          naturalWidth: 0, // 原宽
          naturalHeight: 0
        }
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
            _this.startCrop()
          }
        })
      },
      startCrop() {
        let _this = this
        let {width, height, ratio, scale, sourceImgMasking, lang} = this
        let img = new Image()
        img.src = this.sourceImgUrl
        img.onload = function() {
          const {naturalWidth: nWidth, naturalHeight: nHeight} = this
          const nRatio = nWidth / nHeight
          let {width: simWidth, height: simHeight, scale: simScale} = sourceImgMasking
          let x = 0
          let y = 0
          let w = simWidth
          let h = simHeight
          // 图片像素不达标
          if (nWidth < width || nHeight < height) {
            _this.hasError = true
            _this.errorMsg = lang.error.lowestPx + width + '*' + height
            return
          }
          if (ratio < nRatio) {
            w = h * nRatio
            x = (simWidth - w) / 2
          } else {
            h = w / nRatio
            y = (simHeight - h) / 2
          }
          scale.range = 0
          scale.x = x
          scale.y = y
          scale.width = w
          scale.height = h
          scale.degree = 0
          scale.minWidth = w
          scale.minHeight = h
          scale.maxWidth = nWidth * simScale
          scale.maxHeight = nHeight * simScale
          scale.naturalWidth = nWidth
          scale.naturalHeight = nHeight
          _this.sourceImg = this
          _this.createImg()
          _this.step = 2
        }
      },
      createImg() {
        const {
          mime,
          sourceImg,
          scale: {
            x,
            y,
            width,
            height,
            degree
          },
          sourceImgMasking: {
            scale
          }
        } = this
        const canvas = this.$refs.canvas
        const ctx = canvas.getContext('2d')
        canvas.width = this.width
        canvas.height = this.height
        ctx.clearRect(0, 0, this.width, this.height)
        // 将透明区域设置为白色底边
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.translate(this.width / 2, this.height / 2)
        ctx.rotate(Math.PI * degree / 180)
        ctx.translate(-this.width / 2, -this.height / 2)
        ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale)
        this.createImgUrl = canvas.toDataURL(mime)
      }
    },
    computed: {
      lang() {
        return language[this.langType] ? language[this.langType] : language['en']
      },
      // 原图蒙版属性
      sourceImgMasking() {
        const {
          width: sicWidth,
          height: sicHeight
        } = this.sourceImgContainer
        const sicRatio = sicWidth / sicHeight // 原图容器宽高比
        let scale = 1
        let x = 0
        let y = 0
        let w = sicWidth
        let h = sicHeight
        if (this.ratio < sicRatio) {
          scale = sicHeight / this.height
          w = sicHeight * this.ratio
          x = (sicWidth - w) / 2
        } else {
          scale = sicWidth / this.width
          h = sicWidth / this.ratio
          y = (sicHeight - h) / 2
        }
        return {
          scale,
          x,
          y,
          width: w,
          height: h
        }
      },
      sourceImgStyle() {
        const {
          scale,
          sourceImgMasking
        } = this
        const top = `${scale.y + sourceImgMasking.y}px`
        const left = `${scale.x + sourceImgMasking.x}px`
        return {
          top,
          left,
          width: `${scale.width}px`,
          height: `${scale.height}px`,
          transform: `rotate(${scale.degree}deg)`
        }
      },
      sourceImgShadeStyle() {
        const {
          sourceImgMasking: sim,
          sourceImgContainer: sic
        } = this
        const w = sim.width === sic.width ? sim.width : (sic.width - sim.width) / 2
        const h = sim.height === sic.height ? sim.height : (sic.height - sim.height) / 2
        return {
          width: w + 'px',
          height: h + 'px'
        }
      },
      previewStyle() {
        const {
          ratio,
          previewContainer: pc
        } = this
        let w = pc.width
        let h = pc.height
        const pcRatio = w / h
        if (ratio < pcRatio) {
          w = pc.height * ratio
        }
        if (ratio > pcRatio) {
          h = pc.width / ratio
        }
        return {
          width: w + 'px',
          height: h + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
