/*
 * Workshop steps — content source of truth.
 *
 * Each step is an object:
 *   { id, number, title, subtitle, bodyHTML }
 *
 * - `number` is what shows in the circular badge.
 * - `bodyHTML` is rendered as-is into the accordion body. You can use:
 *     <p>, <ul>/<ol>/<li>, <pre><code>...</code></pre>, <a>, <kbd>, <strong>, <em>
 *   Plus any class you define in styles.css.
 *
 * Placeholders below match the reference workshop. Replace `bodyHTML` per step
 * as the screenshot content is provided.
 */
window.WORKSHOP_STEPS = [
  {
    id: "fork-clone",
    number: 1,
    title: "Get the Repository",
    subtitle: "Download the project as a ZIP, or fork it if you have a GitHub account.",
    bodyHTML: `<p>Grab a local copy of the KYC demo app so you can work on it. If you don't have a GitHub account, use Option 1. If you do, prefer Option 2 so you can push your changes.</p>

<p><strong>Option 1 — Download ZIP (recommended, no GitHub account needed)</strong></p>
<p><a href="https://github.com/AlexandrePoussard/claude-code-kyc-app/archive/refs/heads/main.zip">Download the ZIP</a>, unzip it, and <code>cd</code> into the directory.</p>

<p><strong>Option 2 — Fork + Git (if you have a GitHub account)</strong></p>
<ol>
  <li>Go to <a href="https://github.com/AlexandrePoussard/claude-code-kyc-app">https://github.com/AlexandrePoussard/claude-code-kyc-app</a> and click <strong>Fork</strong> in the top-right corner.</li>
  <li>Clone your fork:
    <pre><code>git clone git@github.com:YOUR_USERNAME/claude-code-kyc-app.git</code></pre>
  </li>
  <li>Enter the directory and create a working branch:
    <pre><code>cd claude-code-kyc-app &amp;&amp; git checkout -b new_features</code></pre>
  </li>
</ol>`,
  },
  {
    id: "launch-claude",
    number: 2,
    title: "Launch Claude Code",
    subtitle: "What you'll learn: Starting Claude Code, selecting a model.",
    bodyHTML: `<p><strong>Option A — Desktop Application (recommended)</strong></p>
<ol>
  <li>Open the <strong>Claude Code</strong> desktop app.</li>
  <li>Click <strong>Open folder</strong> (or drag the project folder onto the app) and select the directory you just downloaded or cloned.</li>
  <li>Once the project is loaded, select your preferred model from the model picker at the bottom of the window.</li>
</ol>
<p>Claude Code is now running in your project — you can type prompts directly into the chat panel.</p>

<p><strong>Option B — Terminal</strong></p>
<p>Open your terminal inside the project directory and start Claude Code:</p>
<pre><code>claude</code></pre>
<p>Once Claude Code is running, select your preferred model:</p>
<pre><code>/model</code></pre>
<p>Choose a model from the list. For this workshop, any model works well.</p>`,
  },
  {
    id: "run-locally",
    number: 3,
    title: "Run the KYC App Locally",
    subtitle: "What you'll learn: Using Claude Code to install dependencies and start dev servers.",
    bodyHTML: `<p>Paste the following prompt into Claude Code:</p>
<pre><code>Install dependencies and start the development servers and open up the frontend and backend in my respective browser windows.</code></pre>

<p>Claude will:</p>
<ul>
  <li>Install npm dependencies for the Vue 3 frontend (<code>cd client &amp;&amp; npm install</code>)</li>
  <li>Install Python dependencies for the FastAPI backend (<code>cd server &amp;&amp; uv sync</code>)</li>
  <li>Start the backend server on port 8001</li>
  <li>Start the frontend dev server on port 3000</li>
</ul>

<p>Once both servers are running, open <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a> in your browser, and inspect the app.</p>

<p>You should see the <strong>Workshop Console</strong> — a KYC (Know Your Customer) reviewer dashboard with applications, risk scoring, and sanctions checks.</p>

<p>Explore the app for a few minutes. Click through the tabs to get familiar with what's there:</p>
<ul>
  <li><strong>Reviewer dashboard</strong> — KPI cards (total applications, queue, high-risk, sanctions hits), status breakdown, risk distribution, submissions over time, and the applications table</li>
  <li><strong>Analytics</strong> — deeper cuts on submissions, risk, and country breakdowns</li>
  <li><strong>New application</strong> — submit a new KYC application through the intake form</li>
  <li><strong>Audit log</strong> — review actions taken on applications</li>
</ul>

<p>Inside the applications table you can filter by status or risk, search applicants, and open a row to see the full profile (identity fields, liveness check, sanctions results, decision history).</p>
`,
  },
  {
    id: "claude-md",
    number: 4,
    title: "Edit the CLAUDE.md File",
    subtitle: "What you'll learn: Project context files, @-file mentions, ways to edit instructions and Claude's persistent memory systems.",
    bodyHTML: `<p>The KYC app project should have a <code>CLAUDE.md</code> file that gives Claude persistent instructions about the project — coding conventions, system architecture, technology stacks and rules to follow. This repo already has one.</p>

<div class="note">If you're starting a fresh project without a CLAUDE.md, run <code>/init</code> to generate one automatically.</div>

<h4>Using @-file mentions</h4>
<p>You can reference any file in your prompts using <code>@</code>. Try it:</p>
<pre><code>Print out exactly what is in @CLAUDE.md</code></pre>
<p>Claude reads the file and prints its contents. The <code>@</code> syntax works for any file in your project.</p>

<h4>Three ways to edit the CLAUDE.md file</h4>

<h4>Method 1 — Use <code>#</code> Memory Mode (recommended)</h4>
<p>Press <code>#</code> at the prompt to enter Memory Mode. This lets you write directly to CLAUDE.md without consuming any tokens — Claude doesn't need to process the request.</p>
<pre><code># Always document non-obvious logic changes with comments</code></pre>

<h4>Method 2 — Edit directly in your editor</h4>
<p>Open <code>CLAUDE.md</code> in your text editor (VSCode, vim, etc.) and make changes. Also zero token cost.</p>

<h4>Method 3 — Prompt Claude to edit it</h4>
<pre><code>Edit my CLAUDE.md file to add "Always document non-obvious logic changes with comments"</code></pre>
<p>Claude opens the file, adds the instruction, and saves it.</p>

<div class="note note--info">Methods 1 and 2 are free — no tokens consumed. Method 3 uses tokens since Claude processes the request and makes the edit. Use Method 3 when you want Claude to decide how to organize or word the instruction.</div>

<h4>Persistent memory systems</h4>
<p>Claude has 2 persistent memory systems but ultimately the record ends up in the same place — the <code>./.claude/CLAUDE.md</code> (personal):</p>

<p><code>/CLAUDE.md</code> markdown files with persistent instructions that load automatically:</p>
<table>
  <thead>
    <tr><th>File</th><th>Scope</th></tr>
  </thead>
  <tbody>
    <tr><td><code>./CLAUDE.md</code></td><td>Project (shared via git)</td></tr>
    <tr><td><code>./.claude/rules/*.md</code></td><td>Topic-specific rules</td></tr>
    <tr><td><code>./.claude/CLAUDE.md</code></td><td>Personal, all projects</td></tr>
    <tr><td><code>./CLAUDE.local.md</code></td><td>Personal, this project only</td></tr>
  </tbody>
</table>

<p><code>/memory</code> command which writes to your personal <code>./.claude/CLAUDE.md</code> and is faster for capturing preferences on the fly.</p>`,
  },
  {
    id: "explore-codebase",
    number: 5,
    title: "Explore the Codebase",
    subtitle: "What you'll learn: Using Claude Code to understand and visualize a codebase.",
    bodyHTML: `<p>Ask Claude to investigate the project and generate an architecture overview:</p>
<pre><code>I want to understand this codebase. Investigate the project and create a simple, professional HTML-based architecture page showing the system architecture, tech stack, and data flow. Then open the file in a browser window.</code></pre>

<p>Claude will:</p>
<ul>
  <li>Explore the directory structure</li>
  <li>Read key files to understand the architecture</li>
  <li>Generate an HTML page with a visual diagram showing the Vue 3 frontend, FastAPI backend, and JSON data flow</li>
  <li>Open the file in your browser</li>
</ul>

<p>This demonstrates how Claude Code can quickly onboard you to an unfamiliar codebase.</p>`,
  },
  {
    id: "build-feature",
    number: 6,
    title: "Build a Feature",
    subtitle: "Ship something new end-to-end with Claude.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "context-management",
    number: 7,
    title: "Context Management",
    subtitle: "Keep Claude focused with compaction, /clear, and scoping.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "add-playwright",
    number: 8,
    title: "Add Playwright MCP",
    subtitle: "Install and configure the Playwright MCP server.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "use-playwright",
    number: 9,
    title: "Use Playwright MCP to Test",
    subtitle: "Drive the browser from Claude to validate your feature.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "github-integration",
    number: 10,
    title: "Connect Claude Code to GitHub",
    subtitle: "Wire up the GitHub App / gh CLI for PR automation.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "commit-pr",
    number: 11,
    title: "Commit, Push & Open a PR",
    subtitle: "Ship your changes back upstream.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "wrap-up",
    number: 12,
    title: "Wrap Up",
    subtitle: "Reflect, share feedback, and next steps.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
];
