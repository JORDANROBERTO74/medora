import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clinicalCases, getCase } from "@/lib/cases";
import { getSpecialty } from "@/lib/content";
import { CaseView } from "../case-view";

export function generateStaticParams() {
  return clinicalCases.map((clinicalCase) => ({ specialty: clinicalCase.specialtySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string }>;
}): Promise<Metadata> {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  return { title: specialty ? `Caso de ${specialty.name}` : "Casos clínicos" };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty: slug } = await params;
  const specialty = getSpecialty(slug);
  const clinicalCase = specialty ? getCase(specialty.slug) : undefined;
  if (!clinicalCase) notFound();
  return <CaseView clinicalCase={clinicalCase} />;
}
