import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'n',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testview',
      name: 'testview',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/User/SignInView.vue')
    },
    {
      path: '/createcourse',
      name: 'createcourse',
      component: () => import('../views/Course/CreateCourseView.vue')
    },
    { 
      path: '/course/:id',
      name: 'courseview',
      props: true,
      component: () => import('../views/Course/CourseView.vue')
    },
    { 
      path: '/class/:id',
      name: 'classview',
      props: true,
      component: () => import('../views/Class/ClassView.vue')
    },
    {
      path: '/test/:id',
      component: () => import('../views/Course/TestView.vue'),
      props: true,
    }
  ]
})

export default router
