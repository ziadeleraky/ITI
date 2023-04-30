<template>
  <Navbar v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Products from "./components/products.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Products,
  },
};
</script>

<style scoped></style>
