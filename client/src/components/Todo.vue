<template>
  <div class="todo">
    <input type="checkbox" :checked="isCompleted" @change="changeStatus" />
    <div>{{title}}</div>
    <button class="todo__delete" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: String
    },
    isCompleted: {
      type: Boolean
    },
    updateTodo: {
      type: Function
    },
    removeTodo: {
      type: Function
    }
  },
  methods: {
    changeStatus() {
      this.updateTodo({
        _id: this.id,
        title: this.title,
        isCompleted: !this.isCompleted
      });
    },
    deleteTodo() {
      this.removeTodo(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  &__delete {
    &:after {
      content: "×";
    }
  }
}
</style>