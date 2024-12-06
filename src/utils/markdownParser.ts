import type { Question, QuizBank } from '../types/quiz';

export function parseMarkdown(markdown: string): QuizBank {
  const sections = markdown.split('**').filter(section => section.trim());
  const questions: Question[] = [];
  let currentSection = '';

  sections.forEach(section => {
    if (section.includes('单选题')) {
      currentSection = 'single';
    } else if (section.includes('判断题')) {
      currentSection = 'boolean';
    } else if (section.includes('多选题')) {
      currentSection = 'multiple';
    } else if (section.trim()) {
      const lines = section.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        if (line.match(/^\d+\./)) {
          const question: Question = {
            type: currentSection as 'single' | 'multiple' | 'boolean',
            content: line.replace(/^\d+\./, '').trim(),
            options: [],
            answer: ''
          };

          if (currentSection === 'single' || currentSection === 'multiple') {
            const optionLines = lines.slice(lines.indexOf(line) + 1);
            const options: string[] = [];
            
            for (const optLine of optionLines) {
              if (optLine.match(/^[A-Z]\./)) {
                options.push(optLine.trim());
              } else if (optLine.includes('答案：')) {
                if (currentSection === 'multiple') {
                  question.answer = optLine.replace('答案：', '').trim().split('');
                } else {
                  question.answer = optLine.replace('答案：', '').trim();
                }
                break;
              }
            }
            
            question.options = options;
          } else if (currentSection === 'boolean') {
            question.options = ['正确', '错误'];
            const answerLine = lines[lines.indexOf(line) + 1];
            if (answerLine && answerLine.includes('答案：')) {
              question.answer = answerLine.replace('答案：', '').trim();
            }
          }

          questions.push(question);
        }
      });
    }
  });

  return {
    title: '题库',
    category: '未分类',
    questions
  };
}