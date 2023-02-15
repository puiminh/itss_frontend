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
      path: '/create/course',
      name: 'createcourse',
      component: () => import('../views/Course/CreateCourseView.vue')
    },
    {
      path: '/create/collection',
      name: 'createcollection',
      component: () => import('../views/Collection/CreateCollectionView.vue')
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
      path: '/course/:id/test',
      name: 'testview',
      props: true,
      component: () => import('../views/Course/TestView.vue')
    },
    { 
      path: '/collection/:id',
      name: 'collectionview',
      props: true,
      component: () => import('../views/Collection/CollectionView.vue')
    },
    {
      path: '/test/:id',
      component: () => import('../views/Course/QuestionView.vue'),
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
      path: '/bookmark',
      component: ()=> import('../views/Bookmark/BookmarkView.vue')
    },
    {
      path: '/course/1/learnword',
      component: ()=> import('../views/Course/LearnWord.vue')
    },
    {
      path: '/homepage',
      name: 'Landing',
      component: ()=> import('../views/Landing.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: ()=> import('../views/Admin/AdminView.vue')
    }

  ]
})

export default router
