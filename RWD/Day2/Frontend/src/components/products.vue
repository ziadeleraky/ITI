<template>
  <div class="container bg-slate-800">
    <div class="flex flex-row flex-wrap gap-3 p-4 justify-center">
      <div
        class="w-full md:w-5/12 content-card lg:w-3/12 bg-slate-700 text-white rounded-2xl p-5 shadow-xl text-center md:text-left"
        v-for="product in data"
        :key="product.id"
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
              <div class="mt-4">
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
  name: "Products",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getProducts() {
      axios.get("http://localhost:3000/products").then((res) => {
        this.data = res.data;
      });
    },
    deleteProduct(id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getProducts();
  },
  updated() {
    // this.getProducts();
    // console.log("test");
  },
};
</script>

<style scoped>
/* body {
  margin-top: 20px;
}

.card-big-shadow {
  max-width: 320px;
  position: relative;
}

.coloured-cards .card {
  margin-top: 30px;
}

.card[data-radius="none"] {
  border-radius: 0px;
}
.card {
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.card[data-background="image"] .title,
.card[data-background="image"] .stats,
.card[data-background="image"] .category,
.card[data-background="image"] .description,
.card[data-background="image"] .content,
.card[data-background="image"] .card-footer,
.card[data-background="image"] small,
.card[data-background="image"] .content a,
.card[data-background="color"] .title,
.card[data-background="color"] .stats,
.card[data-background="color"] .category,
.card[data-background="color"] .description,
.card[data-background="color"] .content,
.card[data-background="color"] .card-footer,
.card[data-background="color"] small,
.card[data-background="color"] .content a {
  color: #ffffff;
}
.card.card-just-text .content {
  padding: 50px 65px;
  text-align: center;
}
.card .content {
  padding: 20px 20px 10px 20px;
}
.card[data-color="blue"] .category {
  color: #7a9e9f;
}

.card .category,
.card .label {
  font-size: 14px;
  margin-bottom: 0px;
}
.card-big-shadow:before {
  background-image: url("http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: -12%;
  content: "";
  display: block;
  left: -12%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
h4,
.h4 {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1.2em;
  margin: 10px 0;
  text-shadow: 1px 1px 4px black;
}
h6,
.h6 {
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
}
.card .description {
  font-size: 16px;
  color: #66615b;
}
.content-card {
  margin-top: 30px;
}
a:hover,
a:focus {
  text-decoration: none;
}

======== COLORS ===========
.card[data-color="blue"] {
  background: #b8d8d8;
}
.card[data-color="blue"] .description {
  color: #506568;
}

.card[data-color="green"] {
  background: #d5e5a3;
}
.card[data-color="green"] .description {
  color: #60773d;
}
.card[data-color="green"] .category {
  color: #92ac56;
}

.card[data-color="yellow"] {
  background: #ffe28c;
}
.card[data-color="yellow"] .description {
  color: #b25825;
}
.card[data-color="yellow"] .category {
  color: #d88715;
}

.card[data-color="brown"] {
  background: #d6c1ab;
}
.card[data-color="brown"] .description {
  color: #75442e;
}
.card[data-color="brown"] .category {
  color: #a47e65;
}

.card[data-color="purple"] {
  background: #baa9ba;
}
.card[data-color="purple"] .description {
  color: #3a283d;
}
.card[data-color="purple"] .category {
  color: #5a283d;
}

.card[data-color="orange"] {
  background: #ff8f5e;
}
.card[data-color="orange"] .description {
  color: #772510;
}
.card[data-color="orange"] .category {
  color: #e95e37;
} */
</style>
