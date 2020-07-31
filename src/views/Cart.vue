<template>
  <div>
<!--    <h1 class="text-center">Totla: {{ cartTotalCost }}</h1>-->
    <div class="text-right">
      <router-link to="/">back to products</router-link>
      <button class="btn btn-success ml-4"
              :disabled="this.CART.length? false : true"
              @click="isFormActive=!isFormActive"
      >Success order
      </button>
    </div>
    <OrderForm
        v-if="isFormActive"
        @clouseForm="isFormActive=!isFormActive"
    />
    <p class="empty-cart">{{ this.CART.length ? '' : 'No product in carr...' }}</p>
    <CartItem
        v-for="(item,index) in CART"
        :key="item.id"
        :cart_item_data="item"
        @increment="increment_item(index)"
        @decrement="decrement_item(index)"
    >
    </CartItem>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CartItem from "@/views/Cart-item";
import OrderForm from "@/views/OrderForm";

export default {
  name: "Cart",
  data() {
    return {
      isFormActive: false,
      isCartLength: false
    }
  },
  components: {OrderForm, CartItem},
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      let result = []
      for (let item of this.CART) {
        result.push(item.price * item.quantity)
      }
      if (this.CART.length) {
        result = result.reduce(function (sum, el) {
          return sum + el
        })
      }
      return result
    },
  },
  methods: {
    ...mapActions(['ADD_TO_CART', 'INCREMENT', 'DECREMENT']),
    increment_item(index) {
      this.INCREMENT(index)
    },
    decrement_item(index) {
      this.DECREMENT(index)
    },
  }
}
</script>

<style lang="scss">
.products-in-cart {
  border: 1px solid green;
  padding: 20px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & img {
    height: 80px;
    padding-top: 10px;
  }
  .empty-cart{
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>