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
    subtitle: "What you'll learn: Plan Mode, iterative development, interactive feedback.",
    bodyHTML: `<p>This is the core of the workshop. You'll use <strong>Plan Mode</strong> to have Claude design a feature before implementing it, then iterate on the result.</p>

<h4>Enter Plan Mode</h4>
<p>Plan Mode lets Claude propose a plan and wait for your approval before writing any code.</p>
<ul>
  <li><strong>Desktop app:</strong> click the <strong>Plan</strong> toggle at the bottom of the chat input (next to the model picker) so it turns on.</li>
  <li><strong>Terminal:</strong> press <kbd>Shift</kbd>+<kbd>Tab</kbd> to switch Claude into Plan Mode.</li>
</ul>

<p>Choose one of the two feature options below.</p>

<h4>Option A: Assign a Relationship Manager to Approved Applicants</h4>
<p>Build a new tab that lets reviewers assign an investor <em>Relationship Manager</em> (RM) to an applicant once their KYC application has been approved and their account created.</p>

<p>Paste this prompt:</p>
<pre><code>Build a new "Relationship Manager" tab in the KYC reviewer console. It should have:
1. A list of approved applicants whose account has been created but who do not yet have an RM assigned
2. For each applicant, a dropdown of available Relationship Managers (with name, desk, and current book size)
3. An "Assign RM" button that records the assignment and moves the applicant out of the unassigned list
4. An "Assigned" section showing applicants who already have an RM, the RM's name, and the assignment date
5. Respect the existing application status (only "Approved" + "Account created" applicants are eligible)

Use the AskUserQuestion tool!</code></pre>

<p>Claude will present a plan. Review it — when it looks good, accept the plan and let Claude implement it.</p>

<div class="note note--info">Claude may ask you clarifying questions using the AskUserQuestion tool (e.g., "Should the RM list be seeded from mock data or a new endpoint?"). Answer these as they come up.</div>

<p>Test the feature in your browser once Claude finishes. You may notice things aren't perfect!</p>
<p>Then iterate: choose what you'd like to work on next.</p>

<div class="note"><strong>Pro Tip:</strong> Claude is an intelligent thought partner
<ul>
  <li>Can help plan, discover, ideate and design across the SDLC</li>
  <li>Can help identify biases, identify gaps and support critical thinking</li>
  <li>Can review, document, architect and draft visual diagrams</li>
  <li>Can check screenshots by pasting them into the conversation (Ctrl+V / Cmd+V)</li>
</ul>
</div>

<h4>Option B: SaaS-Style UI Redesign</h4>
<p>Transform the KYC app's interface from the basic layout into a polished, modern SaaS-style design using a reusable Claude Code skill.</p>

<h4>Part 1 — Create the skill</h4>
<pre><code>I want to build a skill that redesigns a Vue 3 application's UI into a modern SaaS-style interface with a vertical navigation sidebar on the left instead of a top nav bar, consistent spacing, and a polished professional look.</code></pre>
<p>Claude will ask follow-up questions to build the skill. Answer them to shape the skill's behavior.</p>

<h4>Part 2 — Apply the skill</h4>
<pre><code>Use the frontend-design skill to redesign this KYC reviewer console into a modern SaaS-style interface with:
1. Vertical navigation bar on the left side instead of the top
2. Clean, modern card layouts for the KPI tiles and applications table
3. Professional SaaS aesthetic suitable for a financial-compliance product

Use the AskUserQuestion tool!</code></pre>
<p>Claude presents a plan. Accept it and let the implementation run.</p>

<p>Then iterate:</p>
<pre><code>Add a collapsible sidebar with icons-only mode for smaller screens.</code></pre>

<div class="note">When Claude's plan looks good, accept it and wait for the implementation to complete. Then test the changes in your browser at <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a>.</div>`,
  },
  {
    id: "context-management",
    number: 7,
    title: "Context Management",
    subtitle: "What you'll learn: Managing the context window during long sessions.",
    bodyHTML: `<p>After building a feature, your context window may be filling up. Claude Code provides tools to manage this.</p>

<p><strong>Check context usage:</strong></p>
<pre><code>/context</code></pre>
<p>This shows a breakdown of how much context is being used by your conversation, files, and tools.</p>

<p><strong>Compact the context:</strong></p>
<pre><code>/compact</code></pre>
<p>This summarizes the conversation so far and clears older context, freeing up space for new work. Claude retains the key information.</p>

<p>You can also pass an instruction to <code>/compact</code> to tell Claude what to prioritize when summarizing:</p>
<pre><code>/compact keep the details of the Relationship Manager assignment feature</code></pre>
<p>This ensures important context (like a feature you're actively building) survives the compaction.</p>`,
  },
  {
    id: "add-playwright",
    number: 8,
    title: "Add Playwright MCP",
    subtitle: "What you'll learn: MCP (Model Context Protocol), installing MCP servers.",
    bodyHTML: `<p>MCP servers give Claude the ability to connect to external tools — things like browser automation, database access, or API integrations. Think of them as a connector protocol that extends what Claude can do beyond operating within the confines of your local machine. (<a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank" rel="noopener">Learn more about MCP</a>)</p>

<h4>Option A — Desktop Application</h4>
<ol>
  <li>Open <strong>Settings</strong> (gear icon, or <kbd>Cmd</kbd>+<kbd>,</kbd> / <kbd>Ctrl</kbd>+<kbd>,</kbd>) and go to the <strong>Connectors</strong> (MCP) section.</li>
  <li>Click <strong>Add MCP server</strong>, pick the <em>Command</em> type, and fill in:
    <ul>
      <li><strong>Name:</strong> <code>playwright</code></li>
      <li><strong>Command:</strong> <code>npx</code></li>
      <li><strong>Arguments:</strong> <code>@playwright/mcp@latest</code></li>
    </ul>
  </li>
  <li>Save and enable the connector. Claude Code will start the Playwright MCP server on demand.</li>
</ol>

<h4>Option B — Terminal</h4>
<p>Enter Bash mode by pressing <kbd>!</kbd>, then run:</p>
<pre><code>! claude mcp add playwright npx @playwright/mcp@latest</code></pre>

<p>This installs the Playwright MCP server, which gives Claude the ability to control a browser.</p>

<div class="note note--info">Verify the install with <code>/mcp</code> (terminal) or by reopening the Connectors panel (desktop) — you should see <code>playwright</code> listed as connected.</div>`,
  },
  {
    id: "use-playwright",
    number: 9,
    title: "Use Playwright MCP to Test",
    subtitle: "What you'll learn: Context budget awareness, browser testing via MCP.",
    bodyHTML: `<p>Restart Claude Code to pick up the MCP configuration.</p>

<h4>Option A — Desktop Application</h4>
<p>Quit and relaunch the Claude Code desktop app, then reopen your project folder. The Playwright connector should show as active in the Connectors panel.</p>

<h4>Option B — Terminal</h4>
<pre><code>/exit
claude</code></pre>

<h4>Check the context impact</h4>
<p>In the terminal run <code>/context</code> (or use the context-usage indicator in the desktop app):</p>
<pre><code>/context</code></pre>
<p>Notice how MCP servers consume some context budget for their tool definitions. This is a useful thing to be aware of when working with multiple MCP servers.</p>

<div class="note note--info">This repo already has Playwright configured in <code>.mcp.json</code>, but we teach the install process here so you know how to add MCP servers to your own projects.</div>

<h4>Verify the MCP server is loaded</h4>
<p><strong>Terminal:</strong></p>
<pre><code>/mcp</code></pre>
<p>You should see <code>playwright</code> listed.</p>
<p><strong>Desktop app:</strong> open <strong>Settings → Connectors</strong> and confirm <code>playwright</code> is enabled and connected.</p>

<h4>Drive the browser</h4>
<p>Now use Playwright to test the app by pasting this into Claude Code:</p>
<pre><code>Use Playwright MCP to test the KYC app:
1. Start the development servers
2. Navigate to http://localhost:3000
3. Take a screenshot of the Reviewer dashboard
4. Click through the main navigation tabs (Reviewer dashboard, Analytics, New application, Audit log) and verify each page loads
5. Open one applicant profile from the applications table and confirm the details panel renders</code></pre>

<p>Claude will launch a browser, navigate through the app, take screenshots, and report what it finds. If anything looks wrong, keep iterating.</p>

<div class="note"><strong>Pro Tip:</strong> Claude is an amazing teacher and can help troubleshoot most technical roadblocks
<ul>
  <li>Install, manage and handle package dependencies</li>
  <li>Troubleshoot errors and debug applications</li>
  <li>Run bash commands &amp; git for source control and integrate with your CI/CD</li>
</ul>
</div>

<p>Then iterate: choose what you'd like to work on next.</p>`,
  },
  // {
  //   id: "wrap-up",
  //   number: 10,
  //   title: "Wrap Up",
  //   subtitle: "Reflect, share feedback, and next steps.",
  //   bodyHTML: `<p><em>Content coming soon.</em></p>`,
  // },
];
