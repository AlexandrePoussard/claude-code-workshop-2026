# Claude Code Workshop — Instructions

Static site hosting step-by-step instructions for the Claude Code workshop.
Plain HTML/CSS/JS. No build step.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

**Default password:** `zurich-2026`

## Editing content

- **Step content** lives in `content/steps.js`. Each entry has a `bodyHTML`
  field that accepts raw HTML (paragraphs, lists, `<pre><code>` blocks, etc.).
- **Prerequisites / troubleshooting** are inline in `index.html`.
- **Theme colors** live in the `:root` block at the top of `styles.css`.

## Changing the password

The gate compares a SHA-256 hash. To change the password:

1. Open the deployed site (or local preview) and unlock once.
2. In the browser devtools console run:

   ```js
   await hashPassword("your-new-password")
   ```

3. Copy the returned hex string.
4. Replace `PASSWORD_SHA256` in `app.js` with the new hash.
5. Commit and redeploy.

Alternatively from a terminal:

```bash
echo -n "your-new-password" | shasum -a 256
```

> **Note:** this gate is for casual friction only. Anyone with devtools can
> read the hash and brute-force a weak password. Use a non-trivial password.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `artefact-claude-code-zurich`).
2. In the repo: **Settings → Pages**.
3. Under *Source* choose **Deploy from a branch**, pick `main` and folder `/`
   (or `/docs` if you prefer — move files accordingly).
4. Save. Within ~1 minute the site is live at
   `https://<username>.github.io/<repo>/`.

No CI needed — GitHub Pages serves the files as-is.

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
