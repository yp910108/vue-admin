<template>
  <div class="components-container">
    <code>
      {{$t('components.tinymceTips')}}
      <a target="_blank" class="link-type">
        {{$t('components.documentation')}}
      </a>
    </code>
    <div>
      <tinymce></tinymce>
    </div>
  </div>
</template>

<script>
  import Tinymce from '@/components/tinymce'

  export default {
    name: 'TinymceDemo',
    components: {
      Tinymce
    }
  }
</script>

<style lang="scss" scoped>

</style>
