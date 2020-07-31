<template>
  <div class="wrapper">
    <router-view>

    </router-view>
<!--    <Cart v-if="CART.length"/>-->
<!--    <Product/>-->
  </div>
</template>

<script>
// import Cart from "@/views/Cart";
// import Product from "@/views/Product";
import {mapGetters} from 'vuex'
export default {
  name: "MainWrapper",
  // components: {Product, Cart},
  methods:{
  },
  computed:{
    ...mapGetters(['CART'])
  }
}
</script>

<style scoped>

</style>