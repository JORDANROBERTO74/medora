import type { Metadata } from "next";
import { ROUND_SIZE } from "@/lib/quiz";
import { randomRound } from "@/lib/quiz-bank";
import { QuizView } from "../quiz-view";

// Per-request pick: without this the questions would be frozen at build time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Quiz aleatorio",
};

export default function RandomQuizPage() {
  return (
    <QuizView
      eyebrow="Quiz · Aleatorio"
      activityKey="quiz:random"
      questions={randomRound(ROUND_SIZE)}
    />
  );
}
