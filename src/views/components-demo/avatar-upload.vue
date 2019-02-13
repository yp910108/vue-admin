<template>
  <div class="components-container">
    <code>This is based on
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
      {{$t('components.imageUploadTips')}}
    </code>
    <pan-thumb :image="image"/>
    <el-button
      type="primary"
      icon="upload"
      style="position: absolute; bottom: 15px; margin-left: 40px;"
      @click="imagecropperShow = true"
    >
      Change Avatar
    </el-button>
    <image-cropper
      :visible.sync="imagecropperShow"
      :lang-type="$store.getters.language"
      :width="300"
      :height="300"
      :no-rotate="false"
    />
  </div>
</template>
<script>
  import PanThumb from '@/components/pan-thumb'
  import ImageCropper from '@/components/image-cropper'

  export default {
    name: 'AvatarUploadDemo',
    components: {
      PanThumb,
      ImageCropper
    },
    data() {
      return {
        image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
        imagecropperShow: false
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
