<template>
  <div class="todo-list">
    <Todo
      v-for="todo in todos"
      :key="todo._id"
      :id="todo._id"
      :title="todo.title"
      :is-completed="todo.isCompleted"
      :update-todo="updateTodo"
      :remove-todo="removeTodo"
    />
  </div>
</template>
<script>
import Todo from "./Todo";

export default {
  components: {
    Todo
  },
  props: {
    todos: {
      type: Array
    },
    updateTodo: {
      type: Function
    },
    removeTodo: {
      type: Function
    }
  }
};
</script>
<style lang="scss" scoped>
</style>