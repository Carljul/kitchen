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

        // Updating Price
        cart = cart.map((item) => {
            return {
                ...item,
                subTotal: item.product.price * item.quantity
            }
        })

        sessionStorage.setItem('love_cart', JSON.stringify(cart))

        commit('updateCartState', cart)
    },
    addToCart({ commit }, { product, quantity = 0 }) {
        let cart = []

        if (sessionStorage.getItem('love_cart') !== null) {
            cart = JSON.parse(sessionStorage.getItem('love_cart'))
            let isBundle = product.product.isBundle
            let findItemIndex = isBundle
                ? cart.findIndex((item) => item.product.id == product.product.id && item.product.isBundle == true)
                : cart.findIndex((item) => item.product.id == product.product.id)

            if (findItemIndex !== -1) {
                if (quantity > 0) {
                    let currentQuantity = quantity
                    // If there is quantity provided
                    cart[findItemIndex].quantity = currentQuantity
                    cart[findItemIndex].subTotal = cart[findItemIndex].product.price * currentQuantity
                } else {
                    let currentQuantity = cart[findItemIndex].quantity + 1
                    // if there is no quantity provided but clicked add to cart
                    cart[findItemIndex].quantity = currentQuantity
                    cart[findItemIndex].subTotal = cart[findItemIndex].product.price * currentQuantity
                }
            } else {
                if (quantity > 0) {
                    // If there is quantity provided
                    cart.push({
                        ...product,
                        quantity: quantity,
                        subTotal: product.product.price * quantity
                    })
                } else {
                    // if there is no quantity provided but clicked add to cart
                    cart.push({
                        ...product,
                        quantity: 1,
                        subTotal: product.product.price
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
    }
}

const getters = {
    cartCount: (state) => {
        return state.cart.length;
    },
    cartItems(state) {
        return state.cart
    },
    cartsTotal(state) {
        return state.cart.reduce((accumulator, items) => {
            return accumulator + items.subTotal
        }, 0)
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
