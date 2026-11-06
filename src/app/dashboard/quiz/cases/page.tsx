import type { Metadata } from 'next'
import { QuizModeList } from '../quiz-mode-list'

export const metadata: Metadata = {
  title: 'Casos clínicos',
}

// Case data already rides the client bundle with the list, so this page only
// needs the shared mode list.
export default function CasesPage() {
  return <QuizModeList mode="cases" />
}
