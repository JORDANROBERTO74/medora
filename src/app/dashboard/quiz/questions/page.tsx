import type { Metadata } from 'next'
import { specialties } from '@/lib/content'
import { quizGroups, quizKey } from '@/lib/quiz-bank'
import { QuizModeList, type QuizCount } from '../quiz-mode-list'

export const metadata: Metadata = {
  title: 'Preguntas',
}

export default function QuestionsPage() {
  // Keys are passed down instead of the bank so the client bundle never carries
  // the 501 questions; the card only needs to know which quizzes exist.
  const quizCounts: QuizCount[] = specialties.map((specialty) => ({
    slug: specialty.slug,
    keys: quizGroups(specialty.slug).map((group) => quizKey(specialty.slug, group.id)),
  }))

  return <QuizModeList mode="quiz" quizCounts={quizCounts} />
}
