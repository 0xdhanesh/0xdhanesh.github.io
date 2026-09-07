# Dhanesh Sivasamy - portfolio

A static portfolio for https://0xdhanesh.github.io. All personal details and work records live in **[content/portfolio.md](content/portfolio.md)**. The build produces complete HTML: no browser-side Markdown fetching, framework, third-party fonts, or tracking.

## Update your portfolio

1. Open `content/portfolio.md` (you can use GitHub's pencil / Edit button).
2. Edit the profile fields between the first two `---` lines, or update the Markdown below them.
3. Commit to your default branch. Once GitHub Pages is configured for Actions, the workflow rebuilds and publishes automatically.

Your current work details are maintained in the Experience section of `content/portfolio.md`.

The top profile fields control your name, title, location, email, external links, headline, and summary. Quote YAML values containing a colon followed by a space, for example `role: "Security Engineer: Product & AI"`.

## Add a work record

Under `## Experience`, place the newest role first:

```md
### Company name

*Job title · Sep 2026 – Present · Dubai, UAE*

- **Outcome:** describe a measurable result you can substantiate.
- **Contribution:** explain what you personally built, tested, or improved.
- **Scope:** add relevant systems, techniques, and collaboration.

---
```

## Add a project or research item

Under `## Selected work`:

```md
### A clear project title

*AI security · Research*

Explain the problem, what you built or discovered, and the outcome.
Use **bold** to highlight the most useful detail.

[Read the research ↗](https://github.com/0xdhanesh/your-repository)

---
```

Each `###` heading creates a new card or timeline entry. `##` headings create sections. Keep the existing section names because they connect to navigation and layout; additional sections are supported and appear in file order. `####` creates subheadings within a record. Horizontal rules between records are optional visual separators in the source, not page elements.

Standard Markdown supports paragraphs, bold, italic, ordered and nested lists, quotes, links, code fences, and tables. Reference links are supported within records and across the document. HTML is sanitized at build time, so scripts, event handlers, and unsafe link protocols are removed.

Add images or a resume PDF to `assets/`, then link from Markdown:

```md
![Architecture of the testing workflow](assets/workflow.png)
[Download my resume](assets/resume.pdf)
```

Assets are copied into the published site. Use descriptive image alt text and keep images reasonably sized. Everything in this file and in `assets/` is public. Keep private notes elsewhere; HTML comments are excluded from the rendered page but remain visible in a public repository.

## Profile photo

A portrait placeholder appears beside your name on desktop and mobile. Upload your photo to `assets/`, then update these fields in `content/portfolio.md`:

```yaml
photo: assets/profile.jpg
photo_alt: Portrait of Dhanesh Sivasamy
```

Use a square crop with your face centred. Leave `photo` empty to hide the portrait. No HTML edits are needed.

## LLM-readable content

The build generates `/llms.txt` and `/index.md` from the same portfolio Markdown, including your latest work records. The `recruiting_summary` and `role_fit` fields in `content/portfolio.md` control the recruiting brief. The build appends the current impact, selected work, experience, and credentials directly from your records, so evidence updates automatically. Keep role claims aligned with the supporting records. Do not edit these generated files. Editor comments and YAML are excluded from the published Markdown. Discovery links in the HTML follow the [llms.txt proposal](https://llmstxt.org/).

## Local preview

Requires Node.js 22 or newer:

```sh
npm ci
npm test
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.
Open http://127.0.0.1:4173. After editing Markdown, run the build again and refresh. You can also open the generated `index.html` directly. Do not edit generated HTML by hand: the next build overwrites it.

The **Save as PDF** action opens the browser print dialog; choose Save as PDF. Print styling includes contact details and public project URLs.

## Publish to GitHub Pages

1. Push this repository to `0xdhanesh/0xdhanesh.github.io` on `main` (or `master`).
2. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Build and publish portfolio → Run workflow**, or commit a content change.
4. When the workflow completes, visit https://0xdhanesh.github.io.

The workflow tests and builds pull requests, and publishes only the default branch. It uploads only `dist/`, keeping build scripts and editing files out of the deployed artifact. Existing `/work.html`, `/research.html`, and `/about.html` URLs redirect to their corresponding sections.

Reference: [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Design and maintenance

Deep navy, warm ivory, and teal establish a restrained visual identity with clear contrast. A short introduction, visible evidence, outcomes, and a chronological work history help readers assess fit at different levels of detail. The India-to-Dubai context is stated directly. There are no invented endorsements, availability claims, or assumptions about individual recruiters' reactions to colours.

- `content/portfolio.md`: all personal and career content.
- `src/template.html`: shared HTML structure and section framing.
- `styles.css`: responsive layout, focus styles, reduced motion, and print styles.
- `site.js`: optional navigation highlighting and print action.
- `scripts/build.mjs`: Markdown rendering, validation, sanitization, assets, metadata, and redirects.
- `tests/content.test.mjs`: content pipeline checks.
- `.github/workflows/pages.yml`: build and deployment.

For local browser checks with Microsoft Edge installed, start the preview server and run `node scripts/browser-check.mjs`. This checks five widths (320–1440px), horizontal overflow, anchors, automated WCAG A/AA rules, no-JavaScript rendering, legacy redirects, and browser errors. Screenshots and a print PDF are written to the ignored `.preview/` folder. Automated accessibility checks supplement manual review; they do not establish full WCAG conformance.

## License

Content © Dhanesh Sivasamy. HTML, CSS, and JavaScript code released under MIT, consistent with the original repository.
