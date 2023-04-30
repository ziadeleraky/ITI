<template>
  <div class="container bg-slate-800 h-screen">
    <div class="flex flex-row flex-wrap gap-3 p-4 justify-center">
      <div
        class="w-full md:w-3/12 content-card bg-slate-700 text-white rounded-2xl p-5 shadow-xl text-center md:text-left"
      >
        <div class="">
          <div
            class="card card-just-text"
            data-background="color"
            data-color="blue"
            data-radius="none"
          >
            <div class="content">
              <h6 class="category">
                Product <strong>#{{ product.id }}</strong>
              </h6>
              <h4 class="text-2xl text-orange-200">
                <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
              </h4>
              <p class="description"><strong>Price:</strong> ${{ product.price }}</p>
              <p class="description"><strong>Category:</strong> {{ product.category }}</p>
              <p class="description"><strong>Description:</strong> {{ product.description }}</p>
              <div class="mt-5">
                <router-link :to="`/products/${product.id}/update`" class="bg-purple-700 px-3 py-2 shadow-lg rounded-xl"
                  >Update</router-link
                >
                <button class="bg-red-700 px-3 py-2 shadow-lg rounded-xl ms-2" @click="deleteProduct(product.id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    };
  },
  methods: {
    getProduct() {
      axios.get(`http://localhost:3000/products/${this.id}`).then((res) => {
        // console.log(res.data);
        this.product = res.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped></style>
