<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6 bg-white rounded-xl shadow-sm p-6">
      <div class="relative">
        <div class="flex mb-2 items-center justify-between">
          <span class="text-sm font-medium text-blue-600">做题进度</span>
          <span class="text-sm font-medium text-blue-600">{{ Math.round(progress) }}%</span>
        </div>
        <div class="h-2 bg-blue-100 rounded-full">
          <div 
            class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div v-if="currentQuestion" class="bg-white rounded-xl shadow-lg min-h-[600px] flex flex-col">
      <div class="flex-1 p-8 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-800">
            第 {{ currentQuestionIndex + 1 }} 题
          </h2>
          <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
            {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
          </span>
        </div>
        
        <p class="text-lg mb-8 text-gray-700">{{ currentQuestion.content }}</p>

        <div class="space-y-4">
          <template v-if="currentQuestion.type === 'single' || currentQuestion.type === 'boolean'">
            <div
              v-for="option in currentQuestion.options"
              :key="option"
              @click="selectOption(currentQuestion.type === 'boolean' ? option : option[0])"
              class="p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
              :class="[getOptionClass(currentQuestion.type === 'boolean' ? option : option[0])]"
            >
              {{ option }}
            </div>
          </template>
          
          <template v-else-if="currentQuestion.type === 'multiple'">
            <div
              v-for="option in currentQuestion.options"
              :key="option"
              @click="!showAnswer && toggleMultipleOption(option[0])"
              class="p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
              :class="[getMultipleOptionClass(option[0])]"
            >
              {{ option }}
            </div>
          </template>
        </div>
      </div>

      <div class="border-t border-gray-100 p-6 bg-white rounded-b-xl">
        <div class="flex justify-between items-center max-w-2xl mx-auto">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="currentQuestionIndex === 0 ? 'bg-gray-100 text-gray-400' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'"
          >
            上一题
          </button>

          <button
            v-if="currentQuestion.type === 'multiple' && !showAnswer"
            @click="confirmMultipleAnswer"
            :disabled="!hasSelectedAnswer"
            class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            确认答案
          </button>

          <button
            v-if="showAnswer || currentQuestion.type !== 'multiple'"
            @click="nextQuestion"
            :disabled="!hasSelectedAnswer && !showAnswer"
            class="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLastQuestion ? '完成' : '下一题' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quizStore';

const router = useRouter();
const quizStore = useQuizStore();
const showAnswer = ref(false);
const selectedAnswers = ref<string[]>([]);
const selectedAnswer = ref('');
const hasSelectedAnswer = ref(false);

const currentQuestion = computed(() => {
  return quizStore.currentQuizBank?.questions[quizStore.currentQuestionIndex];
});

const currentQuestionIndex = computed(() => quizStore.currentQuestionIndex);
const progress = computed(() => quizStore.progress);
const isLastQuestion = computed(() => {
  if (!quizStore.currentQuizBank) return false;
  return currentQuestionIndex.value === quizStore.currentQuizBank.questions.length - 1;
});
const totalQuestions = computed(() => quizStore.currentQuizBank?.questions.length || 0);

// 监听题目变化，加载已保存的答案
watch(
  () => currentQuestionIndex.value,
  (newIndex) => {
    const savedAnswer = quizStore.getSavedAnswer(newIndex);
    if (savedAnswer) {
      if (Array.isArray(savedAnswer)) {
        selectedAnswers.value = savedAnswer;
      } else {
        selectedAnswer.value = savedAnswer;
      }
      hasSelectedAnswer.value = true;
      showAnswer.value = true;
    } else {
      selectedAnswers.value = [];
      selectedAnswer.value = '';
      hasSelectedAnswer.value = false;
      showAnswer.value = false;
    }
  },
  { immediate: true }
);

const selectOption = (option: string) => {
  if (showAnswer.value) return;
  
  selectedAnswer.value = option;
  hasSelectedAnswer.value = true;
  showAnswer.value = true;
  
  quizStore.submitAnswer(option);
};

const confirmMultipleAnswer = () => {
  if (!currentQuestion.value || !hasSelectedAnswer.value) return;
  
  showAnswer.value = true;
  quizStore.submitAnswer(selectedAnswers.value);
};

const nextQuestion = () => {
  quizStore.nextQuestion();
  
  if (quizStore.isComplete) {
    router.push('/result');
  }
};

const previousQuestion = () => {
  quizStore.previousQuestion();
};

const getOptionClass = (option: string) => {
  if (!showAnswer.value) {
    return 'hover:bg-gray-100 border border-gray-200';
  }

  const isSelected = selectedAnswer.value === option;
  const isCorrect = currentQuestion.value?.type === 'boolean' 
    ? currentQuestion.value?.answer === option
    : currentQuestion.value?.answer.includes(option);

  if (isSelected && isCorrect) {
    return 'bg-green-100 border-green-500 border';
  } else if (isSelected && !isCorrect) {
    return 'bg-red-100 border-red-500 border';
  } else if (!isSelected && isCorrect) {
    return 'bg-green-100 border-green-500 border';
  }
  
  return 'border border-gray-200';
};

const getMultipleOptionClass = (option: string) => {
  if (!showAnswer.value) {
    return selectedAnswers.value.includes(option)
      ? 'bg-blue-100 border-blue-500 border'
      : 'hover:bg-gray-100 border border-gray-200';
  }

  const isSelected = selectedAnswers.value.includes(option);
  const isCorrect = Array.isArray(currentQuestion.value?.answer) && 
                   currentQuestion.value.answer.includes(option);

  if (isSelected && isCorrect) {
    return 'bg-green-100 border-green-500 border';
  } else if (isSelected && !isCorrect) {
    return 'bg-red-100 border-red-500 border';
  } else if (!isSelected && isCorrect) {
    return 'bg-green-100 border-green-500 border';
  }
  
  return 'border border-gray-200';
};

const toggleMultipleOption = (option: string) => {
  const index = selectedAnswers.value.indexOf(option);
  if (index === -1) {
    selectedAnswers.value.push(option);
  } else {
    selectedAnswers.value.splice(index, 1);
  }
  
  hasSelectedAnswer.value = selectedAnswers.value.length > 0;
};
</script>

<style scoped>
.option-enter-active,
.option-leave-active {
  transition: all 0.3s ease;
}

.option-enter-from,
.option-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>