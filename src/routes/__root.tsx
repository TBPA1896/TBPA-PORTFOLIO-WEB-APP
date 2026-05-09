import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <div className="center-screen">
      <div>
        <h1 className="title-xl gradient">404</h1>
        <h2 className="title-md">Lost in the void</h2>
        <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
          This page drifted out of orbit.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="center-screen">
      <div>
        <h1 className="title-md">Something broke</h1>
        <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="btn btn-primary"
          style={{ marginTop: 24 }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "B Parameswaran — AI Engineer & Developer" },
      { name: "description", content: "Portfolio of B Parameswaran — AI/ML enthusiast, developer, and B.Tech AI student building intelligent systems and immersive web experiences." },
      { property: "og:title", content: "B Parameswaran — AI Engineer & Developer" },
      { property: "og:description", content: "Portfolio of B Parameswaran — AI/ML enthusiast and developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
