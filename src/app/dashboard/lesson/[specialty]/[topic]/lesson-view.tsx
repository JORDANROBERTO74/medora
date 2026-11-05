"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BackHeader } from "@/components/back-header";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import type { NextLesson, NoteCategory, Topic } from "@/lib/content";
import { stripRepeatedTitle } from "@/lib/content/chapter-segments";
import type { CorpusTopic } from "@/lib/content/types";
import { useUserData } from "@/lib/user-data/context";
import { lessonKey } from "@/lib/user-data/progress";

export function LessonView({
  category,
  topic,
  content,
  backHref,
  backLabel,
  next,
}: {
  category: NoteCategory;
  topic: Topic;
  content: CorpusTopic;
  backHref: string;
  backLabel: string;
  next?: NextLesson;
}) {
  const section = content.sections[0];
  const blocks = section?.blocks ?? [];
  const contentKey = lessonKey(category.slug, topic.slug);
  const { isComplete, markActivity } = useUserData();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const done = isComplete("lesson", contentKey);

  const markAsReviewed = () => {
    setSaving(true);
    void markActivity("lesson", contentKey).then((ok) => {
      setSaving(false);
      if (!ok) {
        toast.error("No se pudo marcar el tema", {
          description: "Revisa tu conexión e inténtalo de nuevo.",
        });
      }
    });
  };

  return (
    <div className="relative flex flex-col gap-7 pt-7 sm:pt-10">
      <BackHeader
        href={backHref}
        backLabel={backLabel}
        eyebrow={category.name}
        title={topic.name}
        titleClassName="truncate text-xl font-black"
      />
      <p className="text-xs font-black uppercase tracking-wider text-slate-500">
        Apunte de contenido · solo lectura
      </p>

      <article className="max-w-none">
        {section?.note ? (
          <p className="border-l-4 border-[#FF5216] bg-orange-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-700">
            {section.note}
          </p>
        ) : null}

        {blocks.map((block, index) => {
          const clean = stripRepeatedTitle(block);
          return (
            <section
              key={block.id}
              className={index === 0 && !section?.note ? "" : "mt-9"}
            >
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                {block.title}
              </h2>
              <Markdown>{clean.markdown}</Markdown>
            </section>
          );
        })}

        {blocks.length === 0 ? (
          <p className="text-sm font-semibold text-slate-500">Contenido en preparación.</p>
        ) : null}
      </article>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="min-w-0">
          <p className="text-sm font-black">
            {done ? "Tema repasado" : "¿Terminaste de leerlo?"}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500">
            {done
              ? "Ya cuenta para tu progreso y tu racha."
              : "Márcalo para sumarlo a tu progreso."}
          </p>
        </div>
        <Button
          onClick={markAsReviewed}
          disabled={done || saving}
          className={`h-11 shrink-0 rounded-full px-5 font-black ${
            done
              ? "bg-slate-100 text-slate-500"
              : "bg-accent-strong text-white"
          }`}
        >
          {done ? <Check data-icon="inline-start" /> : null}
          {done ? "Repasado" : "Marcar como repasado"}
        </Button>
      </section>

      {next ? (
        <nav className="flex justify-end border-t border-slate-100 pt-5">
          <Link
            href={next.href}
            title={next.label}
            className="inline-flex max-w-full items-center gap-2 text-right sm:max-w-xs"
          >
            <span className="min-w-0 truncate text-sm font-black text-[#FF5216]">{next.label}</span>
            <ArrowRight className="size-4 shrink-0 text-[#FF5216]" />
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
