<template>
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    components: {},
    data() {
        return {
            posts: [],
        };
    },
    // Define your methods here
    methods: {
        // Define your methods here
        // Example: sayHello() { console.log('Hello, Vue!') }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(((data) => {
                console.log("data",data);
                this.posts = data
            }))
    },
}
</script>
