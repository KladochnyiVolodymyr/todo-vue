<template>
  <div class="todo">
    <input class="todo__check" type="checkbox" :checked="isCompleted" @change="changeStatus" />
    <div class="todo__text">{{title}}</div>
    <button class="todo__delete" @click="deleteTodo">&times;</button>
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
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0px;
  }
  &__check {
    margin-right: 20px;
    width: 20px;
    height: 20px;
  }
  &__text {
    width: 100%;
    text-align: start;
  }
  &__delete {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    color: #af5b5e;
  }
}
</style>