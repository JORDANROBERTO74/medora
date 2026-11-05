import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Specialty } from "@/lib/content";
import { specialtyIcons } from "@/lib/specialty-icons";
import { PercentBar } from "./percent-bar";

export function SpecialtyCard({
  specialty,
  progress,
}: {
  specialty: Specialty;
  /** Reviewed apuntes percentage, computed from the user's progress rows. */
  progress: number;
}) {
  const Icon = specialtyIcons[specialty.slug];

  return (
    <Link
      href={`/dashboard/reading/${specialty.slug}`}
      className="group card-lift flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-[#FF5216]">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-[#FF5216]">
            {specialty.number}
          </span>
          <h3 className="font-extrabold leading-5">{specialty.name}</h3>
        </div>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">
          {specialty.detail}
        </p>
        <PercentBar percent={progress} />
      </div>
      <ChevronRight className="size-5 text-slate-300" />
    </Link>
  );
}
