<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div v-for="user in users" :key="user.id" @click="deleteUsers(index)">
      {{ user.name }}
    </div>
    <input v-model="name" placeholder="Enter Name">
    <button @click="addUsers">Add User</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      title: 'List Users',
      users: [{ id: 1, name: 'Karthik' }, { id: 2, name: 'Rithik' }],
      name: ""
    }
  },
  methods: {
    addUsers() {
      this.users.push({ id: this.users.length + 1, name: this.name })
      this.name = "";
    },
    deleteUsers(index) {
      this.users.splice(index, 1);
    }
  },
  created() {
    console.log('App created')
  },
  mounted() {
    console.log('App mounted')
  },
  updated() {
    console.log('App updated')
  }
}
</script>
