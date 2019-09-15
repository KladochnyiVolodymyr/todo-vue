<template>
  <div class="todo-count">{{count}} item{{count != 1 ? "s" : ""}} left</div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
</style>