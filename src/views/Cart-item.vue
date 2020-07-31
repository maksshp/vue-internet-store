<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="cart-item__wrapper">
          <h4 >{{cart_item_data.title}}</h4>
          <img :src=cart_item_data.image alt="" style="height: 100px">
          <div class="cart-item__count mt-4">
            <span @click="decrement_item" class="cart-item_dec-btn">-</span>
            <span class=" cart-item__price">{{cart_item_data.quantity}}</span>
            <span @click="increment_item" class="cart-item_inc-btn">+</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "cart-item",
  props:{
  cart_item_data:{
    type:Object,
    default(){
      return {}
    }
  },
  },
  methods:{
    increment_item(){
        this.$emit('increment')
    },
    decrement_item(){
        this.$emit('decrement')
    }
  },
  computed:{
    getTotalQua(){
      return this.$store.getters.QUA
    }
  }
}
</script>

<style lang="scss">
    .cart-item__price{
      border: 1px solid #bbb8b8;
      border:{
        radius: 5px;
        width: 2px;
        color: #a8a8a8;
      }
      padding: 5px;
      width: 40px;
      text-align: center;
    }
    .cart-item_inc-btn,
    .cart-item_dec-btn{
      font-size: 30px;
      color: blue;
      cursor: pointer;
    }
    .cart-item__count{
      display: flex;
      width: 100px;
      justify-content: space-around;
      align-items: center;
    }
    .cart-item__wrapper{
      padding: 10px;
      border: 1px solid gray;
      border-radius: 5px;
      z-index: 1;
    }
</style>