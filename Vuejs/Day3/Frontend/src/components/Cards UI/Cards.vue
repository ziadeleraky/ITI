<template>
  <div class="row g-4">
    <template v-for="card in cards.slice(props.range[0], props.range[1])" :key="card.id">
      <div class="col-3">
        <Card :cardData="card" />
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import Card from "./Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  props: ["range"],

  setup(props) {
    let cards = ref([]);

    axios.get("http://localhost:3000/games").then((res) => {
      cards.value = res.data;
    });

    return { cards, props };
  },
};
</script>

<style scoped></style>
