import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialty, specialties } from "@/lib/content";
import { ROUND_SIZE } from "@/lib/quiz";
import { roundFor } from "@/lib/quiz-bank";
import { QuizView } from "../quiz-view";

// Reshuffled per request: without this the round would be frozen at build time.
export const dynamic = "force-dynamic";

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

export default async function QuizPage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();
  return (
    <QuizView
      eyebrow={`Quiz · ${specialty.name}`}
      activityKey={`quiz:${specialty.slug}`}
      questions={roundFor(specialty.slug, ROUND_SIZE)}
    />
  );
}
