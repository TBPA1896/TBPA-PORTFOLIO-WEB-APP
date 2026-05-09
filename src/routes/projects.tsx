import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — B Parameswaran" },
      { name: "description", content: "AI, web, and full-stack projects by B Parameswaran including MudraVerse and Enginovate." },
      { property: "og:title", content: "Projects — B Parameswaran" },
      { property: "og:description", content: "AI and web projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// projects</span>
        <h1 className="title-xl">Things I've built.</h1>
        <p className="lead">
          A growing collection of AI, web, and experimental projects.
          Each one taught me something new.
        </p>

        <div className="grid grid-2">
          {projects.map((p) => (
            <article key={p.name} className="project">
              <span className="project-tag">{p.tag}</span>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="stack">
                {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noreferrer">
                  <Github size={15} /> Source
                </a>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <ExternalLink size={15} /> Visit
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="card card-lg text-center mt-lg">
          <h3 className="title-md">More on the way</h3>
          <p className="muted" style={{ margin: "0 0 18px", fontSize: 14 }}>
            Follow my GitHub for in-progress experiments and open-source contributions.
          </p>
          <a
            href="https://github.com/TBPA1896"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} /> @TBPA1896
          </a>
        </div>
      </div>
    </section>
  );
}
