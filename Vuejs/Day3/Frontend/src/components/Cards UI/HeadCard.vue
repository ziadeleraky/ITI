<template>
  <div>
    <div class="card mb-3 shadow mb-5" style="border: 0">
      <Rate :rate="4.9" />
      <div class="row g-0">
        <div class="col-8">
          <img src="../../assets/imgs/fall-guys.jpg" class="img-fluid rounded-start" />
        </div>
        <div class="col-4">
          <div class="card-body">
            <h5 class="card-title">{{ dataObj.title }}</h5>
            <p>{{ dataObj.genre }}</p>
            <p class="card-text">
              {{ dataObj.short_description }}
            </p>
            <p class="card-text"><small class="text-secondary">300k Downloads</small></p>
            <Button :text="`MORE INFO`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Rate from "./Rate.vue";

export default {
  name: "HeadCard",
  components: {
    Button,
    Rate,
  },
  setup() {
    const dataObj = {
      id: 523,
      title: "Fall Guys",
      thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
      short_description:
        "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
      game_url: "https://www.freetogame.com/open/fall-guys",
      genre: "Battle Royale",
      platform: "PC (Windows)",
      publisher: "Mediatonic",
      developer: "Mediatonic",
      release_date: "2020-08-04",
      freetogame_profile_url: "https://www.freetogame.com/fall-guys",
    };

    return {
      dataObj,
    };
  },
};
</script>

<style scoped>
.color-blue {
  color: rgb(0, 0, 137);
}
</style>
