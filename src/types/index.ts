export interface Question {
  id: number
  content: string
  options: string[]
  answer: string
  type: 'single' | 'multiple'
}

export interface QuestionStatus {
  isAnswered: boolean
  isCorrect: boolean
} 