<template>
  <div id="app" class="todos">
    <div class="preloader" v-if="this.preloader">Loading...</div>
    <header class="todos__header">
      <div class="todos__check-all" @click="checkAll">
        &#11167;
        <span>Check All</span>
      </div>
      <NewTodo :send-todo="sendTodo" />
    </header>
    <section class="todos__body">
      <p v-if="!todos.length">No todo item</p>
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
      todos: [],
      preloader: true
    };
  },
  mounted() {
    getTodos().then(todos => {
      this.todos = todos;
      this.preloader = false;
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
    },
    сheckAllType(type) {
      this.todos.map(todo => {
        todo.isCompleted = type;
        updateTodo({
          _id: todo._id,
          title: todo.title,
          isCompleted: type
        });
      });
    },
    checkAll() {
      if (this.getTodoLeft != 0) {
        this.сheckAllType(true);
      } else {
        this.сheckAllType(false);
      }
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
  &__check-all {
    color: #ccc;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 8px;
    left: 10px;
    &:hover {
      span {
        display: block;
      }
    }
    span {
      font-size: 10px;
      position: absolute;
      top: -5px;
      left: -10px;
      width: 50px;
      display: none;
    }
  }
  &__header {
    margin-bottom: 10px;
    position: relative;
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
.preloader {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 100px;
  background: #fff;
  z-index: 1;
}
</style>
