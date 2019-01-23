<template>
  <section class="todoapp">
    <header class="header">
      <input
        class="new-todo"
        autocomplete="off"
        placeholder="Todo List"
        @keyup.enter="addTodo"
      >
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll({done: !allChecked})"
      >
      <label for="toggle-all"/>
    </header>
    <ul v-show="todos.length" class="todo-list">
      <todo
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @edit-todo="editTodo"
        @delete-todo="deleteTodo"
      ></todo>
    </ul>
    <footer v-show="todos.length" class="footer">
      <span class="todo-count">
        <strong>{{remaining}}</strong>
        {{remaining | pluralize('item')}} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters" :key="key">
          <a :class="{selected: visibility === key}" @click.prevent="visibility = key">{{key | capitalize}}</a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
  import Todo from './todo'

  const STORAGE_KEY = 'todos'
  const defaultList = [
    {text: 'star this repository', done: false},
    {text: 'fork this repository', done: false},
    {text: 'follow author', done: false},
    {text: 'vue-element-admin', done: true},
    {text: 'vue', done: true},
    {text: 'element-ui', done: true},
    {text: 'axios', done: true},
    {text: 'webpack', done: true}
  ]
  const filters = {
    all: (todos) => todos,
    active: (todos) => todos.filter((todo) => !todo.done),
    completed: (todos) => todos.filter((todo) => todo.done)
  }
  export default {
    components: {
      Todo
    },
    data() {
      return {
        visibility: 'all',
        // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defaultList
        todos: defaultList,
        filters
      }
    },
    methods: {
      setLocalStorage() {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
      },
      addTodo(e) {
        const text = e.target.value.trim()
        if (text) {
          this.todos.unshift({
            text,
            done: false
          })
          this.setLocalStorage()
        }
        e.target.value = ''
      },
      toggleTodo(todo) {
        todo.done = !todo.done
      },
      editTodo({todo, value}) {
        todo.text = value
        this.setLocalStorage()
      },
      deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
        this.setLocalStorage()
      },
      toggleAll({done}) {
        this.todos.forEach((todo) => {
          todo.done = done
        })
        this.setLocalStorage()
      }
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : w + 's',
      capitalize: (s) => s.charAt(0).toUpperCase() + s.slice(1)
    },
    computed: {
      allChecked() {
        return this.todos.every((todo) => todo.done)
      },
      filteredTodos() {
        return filters[this.visibility](this.todos)
      },
      remaining() {
        return this.todos.filter((todo) => !todo.done).length
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
