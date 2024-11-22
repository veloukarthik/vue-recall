<template>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>&nbsp;
    <button @click="decrement">Decrement</button>
  </template>
  
  <script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  
  export default {
    name: "CounterView",
    setup() {
      const store = useStore();
  
      // Use computed for reactivity with state
      const count = computed(() => store.state.count);
  
      return {
        count,
        increment: () => store.commit("increment"),
        decrement: () => store.commit("decrement"),
      };
    },
  };
  </script>
  