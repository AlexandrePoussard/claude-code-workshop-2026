/*
 * Claude Code Workshop — password gate + step rendering.
 *
 * Change the password by replacing PASSWORD_SHA256 below with the SHA-256 of
 * your new password. Generate one from any page with this script loaded:
 *
 *     await hashPassword("your-password")
 *
 * Or from a terminal:
 *
 *     echo -n "your-password" | shasum -a 256
 */

const PASSWORD_SHA256 =
  "341af5534f8882bf98f0e9db3cf30797941036d0037cf3f9d83a70c32c3068b1"; // "zurich-2026"

const SESSION_KEY = "ccw-unlocked-v1";

console.log("[workshop] app.js loaded");

/* ---------- Password hashing ---------- */

async function hashPassword(password) {
  const enc = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

window.hashPassword = hashPassword;

/* ---------- Gate ---------- */

function unlock() {
  const gate = document.getElementById("gate");
  const app = document.getElementById("app");
  if (gate) gate.hidden = true;
  if (app) app.hidden = false;
  renderSteps();
}

function lock() {
  sessionStorage.removeItem(SESSION_KEY);
  const gate = document.getElementById("gate");
  const app = document.getElementById("app");
  if (app) app.hidden = true;
  if (gate) gate.hidden = false;
  const input = document.getElementById("gate-input");
  if (input) {
    input.value = "";
    input.focus();
  }
}

async function tryUnlock() {
  const input = document.getElementById("gate-input");
  const error = document.getElementById("gate-error");
  const button = document.getElementById("gate-submit");
  if (!input) {
    console.error("[workshop] gate-input not found");
    return;
  }

  const submitted = (input.value || "").trim();
  console.log("[workshop] tryUnlock called, length:", submitted.length);

  if (!submitted) {
    if (error) {
      error.textContent = "Please enter a password.";
      error.hidden = false;
    }
    return;
  }

  if (button) {
    button.disabled = true;
    button.textContent = "Checking…";
  }

  try {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error(
        "crypto.subtle is unavailable. Open this site via http(s) or localhost, not file://"
      );
    }

    const hash = await hashPassword(submitted);
    console.log("[workshop] computed hash:", hash);
    console.log("[workshop] expected hash:", PASSWORD_SHA256);

    if (hash === PASSWORD_SHA256) {
      sessionStorage.setItem(SESSION_KEY, "1");
      if (error) error.hidden = true;
      unlock();
    } else {
      if (error) {
        error.textContent = "Incorrect password.";
        error.hidden = false;
      }
      input.select();
    }
  } catch (err) {
    console.error("[workshop] unlock error:", err);
    if (error) {
      error.textContent = "Error: " + (err.message || err);
      error.hidden = false;
    }
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "Unlock";
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  tryUnlock();
}

function handleButtonClick(event) {
  // Fallback in case the form submit event doesn't fire in some environments.
  event.preventDefault();
  tryUnlock();
}

function handleInputKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    tryUnlock();
  }
}

/* ---------- Steps ---------- */

function renderSteps() {
  const container = document.getElementById("steps-container");
  if (!container || container.dataset.rendered === "1") return;

  const steps = Array.isArray(window.WORKSHOP_STEPS)
    ? window.WORKSHOP_STEPS
    : [];

  container.innerHTML = steps
    .map(
      (step) => `
        <details class="accordion" id="${escapeAttr(step.id)}">
          <summary>
            <span class="summary-number">${step.number}</span>
            <span class="summary-text">
              <span class="summary-title">${escapeHTML(step.title)}</span>
              <span class="summary-subtitle">${escapeHTML(step.subtitle || "")}</span>
            </span>
          </summary>
          <div class="accordion-body">${step.bodyHTML || ""}</div>
        </details>`
    )
    .join("");
  container.dataset.rendered = "1";

  decorateCodeBlocks(container);

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && target.tagName === "DETAILS") target.open = true;
  }
}

function decorateCodeBlocks(root) {
  root.querySelectorAll("pre").forEach((pre) => {
    if (pre.parentElement && pre.parentElement.classList.contains("code-block")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "Copy to clipboard");
    btn.title = "Copy";
    btn.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    btn.addEventListener("click", () => copyPre(pre, btn));
    wrapper.appendChild(btn);
  });
}

async function copyPre(pre, btn) {
  const text = pre.innerText.replace(/\n$/, "");
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const range = document.createRange();
    range.selectNodeContents(pre);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try { document.execCommand("copy"); } catch (_) {}
    sel.removeAllRanges();
  }
  btn.classList.add("copy-btn--ok");
  btn.title = "Copied";
  setTimeout(() => {
    btn.classList.remove("copy-btn--ok");
    btn.title = "Copy";
  }, 1400);
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function escapeAttr(str) {
  return escapeHTML(str).replace(/\s+/g, "-");
}

/* ---------- Boot ---------- */

function boot() {
  console.log("[workshop] boot()");
  const form = document.getElementById("gate-form");
  const button = document.getElementById("gate-submit");
  const input = document.getElementById("gate-input");
  const lockBtn = document.getElementById("lock-button");

  if (form) form.addEventListener("submit", handleFormSubmit);
  if (button) button.addEventListener("click", handleButtonClick);
  if (input) input.addEventListener("keydown", handleInputKeydown);
  if (lockBtn) lockBtn.addEventListener("click", lock);

  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    console.log("[workshop] session flag found, unlocking");
    unlock();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
