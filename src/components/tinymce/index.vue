<template>
  <div :class="{fullscreen}" class="tinymce-container">
    <textarea :id="id" class="tinymce-textarea"/>
    <div class="editor-custom-btn-container">
      <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"/>
    </div>
  </div>
</template>
<script>
  import editorImage from './components/editor-image'
  import plugins from './plugins'
  import toolbar from './toolbar'

  export default {
    name: 'Tinymce',
    props: {
      id: {
        type: String,
        default() {
          return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
        }
      },
      value: {
        type: String,
        default: ''
      },
      toolbar: {
        type: Array,
        required: false,
        default() {
          return []
        }
      },
      menubar: {
        type: String,
        default: 'file edit insert view format table'
      },
      height: {
        type: Number,
        required: false,
        default: 360
      }
    },
    components: {
      editorImage
    },
    data() {
      return {
        fullscreen: false
      }
    },
    methods: {
      initTinymce() {
        const _this = this
        window.tinymce.init({
          language: this.language,
          selector: `#${this.id}`,
          height: this.height,
          body_class: 'panel-body',
          object_resizing: false,
          toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
          menubar: this.menubar,
          plugins: plugins,
          end_container_on_empty_block: true,
          powerpaste_word_import: 'clean',
          code_dialog_height: 450,
          code_dialog_width: 1000,
          advlist_bullet_styles: 'square',
          advlist_number_styles: 'default',
          imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
          default_link_target: '_blank',
          link_title: false,
          nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
          init_instance_callback(editor) {
            if (_this.value) {
              editor.setContent(_this.value)
            }
            this.hasInit = true
            editor.on('NodeChange Change KeyUp SetContent', () => {
              this.hasChange = true
              _this.$emit('input', editor.getContent())
            })
          },
          setup(editor) {
            editor.on('FullscreenStateChanged', (e) => {
              _this.fullscreen = e.state
            })
          }
        })
      },
      destoryTinymce() {
        const tinymce = window.tinymce.get(this.id)
        if (this.fullscreen) {
          tinymce.execCommand('mceFullScreen')
        }
        if (tinymce) {
          tinymce.destroy()
        }
      },
      setContent(value) {
        window.tinymce.get(this.id).setContent(value)
      },
      getContent() {
        window.tinymce.get(this.id).getContent()
      },
      destroyTinymce() {
        const tinymce = window.tinymce.get(this.id)
        if (this.fullscreen) {
          tinymce.execCommand('mceFullScreen')
        }
        if (tinymce) {
          tinymce.destroy()
        }
      },
      imageSuccessCBK(arr) {
        arr.forEach((v) => {
          window.tinymce.get(this.id).insertContent(`<img class="wscnph" src="${v.url}" >`)
        })
      }
    },
    watch: {
      value(newVal) {
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(() => {
            window.tinymce.get(this.id).setContent(newVal || '')
          })
        }
      }
    },
    mounted() {
      this.initTinymce()
    },
    destroyed() {
      this.destroyTinymce()
    },
    activated() {
      this.initTinymce()
    },
    deactivated() {
      this.destroyTinymce()
    }
  }
</script>
<style lang="scss" scoped>
  .tinymce-container /deep/ {
    position: relative;
    line-height: normal;
    .mce-fullscreen {
      z-index: 10000;
    }
    .tinymce-textarea {
      visibility: hidden;
      z-index: -1;
    }
    .editor-custom-btn-container {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }

  .fullscreen .editor-custom-btn-container {
    z-index: 10000;
    position: fixed;
  }
</style>
