import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSpecialty, specialties } from '@/lib/content'
import { TopicsView } from './topics-view'

export function generateStaticParams() {
  return specialties.map((specialty) => ({ specialty: specialty.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ specialty: string }> }): Promise<Metadata> {
  const { specialty: slug } = await params
  return { title: getSpecialty(slug)?.name ?? 'Temas' }
}

export default async function TopicsPage({ params }: { params: Promise<{ specialty: string }> }) {
  const { specialty: slug } = await params
  const specialty = getSpecialty(slug)
  if (!specialty) notFound()
  return <TopicsView specialty={specialty} />
}
