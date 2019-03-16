require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

Vue.component('nav-bar', require('./components/NavBar'));

const app = new Vue({
    el: '#app',
    router
});
