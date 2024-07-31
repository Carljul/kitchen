import './bootstrap';

import { createApp } from 'vue';

// Packages
import 'flowbite'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import app from './components/app.vue';
import router from './router'

// Utilities
import './library/icons'
import Conts from './library/conts'

createApp(app)
    .use(router)
    .use(Conts)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
