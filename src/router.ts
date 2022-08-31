import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/admin/dashboard',
    },
    {
        path: '/admin',
        component: async () =>
            await import(/* webpackChunkName: "admin" */ './pages/Admin.vue'),
        children: [
            {
                path: '/admin/dashboard',
                component: async () =>
                    await import(
                        /* webpackChunkName: "dashboard" */ './pages/admin/Home.vue'
                    ),
            },
            {
                path: '/admin/person',
                component: async () =>
                    await import(
                        /* webpackChunkName: "person" */ './pages/admin/Person.vue'
                    ),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
