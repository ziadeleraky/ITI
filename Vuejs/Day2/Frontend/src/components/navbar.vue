<template>
  <div class="navbar-light bg-light">
    <nav class="navbar navbar-expand-lg container">
      <a class="navbar-brand" href="#">Buyoo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/products">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add Products</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
