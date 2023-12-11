import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FormView from '../views/FormView.vue'
import OrderView from '../views/OrderView.vue'
=======
import AccountView from '../views/AccountView.vue'
import ServicesView from '../views/ServicesView.vue'
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
=======
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
    }
  ]
})

export default router
