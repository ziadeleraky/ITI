<template>
  <div class="row p-5 d-flex justify-content-around">
    <button type="button" class="btn btn-dark col-3" @click="handleFormView">Form</button>
    <button type="button" class="btn btn-dark col-3" @click="handleUsersView">Users</button>
    <button type="button" class="btn btn-dark col-3" @click="handleAdminsiew">Admins</button>
  </div>
  <form class="row p-5 d-flex justify-content-center" @submit.prevent="submitHandler" v-if="viewForm">
    <div class="mb-3 col-5">
      <label for="fname" class="form-label">First Name</label>
      <input type="text" class="form-control" id="fname" name="fname" />
    </div>
    <div class="mb-3 col-5">
      <label for="lname" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lname" name="lname" />
    </div>
    <div class="mb-3 col-5">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" />
    </div>
    <div class="mb-3 col-5">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name="password" />
    </div>
    <div class="mb-3 col-5">
      <label for="role" class="form-label">Role</label>
      <select class="form-select" id="role" aria-label="Default select example">
        <option selected disabled>Open this select menu</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
    <div class="my-4 text-center">
      <button type="submit" class="btn btn-dark col-2">Add</button>
    </div>
  </form>
  <users :data="data" v-if="viewUsers" @onDelete="deleteHandler"></users>
  <admins :data="data" v-if="viewAdmins" @onDelete="deleteHandler"></admins>
</template>

<script>
import users from "./Users.vue";
import admins from "./Admins.vue";
export default {
  name: "Form",
  components: {
    users,
    admins,
  },
  data() {
    return {
      viewForm: true,
      viewUsers: false,
      viewAdmins: false,
      data: [],
    };
  },
  methods: {
    submitHandler(e) {
      // console.log(e.target.fname.value);
      // console.log("submit");
      this.data.push({
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      });
      alert("Info has been added successfully");
      console.log(this.data);
      e.target.reset();
    },
    handleFormView() {
      this.viewUsers = false;
      this.viewAdmins = false;
      return (this.viewForm = !this.viewForm);
    },
    handleUsersView() {
      this.viewForm = false;
      this.viewAdmins = false;
      return (this.viewUsers = !this.viewUsers);
    },
    handleAdminsiew() {
      this.viewForm = false;
      this.viewUsers = false;
      return (this.viewAdmins = !this.viewAdmins);
    },
    deleteHandler(index) {
      this.data.splice(index, 1);
      alert("Deleted Successfully");
    },
  },
};
</script>

<style scoped></style>
