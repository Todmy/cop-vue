<template>
  <div id="app">
    <Navigation id="nav" />
    <RouterView />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: { Navigation },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  width: 20%;
  height: 100%;
}
</style>
