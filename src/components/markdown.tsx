import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ParagraphNote } from '@/components/paragraph-note'
import { createAnchor, isHeadingLikeMarkdown } from '@/lib/notes/anchors'

export type ParagraphNoteContext = {
  href: string
  block: number
  title: string
}

type RemarkNode = {
  type: string
  data?: { hProperties?: Record<string, string> }
  children?: RemarkNode[]
}

// Mark only root-level paragraphs so list items do not get a note button.
function remarkTopLevelParagraphs() {
  return (tree: RemarkNode) => {
    for (const node of tree.children ?? []) {
      if (node.type === 'paragraph') {
        node.data = {
          ...node.data,
          hProperties: { ...node.data?.hProperties, 'data-top-level': 'true' },
        }
      }
    }
  }
}

/** Markdown renderer for corpus content (bold, lists, tables, images). */
export function Markdown({
  children,
  noteContext,
}: {
  children: string
  noteContext?: ParagraphNoteContext
}) {
  const sourceLines = children.split('\n')

  const paragraphMarkdown = (
    node: { position?: { start: { line: number }; end: { line: number } } } | undefined
  ) => {
    if (!node?.position) return ''
    return sourceLines
      .slice(node.position.start.line - 1, node.position.end.line)
      .join('\n')
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkTopLevelParagraphs]}
      skipHtml
      components={{
        p: ({ children, node }) => {
          const topLevel = node?.properties?.['data-top-level'] === 'true'
          const raw = paragraphMarkdown(node)
          if (
            !noteContext ||
            !node?.position ||
            !topLevel ||
            isHeadingLikeMarkdown(raw)
          ) {
            return <p className="mt-3 text-base font-medium leading-8 text-slate-600">{children}</p>
          }

          const anchor = createAnchor({
            href: noteContext.href,
            block: noteContext.block,
            line: node.position.start.line,
            markdown: raw,
          })

          return (
            <ParagraphNote anchor={anchor} sourceTitle={noteContext.title}>
              {children}
            </ParagraphNote>
          )
        },
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
          <h3 className="mt-7 text-base font-black uppercase tracking-wider text-slate-800">{children}</h3>
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
