export interface Question {
  id: number;
  text: string;
  category: 'reflection' | 'action' | 'harmony' | 'evaluation' | 'thoughtfulness' | 'stability';
}

export interface QuestionSection {
  category: Question['category'];
  title: string;
  description: string;
  questions: Question[];
}

export interface Answer {
  questionId: number;
  score: number;
}

export interface TestResult {
  geniuses: string[];
  competencies: string[];
  frustrations: string[];
  timestamp: string;
}

export interface CategoryScore {
  category: string;
  score: number;
  title: string;
  description: string;
}