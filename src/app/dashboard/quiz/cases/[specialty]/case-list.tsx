"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { BackHeader } from "@/components/back-header";
import { ProgressCard } from "@/components/progress-card";
import { useUserData } from "@/lib/user-data/context";

export type CaseListItem = {
  id: string;
  href: string;
  title: string;
  reason: string;
};

export function CaseList({
  specialtyName,
  items,
}: {
  specialtyName: string;
  items: CaseListItem[];
}) {
  const { isComplete } = useUserData();
  const solved = items.filter((item) =>
    isComplete("case", `case:${item.id}`),
  ).length;

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <BackHeader
        href="/dashboard/quiz/cases"
        backLabel="Volver a casos clínicos"
        eyebrow={`${specialtyName}`}
        title="Casos clínicos"
        titleClassName="text-2xl font-black"
      />

      <ProgressCard
        completed={solved}
        total={items.length}
        noun="casos resueltos"
        footnote="Cada caso es una viñeta clínica con una sola pregunta."
      />

      <ol className="flex flex-col gap-2">
        {items.map((item) => {
          const solved = isComplete("case", `case:${item.id}`);
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="card-lift flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm hover:border-slate-200"
              >
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-sm font-bold text-slate-700">
                    {item.title}
                  </span>
                  {item.reason !== item.title && (
                    <span className="truncate text-xs font-semibold text-slate-500">
                      {item.reason}
                    </span>
                  )}
                </span>
                {solved ? (
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-600">
                    <Check className="size-4" />
                    Resuelto
                  </span>
                ) : (
                  <ChevronRight className="size-4 shrink-0 text-slate-300" />
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
