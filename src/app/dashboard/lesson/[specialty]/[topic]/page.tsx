import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNextLesson,
  getNoteCategory,
  getSpecialty,
  getTopic,
  noteCategories,
} from "@/lib/content";
import { getTopicContent } from "@/lib/content/corpus";
import { LessonView } from "./lesson-view";

export function generateStaticParams() {
  return noteCategories.flatMap((category) =>
    category.topics.map((topic) => ({
      specialty: category.slug,
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
  return { title: getTopic(slug, topicSlug)?.name ?? "Apunte" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ specialty: string; topic: string }>;
}) {
  const { specialty: slug, topic: topicSlug } = await params;
  const category = getNoteCategory(slug);
  const topic = getTopic(slug, topicSlug);
  const content = getTopicContent(slug, topicSlug);

  if (!category || !topic || !content) notFound();

  const isSpecialty = Boolean(getSpecialty(slug));
  const next = getNextLesson(slug, topicSlug);

  return (
    <LessonView
      category={category}
      topic={topic}
      content={content}
      next={next}
      backHref={isSpecialty ? `/dashboard/reading/${slug}` : "/dashboard/notes"}
      backLabel={isSpecialty ? "Volver a lectura" : "Volver a notas"}
    />
  );
}
