<template>
  <div>
    <RouterLink to="singleton-check">
      singleton-check
    </RouterLink>
    <br>
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
  name: 'SingletonPage',
  components: {
    CounterWithSingletonData,
    CounterSingleton: Singleton(Counter),
  },
};
</script>
