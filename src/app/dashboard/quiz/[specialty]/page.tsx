import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialty, getTopic, specialties } from "@/lib/content";
import { quizGroups, quizKey } from "@/lib/quiz-bank";
import { QuizList, type QuizListSection } from "./quiz-list";

export function generateStaticParams() {
  return specialties.map((specialty) => ({ specialty: specialty.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string }>;
}): Promise<Metadata> {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  return { title: specialty ? `Quiz de ${specialty.name}` : "Quiz" };
}

export default async function QuizListPage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  // Quizzes follow the syllabus order, sectioned by the apunte's own tag.
  const sections = new Map<string, QuizListSection["items"]>();
  for (const group of quizGroups(specialty.slug)) {
    const topic = getTopic(specialty.slug, group.topic);
    const tag = topic?.tag ?? "Otros temas";
    const items = sections.get(tag) ?? [];
    items.push({
      id: group.id,
      title: topic?.name ?? group.topic,
      reason: `Quiz ${group.index} · ${group.questions.length} preguntas`,
      contentKey: quizKey(specialty.slug, group.id),
      href: `/dashboard/quiz/${specialty.slug}/${group.id}`,
    });
    sections.set(tag, items);
  }

  return (
    <QuizList
      specialtyName={specialty.name}
      sections={[...sections.entries()].map(([tag, items]) => ({ tag, items }))}
    />
  );
}
