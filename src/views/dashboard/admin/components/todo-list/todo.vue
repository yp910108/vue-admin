<template>
  <li :class="{completed: todo.done, editing}" class="todo">
    <div class="view">
      <input
        :checked="todo.done"
        class="toggle"
        type="checkbox"
      />
      <label>{{todo.text}}</label>
      <button class="destroy"></button>
    </div>
    <input/>
  </li>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>

</style>
