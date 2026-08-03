/**
 * PACE Website — Entry Bootstrap
 * Keeps legacy script tags working while the modular app in js/app.js owns initialization.
 */

import { App } from "./app.js";

const start = () => {
  App.init().catch(error => {
    console.error("[PACE] Failed to initialize app:", error);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
