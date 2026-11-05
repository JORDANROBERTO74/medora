"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Home, NotebookPen, Brain, Trophy, Settings2 } from "lucide-react";
import { stepNavScroll } from "@/lib/nav-scroll";
import { useUserData } from "@/lib/user-data/context";

type NavEntry = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: (pathname: string) => boolean;
};

const entries: NavEntry[] = [
  {
    href: "/dashboard",
    label: "Inicio",
    icon: Home,
    isActive: (pathname) =>
      pathname === "/dashboard" || pathname.startsWith("/dashboard/reading"),
  },
  {
    href: "/dashboard/quiz",
    label: "Quiz",
    icon: Brain,
    isActive: (pathname) => pathname.startsWith("/dashboard/quiz"),
  },
  {
    href: "/dashboard/notes",
    label: "Notas",
    icon: NotebookPen,
    isActive: (pathname) =>
      pathname.startsWith("/dashboard/notes") ||
      pathname.startsWith("/dashboard/lesson"),
  },
  {
    href: "/dashboard/progress",
    label: "Progreso",
    icon: Trophy,
    isActive: (pathname) => pathname.startsWith("/dashboard/progress"),
  },
  {
    href: "/settings",
    label: "Ajustes",
    icon: Settings2,
    isActive: (pathname) => pathname.startsWith("/settings"),
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const { unseenAchievements } = useUserData();
  const activeIndex = Math.max(
    0,
    entries.findIndex((entry) => entry.isActive(pathname)),
  );
  const [hidden, setHidden] = useState(false);
  const scroll = useRef({ hidden: false, acc: 0 });
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const next = stepNavScroll(scroll.current, y - lastY.current, y);
      lastY.current = y;
      scroll.current = next;
      setHidden(next.hidden);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      inert={hidden}
      className={`fixed inset-x-4 bottom-4 z-10 mx-auto flex max-w-md items-center justify-between rounded-[28px] border border-slate-100 bg-white/95 p-2 shadow-[0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur transition-transform duration-300 ease-out sm:inset-x-auto sm:w-[390px] ${
        hidden ? "translate-y-[calc(100%_+_2rem)]" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-2 left-2 w-[calc((100%_-_1rem)/5)] rounded-2xl bg-[#FF5216] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {entries.map((entry, index) => (
        <NavItem
          key={entry.href}
          entry={entry}
          active={index === activeIndex}
          badge={entry.href === "/dashboard/progress" ? unseenAchievements : 0}
        />
      ))}
    </nav>
  );
}

// Icon-only items: label stays as aria-label, flex-1 keeps equal tap targets.
function NavItem({
  entry,
  active,
  badge,
}: {
  entry: NavEntry;
  active: boolean;
  badge: number;
}) {
  const label =
    badge > 0
      ? `${entry.label}, ${badge} ${badge === 1 ? "logro nuevo" : "logros nuevos"}`
      : entry.label;

  return (
    <Link
      href={entry.href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`relative flex min-w-0 flex-1 items-center justify-center rounded-2xl py-3 transition ${
        active
          ? "text-white"
          : "text-muted-foreground hover:bg-slate-50 hover:text-slate-700"
      }`}
    >
      <entry.icon className="size-5" />
      {badge > 0 && (
        <span
          aria-hidden="true"
          className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#FF5216] px-1 text-[10px] font-black leading-none text-white ring-2 ring-white"
        >
          {badge > 9 ? "9+" : badge}
        </span>
      )}
    </Link>
  );
}
