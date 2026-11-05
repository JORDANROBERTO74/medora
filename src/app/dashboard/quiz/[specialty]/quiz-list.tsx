"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { BackHeader } from "@/components/back-header";
import { ProgressCard } from "@/components/progress-card";
import { ROUND_SIZE } from "@/lib/quiz";
import { useUserData } from "@/lib/user-data/context";

export type QuizListItem = {
  id: string;
  /** The apunte the questions come from. */
  title: string;
  /** Position inside the apunte plus how many questions it asks. */
  reason: string;
  contentKey: string;
  href: string;
};

export type QuizListSection = {
  tag: string;
  items: QuizListItem[];
};

export function QuizList({
  specialtyName,
  sections,
}: {
  specialtyName: string;
  sections: QuizListSection[];
}) {
  const { isComplete } = useUserData();
  const items = sections.flatMap((section) => section.items);
  const completed = items.filter((item) =>
    isComplete("quiz", item.contentKey),
  ).length;

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <BackHeader
        href="/dashboard/quiz"
        backLabel="Volver a selección de quiz"
        eyebrow={`${specialtyName}`}
        title="Quizzes"
        titleClassName="text-2xl font-black"
      />

      <ProgressCard
        completed={completed}
        total={items.length}
        noun="quizzes completados"
        footnote={`Cada quiz son hasta ${ROUND_SIZE} preguntas de un mismo tema.`}
      />

      {sections.map((section) => (
        <section key={section.tag}>
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
            {section.tag}
          </h2>
          <ol className="mt-2 flex flex-col gap-2">
            {section.items.map((item) => {
              const solved = isComplete("quiz", item.contentKey);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm hover:border-slate-200"
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate text-sm font-bold text-slate-700">
                        {item.title}
                      </span>
                      <span className="truncate text-xs font-semibold text-slate-500">
                        {item.reason}
                      </span>
                    </span>
                    {solved ? (
                      <span className="flex shrink-0 items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-600">
                        <Check className="size-4" />
                        Completado
                      </span>
                    ) : (
                      <ChevronRight className="size-4 shrink-0 text-slate-300" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
