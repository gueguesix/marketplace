<template>
    <div id="shopping-cart">

        <div class="cart-btn center card-action">
            <a class="waves-effect waves-light btn cart cyan">Cart <span class="badge red">{{ nbItems }}</span></a>
        </div>

        <table v-for="item in cart">
            <tr>
            <td class="center-align center">{{ item.name }}</td>
            <td class="center-align center">{{ item.price + "€" }}</td>
            <td class="center-align center">{{ "x" + item.quantity }}</td>
            <td class="center-align center">
                <a class="waves-effect waves-light btn red" @click="removeFromCart(item)" style="padding-top: 5px;"><IosCloseIcon w="20" h="20" /></a>         
            </td>
            </tr>  
        </table>
        
        <table>
            <tr>
                <th>Total</th>
                <th>{{ totalPrice + '€'}}</th>
            </tr>   
        </table>

        <div class="card">
            <div class="card-action center-align center">
                <div v-if="totalPrice != 0">
                   <a class="waves-effect waves-light btn">Checkout</a> 
                </div>
                <div v-else>
                    <p>Sorry your cart is empty !</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import IosCloseIcon from '../node_modules/vue-ionicons/dist/ios-close.vue'
export default {
  name: 'shoppingCart',
  computed: {
    cart() { return this.$store.getters.cart; },
    cartLength(){ return this.cart.length + this.item.quantity },
    totalPrice() { return this.$store.getters.totalPrice},
    nbItems() { return this.$store.getters.nbItems}
//     cart(){
//         return this.$store.getters.inCart.map((cartproduct) => {
//             return this.$store.getters.products.find((itemForSale) => {
//                 return cartproduct === itemForSale.id;
//             });
//         });
//     },
//     total(){
//         return this.cart.reduce((acc, cur) => acc + cur.price, 0);
//     }
  },
  components: {
      IosCloseIcon
  },
  methods: {
      removeFromCart(item) {
          this.$store.dispatch('removeFromCart', item)
      }
  }
};
</script>

<style>
    table {
        width: 320px;
    }
    tr {
        width: 300px;
    }
    td {
        width: 90px;
        margin: auto;
        padding: 2px;
    }
    cart {
        width: 100%;
    }
</style>