import { createRouter, createWebHistory } from 'vue-router';
import QuizSelector from '../components/QuizSelector.vue';
import QuizQuestion from '../components/QuizQuestion.vue';
import QuizResult from '../components/QuizResult.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: QuizSelector
    },
    {
      path: '/quiz',
      component: QuizQuestion
    },
    {
      path: '/result',
      component: QuizResult
    }
  ]
});

// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  // 如果路由无效，重定向到首页
  if (to.matched.length === 0) {
    next('/');
  } else {
    next();
  }
});

export default router;