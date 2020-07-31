<template>
  <body>
  <div class="app-containerproduct-box__btn pt-40">


    <div class="wrap">
      <section class="container">
        <div class="filter-box">
          <div class="select-box">
            <label class="filter-label">Категория</label>
            <select class="select-control" id="food-filter"
              @change="foodFilter"
            >
              <option value="all">Все</option>
              <option value="breakfasts">Завтраки</option>
              <option  value="first meal">Первые блюда</option>
              <option  value="garnish">Гарниры</option>
            </select>
          </div><!-- /.select-box -->
          <div class="price-select-box">
            <label class="filter-label">Цена</label>
            <select class="select-control" id="price-filter"
            @change="priceFilter"
            >
              <option value="all">Все</option>
              <option value="30">До 30 грн</option>
              <option value="50">До 50 грн</option>
              <option value="100">До 100 грн</option>
              <option value="150">До 150 грн</option>
            </select>
          </div><!-- /.price-select-box -->
          <div class="cart" >
            Product in cart:{{CART.length}}
            <RouterLink to="/cart">
              <img src="https://image.flaticon.com/icons/svg/3225/3225209.svg" alt="" class="cart_img">
            </RouterLink>
          </div>

        </div><!-- /filter-box-->



        <div class="products-box grid-box" >

          <div class="product-box__item"
               :data-id="product.id"
               v-for="(product) in filteredProducts"
               v-bind:key="product.id"
               :cart_item_data="product"
               @increment="increment(product.id)"
               @decrement="decrement(product.id)"
          >

            <h3 class="product-box__title">{{product.title}}</h3>
            <div class="product-box__img">
              <img class="img-fluid" :src=product.image>
            </div>
            <div class="product-box__meta">
              <p>{{product.price}}</p>
              <div class="qty">
              </div>
              <button class="btn btn-info"
                      :data-id="product.id"
                      :data-price="product.price"
                      :data-qua="product.quantity"
                      :data-title="product.title"
                      :data-img="product.image"
                      @click="addToCart"
                      >
                  Add to cart
              </button>

            </div>
          </div>

        </div><!-- /product-box-->

      </section>
    </div>

  </div><!-- /.app-container -->
  </body>

</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: "Product",
  data(){
    return{
      productData:[],
      currentQua: 0,
      sortedProducts:[]
    }
  },
  methods:{
    ...mapGetters(['getAllProducts','FILTERED_PRODUCTS']),
    ...mapActions(['ADD_TO_CART','INCREMENT','DECREMENT']),

    addToCart(e){
      let product = {
        id:e.currentTarget.dataset.id,
        price:e.currentTarget.dataset.price,
        quantity:e.currentTarget.dataset.qua,
        title:e.currentTarget.dataset.title,
        image:e.currentTarget.dataset.img
      }
      e.currentTarget.setAttribute('disabled',true)
      e.currentTarget.setAttribute('class','btn disabled')
      this.ADD_TO_CART(product)
      this.currentQua = product.quantity
    },
    foodFilter(e){
        this.sortedProducts =[]
        let vm = this
      this.allProducts.map(function (item){
        if (e.currentTarget.value == item.category){
          vm.sortedProducts.push(item)
        }
      })
    },
    priceFilter(e){
      let newArr = this.filteredProducts.filter(item => item.price <= e.currentTarget.value)
      this.sortedProducts = newArr
    }
  },
  computed:{
    ...mapGetters(['CART','FILTERED_PRODUCTS']),
    allProducts(){
      return this.$store.getters.getAllProducts
    },
    getTotalQua(){
      return this.$store.getters.QUA
    },
    filteredProducts(){
      if (this.sortedProducts.length){
        return this.sortedProducts
      }
      else {
        return this.allProducts
      }
    },

  },



}
</script>

<style lang="scss">
  .cart_img{
    height: 30px;
  }
  .cart{
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .disabled-btn{
    border: 0;
    padding: 4px 8px;
    background: #d5dde3;
    color: #fff;
  }
</style>