<template>
  <div class="container bg-slate-800 h-screen">
    <form class="flex flex-col md:flex-row items-center flex-wrap p-5 justify-center" @submit.prevent="updateHandler">
      <div class="mb-3 w-full md:w-5/12 flex flex-col items-center">
        <label for="name" class="text-white">Product Name</label>
        <input type="text" class="w-6/12" v-model="name" id="name" name="name" />
      </div>
      <div class="mb-3 w-full md:w-5/12 flex flex-col items-center">
        <label for="price" class="text-white">Product Price</label>
        <input type="number" class="w-6/12" v-model="price" id="price" name="price" />
      </div>
      <div class="mb-3 w-full md:w-5/12 flex flex-col items-center">
        <label for="category" class="text-white">Product Category</label>
        <input type="text" class="w-6/12" v-model="category" id="category" name="category" />
      </div>
      <div class="mb-3 w-full md:w-5/12 flex flex-col items-center">
        <label for="desc" class="text-white">Product Description</label>
        <input type="text" class="w-6/12" v-model="desc" id="desc" name="desc" />
      </div>
      <div class="my-4 text-center w-full">
        <button type="submit" class="bg-purple-700 px-3 py-2 shadow-lg rounded-xl w-6/12 md:w-2/12 text-white">Update Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateProduct",
  data() {
    return {
      name: "",
      price: "",
      category: "",
      desc: "",
    };
  },
  methods: {
    updateHandler() {
      const updatedProduct = {
        name: this.name,
        price: this.price,
        category: this.category,
        description: this.desc,
      };
      axios.put(`http://localhost:3000/products/${this.$route.params.id}`, updatedProduct).then(() => {
        this.$router.push("/products");
      });
    },
    getProductById() {
      axios.get(`http://localhost:3000/products/${this.$route.params.id}`).then((res) => {
        this.name = res.data.name;
        this.price = res.data.price;
        this.category = res.data.category;
        this.desc = res.data.description;
      });
    },
  },
  created() {
    this.getProductById();
  },
};
</script>

<style scoped></style>
