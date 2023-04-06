

import Post from '../pages/post/:id/[slug].vue'
import Posts from '../pages/post/index.vue'
import Home from '../pages/index.vue'
import About from '../pages/about.vue'

const routes = [
    {
        path: '',
        name: 'inicio',
        component: Home,
        props: true
    },
    {
        path: '/sobre',
        name: 'sobre nosotros',
        component: About,
        props: true
    },
    {
        path: '/posts',
        name: 'artículos',
        component: Posts
    },
    {
        path: '/post/:id/:slug',
        component: Post,
        props: true
    }
]

export default routes