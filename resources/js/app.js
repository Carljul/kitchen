import './bootstrap';

import { createApp } from 'vue';

import app from './components/app.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'
import './library/icons'
import 'flowbite'

createApp(app)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
