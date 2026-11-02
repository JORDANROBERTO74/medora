import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { Markdown } from './markdown'

describe('Markdown', () => {
  it('renders bold, lists and tables, and drops raw html comments', () => {
    const html = renderToStaticMarkup(
      <Markdown>{'<!-- p:2 -->\n\n**Fuerte**\n\n- uno\n- dos\n\n| A | B |\n| - | - |\n| 1 | 2 |'}</Markdown>
    )

    expect(html).toContain('<strong')
    expect(html).toContain('<ul')
    expect(html).toContain('<table')
    // Both the raw comment and its escaped form must be absent from the output.
    expect(html).not.toContain('<!-- p:2 -->')
    expect(html).not.toContain('&lt;!--')
    expect(html).not.toContain('p:2')
  })
})
