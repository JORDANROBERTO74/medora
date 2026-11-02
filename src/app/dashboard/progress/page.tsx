import type { Metadata } from "next";
import Link from "next/link";
import { ProgressBar } from "@/components/progress-bar";
import { specialties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Progreso",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-[11px] font-bold text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
          Tu historial
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
          Progreso
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Así vas en tu preparación médica.
        </p>
      </header>

      <section className="grid grid-cols-3 gap-3">
        <Stat value="7" label="días de racha" />
        <Stat value="28" label="de 60 temas" />
        <Stat value="4" label="especialidades" />
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
          Por especialidad
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {specialties.map((specialty) => (
            <div key={specialty.slug}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-extrabold">{specialty.name}</span>
                <span className="text-xs font-black text-slate-500">
                  {specialty.progress}%
                </span>
              </div>
              <ProgressBar value={specialty.progress} className="mt-2" />
            </div>
          ))}
        </div>
      </section>

      <Link
        href="/dashboard/quiz"
        className="rounded-full bg-[#FF5216] px-5 py-3.5 text-center text-sm font-black text-white hover:bg-[#e94810]"
      >
        Repasar ahora
      </Link>
    </div>
  );
}
