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
      path: '/course/:id/flashcard',
      name: 'flashcardview',
      props: true,
      component: () => import('../views/Course/FlashCardView.vue')
    },
    { 
      path: '/collection/:id',
      name: 'collectionview',
      props: true,
      component: () => import('../views/Collection/CollectionView.vue')
    },
    {
      path: '/test/:id',
      component: () => import('../views/Course/TestView.vue'),
      props: true,
    },
    {
      path: '/user/me',
      component: () => import('../views/User/Profile.vue'),
      props: true,
    },
    {
      path: '/manager',
      component: ()=> import('../views/Manager/ManagerView.vue')
    },
    {
      path: '/course/1/learnword1',
      component: ()=> import('../views/Course/LearnWord1.vue')
    }

  ]
})

export default router
