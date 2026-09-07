import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parsePortfolio, renderMarkdown } from '../scripts/build.mjs';
const source = await readFile(new URL('../content/portfolio.md', import.meta.url),'utf8');
test('new work records become cards without editing HTML', () => {
  const updated = source.replace('## Experience', '### A new project\n\n**Result:** shipped a fix.\n\n[Evidence](https://example.com)\n\n## Experience');
  const records = parsePortfolio(updated).sections.find(s=>s.id==='selected-work').records;
  assert.equal(records.length,4);
  assert.match(renderMarkdown(records[3]), /<strong>Result:<\/strong>/);
});
test('headings inside code fences do not split records or sections', () => {
  const updated = source.replace('## Experience','```md\n## Example heading\n### Example card\n```\n\n## Experience');
  const {sections}=parsePortfolio(updated);
  assert.equal(sections.length,7);
  assert.equal(sections.find(s=>s.id==='selected-work').records.length,3);
});
test('tables, nested lists, code, links and images render as HTML', () => {
  const html=renderMarkdown('| Task | Result |\n| --- | --- |\n| Test | Fixed |\n\n- Parent\n  - Child\n\n```js\nconst safe = 1 < 2;\n```\n\n![Diagram](diagram.png)\n\n[Read](https://example.com)');
  for(const fragment of ['<table>','<ul>','<pre>','&lt;','alt="Diagram"','href="https://example.com"']) assert.ok(html.includes(fragment),fragment);
});
test('unsafe embedded markup and links are removed', () => {
  const html=renderMarkdown('<script>alert(1)</script>\n\n<img src="x" onerror="alert(1)">\n\n[Bad](javascript:alert(1))');
  assert.doesNotMatch(html, /<script|onerror|javascript:/);
});
test('reference links resolve across Markdown sections', () => {
  const { sections, links } = parsePortfolio(source.replace('## Experience','### Reference project\n\n[Evidence][proof]\n\n## Experience')+'\n[proof]: https://example.com/evidence\n');
  const html=renderMarkdown(sections.find(s=>s.id==='selected-work').records[3],links);
  assert.match(html,/href="https:\/\/example.com\/evidence"/);
});
test('invalid metadata and missing or duplicate sections fail clearly', () => {
  assert.throws(()=>parsePortfolio(source.replace('email: dhanesh.professional@gmail.com','email: invalid')), /email/);
  assert.throws(()=>parsePortfolio(source.replace('## Experience','## History')), /experience/);
  assert.throws(()=>parsePortfolio(source+'\n## About\n'), /Duplicate/);
});
