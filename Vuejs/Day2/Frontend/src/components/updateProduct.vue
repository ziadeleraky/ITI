<template>
  <div>
    <form class="row p-5 d-flex justify-content-center" @submit.prevent="updateHandler">
      <div class="mb-3 col-5">
        <label for="name" class="form-label">Product Name</label>
        <input type="text" class="form-control" v-model="name" id="name" name="name" />
      </div>
      <div class="mb-3 col-5">
        <label for="price" class="form-label">Product Price</label>
        <input type="number" class="form-control" v-model="price" id="price" name="price" />
      </div>
      <div class="mb-3 col-5">
        <label for="category" class="form-label">Product Category</label>
        <input type="text" class="form-control" v-model="category" id="category" name="category" />
      </div>
      <div class="mb-3 col-5">
        <label for="desc" class="form-label">Product Description</label>
        <input type="text" class="form-control" v-model="desc" id="desc" name="desc" />
      </div>
      <div class="my-4 text-center">
        <button type="submit" class="btn btn-dark col-2">Update Product</button>
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
