<template>
  <div class="components-container">
    <code>Markdown is based on
      <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a> ，Simply encapsulated in Vue.
      <a>
        Documentation </a>
    </code>
    <div class="editor-container">
      <el-tag class="tag-title">Basic:</el-tag>
      <markdown-editor v-model="content" height="300px"/>
    </div>
    <div class="editor-container"></div>
  </div>
</template>

<script>
  import MarkdownEditor from '@/components/markdown-editor'

  const content = `
  **This is test**

  * vue
  * element
  * webpack

  `

  export default {
    name: 'MarkdownDemo',
    components: {
      MarkdownEditor
    },
    data() {
      return {
        content
      }
    }
  }
</script>

<style lang="scss" scoped>
  .editor-container {
    margin-bottom: 30px;
  }

  .tag-title {
    margin-bottom: 5px;
  }
</style>
