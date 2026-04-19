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
    title: "Fork & Clone Repository",
    subtitle: "Fork the upstream repo to your GitHub account, then clone your fork.",
    bodyHTML: `<p><em>Content coming soon — replace via content/steps.js.</em></p>`,
  },
  {
    id: "launch-claude",
    number: 2,
    title: "Launch Claude Code",
    subtitle: "Start Claude Code in your project directory.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "run-locally",
    number: 3,
    title: "Run Inventory Management Locally",
    subtitle: "Boot the app on your machine.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "claude-md",
    number: 4,
    title: "Edit the CLAUDE.md File",
    subtitle: "Give Claude project-specific instructions.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
  },
  {
    id: "explore-codebase",
    number: 5,
    title: "Explore the Codebase",
    subtitle: "Use Claude to understand how the app is put together.",
    bodyHTML: `<p><em>Content coming soon.</em></p>`,
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
