import { achievementIconBodies, type AchievementIconKey } from '@/lib/achievements/icon-data'

/**
 * Fluent Emoji Flat rendered inline: no Iconify request at runtime and no extra
 * dependency. The bodies are generated, not hand-edited.
 */
export function AchievementIcon({
  icon,
  className,
}: {
  icon: AchievementIconKey
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: achievementIconBodies[icon] }}
    />
  )
}
