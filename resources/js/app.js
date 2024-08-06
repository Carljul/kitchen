import './bootstrap';

import { createApp } from 'vue';

// Packages
import 'flowbite'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import app from './components/app.vue';
import router from './router'
import Vuex from 'vuex';
import store from './store';

// Toaster
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const toastSettings = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButton: true
}

// Utilities
import './library/icons'
import Conts from './library/const'
import Utilities from './library/utils'


createApp(app)
    .use(router)
    .use(Vuex)
    .use(store)
    .use(Conts)
    .use(Utilities)
    .use(Toast, toastSettings)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
