import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/userStore';

const ListProducts = () => import('../components/ListProducts.vue');
const Login = () => import('../components/Login.vue');
const Register = () => import('../components/Register.vue');
const Users = () => import('../components/Users.vue');

function validateRoute(to) {
  // const userStore = useUserStore();
  // if (!userStore.isAuthenticated) {
  //   return { path: '/login' };
  // }

  if (!to.query.skip) {
    return { ...to, query: { ...to.query, skip: 0 } };
  }
  if (!to.query.limit) {
    return { ...to, query: { ...to.query, limit: 10 } };
  }
};

const routes = [
  { path: '/', component: ListProducts, beforeEnter: validateRoute },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/users', component: Users, beforeEnter: validateRoute },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
