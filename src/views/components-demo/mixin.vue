<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card>
        <div slot="header">
          <span>Buttons</span>
        </div>
        <div style="margin-bottom: 50px;">
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn blue-btn" to="/documentation/index">Documentation</router-link>
          </el-col>
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn light-blue-btn" to="/icon/index">Icons</router-link>
          </el-col>
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn pink-btn" to="/excel/export-excel">Excel</router-link>
          </el-col>
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn green-btn" to="/table/complex-table">Table</router-link>
          </el-col>
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn tiffany-btn" to="/example/create">Form</router-link>
          </el-col>
          <el-col :xs="12" :sm="8" :md="4" :lg="4" class="text-center" style="margin-bottom: 10px;">
            <router-link class="pan-btn yellow-btn" to="/theme/index">Theme</router-link>
          </el-col>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="20" style="margin-top: 50px;">
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card class="box-card">
          <div slot="header" class="no-wrap">
            <span>Material Design 的input</span>
          </div>
          <div style="height: 110px;">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="title">
                <md-input v-model="demo.title" icon="search" placeholder="输入标题">标题</md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card class="box-card">
          <div slot="header" class="no-wrap">
            <span>图片hover效果</span>
          </div>
          <div style="height: 110px;">
            <pan-thumb
              width="100px"
              height="100px"
              image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
            >
              vue-admin
            </pan-thumb>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card class="box-card">
          <div slot="header" class="no-wrap">
            <span>水波纹 ripple v-ripple</span>
          </div>
          <div style="height: 110px;">
            <el-button v-ripple type="primary">水波纹效果</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <el-card class="box-card">
          <div slot="header" class="no-wrap">
            <span>hover text</span>
          </div>
          <div style="height: 110px;">
            <mallki text="vue-admin"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 30px;">
      <el-col :xs="16" :sm="14" :md="10" :lg="8">
        <el-card>
          <div slot="header">
            <span>Share</span>
          </div>
          <div class="component-item" style="height: 420px;">
            <dropdown-menu :items="articleList" style="margin: 0 auto;" title="系列文章"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ripple from '@/directive/ripple'
  import MdInput from '@/components/md-input'
  import PanThumb from '@/components/pan-thumb'
  import Mallki from '@/components/text-hover-effect/mallki'
  import DropdownMenu from '@/components/share/dropdown-menu'

  export default {
    directives: {ripple},
    components: {
      MdInput,
      PanThumb,
      Mallki,
      DropdownMenu
    },
    data() {
      const validate = (rule, value, callback) => {
        if (value.length !== 6) {
          callback(new Error('请输入六个字符'))
        } else {
          callback()
        }
      }
      return {
        demo: {
          title: ''
        },
        demoRules: {
          title: [{required: true, trigger: 'change', validator: validate}]
        },
        articleList: [
          {title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2'},
          {title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac'},
          {title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35'},
          {title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56'},
          {title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mixin-components-container {
    padding: 30px;
    min-height: calc(100vh - 84px);
    background: #f0f2f5;
  }

  .box-card {
    margin-bottom: 20px;
  }
</style>
