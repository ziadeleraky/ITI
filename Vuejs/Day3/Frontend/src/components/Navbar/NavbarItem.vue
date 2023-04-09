<template>
  <div class="border rounded-4 navbar-item px-2 pointer" :class="{ navbarActive: props.genre === 'Fantasy' }">
    <p class="m-0">{{ props.genre }}</p>
    <i class="fa-solid fa-check" v-if="props.genre === 'Fantasy'"></i>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["genre"],
  setup(props) {
    // console.log(props.genre);
    return { props };
  },
};
</script>

<style scoped>
.navbarActive {
  background-color: rgb(0, 0, 137);
  color: white;
}
.navbar-item {
  /* position: absolute; */
  display: flex;
  align-items: center;
  width: fit-content;
  /* background-color: #ffffffb0; */
  gap: 5px;
  padding: 1px 6px;
  /* top: 10px;
  left: 10px; */
}
</style>
