import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Brain, Download } from "lucide-react";
import { profile, skills, projects } from "../data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B Parameswaran — AI Engineer & Developer" },
      { name: "description", content: "AI/ML enthusiast building intelligent systems, agents, and immersive web experiences." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="status-pill">
            <span className="status-dot" />
            Available for opportunities
          </span>
          <h1 className="title-xl">
            Hi, I'm <span className="gradient">Parameswaran</span>.
            <br />
            <span className="gradient">AI Engineer</span>.
            <br />
            Full-Stack & Intelligent Agents
            <br />
          </h1>
          <p className="lead">
            {profile.tagline} Currently exploring autonomous agents, generative AI,
            and immersive web — turning bold ideas into shipped products.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} className="arrow" />
            </Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
            <a
              href="/Resume_Parameswaran_TBPA.pdf"
              download="Resume_Parameswaran_TBPA.pdf"
              className="btn btn-ghost"
            >
              <Download size={16} className="down" /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {[
              { icon: Brain, title: "AI Engineering", desc: "Designing autonomous agents and ML pipelines that solve real problems." },
              { icon: Code2, title: "Full-Stack Web", desc: "Crafting fast, accessible interfaces with React, TypeScript, and modern tooling." },
              { icon: Sparkles, title: "Generative AI", desc: "Prompt engineering and LLM workflows for code, content, and automation." },
            ].map((c) => (
              <div key={c.title} className="card feature">
                <div className="feature-icon"><c.icon size={20} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-sm">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">// featured work</span>
              <h2 className="title-lg" style={{ marginBottom: 0 }}>Selected Projects</h2>
            </div>
            <Link to="/projects" className="section-link">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-2">
            {projects.map((p) => (
              <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="project">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="stack">
                  {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">// toolkit</span>
          <h2 className="title-lg mb-lg">What I work with</h2>
          <div className="grid grid-3">
            {skills.map((s) => (
              <div key={s.name} className="card skill">
                <span className="icon">{s.icon}</span>
                <h4>{s.name}</h4>
                <p>{s.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
