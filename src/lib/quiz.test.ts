import { describe, expect, it } from 'vitest'
import { isCorrectAnswer, scoreFor } from './quiz'

describe('isCorrectAnswer', () => {
  it('accepts only the selected correct index', () => {
    expect(isCorrectAnswer(0, 0)).toBe(true)
    expect(isCorrectAnswer(1, 0)).toBe(false)
    expect(isCorrectAnswer(2, 2)).toBe(true)
  })

  it('rejects an unanswered question', () => {
    expect(isCorrectAnswer(null, 0)).toBe(false)
  })
})

describe('scoreFor', () => {
  it('awards 120 XP for a correct answer', () => {
    expect(scoreFor(0, 0)).toBe(120)
    expect(scoreFor(2, 2)).toBe(120)
  })

  it('awards nothing for a wrong or missing answer', () => {
    expect(scoreFor(3, 0)).toBe(0)
    expect(scoreFor(null, 0)).toBe(0)
  })
})
