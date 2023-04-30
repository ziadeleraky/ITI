<template>
  <div class="bg-zinc-800 text-zinc-400">
    <nav class="py-7">
      <div class="container mx-auto px-10">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <a href="#" class="no-underline hover:text-zinc-400 text-zinc-300 text-2xl mb-3 md:mb-0"
            >Buyoo</a
          >
          <div class="">
            <ul class="flex flex-col text-2xl mb-0 p-0 items-center md:flex-row">
              <li>
                <router-link
                  class="no-underline hover:text-zinc-400 text-zinc-200 text-2xl"
                  to="/products"
                  >Dashboard</router-link
                >
              </li>
              <li>
                <router-link
                  class="no-underline hover:text-zinc-400 text-zinc-200 text-2xl md:ps-5"
                  to="/add"
                  >Add Products</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
