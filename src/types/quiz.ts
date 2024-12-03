export interface Question {
  type: 'single' | 'multiple' | 'boolean';
  content: string;
  options?: string[];
  answer: string | string[];
}

export interface QuizBank {
  title: string;
  category: string;
  questions: Question[];
}

export interface UserAnswer {
  questionIndex: number;
  answer: string | string[];
  isCorrect: boolean;
}