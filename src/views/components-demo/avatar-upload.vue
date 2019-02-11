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
    >
      Change Avatar
    </el-button>
  </div>
</template>
<script>
  import PanThumb from '@/components/pan-thumb'

  export default {
    name: 'AvatarUploadDemo',
    components: {
      PanThumb
    },
    data() {
      return {
        image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
