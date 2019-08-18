<template>
  <div>
    <div>
      ==={{ head }}===
    </div>
    <h3>{{ count }}</h3>
    <div class="btns">
      <button @click="count--">
        -
      </button>
      <button @click="inc">
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
    head: 'default',
  }),
  created() {
    console.log('===== Counter created =====');
  },
  destroyed() {
    console.log('===== Counter destroyed =====');
  },
  methods: {
    inc() {
      this.count++;
    },
  },
};
</script>
