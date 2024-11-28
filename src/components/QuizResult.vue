<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">结果</h2>
      
      <div class="space-y-6">
        <!-- 得分展示 -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">
              {{ score }} / {{ totalQuestions }}
            </div>
            <div class="mt-2 text-gray-600">
              正确率: {{ Math.round((score / totalQuestions) * 100) }}%
            </div>
          </div>
        </div>

        <!-- 返回按钮 -->
        <div class="text-center">
          <button
            @click="router.push('/')"
            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"
          >
            返回题库选择
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quizStore';

const router = useRouter();
const quizStore = useQuizStore();

const score = computed(() => quizStore.score);
const totalQuestions = computed(() => 
  quizStore.currentQuizBank?.questions.length || 0
);
</script>