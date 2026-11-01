// Pure quiz rules, no React: unit-testable.
export function isCorrectAnswer(selectedAnswer: number | null, correctIndex: number): boolean {
  return selectedAnswer !== null && selectedAnswer === correctIndex
}

export function scoreFor(selectedAnswer: number | null, correctIndex: number): number {
  return isCorrectAnswer(selectedAnswer, correctIndex) ? 120 : 0
}
