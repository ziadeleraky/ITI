import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";




import App from "./App.vue";
import Products from "./components/products.vue";
import AddProduct from "./components/addProduct.vue";
import ProductDetails from "./components/productDetails.vue";
import Error from "./components/error.vue";
import UpdateProduct from "./components/updateProduct.vue";

const routes = [
  {
    path: "/",
    component: Products,
    alias: "/products",
  },
  {
    path: "/add",
    component: AddProduct,
  },
  {
    path: "/products/:id",
    component: ProductDetails,
  },
  {
    path: "/products/:id/update",
    component: UpdateProduct,
  },
  {
    path: "/:NotFound(.*)*",
    component: Error,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
