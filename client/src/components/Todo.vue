<template>
  <div class="todo">
    <input type="checkbox" :checked="isCompleted" @change="changeStatus" />
    <div>{{title}}</div>
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
    }
  },
  methods: {
    changeStatus() {
      this.updateTodo({
        _id: this.id,
        title: this.title,
        isCompleted: !this.isCompleted
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
}
</style>