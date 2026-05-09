import { createFileRoute } from "@tanstack/react-router";
import { profile, experience, certifications } from "../data/portfolio";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — B Parameswaran" },
      { name: "description", content: "About B Parameswaran: AI student, intern at Aryantra AI, and builder of generative AI projects." },
      { property: "og:title", content: "About — B Parameswaran" },
      { property: "og:description", content: "AI student, intern, and builder." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <span className="eyebrow">// about</span>
        <h1 className="title-xl">A bit about me.</h1>
        <p className="lead" style={{ marginBottom: 48 }}>
          {profile.bio} I love turning research-level ideas into working products —
          whether that's a real-time computer vision app for classical dance or a
          focused EdTech platform.
        </p>

        <section className="mb-lg" style={{ marginBottom: 56 }}>
          <div className="section-title-row">
            <GraduationCap size={20} className="icon-color" />
            <h2>Education</h2>
          </div>
          <div className="card">
            <h3 style={{ margin: "0 0 4px", fontSize: "1.05rem" }}>Anurag University</h3>
            <p className="muted" style={{ margin: 0, fontSize: 13 }}>B.Tech in Artificial Intelligence</p>
            <p className="exp-period" style={{ marginTop: 6 }}>August 2024 — May 2028</p>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div className="section-title-row">
            <Briefcase size={20} className="icon-color" />
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((e) => (
              <div key={e.role} className="card">
                <div className="exp-head">
                  <h3>{e.role}</h3>
                  <span className="exp-period">{e.period}</span>
                </div>
                <p className="exp-company">{e.company}</p>
                <ul className="bullets">
                  {e.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-title-row">
            <Award size={20} className="icon-color" />
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c} className="card cert">{c}</div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
