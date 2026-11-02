import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialty, specialties } from "@/lib/content";
import { QuizView } from "../quiz-view";

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
  return <QuizView eyebrow={`Quiz · ${specialty.name}`} />;
}
