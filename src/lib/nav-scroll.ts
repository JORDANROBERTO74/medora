// Facebook-style nav: hide after 80px net scroll down, show after 40px net up, always visible near the top.
export const HIDE_AFTER_PX = 80
export const SHOW_AFTER_PX = 40
const TOP_EDGE_PX = 80

export type NavScrollState = { hidden: boolean; acc: number }

export function stepNavScroll(
  current: NavScrollState,
  deltaY: number,
  scrollY: number
): NavScrollState {
  if (scrollY < TOP_EDGE_PX) return { hidden: false, acc: 0 }
  const acc = current.acc + deltaY
  if (acc >= HIDE_AFTER_PX) return { hidden: true, acc: 0 }
  if (acc <= -SHOW_AFTER_PX) return { hidden: false, acc: 0 }
  return { hidden: current.hidden, acc }
}
