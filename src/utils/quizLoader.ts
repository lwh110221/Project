import { parseMarkdown } from './markdownParser';
import type { QuizBank } from '../types/quiz';

export async function loadQuizBanks(): Promise<QuizBank[]> {
  try {
    // 在实际应用中，这里会从 /quizbanks 目录动态加载所有 .md 文件
    // 由于浏览器环境限制，我们需要使用构建工具的导入机制
    const quizBanks: QuizBank[] = [];
    
    // 使用 Vite 的 import.meta.glob 动态导入所有题库文件
    const quizFiles = import.meta.glob('/quizbanks/*.md', { as: 'raw', eager: true });
    
    for (const [path, content] of Object.entries(quizFiles)) {
      const fileName = path.split('/').pop()?.replace('.md', '') || '';
      const quizBank = parseMarkdown(content as string);
      quizBank.title = fileName; // 使用文件名作为题库标题
      quizBanks.push(quizBank);
    }
    
    return quizBanks;
  } catch (error) {
    console.error('Failed to load quiz banks:', error);
    return [];
  }
}