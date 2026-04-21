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
<p><a href="https://github.com/AlexandrePoussard/claude-code-kyc-app/archive/refs/heads/main.zip">Download the ZIP</a>, move it to your desired location, and unzip it. Then open a terminal and <code>cd</code> into the directory.</p>

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
  <li>Open the <strong>Claude</strong> desktop app, navigate to the <strong>Code</strong> tab, and create a new local session.</li>
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
<pre><code>Install dependencies and start the development servers and open up the frontend and backend in their respective browser windows.</code></pre>

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

<p><strong>Note:</strong> For the more technical among you, you can follow the directions in the README to run the app manually from the terminal and explore the codebase in your editor.</p>
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
<p>Claude reads the file and prints its contents. The <code>@</code> syntax works for any file in your project - including images!</p>

<h4>Two ways to edit the CLAUDE.md file</h4>

<h5>Method 1 — Prompt Claude to edit it</h5>
<pre><code>Edit my CLAUDE.md file to add "Always document non-obvious logic changes with comments"</code></pre>
<p>Claude opens the file, adds the instruction, and saves it.</p>

<h5>Method 2 — Edit directly in your editor</h5>
<p>Open <code>CLAUDE.md</code> in your text editor (VSCode, vim, etc.) and make changes. This lets you make changes yourself without consuming tokens.</p>

<div class="note note--info">Method 1 consumes tokens since Claude processes the request and makes the edit, while Method 2 is "free" as Claude is not involved. Use Method 1 when you want Claude to decide how to organize or word the instruction.</div>

<h4>Persistent memory systems</h4>
<p>Claude Code has two complementary memory systems, both loaded at the start of every session. You write CLAUDE.md to guide Claude's behavior, and Claude writes auto memory to learn from your corrections without manual effort.</p>

