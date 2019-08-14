const componentCache = new WeakMap();

export default Cmp => ({
  name: 'Singleton',
  computed: {
    Component() {
      if (!componentCache.has(Cmp)) {
        const vNode = this.$createElement(Cmp);
        vNode.data.keepAlive = true; // important thing for prevent component destroy;
        componentCache.set(Cmp, vNode);
      }

      return componentCache.get(Cmp);
    },
  },
  render() {
    // TODO: add ability to pass all props, listeners, slots, scopedSlots, etc.
    return this.Component;
  },
});
