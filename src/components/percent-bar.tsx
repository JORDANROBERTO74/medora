/**
 * The thin bar with its percentage on the right, as shown on the home specialty
 * cards; the quiz menu repeats it so both menus read the same at a glance.
 */
export function PercentBar({ percent }: { percent: number }) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[#FF5216]"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-[11px] font-black text-slate-500">{percent}%</span>
    </div>
  );
}
