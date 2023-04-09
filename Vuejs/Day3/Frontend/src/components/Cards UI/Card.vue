<template>
  <div class="card card-height">
    <Rate :rate="props.cardData.rate || 4.9" />
    <img :src="`${props.cardData.thumbnail}`" class="card-img-top" alt="..." />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5>{{ props.cardData.title }}</h5>
      <p class="card-text description">
        {{ props.cardData.short_description }}
      </p>
      <Button :text="`MORE INFO`"/>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Rate from "./Rate.vue";

export default {
  name: "Card",
  components: {
    Button,
    Rate,
  },
  props: ["cardData"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>
.description {
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-height {
  height: 350px;
}
</style>
