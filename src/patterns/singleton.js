const componentCache = new WeakMap();

function bindMethodsToParent(singletonHolder, singleton) {
  const { vNode, $parent: parent } = singletonHolder;
  const singletonName = singleton.name;

  const boundMethods = {};
  for (let methodName in singleton.methods) {
    const method = singleton.methods[methodName];
    boundMethods[methodName] = (...args) => method.apply(vNode.componentInstance, args);
  }

  if (!parent.$singleton) {
    parent.$singleton = {};
  }

  parent.$singleton[singletonName] = boundMethods;
}

export default (Cmp, props) => {
  if (!Cmp.name) {
    throw new Error('Component should have a name');
  }

  return {
    name: `Singleton${Cmp.name}`,
    computed: {
      vNode() {
        if (props && componentCache.has(Cmp)) {
          console.warn(`
            Props ${JSON.stringify(props, null, 2)} is not applied to
            component "${Cmp.name}". Singleton can be registred only once.
          `);
        }

        if (!componentCache.has(Cmp)) {
          const vNode = this.$createElement(Cmp, { props });
          vNode.data.keepAlive = true; // important thing for prevent component destroy;
          componentCache.set(Cmp, vNode);
        }

        return componentCache.get(Cmp);
      },
    },
    // TODO: multiple on one page
    // TODO: need to be included into the component
    render() {
      bindMethodsToParent(this, Cmp);
      return this.vNode;
    },
  };
};
