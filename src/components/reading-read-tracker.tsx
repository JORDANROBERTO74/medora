'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useUserData } from '@/lib/user-data/context'

/** The end must stay on screen this long before the chapter counts. */
const DWELL_MS = 600
/** Chapters shorter than the viewport never scroll: count them after the paint. */
const SHORT_DOCUMENT_MS = 900
/** Tolerance so the fixed bottom nav does not hide the last line. */
const BOTTOM_MARGIN = 160

/**
 * Marks a reading chapter as read only when the reader reaches its end.
 * Opening it still stamps the study day (the streak), never the completion.
 */
export function ReadingReadTracker({ contentKey }: { contentKey: string }) {
  const { markActivity, touchStudyDay } = useUserData()
  const sentinelRef = useRef<HTMLDivElement>(null)
  const marked = useRef(false)
  const reached = useRef(false)
  const dwell = useRef<number | undefined>(undefined)

  useEffect(() => {
    void touchStudyDay()
  }, [touchStudyDay])

  const markRead = useCallback(() => {
    if (marked.current) return
    marked.current = true
    void markActivity('reading', contentKey)
  }, [markActivity, contentKey])

  useEffect(() => {
    const node = sentinelRef.current
    if (!node) return

    const atEnd = () => {
      const page = document.documentElement
      const rect = node.getBoundingClientRect()
      const visible = rect.top < window.innerHeight && rect.bottom > 0
      const nearBottom =
        window.scrollY + window.innerHeight >= page.scrollHeight - BOTTOM_MARGIN
      return visible || nearBottom
    }

    // Lazy images grow the page after the scroll stops, so re-check on layout.
    const schedule = () => {
      window.clearTimeout(dwell.current)
      if (marked.current) return
      // Reaching the end once is enough: later growth comes from images that were
      // already loading, not from content the reader skipped.
      if (atEnd()) reached.current = true
      if (!reached.current) return
      dwell.current = window.setTimeout(() => {
        if (reached.current) markRead()
      }, DWELL_MS)
    }

    const shortDocument = window.setTimeout(() => {
      if (document.documentElement.scrollHeight <= window.innerHeight + 80) markRead()
    }, SHORT_DOCUMENT_MS)

    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(document.body)

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()

    return () => {
      window.clearTimeout(shortDocument)
      window.clearTimeout(dwell.current)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      resizeObserver.disconnect()
    }
  }, [markRead])

  return <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />
}
