import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialty, getTopic, specialties } from "@/lib/content";
import { getQuizGroup, quizGroups, quizKey } from "@/lib/quiz-bank";
import { QuizView } from "../../../quiz-view";

export function generateStaticParams() {
  return specialties.flatMap((specialty) =>
    quizGroups(specialty.slug).map((group) => ({
      specialty: specialty.slug,
      quizId: group.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; quizId: string }>;
}): Promise<Metadata> {
  const { specialty, quizId } = await params;
  const found = getSpecialty(specialty);
  const group = found ? getQuizGroup(found.slug, quizId) : undefined;
  if (!found || !group) return { title: "Quiz" };

  const topic = getTopic(found.slug, group.topic);
  return { title: `Quiz ${group.index} · ${topic?.name ?? group.topic}` };
}

export default async function QuizRoundPage({
  params,
}: {
  params: Promise<{ specialty: string; quizId: string }>;
}) {
  const { specialty, quizId } = await params;
  const found = getSpecialty(specialty);
  const group = found ? getQuizGroup(found.slug, quizId) : undefined;
  if (!found || !group) notFound();

  const topic = getTopic(found.slug, group.topic);

  return (
    <QuizView
      eyebrow={`${found.name} · ${topic?.name ?? group.topic}`}
      activityKey={quizKey(group.specialty, group.id)}
      questions={group.questions}
      backHref={`/dashboard/quiz/questions/${group.specialty}`}
      backLabel="Volver a los quizzes"
    />
  );
}
