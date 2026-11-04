import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAuthUser } from "@/lib/supabase/server";
import { signOutAction } from "@/lib/auth/actions";
import { ThemePreference } from "@/components/theme-preference";
import { ChangePasswordButton } from "./change-password-button";

export const metadata: Metadata = {
  title: "Ajustes",
};

function SettingsLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between px-4 py-4 text-sm font-extrabold hover:bg-slate-50"
    >
      {label}
      <ChevronRight className="size-4 text-slate-300" />
    </Link>
  );
}

function initialsOf(fullName: string, email: string) {
  const fromName = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
  return (fromName || email.slice(0, 2) || "?").toUpperCase();
}

export default async function SettingsPage() {
  const { user } = await getAuthUser();
  const fullName =
    typeof user?.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name
      : "";
  const email = user?.email ?? "";
  const displayName = fullName || email.split("@")[0] || "Tu cuenta";

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
          Cuenta y ajustes
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
          Ajustes
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Tu cuenta, tu sesión y accesos rápidos.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
            {initialsOf(fullName, email)}
          </div>
          <div className="min-w-0">
            <p className="truncate font-extrabold">{displayName}</p>
            <p className="mt-0.5 truncate text-xs font-semibold text-muted-foreground">
              {email}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-slate-500">
          Preferencias
        </h2>
        <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <ThemePreference />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-slate-500">
          Accesos rápidos
        </h2>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <SettingsLink href="/dashboard/notes" label="Notas" />
          <SettingsLink href="/dashboard/progress" label="Mi progreso" />
          <SettingsLink href="/dashboard/quiz" label="Quiz rápido" />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-slate-500">
          Sesión
        </h2>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <ChangePasswordButton />
          <form action={signOutAction} className="border-t border-slate-100">
            <button
              type="submit"
              className="block w-full px-4 py-4 text-left text-sm font-black text-[#FF5216] hover:bg-orange-50"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
