<template>
  <section class="todoapp">
    <header class="header">
      <input class="new-todo" autocomplete="off" placeholder="Todo List">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all"/>
    </header>
    <ul class="todo-list"></ul>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
