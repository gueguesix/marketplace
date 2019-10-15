<template>
    <div id="shopping-cart">

        <div class="cart-btn center">
            <div class="waves-effect waves-light card-panel cyan btn"><span class="col">Cart</span> <span class="white-text col nbItems">{{ nbItems }}</span></div>
        </div>

        <table v-for="item in cart">
            <tr>
            <td class="center-align center tdCart">{{ item.name }}</td>
            <td class="center-align center tdCart">{{ item.price + "€" }}</td>
            <td class="center-align center tdCart">{{ "x" + item.quantity }}</td>
            <td class="center-align center tdCart">
                <a class="waves-effect waves-light btn red" @click="removeFromCart(item)" style="padding-top: 5px;"><IosCloseIcon w="20" h="20" /></a>         
            </td>
            </tr>  
        </table>
        
        <table>
            <tr>
                <th class="center">Total</th>
                <th class="center">{{ totalPrice + '€'}}</th>
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

    td {
        width: 90px;
        margin: auto;
        padding: 2px;
    }
    .nbItems {
        font-size: 20px;
    }
</style>