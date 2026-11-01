import type { Metadata } from 'next'
import { QuizMenuView } from './quiz-menu-view'

export const metadata: Metadata = {
  title: 'Quiz',
}

export default function QuizMenuPage() {
  return <QuizMenuView />
}
