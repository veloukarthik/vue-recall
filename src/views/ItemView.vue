<template>
    <h1>Items</h1>
    <div v-for="item in items" :key="item.id">
        <p>{{ item }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'ItemView',
    setup() {
        const store = useStore();

        const items = computed(() => store.state.items);

        return {
            items
        }
    }
}
</script>