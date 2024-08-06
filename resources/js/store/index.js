import { createStore } from "vuex";
import cartStore from "./modules/cart";

const store = createStore({
    modules: {
        cart: cartStore
    }
})

export default store