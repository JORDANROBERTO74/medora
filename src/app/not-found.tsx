import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
      <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">404</p>
      <h1 className="text-3xl font-black">Esta página no existe.</h1>
      <p className="max-w-sm text-sm font-medium text-muted-foreground">
        El enlace puede estar roto o el tema ya no está disponible.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-[#FF5216] px-5 py-3 text-sm font-black text-white hover:bg-[#e94810]"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
