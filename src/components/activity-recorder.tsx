'use client'

import { useEffect, useRef } from 'react'
import type { ProgressContentType } from '@/lib/supabase/database.types'
import { useUserData } from '@/lib/user-data/context'

/** Stamps today's streak the first time this content is opened. */
export function ActivityRecorder({
  contentType,
  contentKey,
}: {
  contentType: ProgressContentType
  contentKey: string
}) {
  const { markActivity } = useUserData()
  const recorded = useRef<string | null>(null)

  useEffect(() => {
    if (recorded.current === contentKey) return
    recorded.current = contentKey
    void markActivity(contentType, contentKey)
  }, [contentType, contentKey, markActivity])

  return null
}
