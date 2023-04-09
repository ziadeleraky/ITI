<template>
  <div v-if="props.rate" class="border rounded-4 rate">
    <i class="fa-solid fa-star"></i>
    <p class="m-0">{{ props.rate }}</p>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: ["rate"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>
.rate {
  position: absolute;
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: #ffffffb0;
  gap: 5px;
  padding: 1px 6px;
  top: 10px;
  left: 10px;
}
</style>
