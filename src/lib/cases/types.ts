import type { SpecialtySlug } from '@/lib/content'

// Clinical cases: identifiers in English, visible strings in Spanish.
// Exam-style: the vignette is shown in blocks and the case asks its own
// questions before the single best-answer question that scores the round.
export type CaseQuestion = {
  prompt: string
  answer: string
}

export type ClinicalCase = {
  id: string
  specialtySlug: SpecialtySlug
  title: string
  /** MOTIVO DE CONSULTA, verbatim from the source. */
  reason: string
  history: string
  background?: string
  exam: string
  labs: string
  /** Imaging or endoscopy findings kept apart from the lab numbers. */
  studies?: string
  question: string
  options: string[]
  correctIndex: number
  rationales: string[]
  hint: string
  /** Fallback when a case has no study questions. */
  discussion: string
  /** The questions the source case asks, with the answer we provide. */
  studyQuestions: CaseQuestion[]
}
