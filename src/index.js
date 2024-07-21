import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/', 
        component: () => import('./pages/intro-page.vue'),
    }, 
    {
        path: '/home',
        component: () => import('./pages/home-page.vue'),
    }
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;