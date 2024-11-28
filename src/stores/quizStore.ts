import { defineStore } from 'pinia';
import type { QuizBank, Question, UserAnswer } from '../types/quiz';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuizBank: null as QuizBank | null,
    currentQuestionIndex: 0,
    userAnswers: new Map<number, string | string[]>(),
    markedQuestions: new Set<number>(),
    score: 0,
    isComplete: false
  }),

  actions: {
    setQuizBank(bank: QuizBank) {
      this.currentQuizBank = bank;
      this.currentQuestionIndex = 0;
      this.userAnswers.clear();
      this.score = 0;
      this.isComplete = false;
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
      } else {
        this.isComplete = true;
      }
    },

    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    toggleMarkQuestion(index: number) {
      if (this.markedQuestions.has(index)) {
        this.markedQuestions.delete(index);
      } else {
        this.markedQuestions.add(index);
      }
    },

    jumpToQuestion(index: number) {
      if (index >= 0 && this.currentQuizBank && index < this.currentQuizBank.questions.length) {
        this.currentQuestionIndex = index;
      }
    }
  },

  getters: {
    progress: (state): number => {
      if (!state.currentQuizBank) return 0;
      const answeredCount = state.userAnswers.size;
      return Math.round((answeredCount / state.currentQuizBank.questions.length) * 100);
    },

    isAnswerCorrect: (state) => (index: number): boolean => {
      const answer = state.userAnswers.get(index);
      const question = state.currentQuizBank?.questions[index];
      
      if (!answer || !question) return false;
      
      if (Array.isArray(answer) && Array.isArray(question.answer)) {
        const sortedAnswer = [...answer].sort().join('');
        const sortedCorrect = [...question.answer].sort().join('');
        return sortedAnswer === sortedCorrect;
      }
      
      return answer === question.answer;
    }
  }
});