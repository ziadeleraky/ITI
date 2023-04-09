<template>
  <div class="rounded-3 p-4 shadow mt-5">
    <div class="d-flex justify-content-between pb-4">
      <p class="m-0 h5">{{ props.header }}</p>
      <div class="d-flex align-items-center me-1 color-blue pointer">
        <p class="m-0 me-2">SEE ALL</p>
        <i class="fa-solid fa-greater-than"></i>
      </div>
    </div>
    <Cards :range="props.range" />
  </div>
</template>

<script>
import Cards from "./Cards.vue";
export default {
  name: "CardsContainer",
  components: {
    Cards,
  },
  props: ["header", "range"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>
.color-blue {
  color: rgb(0, 0, 137);
}
</style>
