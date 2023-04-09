<template>
  <div class="container">
    <nav class="d-flex align-items-center justify-content-between">
      <div class="logo d-flex align-items-center h4">
        <img src="../assets/imgs/Logo.png" alt="Logo" />
        <p class="mt-3 color-blue">Game Store</p>
      </div>
      <div class="ico">
        <i class="fa-solid fa-magnifying-glass mx-5"></i>
        <i class="fa-solid fa-ellipsis-vertical pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Account Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username / Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your username here" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type your password" />
              </div>
              <p class="color-blue d-flex justify-content-end pointer"><small>Forgot password?</small></p>
              <Button :text="`LOGIN`" />
              <p class="color-blue text-center mt-3 pointer"><small>Dont have an account? sign up!</small></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Cards UI/Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>

<style scoped>
.ico {
  font-size: 20px;
}

/* .pointer {
  cursor: pointer;
} */

.color-blue {
  color: rgba(0, 0, 137, 0.826);
}

.pointer {
  cursor: pointer;
}
</style>
