<template>
  <div class="navigation">
    test
    <CounterWithSingletonData />
    <br>
    <CounterSingleton />
  </div>
</template>

<script>
import Singleton from '@/patterns/singleton';
import CounterWithSingletonData from '@/components/CounterWithSingletonData';
import Counter from '@/components/Counter';

export default {
  name: 'Navigation',
  components: {
    CounterWithSingletonData,
    CounterSingleton: Singleton(Counter),
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
}
</style>
