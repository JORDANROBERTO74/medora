'use client'

// Module-level lock: every overlay (Sheet, Dialog, the case hint) shares one
// counter, so closing one of two open overlays does not unlock the page.
// StrictMode remounts effects setup→cleanup→setup in development; capturing
// body.style.overflow inside each setup would store "hidden" on the second pass
// and leave the page unscrollable after closing.

let scrollLocks = 0
let previousOverflow = ''
let unlockTimer: number | undefined
let bodyLocked = false

export function lockScroll() {
  if (unlockTimer) {
    window.clearTimeout(unlockTimer)
    unlockTimer = undefined
  }
  if (!bodyLocked) {
    previousOverflow = document.body.style.overflow
    bodyLocked = true
  }
  scrollLocks += 1
  document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  scrollLocks = Math.max(0, scrollLocks - 1)
  if (scrollLocks > 0) return

  // Defer so StrictMode's immediate re-setup can cancel the restore.
  unlockTimer = window.setTimeout(() => {
    document.body.style.overflow = previousOverflow
    bodyLocked = false
    unlockTimer = undefined
  }, 0)
}