<p><strong>CLAUDE.md files</strong> are markdown with persistent instructions. They live in several locations, each with a different scope:</p>
<table>
  <thead>
    <tr><th>File</th><th>Scope</th></tr>
  </thead>
  <tbody>
    <tr><td><code>./CLAUDE.md</code> or <code>./.claude/CLAUDE.md</code></td><td>Project (shared via git)</td></tr>
    <tr><td><code>./.claude/rules/*.md</code></td><td>Project, topic-specific (optionally path-scoped)</td></tr>
    <tr><td><code>~/.claude/CLAUDE.md</code></td><td>Personal, all projects</td></tr>
    <tr><td><code>./CLAUDE.local.md</code></td><td>Personal, this project only (gitignore it)</td></tr>
  </tbody>
</table>

<p><strong>Auto memory</strong> is Claude's own notebook, stored in <code>~/.claude/projects/&lt;project&gt;/memory/</code>. Claude decides what's worth remembering — build commands, debugging insights, preferences — and writes them there as you work. It's machine-local and shared across all worktrees of the same repo.</p>

<p>The <code>/memory</code> command lists all memory files loaded in the current session, lets you open them in your editor, and toggles auto memory on or off. When you ask Claude in chat to remember something (e.g. "always use pnpm"), it's saved to auto memory, not to a CLAUDE.md. To update CLAUDE.md, ask Claude explicitly ("add this to CLAUDE.md") or edit the file yourself.</p>
<p><strong>Note:</strong> The <code>/memory</code> command may not be available in the desktop app.</p>`,
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
  <li><strong>Terminal:</strong> press <kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle through modes until you see <strong>Plan Mode</strong> in the prompt indicator.</li>
</ul>

<p>Choose one of the two feature options below.</p>

<h4>Option A: Add a "Send Welcome Email" Step to the Workflow</h4>
<p>Extend the onboarding workflow with a new step that, once an applicant has been approved and their account created, composes and sends a welcome email to the applicant — including a friendly greeting, confirmation that their account is live, and the details of the Investor Relationship Manager who has been assigned to them.</p>

<p>Paste this prompt:</p>
<pre><code>Add a new "Send welcome email" step to the KYC onboarding workflow, triggered after an application is Approved and the account has been created. It should:

1. Appear as a new action in the applicant profile (e.g., a "Send welcome email" button) and as a new column/state in the workflow so reviewers can see which approved applicants still need to be emailed
2. Auto-assign an Investor Relationship Manager (RM) if one isn't already set, picking from a mock list of RMs (name, email, desk/region)
3. Open a preview modal showing the email content and layout before sending, with editable subject and body. Suggested template:
   - Subject: "Welcome to &lt;Company&gt;, &lt;First name&gt; — your account is ready"
   - Greeting: personalized ("Dear &lt;First name&gt;,")
   - Confirmation that KYC is approved and the account is active
   - A short "What's next" section
   - Introduction of the assigned Investor Relationship Manager (name, email, a 1-line bio or region) as the applicant's point of contact
   - Polite sign-off from the onboarding team
4. Use a clean, professional HTML email layout (header with logo placeholder, readable body, button-styled call-to-action, footer with legal line) — inline CSS so it renders in common email clients
5. On send, record the email in the applicant's profile (timestamp, RM assigned, subject) and move the applicant into an "Onboarded" state in the workflow
6. Mock the actual send — just log the payload to the backend and show a success toast on the frontend

Use the AskUserQuestion tool!</code></pre>

<p>Claude will present a plan. Review it — when it looks good, accept the plan and let Claude implement it.</p>

<div class="note note--info">Claude may ask you clarifying questions using the AskUserQuestion tool (e.g., "Should the RM pool be seeded from mock data or a new endpoint?" or "Plain-text fallback for the email, yes or no?"). Answer these as they come up.</div>

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
<pre><code>/compact keep the details of the welcome-email workflow step feature</code></pre>
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
  <li>Open <strong>Settings</strong> (gear icon, or <kbd>Cmd</kbd>+<kbd>,</kbd> / <kbd>Ctrl</kbd>+<kbd>,</kbd>) and go to the <strong>Developer</strong> section.</li>
  <li>Click <strong>Edit Config</strong>. This opens the folder containing <code>claude_desktop_config.json</code>. Open the file in a text editor and paste in:
    <pre><code>{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}</code></pre>
    <p>If the file already has content, merge the <code>playwright</code> entry into the existing <code>mcpServers</code> block.</p>
  </li>
  <li>Save the file, then <strong>quit and relaunch</strong> Claude Desktop (just closing the window isn't enough — fully quit the app).</li>
  <li>Reopen <strong>Settings → Developer</strong>. You should see <code>playwright</code> listed under <strong>Local MCP servers</strong> with a <span style="color:green"><strong>running</strong></span> status badge:
    <br><br><img src="content/developer_settings_mcp.png" alt="Developer settings showing Playwright MCP server running" style="max-width:100%;border:1px solid #ddd;border-radius:8px;">
  </li>
</ol>

<h4>Option B — Terminal</h4>
<p>Paste the following into Claude Code (the <code>!</code> prefix runs it as a shell command):</p>
<pre><code>! claude mcp add --scope project playwright npx @playwright/mcp@latest</code></pre>

<p>This adds the Playwright MCP server to the project's <code>.mcp.json</code>, so anyone who clones the repo gets it automatically. It gives Claude the ability to control a browser.</p>

<div class="note note--info">Since this repo already ships with <code>.mcp.json</code> configured, terminal users can skip this step — just restart Claude Code and verify with <code>/mcp</code>. Desktop app users still need to add it via <strong>Settings → Developer → Edit Config</strong> as shown above.</div>`,
  },
  {
    id: "use-playwright",
    number: 9,
    title: "Use Playwright MCP to Test",
    subtitle: "What you'll learn: Context budget awareness, browser testing via MCP.",
    bodyHTML: `<p>Restart Claude Code to pick up the MCP configuration.</p>

<h4>Option A — Desktop Application</h4>
<p>If you haven't already, quit and fully relaunch the Claude Code desktop app, then reopen your project folder.</p>

<h4>Option B — Terminal</h4>
<pre><code>/exit
claude</code></pre>

<h4>Check the context impact</h4>
<p>In the terminal run <code>/context</code> (or use the context-usage indicator in the desktop app):</p>
<pre><code>/context</code></pre>

<p>Here's what the context breakdown looks like with Playwright MCP connected:</p>
<img src="content/context_usage_mcp.png" alt="Context window breakdown showing MCP tools usage" style="max-width:100%;border:1px solid #ddd;border-radius:8px;">

<p>Notice the two separate MCP entries in the breakdown:</p>
<ul>
  <li><strong>MCP tools — 1.2k (0.6%)</strong>: tool definitions currently loaded into the active context</li>
  <li><strong>MCP tools (deferred) — 21.1k (10.5%)</strong>: tool definitions registered but <em>not</em> loaded yet — these are loaded lazily on demand</li>
</ul>
<p>Claude uses the <a href="https://www.anthropic.com/engineering/advanced-tool-use">Tool Search Tool</a> to load tool definitions on-demand rather than packing them all into the context upfront. In this screenshot, Playwright exposes <strong>62 tools totalling 22.4k tokens</strong>, but only 1.2k is actually in the active context — the rest stays deferred until Claude needs a specific tool. This means you can connect multiple MCP servers without blowing your context budget.</p>
<p>It's still worth a glance at <code>/context</code> when Claude feels sluggish or distracted, but lazy loading makes this much less of a problem than it used to be.</p>

<div class="note note--info">This repo already ships with Playwright configured in <code>.mcp.json</code> (added via <code>claude mcp add --scope project</code>), so Claude Code in the terminal will pick it up automatically. We teach the install process here so you know how to add MCP servers to your own projects — and so desktop app users can set it up in their local config.</div>

<h4>Verify the MCP server is loaded</h4>
<p><strong>Terminal:</strong></p>
<pre><code>/mcp</code></pre>
<p>You should see <code>playwright</code> listed.</p>
<p><strong>Desktop app:</strong> open <strong>Settings → Developer</strong> and confirm <code>playwright</code> is listed under <strong>Local MCP servers</strong> with a <span style="color:green"><strong>running</strong></span> status.</p>

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
