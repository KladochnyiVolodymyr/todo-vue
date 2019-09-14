<template>
  <div class="todos">
    <Todo
      v-for="todo in todos"
      :key="todo._id"
      :id="todo._id"
      :title="todo.title"
      :is-completed="todo.isCompleted"
      :update-todo="updateTodo"
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
    }
  }
};
</script>
<style lang="sass" scoped>

</style>