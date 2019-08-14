import Counter from '@/components/Counter';
import singletonData from './singletonData';

export default Object.assign({}, Counter, {
  name: 'CounterWithSingletonData',
  data: () => (singletonData),
  created() {
    console.log('===== CounterWithSingletonData created =====');
  },
  destroyed() {
    console.log('===== CounterWithSingletonData destroyed =====');
  },
});
