import type { Metadata } from 'next'
import { specialties } from '@/lib/content'
import { quizGroups, quizKey } from '@/lib/quiz-bank'
import { QuizMenuView, type QuizCount } from './quiz-menu-view'

export const metadata: Metadata = {
  title: 'Quiz',
}

export default function QuizMenuPage() {
  // Keys are passed down instead of the bank so the client bundle never carries
  // the 501 questions; the card only needs to know which quizzes exist.
  const quizCounts: QuizCount[] = specialties.map((specialty) => ({
    slug: specialty.slug,
    keys: quizGroups(specialty.slug).map((group) => quizKey(specialty.slug, group.id)),
  }))

  return <QuizMenuView quizCounts={quizCounts} />
}
