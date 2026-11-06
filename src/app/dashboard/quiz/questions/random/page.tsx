import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { randomQuizGroup } from "@/lib/quiz-bank";

// Per-request pick: without this the target quiz would be frozen at build time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Quiz aleatorio",
};

// One landing point for every quiz: "aleatorio" only chooses which one you get,
// so the result still counts towards that specialty's progress.
export default function RandomQuizPage() {
  const group = randomQuizGroup();
  redirect(`/dashboard/quiz/questions/${group.specialty}/${group.id}`);
}
