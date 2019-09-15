<template>
  <div class="todos">
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
.todos {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
}
</style>