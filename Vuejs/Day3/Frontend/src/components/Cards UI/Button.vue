<template>
  <div>
    <button class="color-blue w-100 rounded-1" @click.prevent="">{{ props.text }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
  setup(props) {
    return { props };
  },
};
</script>

<style scoped>
.color-blue {
  background-color: rgb(0, 0, 137);
  color: white;
}
</style>
