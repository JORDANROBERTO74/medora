import { BackHeader } from '@/components/back-header'
import { ProgressBar } from '@/components/progress-bar'
import { TopicRow } from '@/components/topic-row'
import type { Specialty } from '@/lib/content'

export function TopicsView({ specialty }: { specialty: Specialty }) {
  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <BackHeader
        href="/dashboard"
        backLabel="Volver al inicio"
        eyebrow={`Especialidad ${specialty.number}`}
        title={specialty.name}
      />
      <div className="rounded-3xl bg-slate-900 p-6 text-white">
        <p className="text-sm font-bold text-slate-400">TU PROGRESO</p>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-4xl font-black">{specialty.progress}%</p>
          <p className="text-sm font-bold text-slate-400">{specialty.topics.length} temas disponibles</p>
        </div>
        <ProgressBar value={specialty.progress} onDark className="mt-5" />
      </div>
      <section>
        <h2 className="mb-3 text-xl font-black">Temas de {specialty.name}</h2>
        <div className="flex flex-col gap-3">
          {specialty.topics.map((topic, index) => (
            <TopicRow
              key={topic.slug}
              topic={topic}
              index={index}
              href={`/dashboard/lesson/${specialty.slug}/${topic.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
