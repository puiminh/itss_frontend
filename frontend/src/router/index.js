import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainLayout from '../layout/Main.vue'
import LandingLayout from '../layout/Landing.vue'
import AdminLayout from '../layout/Admin.vue'
import { useUserStore } from '../stores/user'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView,
    //   meta: {
    //     layout: MainLayout
    //   }
    // },
    {
      path: '/testview',
      name: 'testview',
      component: () => import('../views/TestView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: false,
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
        layout: MainLayout,
        needAuth: false,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/User/SignInView.vue'),
      meta: {
        layout: LandingLayout,
        needAuth: false,
      }
    },
    {
      path: '/create/course',
      name: 'createcourse',
      component: () => import('../views/Course/CreateCourseView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/create/collection',
      name: 'createcollection',
      component: () => import('../views/Collection/CreateCollectionView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    { 
      path: '/course/:id',
      name: 'courseview',
      props: true,
      component: () => import('../views/Course/CourseView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: false,
      }
    },
    { 
      path: '/course/:id/edit',
      name: 'courseedit',
      props: true,
      component: () => import('../views/Course/EditCourseView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    { 
      path: '/course/:id/flashcard',
      name: 'flashcardview',
      props: true,
      component: () => import('../views/Course/FlashCardView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/course/:id/learnword',
      component: ()=> import('../views/Course/LearnWord.vue'),
      props: true,
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    { 
      path: '/course/:id/test',
      name: 'testview',
      props: true,
      component: () => import('../views/Course/TestView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    { 
      path: '/collection/:id',
      name: 'collectionview',
      props: true,
      component: () => import('../views/Collection/CollectionView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: false,
      }
    },
    { 
      path: '/collection/:id/edit',
      name: 'collectionedit',
      props: true,
      component: () => import('../views/Collection/EditCollectionView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/test/:id',
      component: () => import('../views/Course/QuestionView.vue'),
      props: true,
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/user/me',
      component: () => import('../views/User/Profile.vue'),
      props: true,
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/manager',
      component: ()=> import('../views/Manager/ManagerView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/bookmark',
      component: ()=> import('../views/Bookmark/BookmarkView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },
    {
      path: '/progress',
      component: ()=> import('../views/User/ProgressView.vue'),
      meta: {
        layout: MainLayout,
        needAuth: true,
      }
    },

    {
      path: '/landing',
      name: 'Landing',
      component: ()=> import('../views/Landing.vue'),
      meta: {
        layout: LandingLayout,
        needAuth: false,
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: ()=> import('../views/Admin/AdminView.vue'),
      meta: {
        layout: AdminLayout,
        needAuth: true,
        needAdmin: true,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {

  const store = useUserStore();
  //neu ma chua login (getLogin = false) + den trang can login (needAuth = true) -> false, ve lai landing
  //neu ma chua Login (getLogin = false) + den trang khong can login  (needAuth = false) -> di tiep
  //neu ma da Login (getLogin = true) + den trang can login (needAuth = true) -> di tiep
  
  console.log(to.meta.needAuth, store.getLogin);
  if (to.meta.needAuth && !to.meta.needAdmin) {
    if (store.getLogin) {
      next()
    } else {
      next({name: 'Landing'})
    }
  } else if (to.meta.needAdmin) {
    if (store.getLogin && store.isAdmin) {
      next()
    } else {
      next({name: 'Landing'})
    }
  }
  else {
    console.log(to);
    next();
  }
})

export default router
