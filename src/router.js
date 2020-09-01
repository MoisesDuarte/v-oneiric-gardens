import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/stories',
            name: 'Stories',
            component: () => import('./views/Stories.vue')
        },
        {
            path: '/categories',
            name: 'Categories',
            component: () => import('./views/Categories.vue')
        },
        {
            path: '/stories/:id',
            name: 'Story View',
            component: () => import('./views/StoryView.vue')
        }
    ]
})