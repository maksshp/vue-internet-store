import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        title:'Овсяная каша с фруктами',
        image:'im1.jpg',
        price:25,
        id:1,
        quantity:1,
        category:'breakfasts'
      },
      {
        title:'Яичница глазунья с овощами на сковородке',
        image:'im2.jpg',
        price:25,
        id:2,
        quantity:1,
        category:'breakfasts'
      },
      {
        title:'Сет азербайджанский ',
        image:'im3.jpg',
        price:30,
        id:3,
        quantity:1,
        category:'first meal'
      },
      {
        title:'Яичница с помидорами по-бакински',
        image:'im4.jpg',
        price:40,
        id:4,
        quantity:1,
        category:'breakfasts'
      },
      {
        title:'Шпинатный крем-суп',
        image:'im5.jpg',
        price:60,
        id:5,
        quantity:1,
        category:'first meal'
      },
      {
        title:'Суп Пити',
        image:'im6.jpg',
        price:76,
        id:6,
        quantity:1,
        category:'first meal'
      },
      {
        title:'Борщ украинский',
        image:'im7.jpg',
        price:55,
        id:7,
        quantity:1,
        category:'first meal'
      },
      {
        title:'Суп Кюфта Бозбаш',
        image:'im8.jpg',
        price:80,
        id:8,
        quantity:1,
        category:'first meal'
      },
      {
        title:'Картофель фри',
        image:'im9.jpg',
        price:90,
        id:9,
        quantity:1,
        category:'garnish'
      },
      {
        title:'Картофель фри',
        image:'im10.jpg',
        price:130,
        id:10,
        quantity:1,
        category:'garnish'
      },
      {
        title:'Картофель фри',
        image:'im11.jpg',
        price:169,
        id:11,
        quantity:1,
        category:'garnish'
      },
      {
        title:'Картофель фри',
        image:'im12.jpg',
        price:190,
        id:12,
        quantity:1,
        category:'first meal'
      },
    ],
    cart:[],
    count:0,
    filteredProducts:[]

  },
  mutations: {
    SET_CART(state,product){
      if (state.cart.length){
        let isProductExist = false;
        state.cart.map(function (item){
          if (item.id ===product.id){
            isProductExist= true;
            item.quantity++

          }
        })
        if (!isProductExist){
          state.cart.push(product)
        }
      }else {
        state.cart.push(product)
      }

    },
    SET_INCREMENT(state,index){
      state.cart[index].quantity++
    },
    SET_DECREMENT(state,index){
      state.cart[index].quantity--

    if(state.cart[index].quantity==0){
        state.cart.splice(index,1)
      }
    }
  },
  actions: {
    ADD_TO_CART({commit},product){
      commit('SET_CART',product)
    },
    INCREMENT({commit},index){
      commit('SET_INCREMENT',index)
    },
    DECREMENT({commit},index){
      commit('SET_DECREMENT',index)
    }

  },
  getters:{
    getAllProducts(state){
      return state.products
    },
    CART(state){
      return state.cart
    },
    QUA(state){
      return state.count
    },
    FILTERED_PRODUCTS(state){
      return state.filteredProducts
    }

  }
})
