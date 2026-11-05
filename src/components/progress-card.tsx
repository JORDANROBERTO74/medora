type ProgressCardProps = {
  completed: number;
  total: number;
  /** Tail of the headline: "quizzes completados", "casos resueltos". */
  noun: string;
  footnote: string;
};

/** Shared "Tu progreso" card so the quiz and case lists read the same way. */
export function ProgressCard({ completed, total, noun, footnote }: ProgressCardProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <p className="text-xs font-black uppercase tracking-wider text-slate-500">
        Tu progreso
      </p>
      <p className="mt-1 text-2xl font-black">
        {completed} de {total}{" "}
        <span className="text-sm font-bold text-slate-500">{noun}</span>
      </p>
      <div className="progress-track mt-3 h-2 rounded-full">
        <div
          className="h-full rounded-full bg-[#FF5216] transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-3 text-xs font-semibold text-slate-500">{footnote}</p>
    </section>
  );
}
