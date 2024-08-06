import Vuex from 'vuex';

const cartStore = new Vuex.Store({
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        ADD_TO_CART(state, product, quantity = null) {
            let cart = []
            if (sessionStorage.getItem('love_cart') !== null) {
                cart = JSON.parse(sessionStorage.getItem('love_cart'))
                let findItemIndex = cart.findIndex((item) => item.id == product.id)

                if (findItemIndex !== -1) {
                    if (quantity > 0) {
                        // If there is quantity provided
                        cart[findItemIndex].quantity = quantity
                    } else {
                        // if there is no quantity provided but clicked add to cart
                        cart[findItemIndex].quantity = cart[findItemIndex].quantity + 1
                    }
                } else {
                    if (quantity > 0) {
                        // If there is quantity provided
                        cart.push({
                            ...product,
                            quantity: quantity
                        })
                    } else {
                        // if there is no quantity provided but clicked add to cart
                        cart.push({
                            ...product,
                            quantity: 1
                        })
                    }
                }
            } else {
                cart.push({
                    ...product,
                    quantity: quantity > 0 ? quantity : 1
                })
            }
            sessionStorage.setItem('love_cart', JSON.stringify(cart))
            state.cart = cart
        },
        SET_CART(state, cart) {
            state.cart = cart;
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product, quantity);
        },
        initializeCart({ commit }) {
            const cart = JSON.parse(sessionStorage.getItem('love_cart')) || [];
            commit('SET_CART', cart);
        }
    },
    getters: {
    }
})

export default cartStore