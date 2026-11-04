import { describe, expect, it } from 'vitest'
import { ROUND_SIZE, isCorrectAnswer, starsFor } from './quiz'

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

describe('starsFor', () => {
  it('rates a perfect round at the maximum', () => {
    expect(starsFor(5, 5)).toBe(5)
    expect(starsFor(1, 1)).toBe(5)
  })

  it('steps down with the share of correct answers', () => {
    expect(starsFor(4, 5)).toBe(4)
    expect(starsFor(3, 5)).toBe(3)
    expect(starsFor(2, 5)).toBe(2)
    expect(starsFor(1, 5)).toBe(1)
  })

  it('awards nothing for a round with no correct answer', () => {
    expect(starsFor(0, 5)).toBe(0)
    expect(starsFor(0, 1)).toBe(0)
  })

  it('refuses an impossible round instead of dividing by zero', () => {
    expect(starsFor(3, 0)).toBe(0)
  })

  it('stays meaningful if the round size ever changes', () => {
    expect(starsFor(2, 3)).toBe(3)
    expect(starsFor(1, 10)).toBe(1)
  })

  it('matches the round the bank ships', () => {
    expect(ROUND_SIZE).toBe(5)
  })
})
