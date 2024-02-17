import { createRouter, createWebHistory } from 'vue-router'
import FirstSlide from "@/components/FirstSlide.vue";
const RoutePass = { template: '<div></div>' }
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: RoutePass },
    { path: '/about', component: RoutePass },
    { path: '/possibilities', component: RoutePass },
    { path: '/projects', component: RoutePass },
    { path: '/technical_solutions', component: RoutePass },
    { path: '/projects_docs', component: RoutePass },
    { path: '/tenders', component: RoutePass },
    { path: '/contacts', component: RoutePass },

  ]
})

export default router
