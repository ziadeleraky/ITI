<template>
  <Header />
  <Navbar />
  <div class="body bg">
    <div class="container">
      <HeadCard />
      <CardsContainer :header="`Most Recommendation`" :range="[0,4]"/>
      <CardsContainer :header="`Most Popular`" :range="[5,9]"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Cards UI/Button.vue";
import Cards from "./components/Cards UI/Cards.vue";
import Rate from "./components/Cards UI/Rate.vue";
import CardsContainer from "./components/Cards UI/CardsContainer.vue";
import HeadCard from "./components/Cards UI/HeadCard.vue";
import Navbar from "./components/Navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Header,
    Button,
    CardsContainer,
    Cards,
    Rate,
    HeadCard,
    Navbar,
  },
};
</script>

<style scoped>
.body {
  padding: 50px 0 75px;
}
.bg {
  background-color: #f5f5f5;
}
</style>
