
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Check,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Monitor,
  Database,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { skillCards, type SkillIconKey } from "@/data/skills";
import { featuredProjects } from "@/data/projects";
import { workExperience } from "@/data/experience";

interface ArchLayer {
  id: string;
  label: string;
  Icon: LucideIcon;
  color: string;
  tech: string[];
}

const archLayers: ArchLayer[] = [
  {
    id: "ui",
    label: "User Interface Layer",
    Icon: Monitor,
    color: "#3b82f6",
    tech: ["React", "Next.js", "React Native"],
  },
  {
    id: "api",
    label: "API Layer",
    Icon: Server,
    color: "#22c55e",
    tech: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "db",
    label: "Database Layer",
    Icon: Database,
    color: "#f59e0b",
    tech: ["MongoDB", "Firebase"],
  },
  {
    id: "deploy",
    label: "Deployment Layer",
    Icon: Cloud,
    color: "#22d3ee",
    tech: ["AWS", "Docker", "CI/CD"],
  },
];

const SKILL_ICON_MAP: Record<SkillIconKey, LucideIcon> = {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Zap,
};

export default function Home() {
  const { terminalChecks, heroStats, techChips, titleLines, highlightLineIndex } = profile;

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
                style={{ border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)", background: "color-mix(in srgb, var(--primary) 8%, transparent)", color: "var(--primary)" }}>
                {profile.badge}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {i === highlightLineIndex ? (
                      <span style={{ color: "var(--primary)" }}>{line}</span>
                    ) : (
                      line
                    )}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--text-secondary)" }}>
                {profile.description}
              </p>

              {/* Stats */}
              <div className="flex gap-10 mb-10">
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i > 0 ? "pl-10" : ""}
                    style={i > 0 ? { borderLeft: "1px solid var(--border-color)" } : {}}
                  >
                    <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-opacity hover:opacity-85 text-sm"
                  style={{ background: "var(--primary)", color: "var(--bg)" }}
                >
                  View Portfolio
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors text-sm hover:opacity-80"
                  style={{ border: "1px solid var(--border-color)", color: "var(--text)" }}
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right – Terminal mockup */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
                {/* title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5"
                  style={{ borderBottom: "1px solid var(--border-color)", background: "color-mix(in srgb, var(--surface) 80%, var(--bg))" }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] ml-2 font-mono" style={{ color: "var(--text-muted)" }}>aneesh.pissay — build_status.live</span>
                </div>
                {/* body */}
                <div className="p-7 font-mono space-y-5">
                  {terminalChecks.map((check) => (
                    <div key={check.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-sm ${check.status === "done" ? "text-green-500" : "text-yellow-500"}`}>
                          {check.status === "done" ? "✓" : "⟳"}
                        </span>
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{check.label}</span>
                      </div>
                      {check.timing && (
                        <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>{check.timing}</span>
                      )}
                    </div>
                  ))}
                  {/* Progress bar */}
                  <div className="rounded-full h-1" style={{ background: "var(--border-color)" }}>
                    <div className="h-1 rounded-full" style={{ width: "72%", background: "var(--primary)" }} />
                  </div>
                  {/* Tech chips */}
                  <div className="pt-3 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--border-color)" }}>
                    {techChips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[10px] px-2.5 py-1 rounded font-sans tracking-wider"
                        style={{ background: "var(--surface)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Engineer ─────────────────────────────────── */}
      <section id="about" className="py-24" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[11px] uppercase tracking-widest mb-5 font-semibold" style={{ color: "var(--primary)" }}>
                The Engineer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                {profile.aboutHeading}
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {profile.aboutBio}
              </p>
              <ul className="space-y-4">
                {profile.aboutChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}>
                      <Check size={10} style={{ color: "var(--primary)" }} />
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – System Architecture */}
            <div>
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)", boxShadow: "0 0 48px color-mix(in srgb, var(--primary) 6%, transparent)" }}>
                {/* Title bar */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: "1px solid var(--border-color)", background: "color-mix(in srgb, var(--surface) 80%, var(--bg))" }}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[11px] ml-2 font-mono" style={{ color: "var(--text-muted)" }}>system_architecture</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-mono"
                    style={{ color: "color-mix(in srgb, var(--primary) 60%, transparent)" }}>production</span>
                </div>

                {/* Architecture layers */}
                <div className="p-6 flex flex-col items-stretch">
                  {archLayers.map((layer, i) => (
                    <div key={layer.id} className="flex flex-col items-center">
                      <div className="w-full rounded-xl p-4"
                        style={{ background: "var(--bg)", border: `1px solid ${layer.color}35` }}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${layer.color}15` }}>
                            <layer.Icon size={15} color={layer.color} />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                            {layer.label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {layer.tech.map((t) => (
                            <span key={t} className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                              style={{ backgroundColor: `${layer.color}12`, color: layer.color, border: `1px solid ${layer.color}28` }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {i < archLayers.length - 1 && (
                        <div className="arch-connector relative flex flex-col items-center my-1" style={{ height: 36, width: "100%" }}>
                          <div className="w-px h-full" style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--primary) 50%, transparent), transparent)" }} />
                          <div className="arch-dot" />
                          <svg className="absolute bottom-0" width="8" height="5" viewBox="0 0 8 5" fill="none">
                            <path d="M0 0L4 5L8 0" stroke="var(--primary)" strokeOpacity="0.45" strokeWidth="1.5" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Arsenal ────────────────────────────── */}
      <section id="stack" className="py-24" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Technical Arsenal</h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{profile.stackSubtitle}</p>
          </div>

          <div className="space-y-4">
            {/* Row 1 – 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCards.slice(0, 2).map((card) => {
                const Icon = SKILL_ICON_MAP[card.iconKey];
                return (
                  <div key={card.title} className="rounded-xl p-7 transition-opacity hover:opacity-90"
                    style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${card.color}18` }}>
                        <Icon size={18} color={card.color} />
                      </div>
                      <h3 className="font-semibold" style={{ color: "var(--text)" }}>{card.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {card.items.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2.5" style={{ color: "var(--text-secondary)" }}>
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--border-color)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Row 2 – 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillCards.slice(2).map((card) => {
                const Icon = SKILL_ICON_MAP[card.iconKey];
                return (
                  <div key={card.title} className="rounded-xl p-7 transition-opacity hover:opacity-90"
                    style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${card.color}18` }}>
                        <Icon size={18} color={card.color} />
                      </div>
                      <h3 className="font-semibold" style={{ color: "var(--text)" }}>{card.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {card.items.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2.5" style={{ color: "var(--text-secondary)" }}>
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--border-color)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Experience ───────────────────────────────── */}
      <section id="experience" className="py-24" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--primary)" }}>
                Professional
              </p>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <p className="text-sm md:max-w-xs md:text-right leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {profile.experienceSectionTagline}
            </p>
          </div>

          <div className="space-y-4">
            {workExperience.map((job) => (
              <div key={job.company} className="rounded-xl p-8"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--text)" }}>{job.role}</h3>
                    <p className="text-sm mt-1.5" style={{ color: "var(--primary)" }}>{job.company}</p>
                    <p className="text-[11px] mt-2.5 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{job.period}</p>
                  </div>
                  <div className="md:col-span-3 space-y-5">
                    {job.achievements.map((item, j) => (
                      <div key={j} className="flex gap-5">
                        <span className="font-mono text-xs font-bold mt-0.5 flex-shrink-0 w-5"
                          style={{ color: "color-mix(in srgb, var(--primary) 40%, transparent)" }}>
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section id="work" className="py-24" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Featured Engineering Projects</h2>
          </div>

          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-2xl overflow-hidden"
                style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Feature Graphic */}
                  <div className="lg:w-3/5 flex-shrink-0" style={{ background: "var(--bg)" }}>
                    {project.featureGraphic ? (
                      <Image src={project.featureGraphic} alt={`${project.title} feature graphic`}
                        width={900} height={600} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full min-h-[320px]" style={{ background: "var(--surface)" }} />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="lg:w-2/5 p-7 flex flex-col justify-between gap-6"
                    style={{ borderTop: "1px solid var(--border-color)" }}>
                    <div className="lg:border-t-0" style={{ borderTop: "none" }}>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2.5 py-1 rounded uppercase tracking-widest"
                            style={{ border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logo + Title */}
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                          style={{ border: "1px solid var(--border-color)" }}>
                          <Image src={project.logo} alt={`${project.title} logo`}
                            width={48} height={48} className="object-cover w-full h-full" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold leading-tight" style={{ color: "var(--text)" }}>{project.title}</h3>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{project.type}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-3 p-4 rounded-lg"
                      style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Core Tech</p>
                        <p className="text-sm" style={{ color: "var(--text)" }}>{project.coreTech}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Key Feature</p>
                        <p className="text-sm" style={{ color: "var(--text)" }}>{project.keyFeature}</p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <Link href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
                        style={{ color: "var(--text)" }}>
                        Live Demo <ArrowRight size={12} />
                      </Link>
                      {project.githubUrl !== "#" && (
                        <>
                          <span style={{ color: "var(--border-color)" }}>|</span>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
                            style={{ color: "var(--text)" }}>
                            View GitHub <ArrowRight size={12} />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="contact" className="py-32" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">{profile.ctaTitle}</h2>
          <p className="text-sm leading-relaxed mb-14 max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
            {profile.ctaSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            <a href={profile.contact.email.href} className="flex items-center gap-3 group">
              <Mail size={18} style={{ color: "var(--text-muted)" }} className="group-hover:opacity-70 transition-opacity" />
              <span className="text-sm transition-opacity group-hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                {profile.contact.email.label}
              </span>
            </a>
            <a href={profile.contact.linkedin.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <Linkedin size={18} style={{ color: "var(--text-muted)" }} className="group-hover:opacity-70 transition-opacity" />
              <span className="text-sm transition-opacity group-hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                {profile.contact.linkedin.label}
              </span>
            </a>
            <a href={profile.contact.github.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <Github size={18} style={{ color: "var(--text-muted)" }} className="group-hover:opacity-70 transition-opacity" />
              <span className="text-sm transition-opacity group-hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
                {profile.contact.github.label}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
