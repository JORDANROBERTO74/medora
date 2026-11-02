import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialty, getTopic, specialties } from "@/lib/content";
import { getTopicContent } from "@/lib/content/corpus";
import { LessonView } from "./lesson-view";

export function generateStaticParams() {
  return specialties.flatMap((specialty) =>
    specialty.topics.map((topic) => ({
      specialty: specialty.slug,
      topic: topic.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; topic: string }>;
}): Promise<Metadata> {
  const { specialty: slug, topic: topicSlug } = await params;
  return { title: getTopic(slug, topicSlug)?.name ?? "Lección" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ specialty: string; topic: string }>;
}) {
  const { specialty: slug, topic: topicSlug } = await params;
  const specialty = getSpecialty(slug);
  const topic = getTopic(slug, topicSlug);
  const content = getTopicContent(slug, topicSlug);

  if (!specialty || !topic || !content) notFound();
  return <LessonView specialty={specialty} topic={topic} content={content} />;
}
