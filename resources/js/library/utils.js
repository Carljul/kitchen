const addOrUpdateToCart = (product, quantity = null) => {
    if (sessionStorage.getItem('love_cart') !== null) {
        let cart = JSON.parse(sessionStorage.getItem('love_cart'))
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
        sessionStorage.setItem('love_cart', JSON.stringify(cart))
    } else {
        sessionStorage.setItem('love_cart', JSON.stringify([{
            ...product,
            quantity: quantity > 0 ? quantity : 1
        }]))
    }
}

const removeItemToCart = (product) => {
    if (sessionStorage.getItem('love_cart') !== null) {
        let cart = JSON.parse(sessionStorage.getItem('love_cart'))
        let findItemIndex = cart.findIndex((item) => item.id == product.id)

        if (findItemIndex !== -1) {
            cart.splice(findItemIndex, 1)
        }
        sessionStorage.setItem('love_cart', JSON.stringify(cart))
    }
}

const getCartItems = () => {
    if (sessionStorage.getItem('love_cart') !== null) {
        let cart = JSON.parse(sessionStorage.getItem('love_cart'))
        return cart
    }

    return []
}

const getCartCount = () => {
    if (sessionStorage.getItem('love_cart') !== null) {
        let cart = JSON.parse(sessionStorage.getItem('love_cart'))
        return cart.length
    }

    return 0
}


export default {
    install(app) {
        app.config.globalProperties.$addOrUpdateToCart = addOrUpdateToCart;
        app.config.globalProperties.$getCartItems = getCartItems;
        app.config.globalProperties.$getCartCount = getCartCount;
        app.config.globalProperties.$removeItemToCart = removeItemToCart;
    }
}