<template>
  <div class="about">
    <h1 @click="change">{{ title }}</h1>
    <p>{{ count }}</p>
  </div>
  <button @click="increment">Increment Count</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AboutPage',
  setup() {
    const count = ref(0);
    const title =  ref('Welcome about us page' || 'New title abouts');
    const increment = () => count.value++;

    const change = () => {
      title.value = 'Updated title';
    }
    return { count, increment , change, title };
  },
}
</script>

