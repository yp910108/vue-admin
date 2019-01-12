<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    methods: {
      handleSetLanguage(lang) {
        const message = this.$i18n.locale === 'en'
          ? '切换语言成功'
          : 'Switch Language Success'
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
        this.$message({
          message,
          type: 'success'
        })
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      }
    }
  }
</script>

<style lang="scss" scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
  }
</style>
