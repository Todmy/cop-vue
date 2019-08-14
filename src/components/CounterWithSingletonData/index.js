import Counter from '@/components/Counter';
import singletonData from './singletonData';

export default Object.assign({}, Counter, {
  name: 'CounterWithSingletonData',
  data: () => (singletonData),
  created() {
    console.log('===== CounterSingleton created =====');
  },
  destroyed() {
    console.log('===== CounterSingleton destroyed =====');
  },
});
