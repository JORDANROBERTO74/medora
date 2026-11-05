// Pure quiz rules, no React: unit-testable.

/** Questions per quiz; `quizGroups` cuts the bank to this size. */
export const ROUND_SIZE = 5

export function isCorrectAnswer(selectedAnswer: number | null, correctIndex: number): boolean {
  return selectedAnswer !== null && selectedAnswer === correctIndex
}

/**
 * Rounds of five land on 5★ = every answer right, down to 1★ for any correct
 * answer; the thresholds keep the rating meaningful if ROUND_SIZE changes.
 */
export function starsFor(correct: number, total: number): number {
  if (total <= 0 || correct <= 0) return 0
  const ratio = correct / total
  if (ratio >= 1) return 5
  if (ratio >= 0.8) return 4
  if (ratio >= 0.6) return 3
  if (ratio >= 0.4) return 2
  return 1
}
