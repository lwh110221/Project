import { defineStore } from 'pinia';
import type { QuizBank, Question, UserAnswer } from '../types/quiz';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuizBank: null as QuizBank | null,
    currentQuestionIndex: 0,
    userAnswers: new Map<number, string | string[]>(),
    score: 0,
    isComplete: false,
    maxProgress: 0
  }),

  actions: {
    setQuizBank(bank: QuizBank) {
      this.currentQuizBank = bank;
      this.currentQuestionIndex = 0;
      this.userAnswers.clear();
      this.score = 0;
      this.isComplete = false;
      this.maxProgress = 0;
    },

    submitAnswer(answer: string | string[]) {
      if (!this.currentQuizBank) return;
      
      this.userAnswers.set(this.currentQuestionIndex, answer);
      const currentQuestion = this.currentQuizBank.questions[this.currentQuestionIndex];
      
      if (Array.isArray(answer) && Array.isArray(currentQuestion.answer)) {
        const sortedAnswer = [...answer].sort().join('');
        const sortedCorrect = [...currentQuestion.answer].sort().join('');
        if (sortedAnswer === sortedCorrect) {
          this.score++;
        }
      } else if (answer === currentQuestion.answer) {
        this.score++;
      }
    },

    getSavedAnswer(index: number): string | string[] | undefined {
      return this.userAnswers.get(index);
    },

    nextQuestion() {
      if (!this.currentQuizBank) return;
      
      if (this.currentQuestionIndex < this.currentQuizBank.questions.length - 1) {
        this.currentQuestionIndex++;
        const currentProgress = (this.currentQuestionIndex / this.currentQuizBank.questions.length) * 100;
        this.maxProgress = Math.max(this.maxProgress, currentProgress);
      } else {
        this.isComplete = true;
      }
    },

    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    }
  },

  getters: {
    progress: (state): number => {
      if (!state.currentQuizBank) return 0;
      return state.maxProgress;
    }
  }
});