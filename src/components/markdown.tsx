import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Markdown renderer for corpus content (bold, lists, tables, images). */
export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      components={{
        p: ({ children }) => (
          <p className="mt-3 text-base font-medium leading-8 text-slate-600">{children}</p>
        ),
        strong: ({ children }) => <strong className="font-black text-slate-800">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        ul: ({ children }) => (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base font-medium leading-7 text-slate-600">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-base font-medium leading-7 text-slate-600">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
        h1: ({ children }) => (
          <h1 className="mt-8 text-2xl font-black tracking-tight text-slate-950">{children}</h1>
        ),
        h2: ({ children }) => <h2 className="mt-8 text-xl font-black text-slate-950">{children}</h2>,
        h3: ({ children }) => (
          <h3 className="mt-7 text-base font-black uppercase tracking-wider text-slate-500">{children}</h3>
        ),
        h4: ({ children }) => <h4 className="mt-6 text-base font-black text-slate-800">{children}</h4>,
        a: ({ children, href }) => (
          <a href={href} className="font-bold text-[#FF5216] underline-offset-2 hover:underline">
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-4 border-l-4 border-[#FF5216] bg-orange-50 px-5 py-3 text-slate-700">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-8 border-slate-200" />,
        table: ({ children }) => (
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full border-collapse text-left text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
        th: ({ children }) => (
          <th className="border-b border-slate-100 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-500">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border-b border-slate-100 px-4 py-3 align-top font-medium text-slate-600">{children}</td>
        ),
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={typeof src === 'string' ? src : undefined}
            alt={alt ?? ''}
            loading="lazy"
            className="my-5 w-full rounded-2xl border border-slate-100"
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
