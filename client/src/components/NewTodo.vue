<template>
  <form @submit.prevent="formSubmit">
    <input class="new-todo" type="text" v-model="title" placeholder="What needs to be done?" />
  </form>
</template>
<script>
export default {
  props: {
    sendTodo: {
      type: Function
    }
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    formSubmit() {
      if (this.title.length) {
        this.sendTodo(this.title).then(() => {
          this.title = "";
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.new-todo {
  padding: 16px 16px 16px 60px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>