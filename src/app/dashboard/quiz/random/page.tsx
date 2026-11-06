import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Quiz aleatorio",
};

// Legacy URL: kept so bookmarks and shared links keep working.
export default function LegacyRandomQuizPage() {
  redirect("/dashboard/quiz/questions/random");
}
