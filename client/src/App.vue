<template>
  <div id="app">
    <header>
      <NewTodo :send-todo="sendTodo" />
      <Todos :todos="todos" :update-todo="updateTodo" />
    </header>
  </div>
</template>

<script>
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { getTodos, createTodo, updateTodo } from "./api/todoApi";

export default {
  name: "app",
  components: {
    NewTodo,
    Todos
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    getTodos().then(todos => {
      this.todos = todos;
    });
  },
  methods: {
    sendTodo(title) {
      return createTodo({ title, isCompleted: false }).then(newTodo => {
        this.todos = [...this.todos, newTodo];
      });
    },
    updateTodo(todo) {
      updateTodo(todo).then(updTodo => {
        this.todos = this.todos.map(todo => {
          if (todo._id == updTodo._id) {
            return updTodo;
          } else {
            return todo;
          }
        });
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
