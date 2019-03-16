require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

import NavBar from './components/NavBar.vue';

const app = new Vue({
    el: '#app',
    components: {
        NavBar
    },
    router
});
