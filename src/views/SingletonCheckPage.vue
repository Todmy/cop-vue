<template>
  <div>
    <RouterLink to="singleton">
      singleton
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
  name: 'SingletonCheckPage',
  components: {
    CounterWithSingletonData,
    CounterSingleton: Singleton(Counter),
  },
};
</script>
