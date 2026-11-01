import type { Metadata } from 'next'
import { OnboardingView } from './onboarding-view'

export const metadata: Metadata = {
  title: 'Bienvenido',
}

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <OnboardingView />
      </div>
    </main>
  )
}
