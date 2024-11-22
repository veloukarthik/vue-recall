<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <form @submit.prevent="addEmployee">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newEmployee.name" />
      <br /> <br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="newEmployee.email" />
      <br /> <br />
      <button v-if="!newEmployee.id">Add Employee</button>
      <button v-if="newEmployee.id">Update Employee</button>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
      <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    </form>
    <br /> <br />
    <table border="1" style="width: 100%; border-collapse: collapse">
      <tr>
        <th>#</th>
        <th>Employee Name</th>
        <th>Employee Email</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.email }}</td>
        <td>
          <button @click="editEmployee(employee)">Edit</button>
          <button @click="deleteEmployee(employee.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      title: "Employees",
      newEmployee: {
        id: null,
        name: "",
        email: ""
      },
      employees: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@gmail.com",
        },
        {
          id: 2,
          name: "Daniel Craig",
          email: "daniel@gmail.com",
        },
        {
          id: 3,
          name: "David billa",
          email: "davidbilla@gmail.com",
        },
      ],
      name: "",
      errorMessage:"",
      successMessage:""
    };
  },
  methods: {
    addUsers() {
      this.users.push({ id: this.users.length + 1, name: this.name });
      this.name = "";
    },
    deleteUsers(index) {
      this.users.splice(index, 1);
    },
    addEmployee(){

      if(this.newEmployee.name == "" && this.newEmployee.email == "")
      {
          this.errorMessage = "Please enter name and email";
          return;
      }

      if(this.newEmployee.name =="")
      {
        this.errorMessage = "Please enter name";
        return;
      }

      if(this.newEmployee.email =="" || this.newEmployee.email.indexOf("@") == -1)
      {
        this.errorMessage = "Please enter email";
        return;
      }
      if(this.newEmployee.id)
      {
        this.employees = this.employees.map(employee => {
          if(employee.id == this.newEmployee.id)
          {
            employee.name = this.newEmployee.name;
            employee.email = this.newEmployee.email;
          }
          return employee;
        });
        this.newEmployee = {
          id: null,
          name: "",
          email: ""
        };
        this.successMessage = "Employee updated successfully";
        return;
      }

      this.newEmployee.id = this.employees.length + 1;
      this.employees.push(this.newEmployee);
      this.newEmployee = {
        id: null,
        name: "",
        email: ""
      };
      this.errorMessage = "";
      this.successMessage = "Employee created successfully";
    },
    editEmployee(employee){
      this.newEmployee.name = employee.name;
      this.newEmployee.email = employee.email;
      this.newEmployee.id = employee.id;
    },
    deleteEmployee(id){
      this.employees = this.employees.filter(employee => employee.id!= id);
    }
  },
  created() {
    console.log("App created");
  },
  mounted() {
    console.log("App mounted");
  },
  updated() {
    console.log("App updated");
  },
};
</script>
