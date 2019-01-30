<template>
  <div class="json-editor">
    <textarea ref="textarea"/>
  </div>
</template>

<script>
  import CodeMirror from 'codemirror'
  import 'codemirror/addon/lint/lint.css'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/rubyblue.css'
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/addon/lint/lint'
  import 'codemirror/addon/lint/json-lint'

  require('script-loader!jsonlint') // eslint-disable-line

  export default {
    name: 'JsonEditor',
    props: ['value'],
    data() {
      return {
        jsonEditor: false
      }
    },
    methods: {
      getValue() {
        return this.jsonEditor.getValue()
      }
    },
    mounted() {
      this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
        lineNumbers: true,
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'rubyblue',
        lint: true
      })
      this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
      this.jsonEditor.on('change', (cm) => {
        this.$emit('changed', cm.getValue())
        this.$emit('input', cm.getValue())
      })
    },
    watch: {
      value(newVal) {
        const editorValue = this.jsonEditor.getValue()
        if (newVal !== editorValue) {
          this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .json-editor /deep/ {
    height: 100%;
    position: relative;
    .CodeMirror {
      min-height: 300px;
      height: auto;
    }
    .CodeMirror-scroll {
      min-height: 300px;
    }
    .cm-s-rubyblue span.cm-string {
      color: #F08047;
    }
  }
</style>
