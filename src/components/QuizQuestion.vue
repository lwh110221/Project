<template>
  <div class="max-w-4xl mx-auto">
    <div 
      v-if="showNav"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="showNav = false"
    ></div>

    <div class="mb-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3">
      <div class="relative">
        <div class="flex mb-2 items-center justify-between">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-400">做题进度</span>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-400">{{ Math.round(progress) }}%</span>
        </div>
        <div class="h-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <div 
            class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div 
      class="fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 flex flex-col"
      :class="showNav ? 'translate-x-0' : 'translate-x-full'"
      style="width: 300px;"
    >
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">题目导航</h3>
          <div class="flex items-center gap-2">
            <button 
              @click="showConfirmSubmit = true"
              class="cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-1 rounded text-white text-sm font-semibold shadow-md hover:opacity-90"
            >交卷</button>
            <button @click="showNav = false" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <span class="sr-only">关闭</span>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div class="grid grid-cols-5 gap-2">
          <button
            v-for="index in totalQuestions"
            :key="index-1"
            @click="jumpToQuestion(index-1)"
            class="w-10 h-10 rounded-lg flex items-center justify-center relative"
            :class="[
              currentQuestionIndex === index-1 ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200',
              quizStore.userAnswers.has(index-1) && quizStore.isAnswerCorrect(index-1) ? 'border-2 border-green-500' : '',
              quizStore.userAnswers.has(index-1) && !quizStore.isAnswerCorrect(index-1) ? 'border-2 border-red-500' : ''
            ]"
          >
            {{ index }}
            <span 
              v-if="quizStore.markedQuestions.has(index-1)"
              class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentQuestion" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[600px] flex flex-col">
      <div class="flex-1 p-8 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-4">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white">
              第 {{ currentQuestionIndex + 1 }} 题
            </h2>
            <button 
              @click="toggleMark"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              :class="{ 'text-red-500 dark:text-red-400': isMarked }"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
              {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
            </span>
            <button 
              @click="showNav = true"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <p class="text-lg mb-8 text-gray-700 dark:text-gray-200">{{ currentQuestion.content }}</p>

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
              @click="toggleMultipleOption(option[0])"
              class="p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md"
              :class="[getMultipleOptionClass(option[0])]"
            >
              {{ option }}
            </div>
          </template>
        </div>
      </div>

      <div class="border-t border-gray-100 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-b-xl">
        <div class="flex justify-between items-center max-w-2xl mx-auto">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="currentQuestionIndex === 0 
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500' 
              : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50'"
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
            @click="nextQuestion"
            class="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"
          >
            {{ isLastQuestion ? '完成' : '下一题' }}
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="showConfirmSubmit"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-white">确认交卷</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">确定要交卷吗？请确认所有题目都已完成。</p>
        <div class="flex justify-end gap-4">
          <button
            @click="showConfirmSubmit = false"
            class="bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 rounded-lg"
          >
            取消
          </button>
          <button
            @click="submitQuiz"
            class="cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90"
          >
            确认交卷
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
const showConfirmSubmit = ref(false);

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
  if (isLastQuestion.value) {
    showConfirmSubmit.value = true;
  } else {
    quizStore.nextQuestion();
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    quizStore.previousQuestion();
  }
};

const getOptionClass = (option: string) => {
  if (!showAnswer.value) {
    return 'hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200';
  }

  const isSelected = selectedAnswer.value === option;
  const isCorrect = currentQuestion.value?.type === 'boolean' 
    ? currentQuestion.value?.answer === option
    : currentQuestion.value?.answer.includes(option);

  if (isSelected && isCorrect) {
    return 'bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200';
  } else if (isSelected && !isCorrect) {
    return 'bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200';
  } else if (!isSelected && isCorrect) {
    return 'bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200';
  }
  
  return 'border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200';
};

const getMultipleOptionClass = (option: string) => {
  if (!showAnswer.value) {
    return selectedAnswers.value.includes(option)
      ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-500 border text-gray-700 dark:text-gray-200'
      : 'hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200';
  }

  const isSelected = selectedAnswers.value.includes(option);
  const isCorrect = Array.isArray(currentQuestion.value?.answer) && 
                   currentQuestion.value.answer.includes(option);

  if (isSelected && isCorrect) {
    return 'bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200';
  } else if (isSelected && !isCorrect) {
    return 'bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200';
  } else if (!isSelected && isCorrect) {
    return 'bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200';
  }
  
  return 'border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200';
};

const toggleMultipleOption = (option: string) => {
  if (showAnswer.value) return;
  
  const index = selectedAnswers.value.indexOf(option);
  if (index === -1) {
    selectedAnswers.value.push(option);
  } else {
    selectedAnswers.value.splice(index, 1);
  }
  
  hasSelectedAnswer.value = selectedAnswers.value.length > 0;
};

const showNav = ref(false);
const isMarked = computed(() => quizStore.markedQuestions.has(currentQuestionIndex.value));

const toggleMark = () => {
  quizStore.toggleMarkQuestion(currentQuestionIndex.value);
};

const jumpToQuestion = (index: number) => {
  quizStore.jumpToQuestion(index);
  showNav.value = false;
};

const submitQuiz = () => {
  showConfirmSubmit.value = false;
  router.push('/result');
};

// 修改解析题目内容的函数
const parseQuestion = (content: string) => {
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);
  const questionContent = lines[0];
  
  // 查找选项的起始和结束位置
  let optionStartIndex = lines.findIndex(line => line.startsWith('A.'));
  let answerIndex = lines.findIndex(line => line.startsWith('答案：'));
  
  if (optionStartIndex === -1 || answerIndex === -1) {
    return null;
  }

  // 收集所有选项
  const options = [];
  let currentIndex = optionStartIndex;
  
  while (currentIndex < answerIndex) {
    const line = lines[currentIndex];
    if (line.match(/^[A-Z]\./)) {
      options.push(line);
    }
    currentIndex++;
  }

  // 解析答案
  const answerLine = lines[answerIndex];
  const answer = answerLine.replace('答案：', '').split('').filter(char => char.match(/[A-Z]/));

  // 确定题目类型
  let type: 'single' | 'multiple' | 'boolean';
  if (options.length === 2 && options.every(opt => opt.includes('正确') || opt.includes('错误'))) {
    type = 'boolean';
  } else if (answer.length > 1) {
    type = 'multiple';
  } else {
    type = 'single';
  }

  return {
    content: questionContent,
    options,
    answer,
    type
  };
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

/* 自定义滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.5);
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}
</style>