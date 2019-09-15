<template>
  <div id="app" class="todos">
    <header class="todos__header">
      <NewTodo :send-todo="sendTodo" />
    </header>
    <section class="todos__body">
      <Todos :todos="todos" :update-todo="updateTodo" :remove-todo="removeTodo" />
    </section>
    <footer class="todos__footer">
      <TodoCount :count="getTodoLeft" />
    </footer>
  </div>
</template>

<script>
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoCount from "./components/TodoCount";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";

export default {
  name: "app",
  components: {
    NewTodo,
    Todos,
    TodoCount
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
  computed: {
    getTodoLeft() {
      return this.todos.filter(todo => todo.isCompleted !== true).length;
    }
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
    },
    removeTodo(id) {
      deleteTodo(id).then(deletedTodo => {
        this.todos = this.todos.filter(todo => todo._id !== id);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todos {
  width: 500px;
  margin: 0 auto;
  &__header {
    margin-bottom: 10px;
  }
  &__body {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
  }
  &__footer {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
