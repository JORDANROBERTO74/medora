"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Lightbulb, Stethoscope, X } from "lucide-react";
import { BackHeader } from "@/components/back-header";
import { Button } from "@/components/ui/button";
import type { ClinicalCase } from "@/lib/cases";
import { specialtyName } from "@/lib/content";
import { isCorrectAnswer } from "@/lib/quiz";

const sections = [
  { label: "Historia", key: "history" },
  { label: "Examen físico", key: "exam" },
  { label: "Laboratorio", key: "labs" },
] as const;

export function CaseView({ clinicalCase }: { clinicalCase: ClinicalCase }) {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const hintButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const correct = isCorrectAnswer(selectedAnswer, clinicalCase.correctIndex);

  const closeHint = () => {
    setHintOpen(false);
    hintButtonRef.current?.focus();
  };

  // Escape closes the dialog; the close button gets focus on open.
  useEffect(() => {
    if (!hintOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHintOpen(false);
        hintButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hintOpen]);

  return (
    <div className="flex flex-col gap-5 pt-7 sm:pt-10">
      <BackHeader
        href="/dashboard/quiz"
        backLabel="Volver a selección de quiz"
        eyebrow={`Caso clínico · ${specialtyName(clinicalCase.specialtySlug)}`}
        title={clinicalCase.title}
        titleClassName="truncate text-xl font-black"
      />
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
            <Stethoscope className="size-6" />
          </div>
          <button
            ref={hintButtonRef}
            type="button"
            aria-label="Ver pista"
            aria-haspopup="dialog"
            onClick={() => setHintOpen(true)}
            className="flex size-11 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-500 shadow-sm transition hover:text-[#FF5216]"
          >
            <Lightbulb className="size-5" />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {sections.map((section, index) => (
            <div
              key={section.key}
              className={index > 0 ? "border-t border-slate-100 pt-4" : ""}
            >
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-500">
                {section.label}
              </h2>
              <p className="mt-1.5 text-sm font-medium leading-7 text-slate-600">
                {clinicalCase[section.key]}
              </p>
            </div>
          ))}
        </div>
        <h2 className="mt-5 text-lg font-black leading-tight">
          {clinicalCase.question}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {clinicalCase.options.map((option, index) => {
            const chosen = selectedAnswer === index;
            const isCorrectOption = index === clinicalCase.correctIndex;
            const state =
              checked && isCorrectOption
                ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                : checked && chosen
                  ? "border-red-400 bg-red-50 text-red-800"
                  : chosen
                    ? "border-[#FF5216] bg-orange-50"
                    : "border-slate-200";
            return (
              <button
                key={option}
                type="button"
                disabled={checked}
                aria-pressed={chosen}
                onClick={() => setSelectedAnswer(index)}
                className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-sm font-bold transition active:scale-[0.98] disabled:cursor-default disabled:active:scale-100 ${state}`}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${chosen ? "bg-[#FF5216] text-white" : "bg-slate-100 text-slate-500"}`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {checked && isCorrectOption && (
                  <Check className="size-5 shrink-0 text-emerald-600" />
                )}
                {checked && chosen && !isCorrectOption && (
                  <X className="size-5 shrink-0 text-red-500" />
                )}
              </button>
            );
          })}
        </div>
        {checked ? (
          <div role="status" className="case-reveal mt-5 flex flex-col gap-3">
            <p
              className={`text-sm font-black ${correct ? "text-emerald-700" : "text-red-600"}`}
            >
              {correct
                ? "Correcto: razonaste como en el examen."
                : `Incorrecto: la respuesta es ${clinicalCase.options[clinicalCase.correctIndex]}.`}
            </p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                Por qué
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {clinicalCase.rationales.map((rationale, index) => {
                  const isCorrectOption = index === clinicalCase.correctIndex;
                  return (
                    <li
                      key={rationale}
                      className="flex gap-2 text-xs font-medium leading-5"
                    >
                      <span
                        className={`font-black ${isCorrectOption ? "text-emerald-600" : "text-slate-400"}`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span
                        className={
                          isCorrectOption ? "text-slate-700" : "text-slate-500"
                        }
                      >
                        {rationale}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="rounded-2xl bg-slate-50 p-4 text-xs font-medium leading-5 text-slate-600">
              <span className="font-black uppercase tracking-wider text-slate-500">
                Conducta:{" "}
              </span>
              {clinicalCase.discussion}
            </p>
          </div>
        ) : (
          <Button
            disabled={selectedAnswer === null}
            onClick={() => setChecked(true)}
            className="mt-5 h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
          >
            Comprobar respuesta <ArrowRight data-icon="inline-end" />
          </Button>
        )}
      </div>
      {checked && (
        <Button
          onClick={() => router.push("/dashboard/quiz/cases/random")}
          className="case-reveal h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
        >
          Siguiente <ArrowRight data-icon="inline-end" />
        </Button>
      )}
      {hintOpen && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/40 p-4"
          onClick={closeHint}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-hint-title"
            onClick={(event) => event.stopPropagation()}
            className="case-reveal w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
                  Pista
                </p>
                <h2 id="case-hint-title" className="mt-1 text-xl font-black">
                  Antes de responder
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Cerrar pista"
                onClick={closeHint}
                className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100"
              >
                <X />
              </button>
            </div>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              {clinicalCase.hint}
            </p>
            <Button
              onClick={closeHint}
              className="mt-5 h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
            >
              Entendido
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
