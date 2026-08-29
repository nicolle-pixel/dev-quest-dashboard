import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // O site é 100% estático (HTML/CSS/JS) e vive em /site/index.html
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  component: () => null,
});
