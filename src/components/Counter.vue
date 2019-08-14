<template>
  <div>
    <h3>{{ count }}</h3>
    <div class="btns">
      <button @click="count--">
        -
      </button>
      <button @click="count++">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data: () => ({
    count: 0,
  }),
  created() {
    console.log('===== Counter created =====');
  },
  destroyed() {
    console.log('===== Counter destroyed =====');
  },
};
</script>
