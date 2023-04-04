<template>
  <div>
    <div class="" v-if="data.length > 0">
      <div class="row">
        <div class="col-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Role</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in data" :key="user.email">
                <template v-if="user.role === 'user'">
                  <td>{{ user.fname }}</td>
                  <td>{{ user.lname }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.password }}</td>
                  <td>{{ user.role }}</td>
                  <td><button class="btn btn-danger" @click="$emit('onDelete', index)">Delete</button></td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  props: ["data"],
  emits: ["onDelete"],
};
</script>

<style scoped></style>
