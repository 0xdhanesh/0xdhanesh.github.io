import { readFile, writeFile, mkdir, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { marked } from 'marked';
import YAML from 'yaml';
import sanitizeHtml from 'sanitize-html';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(path.join(root, file), 'utf8');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function renderMarkdown(source, links = {}) {
  const lexer = new marked.Lexer({ gfm: true });
  Object.assign(lexer.tokens.links, links);
  const tokens = lexer.lex(source);
  return sanitizeHtml(marked.parser(tokens), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ['src', 'alt', 'title', 'width', 'height'], code: ['class'], th: ['align'], td: ['align'] },
    allowedSchemes: ['http', 'https', 'mailto'],
  }).replace(/<table>/g, '<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable table"><table>').replace(/<\/table>/g, '</table></div>');
}

export function parsePortfolio(source) {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!frontmatter) throw new Error('portfolio.md must start with YAML front matter between --- lines.');
  const profile = YAML.parse(frontmatter[1]);
  for (const field of ['name','handle','role','location','origin','email','github','blog','url','headline','headline_accent','summary']) {
    if (typeof profile[field] !== 'string' || !profile[field].trim()) throw new Error(`Missing or invalid profile field: ${field}`);
  }
  for (const field of ['github', 'blog', 'url']) if (!/^https:\/\//.test(profile[field])) throw new Error(`${field} must use https://`);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) throw new Error('Invalid email address');
  if (profile.photo && (typeof profile.photo !== 'string' || !/^assets\/[a-zA-Z0-9_./-]+$/.test(profile.photo) || profile.photo.split('/').includes('..'))) throw new Error('photo must be a path inside assets/');
  if (profile.recruiting_summary !== undefined && typeof profile.recruiting_summary !== 'string') throw new Error('recruiting_summary must be text');
  if (profile.role_fit !== undefined && (!Array.isArray(profile.role_fit) || profile.role_fit.some(item => typeof item !== 'string'))) throw new Error('role_fit must be a list of text entries');
  const tokens = marked.lexer(source.slice(frontmatter[0].length));
  const sections = [];
  let current;
  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === 2) {
      current = { title: token.text, id: slug(token.text), intro: '', records: [] };
      if (sections.some(s => s.id === current.id)) throw new Error(`Duplicate section: ${token.text}`);
      sections.push(current);
    } else if (current) {
      if (token.type === 'heading' && token.depth === 3) current.records.push(token.raw);
      else if (token.type !== 'hr') {
        if (current.records.length) current.records[current.records.length - 1] += token.raw;
        else current.intro += token.raw;
      }
    }
  }
  for (const id of ['impact','selected-work','experience','expertise','credentials','teaching-and-writing','about']) {
    if (!sections.some(s => s.id === id)) throw new Error(`Required section missing: ${id}`);
  }
  return { profile, sections, links: tokens.links };
}

