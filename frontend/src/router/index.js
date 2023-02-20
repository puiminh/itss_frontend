import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainLayout from '../layout/Main.vue'
import LandingLayout from '../layout/Landing.vue'
import AdminLayout from '../layout/Admin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'n',
      component: HomeView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/testview',
      name: 'testview',
      component: () => import('../views/TestView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/User/SignInView.vue'),
      meta: {
        layout: LandingLayout
      }
    },
    {
      path: '/create/course',
      name: 'createcourse',
      component: () => import('../views/Course/CreateCourseView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/create/collection',
      name: 'createcollection',
      component: () => import('../views/Collection/CreateCollectionView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    { 
      path: '/course/:id',
      name: 'courseview',
      props: true,
      component: () => import('../views/Course/CourseView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    { 
      path: '/course/:id/flashcard',
      name: 'flashcardview',
      props: true,
      component: () => import('../views/Course/FlashCardView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    { 
      path: '/course/:id/test',
      name: 'testview',
      props: true,
      component: () => import('../views/Course/TestView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    { 
      path: '/collection/:id',
      name: 'collectionview',
      props: true,
      component: () => import('../views/Collection/CollectionView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/test/:id',
      component: () => import('../views/Course/QuestionView.vue'),
      props: true,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/user/me',
      component: () => import('../views/User/Profile.vue'),
      props: true,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/manager',
      component: ()=> import('../views/Manager/ManagerView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/bookmark',
      component: ()=> import('../views/Bookmark/BookmarkView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/progress',
      component: ()=> import('../views/User/ProgressView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/course/1/learnword',
      component: ()=> import('../views/Course/LearnWord.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/homepage',
      name: 'Landing',
      component: ()=> import('../views/Landing.vue'),
      meta: {
        layout: LandingLayout
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: { layout: 'LayoutAdmin' },
      component: ()=> import('../views/Admin/AdminView.vue'),
      meta: {
        layout: AdminLayout
      }
    },

  ]
})

export default router
