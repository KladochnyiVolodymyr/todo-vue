<template>
  <div class="todo-count">{{count}} items left</div>
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