<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">结果</h2>
      
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {{ score }} / {{ totalQuestions }}
            </div>
            <div class="mt-2 text-gray-600 dark:text-gray-300">
              正确率: {{ Math.round((score / totalQuestions) * 100) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuizStore } from '../stores/quizStore';

const quizStore = useQuizStore();

const score = computed(() => quizStore.score);
const totalQuestions = computed(() => 
  quizStore.currentQuizBank?.questions.length || 0
);
</script>