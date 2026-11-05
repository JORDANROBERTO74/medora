"use client";

import Link from "next/link";
import { useState } from "react";
import { Brain, ChevronRight, Shuffle, Star } from "lucide-react";
import { PercentBar } from "@/components/percent-bar";
import { clinicalCases } from "@/lib/cases";
import { specialties, type SpecialtySlug } from "@/lib/content";
import { ROUND_SIZE } from "@/lib/quiz";
import { specialtyIcons } from "@/lib/specialty-icons";
import { useUserData } from "@/lib/user-data/context";

type Mode = "quiz" | "cases";

export type QuizCount = {
  slug: SpecialtySlug;
  /** Every quiz key of the specialty; the card counts completions from these. */
  keys: string[];
};

function SpecialtyIcon({
  slug,
  className,
}: {
  slug: SpecialtySlug;
  className?: string;
}) {
  const Icon = specialtyIcons[slug];
  return <Icon className={className} />;
}

function caseLabel(count: number): string {
  return `Viñeta clínica · ${count} ${count === 1 ? "caso" : "casos"}`;
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex-1 rounded-full py-2 text-sm font-black transition ${
        active
          ? "bg-white text-slate-950 shadow-sm"
          : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

export function QuizMenuView({ quizCounts }: { quizCounts: QuizCount[] }) {
  const [mode, setMode] = useState<Mode>("quiz");
  const { isComplete } = useUserData();

  const hero =
    mode === "quiz"
      ? {
          icon: <Star className="size-5" fill="currentColor" />,
          title: "Gana estrellas y desbloquea logros",
          body: "Responde la ronda completa y guarda tu puntuación media en Progreso.",
        }
      : {
          icon: <Brain className="size-5" />,
          title: "Razonamiento clínico",
          body: "Aplica lo que sabes a viñetas reales y revela el diagnóstico.",
        };

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
          Entrenamiento
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
          Elige tu quiz
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Preguntas y casos clínicos, a tu ritmo.
        </p>
      </header>
      <div className="flex rounded-full bg-slate-100 p-1">
        <ModeButton active={mode === "quiz"} onClick={() => setMode("quiz")}>
          Preguntas
        </ModeButton>
        <ModeButton active={mode === "cases"} onClick={() => setMode("cases")}>
          Casos clínicos
        </ModeButton>
      </div>
      <div className="rounded-3xl bg-[#FF5216] p-6 text-white">
        <div className="flex items-center gap-2 text-orange-100">
          {hero.icon}
          <span className="font-black">{hero.title}</span>
        </div>
        <p className="mt-3 text-sm font-medium leading-6 text-orange-50">
          {hero.body}
        </p>
      </div>
      {mode === "quiz" ? (
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/quiz/random"
            className="flex items-center gap-4 rounded-3xl border-2 border-[#FF5216] bg-orange-50 p-5 text-left"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FF5216] text-white">
              <Shuffle />
            </div>
            <div className="flex-1">
              <h2 className="font-black">Quiz aleatorio</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Preguntas de todas las especialidades
              </p>
            </div>
            <ChevronRight />
          </Link>
          {specialties.map((specialty) => {
            const keys =
              quizCounts.find((item) => item.slug === specialty.slug)?.keys ??
              [];
            const completed = keys.filter((key) =>
              isComplete("quiz", key),
            ).length;
            const percent =
              keys.length === 0
                ? 0
                : Math.round((completed / keys.length) * 100);
            return (
              <Link
                key={specialty.slug}
                href={`/dashboard/quiz/${specialty.slug}`}
                className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100">
                  <SpecialtyIcon
                    slug={specialty.slug}
                    className="size-5 text-[#FF5216]"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-black">Quiz de {specialty.name}</h2>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {keys.length} quizzes · {ROUND_SIZE} preguntas cada uno
                  </p>
                  <PercentBar percent={percent} />
                </div>
                <ChevronRight className="text-slate-300" />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/quiz/cases/random"
            className="flex items-center gap-4 rounded-3xl border-2 border-[#FF5216] bg-orange-50 p-5 text-left"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FF5216] text-white">
              <Shuffle />
            </div>
            <div className="flex-1">
              <h2 className="font-black">Caso aleatorio</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Viñetas de todas las especialidades
              </p>
            </div>
            <ChevronRight />
          </Link>
          {specialties
            .filter((specialty) =>
              clinicalCases.some(
                (item) => item.specialtySlug === specialty.slug,
              ),
            )
            .map((specialty) => {
              const caseKeys = clinicalCases
                .filter((item) => item.specialtySlug === specialty.slug)
                .map((item) => `case:${item.id}`);
              const completed = caseKeys.filter((key) =>
                isComplete("case", key),
              ).length;
              const percent =
                caseKeys.length === 0
                  ? 0
                  : Math.round((completed / caseKeys.length) * 100);
              return (
                <Link
                  key={specialty.slug}
                  href={`/dashboard/quiz/cases/${specialty.slug}`}
                  className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100">
                    <SpecialtyIcon
                      slug={specialty.slug}
                      className="size-5 text-[#FF5216]"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-black">Caso de {specialty.name}</h2>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      {caseLabel(caseKeys.length)}
                    </p>
                    <PercentBar percent={percent} />
                  </div>
                  <ChevronRight className="text-slate-300" />
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
}
