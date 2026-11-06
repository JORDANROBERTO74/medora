import { notFound, redirect } from 'next/navigation'
import { getSpecialty } from '@/lib/content'
import { getQuizGroup } from '@/lib/quiz-bank'

// Legacy URL: kept so bookmarks and shared links keep working.
export default async function LegacyQuizRoundPage({
  params,
}: {
  params: Promise<{ specialty: string; quizId: string }>
}) {
  const { specialty, quizId } = await params
  const found = getSpecialty(specialty)
  if (!found || !getQuizGroup(found.slug, quizId)) notFound()
  redirect(`/dashboard/quiz/questions/${found.slug}/${quizId}`)
}
