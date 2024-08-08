const state = () => ({
    cart: [],
})

const mutations = {
    updateCartState(state, data) {
        state.cart = data
    },
}

const actions = {
    initializeCart({ commit, state }) {
        let cart = []
        if (sessionStorage.getItem('love_cart') !== null) {
            cart = JSON.parse(sessionStorage.getItem('love_cart'))
        } else if (state.cart.length > 0) {
            cart = state.cart
        }
        commit('updateCartState', cart)
    },
    addToCart({ commit }, product, quantity = 0) {
        let cart = []
        if (sessionStorage.getItem('love_cart') !== null) {
            cart = JSON.parse(sessionStorage.getItem('love_cart'))
            let findItemIndex = cart.findIndex((item) => item.product.id == product.product.id)

            if (findItemIndex !== -1) {
                if (quantity > 0) {
                    console.log(['findItemIndex 2', findItemIndex])
                    // If there is quantity provided
                    cart[findItemIndex].quantity = quantity
                } else {
                    console.log(['findItemIndex', findItemIndex])
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
                    console.log(['findItemIndex 3', findItemIndex])
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
        commit('updateCartState', cart)
    },
    removeItemToCart({ commit, state }, product) {
        let cart = []
        if (sessionStorage.getItem('love_cart') !== null) {
            cart = JSON.parse(sessionStorage.getItem('love_cart'))
        } else if (state.cart.length > 0) {
            cart = state.cart
        }

        if (cart.length > 0) {
            let findItemIndex = cart.findIndex((item) => item.product.id == product.id)

            if (findItemIndex !== -1) {
                cart.splice(findItemIndex, 1)
            }

            sessionStorage.setItem('love_cart', JSON.stringify(cart))
            commit('updateCartState', cart)
        }
    },
}

const getters = {
    cartCount: (state) => {
        return state.cart.length;
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
