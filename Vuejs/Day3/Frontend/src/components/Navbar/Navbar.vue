<template>
  <div class="d-flex g-3 justify-content-between py-2 bg-white navbar-shadow">
    <template v-for="genre in genres" :key="genre">
      <NavbarItem :genre="genre" />
    </template>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
export default {
  name: "Navbar",
  components: {
    NavbarItem,
  },
  setup() {
    const genres = [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "History",
      "Horror",
      "Music",
      "Mystery",
      "Romance",
      "Science Fiction",
      "TV Movie",
      "Thriller",
      "War",
      "Western",
    ];
    return {
      genres,
    };
  },
};
</script>

<style scoped>
.navbar-shadow {
  position: relative;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.107);
}
</style>
