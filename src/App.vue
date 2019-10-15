<template>
  <div id="app">
    <navbar/>
    <div class="row"  style="margin-top: 100px;">
      <div class="col l9">
        <productPage v-for="product in Products.products" :key="product.id" :id="product.id" :name="product.name" :image="product.image" :price="product.price" />
      </div>
      <div class="col l3">
        <shoppingCart/>
      </div>
    </div>
  </div>
</template>

<script>

  import navbar from './navbar.vue';
  import productPage from './productPage.vue';
  import shoppingCart from './shoppingCart.vue';
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      navbar,
      productPage,
      shoppingCart
    },
    mounted() {
      this.$store.dispatch('loadProducts')
    },
    computed: {
      Products() {
        return this.$store.state.products;
      }
    }
  }

</script>

<style>

</style>
