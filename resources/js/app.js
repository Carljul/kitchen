import './bootstrap';

import { createApp } from 'vue';

// Packages
import 'flowbite'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import app from './pages/app.vue';
import router from './router'
import Vuex from 'vuex';
import store from './store';

// Toaster
import Toaster from "@meforma/vue-toaster";

// Utilities
import './library/icons'
import Conts from './library/const'


createApp(app)
    .use(router)
    .use(Vuex)
    .use(store)
    .use(Conts)
    .use(Toaster, {
        position: "top-right",
        dismissible: true,
        duration: 1000
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
