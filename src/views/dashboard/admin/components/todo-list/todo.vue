<template>
  <li :class="{completed: todo.done, editing}" class="todo">
    <div v-show="!editing" class="view">
      <input
        :checked="todo.done"
        class="toggle"
        type="checkbox"
        @change="toggleTodo(todo)"
      />
      <label @dblclick="editing = true">{{todo.text}}</label>
      <button class="destroy" @click="deleteTodo(todo)"></button>
    </div>
    <input
      v-show="editing"
      v-focus
      :value="todo.text"
      class="edit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    />
  </li>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      todo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    directives: {
      focus(el, binding, {context}) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    },
    data() {
      return {
        editing: false
      }
    },
    methods: {
      toggleTodo(todo) {
        this.$emit('toggle-todo', todo)
      },
      editTodo({todo, value}) {
        this.$emit('edit-todo', {todo, value})
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo)
      },
      doneEdit(e) {
        const value = e.target.value.trim()
        const {todo} = this
        if (!value) {
          this.deleteTodo(todo)
        } else {
          this.editTodo({
            todo,
            value
          })
        }
        this.editing = false
      },
      cancelEdit(e) {
        e.target.value = this.todo.text
        this.editing = false
      }
    }
  }
</script>
