import  Vue  from  'vue';
import  Vuex  from  'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

let cart = window.localStorage.getItem('cart');
let nbItems = window.localStorage.getItem('nbItems');

export default new Vuex.Store({

    state: {
        products: [],
        cart: cart ? JSON.parse(cart) : [],
        nbItems: nbItems ? JSON.parse(nbItems) : 0
    },

    getters: {
        products: state => state.products,
        cart: state => state.cart,
        nbItems: state => state.nbItems,
        totalPrice: state => {
            let total = 0;
            state.cart.filter((item) => {
                total += (item.price * item.quantity);
            });
            return total;
        }
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
            console.log("the state is now", state.products)
        },
        ADD_TO_CART(state, item) {
            let found = state.cart.find(product => product.id == item.id );
            if(found){
                found.quantity++;
            }else{
                state.cart.push(item);
            }
            state.nbItems++;
            this.commit('SAVE_CART');
        },
        REMOVE_FROM_CART(state, item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
            else {
                let index = state.cart.indexOf(item);
                state.cart.splice(index, 1)
            }
            state.nbItems--;
            this.commit('SAVE_CART');
        },
        SAVE_CART(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('nbItems', state.nbItems);
        }
    },

    actions: {
        loadProducts({commit}) {
            axios
            .get('https://my-json-server.typicode.com/gueguesix/fake-api/db')
            .then(r => r.data)
            .then(products => {
                commit('SET_PRODUCTS', products)
                console.log("request result is", products)
            })
        },
        addToCart(context, item) {
            context.commit('ADD_TO_CART', item);
        },
        removeFromCart(context, item) {
            context.commit('REMOVE_FROM_CART', item);
        }
    }

})