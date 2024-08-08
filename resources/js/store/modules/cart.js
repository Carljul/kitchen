import Vuex from 'vuex';
const state = () => ({
    cart: [],
    cartCount: 0
})

const mutations = {
    addToCart(state, data){
        state.cart = [data]
    },
    getCartCount(state, data) {
        state.cartCount = data
    }
}

const actions = {
    addToCart({commit}, product, quantity = 0) {
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
        commit('addToCart', cart)
    },

    getCartCount({commit, state}) {
        commit('getCartCount', state.cart.length)
    }
}

const getters = {
    cartCount: (state) => {
        return state.cart.length;
    }
};

const cartStore = new Vuex.Store({
    namespaced: true,
    state,
    mutations,
    actions,
    // getters
});

export default cartStore
