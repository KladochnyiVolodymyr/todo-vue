<template>
  <form @submit.prevent="formSubmit">
    <input type="text" v-model="title" />
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
<style lang="sass" scoped>

</style>