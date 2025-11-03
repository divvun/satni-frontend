import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import apolloClient from "./apolloClient";
import Root from "./containers/Root";

Sentry.init({
  dsn: "https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235",

  // Integrations
  integrations: [
    // Browser tracing for performance monitoring
    Sentry.browserTracingIntegration(),
    // Session replay to see what users were doing when errors occurred
    Sentry.replayIntegration({
      maskAllText: false, // Don't mask text content
      blockAllMedia: false, // Don't block media
    }),
  ],

  // Performance Monitoring
  tracesSampleRate: 0.1, // Capture 10% of transactions for performance monitoring

  // Session Replay
  replaysSessionSampleRate: 0.1, // Capture 10% of normal sessions
  replaysOnErrorSampleRate: 1.0, // Capture 100% of sessions with errors

  // Environment
  environment: import.meta.env.MODE || "production",

  // Only send errors in production
  enabled: import.meta.env.PROD,
});

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container, {
  // React 19 error handlers for Sentry
  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    console.warn("Uncaught error", error, errorInfo.componentStack);
  }),
  onCaughtError: Sentry.reactErrorHandler(),
  onRecoverableError: Sentry.reactErrorHandler(),
});

root.render(<Root client={apolloClient} />);
