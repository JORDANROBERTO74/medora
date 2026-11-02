import type { Metadata } from "next";
import { QuizView } from "../quiz-view";

export const metadata: Metadata = {
  title: "Quiz aleatorio",
};

export default function RandomQuizPage() {
  return <QuizView eyebrow="Quiz · Aleatorio" />;
}
