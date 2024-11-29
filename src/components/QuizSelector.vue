<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">选择题库</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="bank in quizBanks"
        :key="bank.title"
        class="border rounded-lg p-4 cursor-pointer bg-white dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-green-700 transition-colors"
        @click="selectQuizBank(bank)"
      >
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{{ bank.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300">题数: {{ bank.questions.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quizStore';
import { loadQuizBanks } from '../utils/quizLoader';
import type { QuizBank } from '../types/quiz';

const router = useRouter();
const quizStore = useQuizStore();
const quizBanks = ref<QuizBank[]>([]);

onMounted(async () => {
  quizBanks.value = await loadQuizBanks();
});

const selectQuizBank = (bank: QuizBank) => {
  quizStore.setQuizBank(bank);
  router.push('/quiz');
};
</script>