import type { Metadata } from "next";
import { pickRandomCase } from "@/lib/cases";
import { CaseView } from "../case-view";

// Per-request pick: without this the case would be frozen at build time and never feel random.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Caso aleatorio",
};

export default function RandomCasePage() {
  return <CaseView clinicalCase={pickRandomCase()} />;
}
