<template>
    <div class="col l4">
        <div class="card">
            <div class="card-image">
                <img :src="image" height="250">
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="center col s6">
                        {{ name }}
                    </div>
                    <div class=" center col s6">
                        {{ "$" + price }}
                    </div>
                </div>
            </div>
            <div class="card-action">
                <a class="waves-effect waves-light btn blue lighten-2"  @click="addToCart">Add To Cart</a>
            </div>
        </div>
    </div>
</template>

  

<script>

export default {
    name: 'productPage',
    props: {
    name: String,
    price: String,
    image: String,
    id: Number
  },
  data() {
    return {
        item :{
            name: this.name,
            image: this.image,
            price: this.price,
            id: this.id,
            quantity: 1,
        }
    }
  },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', this.item);
        }
    },
}

</script>