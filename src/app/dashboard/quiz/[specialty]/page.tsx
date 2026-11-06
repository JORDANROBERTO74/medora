import { notFound, redirect } from 'next/navigation'
import { getSpecialty } from '@/lib/content'

// Legacy URL: kept so bookmarks and shared links keep working.
export default async function LegacyQuizListPage({
  params,
}: {
  params: Promise<{ specialty: string }>
}) {
  const { specialty } = await params
  if (!getSpecialty(specialty)) notFound()
  redirect(`/dashboard/quiz/questions/${specialty}`)
}
