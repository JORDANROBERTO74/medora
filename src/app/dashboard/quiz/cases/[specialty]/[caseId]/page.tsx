import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseById, getFirstCaseOfNextSpecialty, nextCaseInSpecialty } from "@/lib/cases";
import { specialtyName } from "@/lib/content";
import { CaseView } from "../../case-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; caseId: string }>;
}): Promise<Metadata> {
  const { specialty, caseId } = await params;
  const clinicalCase = getCaseById(specialty, caseId);
  return { title: clinicalCase?.title ?? "Caso clínico" };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ specialty: string; caseId: string }>;
}) {
  const { specialty, caseId } = await params;
  const clinicalCase = getCaseById(specialty, caseId);
  if (!clinicalCase) notFound();

  // Reading order inside the specialty, then the next specialty that has cases.
  const following = nextCaseInSpecialty(clinicalCase);
  const nextSpecialtyCase = following
    ? undefined
    : getFirstCaseOfNextSpecialty(specialty);
  const next = following
    ? {
        href: `/dashboard/quiz/cases/${specialty}/${following.id}`,
        label: "Siguiente",
      }
    : nextSpecialtyCase
      ? {
          href: `/dashboard/quiz/cases/${nextSpecialtyCase.specialtySlug}/${nextSpecialtyCase.id}`,
          label: `Siguiente: ${specialtyName(nextSpecialtyCase.specialtySlug)}`,
        }
      : undefined;

  return <CaseView clinicalCase={clinicalCase} next={next} />;
}
