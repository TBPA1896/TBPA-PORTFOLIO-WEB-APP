import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";
import { profile } from "../data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — B Parameswaran" },
      { name: "description", content: "Get in touch with B Parameswaran for opportunities, collaborations, or just to say hi." },
      { property: "og:title", content: "Contact — B Parameswaran" },
      { property: "og:description", content: "Let's connect." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const items = [
    { icon: Mail, label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Github, label: "github", value: "@TBPA1896", href: profile.github, ext: true },
    { icon: Linkedin, label: "linkedin", value: "in/tbpa1896", href: profile.linkedin, ext: true },
  ];

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">// contact</span>
        <h1 className="title-xl">Let's build something.</h1>
        <p className="lead">
          Got an opportunity, collaboration idea, or just want to chat about AI?
          My inbox is open.
        </p>

        <div className="contact-grid">
          <div className="contact-list">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                {...(it.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="card contact-item"
              >
                <span className="icon-tile"><it.icon size={18} /></span>
                <div>
                  <div className="label">{it.label}</div>
                  <div className="value">{it.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="card card-lg form">
            <div className="field">
              <label htmlFor="name">name</label>
              <input
                id="name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="email">email</label>
              <input
                id="email" required type="email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="message">message</label>
              <textarea
                id="message" required rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {sent
                ? (<><Check size={16} /> Opened in your mail app</>)
                : (<><Send size={16} /> Send message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