async function build() {
  const source = await read('content/portfolio.md');
  const { profile: p, sections, links } = parsePortfolio(source);
  if (p.photo) await read(p.photo);
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').replace(/<!--[\s\S]*?-->/g, '').trim();
  const markdown = `# ${p.name}\n\n> ${p.role}. Based in ${p.location}. From ${p.origin}.\n\n${p.summary}\n\nContact: ${p.email}\n\n${body}\n`;
  const evidence = sections.filter(s => ['impact', 'selected-work', 'experience', 'credentials'].includes(s.id))
    .map(s => '## ' + s.title + '\n\n' + s.intro + s.records.join('\n')).join('\n');
  const fit = (p.role_fit || []).map(item => '- ' + item).join('\n');
  const llms = `# ${p.name}

> ${p.role} based in ${p.location}. ${p.recruiting_summary || p.summary}

${fit}

The experience and outcomes below are drawn from this candidate-authored portfolio. Public project links provide material for technical review; confidential client outcomes are described in the work history.

${evidence}

## Further reading

- [Full portfolio](${p.url}/index.md): Complete work history, expertise, credentials, teaching, and background.
- [Website](${p.url}/): Portfolio and contact details.
- [GitHub](${p.github}): Public projects and source code.
- [Technical writing](${p.blog}): Research and technical notes.

Contact: ${p.email}
`;
  const renderRecords = section => section.records.map((record, i) => `<article class="record"><span class="record-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${renderMarkdown(record, links)}</article>`).join('\n');
  const sectionHTML = sections.filter(s => s.id !== 'impact').map((s, i) => `<section class="portfolio-section ${s.id}" id="${s.id}" aria-labelledby="heading-${s.id}"><div class="section-heading"><p class="eyebrow">${String(i + 1).padStart(2, '0')} / ${escape(s.title)}</p><h2 id="heading-${s.id}">${escape(({ 'selected-work':'Research you can inspect.', experience:'Depth, built in practice.', expertise:'Across the attack surface.', credentials:'A foundation of expertise.', 'teaching-and-writing':'Knowledge worth passing on.', about:'The person behind the work.' })[s.id] || s.title)}</h2>${renderMarkdown(s.intro)}</div><div class="records">${renderRecords(s)}</div></section>`).join('\n');
  const schema = JSON.stringify({ '@context':'https://schema.org', '@type':'Person', name:p.name, jobTitle:p.role, url:p.url, sameAs:[p.github,p.blog], homeLocation:{'@type':'Place',name:p.location} }).replace(/</g,'\\u003c');
  const values = {
    ...Object.fromEntries(Object.entries(p).map(([key,value])=>[key,escape(value)])),
    portrait: p.photo ? `<span class="profile-frame"><img class="profile-photo" src="${escape(p.photo)}" alt="${escape(p.photo_alt || `Portrait of ${p.name}`)}" width="112" height="112" fetchpriority="high"></span>` : '',
    sections: sectionHTML, impact:renderRecords(sections.find(s=>s.id==='impact')).replaceAll('<h3>', '<h2>').replaceAll('</h3>', '</h2>'), schema,
    year: new Date().getUTCFullYear(),
  };
  const html = (await read('src/template.html')).replace(/\{\{(\w+)\}\}/g, (_,key) => { if (!(key in values)) throw new Error(`Unknown template key ${key}`); return values[key]; });
  await mkdir(path.join(root,'dist'), {recursive:true});
  // Keep the root HTML usable for direct previews and branch-based hosting too.
  for (const [file, text] of [['llms.txt', llms], ['index.md', markdown]]) {
    await writeFile(path.join(root, file), text);
    await writeFile(path.join(root, 'dist', file), text);
  }
  await writeFile(path.join(root,'index.html'), html);
  await writeFile(path.join(root,'dist/index.html'), html);
  for (const asset of ['styles.css','site.js','favicon.svg']) await copyFile(path.join(root,asset), path.join(root,'dist',asset));
  await cp(path.join(root,'assets'), path.join(root,'dist/assets'), {recursive:true});
  for (const [file, anchor] of [['work.html','experience'],['research.html','selected-work'],['about.html','about']]) {
    const redirect = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(p.name)}</title><meta http-equiv="refresh" content="0;url=./#${anchor}"><link rel="canonical" href="${escape(p.url)}/#${anchor}"></head><body><p>This page has moved. <a href="./#${anchor}">Continue to ${anchor.replaceAll('-',' ')}.</a></p></body></html>`;
    await writeFile(path.join(root,file), redirect);
    await writeFile(path.join(root,'dist',file), redirect);
  }
  await writeFile(path.join(root,'dist/.nojekyll'), '');
  await writeFile(path.join(root,'dist/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${p.url}/sitemap.xml\n`);
  await writeFile(path.join(root,'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(p.url)}/</loc></url></urlset>`);
  console.log(`Built ${sections.length} sections from content/portfolio.md → dist/ and index.html`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
