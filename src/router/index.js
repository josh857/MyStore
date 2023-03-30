import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Food from '../components/Food.vue'
import Drink from '../components/Drink.vue'
import Home from '../components/Home.vue'
import Fruit from '../components/Fruit.vue'
import Car from '../components/Car.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Food',
      name: 'food',
      component: Food
    },
    {
      path: '/Drink',
      name: 'drink',
      component: Drink
    },
    {
      path: '/Fruit',
      name: 'fruit',
      component: Fruit
    },
    {
      path: '/Car',
      name: 'car',
      component: Car
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
