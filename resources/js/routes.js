import Vue from 'vue';
import Router from 'vue-router';

import Lesson from './components/Lesson.vue';
import view404 from './components/404.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: ':slug',
            name: 'lesson',
            component: Lesson,
            props: true
        },
        {
            path: '*',
            component: view404
        }
    ],
    linkExactActiveClass: 'active',
    mode: 'history',
    scrollBehavior(){
        return {x:0, y:0}
    }
});