# Claude Code Workshop — Instructions

Static site hosting step-by-step instructions for the Claude Code workshop.
Plain HTML/CSS/JS. No build step.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

- **Step content** lives in `content/steps.js`. Each entry has a `bodyHTML`
  field that accepts raw HTML (paragraphs, lists, `<pre><code>` blocks, etc.).
- **Prerequisites / troubleshooting** are inline in `index.html`.
- **Theme colors** live in the `:root` block at the top of `styles.css`.

## File structure

```
.
├── index.html          # password gate + page shell
├── styles.css          # Artefact-inspired minimal theme
├── app.js              # gate logic + step rendering
├── content/
│   └── steps.js        # the 12 workshop steps (edit me)
└── README.md
```
