import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { casesForSpecialty } from "@/lib/cases";
import { getSpecialty, specialties } from "@/lib/content";
import { CaseList } from "./case-list";

// Only specialties that actually have cases get a list page.
export function generateStaticParams() {
  return specialties
    .filter((specialty) => casesForSpecialty(specialty.slug).length > 0)
    .map((specialty) => ({ specialty: specialty.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string }>;
}): Promise<Metadata> {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  return { title: specialty ? `Casos de ${specialty.name}` : "Casos clínicos" };
}

export default async function CaseListPage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  const cases = specialty ? casesForSpecialty(specialty.slug) : [];
  if (!specialty || cases.length === 0) notFound();

  return (
    <CaseList
      specialtyName={specialty.name}
      items={cases.map((clinicalCase) => ({
        id: clinicalCase.id,
        title: clinicalCase.title,
        reason: clinicalCase.reason,
        href: `/dashboard/quiz/cases/${specialty.slug}/${clinicalCase.id}`,
      }))}
    />
  );
}
