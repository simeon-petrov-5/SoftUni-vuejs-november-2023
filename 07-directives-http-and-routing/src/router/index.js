import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Products from '../views/Products.vue';
import Directives from '../views/Directives.vue';
import NotFound from '../views/NotFound.vue';

// Profiles
import MyProfile from '../views/Profile/MyProfile.vue';
import ChangePass from '../views/Profile/ChangePass.vue';
import CloseProfile from '../views/Profile/CloseProfile.vue';
import ProfileContainer from '../views/Profile/ProfileContainer.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: Product,
  },
  {
    path: '/directives',
    component: Directives,
  },
  {
    path: '/profile',
    component: ProfileContainer,
    children: [
      {
        path: 'my-profile',
        component: MyProfile,
      },
      {
        path: 'change-pass',
        component: ChangePass,
      },
      {
        path: 'close-profile',
        component: CloseProfile,
      },
    ],

  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
