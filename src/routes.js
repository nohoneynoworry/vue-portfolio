import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import NotFound from '@/components/NotFound.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'
import ProjectPage from '@/components/ProjectPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about-me', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/project', component: Project },
  { path: '/project/:name', component: ProjectPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  linkActiveClass: 'font-bold text-indigo-500 underline',
  linkExactActiveClass: 'text-indigo-500',
  history: createWebHistory(),
  routes,
})
export default router
