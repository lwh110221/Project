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

export default router;