
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
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
    color: "#38BDF8",
    tech: ["React", "Next.js", "React Native"],
  },
  {
    id: "api",
    label: "API Layer",
    Icon: Server,
    color: "#22C55E",
    tech: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "db",
    label: "Database Layer",
    Icon: Database,
    color: "#F59E0B",
    tech: ["MongoDB", "Firebase"],
  },
  {
    id: "deploy",
    label: "Deployment Layer",
    Icon: Cloud,
    color: "#0EA5E9",
    tech: ["AWS", "Docker", "CI/CD"],
  },
];

const SKILL_ICON_MAP: Record<SkillIconKey, LucideIcon> = {
  Globe,
  Smartphone,
  Server,
  Cloud,
};

export default function Home() {
  const { heroStats, techChips } = profile;

  return (
    <main className="page-shell">
      <section id="home" className="hero-section min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24">
        <div className="section-inner w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="badge-pill mb-6">{profile.badge}</div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                {profile.title}
                <br />
                <span style={{ color: "var(--primary)" }}>{profile.titleAccent}</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--text-secondary)" }}>
                {profile.description}
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 max-w-lg">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="surface-card px-3 py-4 sm:px-4 text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text)" }}>{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-wide mt-1 leading-snug" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link href="/#work" className="btn-primary">
                  View work
                  <ArrowRight size={16} />
                </Link>
                <Link href="/#contact" className="btn-secondary">
                  {profile.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="panel-window">
                <div className="panel-titlebar">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs ml-2 font-mono" style={{ color: "var(--text-muted)" }}>
                    core_stack
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                    Core stack
                  </p>
                  <ul className="space-y-3">
                    {profile.heroHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--border-color)" }}>
                    {techChips.map((chip) => (
                      <span key={chip} className="tag-pill">{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block py-20 md:py-24">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="section-eyebrow">About</p>
              <h2 className="section-heading mb-5">{profile.aboutTitle}</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {profile.aboutBio}
              </p>
              <ul className="space-y-3">
                {profile.aboutPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "var(--primary-soft)" }}>
                      <Check size={11} style={{ color: "var(--primary)" }} />
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="panel-window">
                <div className="panel-titlebar justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-xs ml-2 font-mono" style={{ color: "var(--text-muted)" }}>system_architecture</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: "var(--primary)" }}>
                    production
                  </span>
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

      <section id="stack" className="section-block py-20 md:py-24">
        <div className="section-inner">
          <div className="mb-10 md:mb-12">
            <p className="section-eyebrow">Expertise</p>
            <h2 className="section-heading mb-3">Technical Stack</h2>
            <p className="section-subtitle">{profile.stackSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillCards.map((card) => {
              const Icon = SKILL_ICON_MAP[card.iconKey];
              return (
                <div key={card.title} className="surface-card p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${card.color}18` }}>
                      <Icon size={18} color={card.color} />
                    </div>
                    <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{card.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section-block py-20 md:py-24">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="section-eyebrow">Career</p>
              <h2 className="section-heading">Work Experience</h2>
            </div>
            <p className="section-subtitle md:max-w-md md:text-right">
              {profile.experienceSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {workExperience.map((job) => (
              <div key={job.company} className="surface-card p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                  <div className="md:pr-4 md:border-r" style={{ borderColor: "var(--border-color)" }}>
                    <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{job.role}</h3>
                    <p className="text-sm mt-1.5 font-medium" style={{ color: "var(--primary)" }}>{job.company}</p>
                    <p className="text-xs mt-2 font-medium" style={{ color: "var(--text-muted)" }}>{job.period}</p>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    {job.achievements.map((item, j) => (
                      <div key={j} className="flex gap-4">
                        <span className="font-mono text-xs font-bold mt-1 flex-shrink-0 w-6"
                          style={{ color: "var(--primary)" }}>
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

      <section id="work" className="section-block py-20 md:py-24">
        <div className="section-inner">
          <div className="mb-10 md:mb-12">
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="section-heading mb-3">Featured Projects</h2>
            <p className="section-subtitle">{profile.workSubtitle}</p>
          </div>

          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <div key={project.title} className="surface-card overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-3/5 flex-shrink-0" style={{ background: "var(--bg)" }}>
                    {project.featureGraphic ? (
                      <>
                        <Image
                          src={project.featureGraphic}
                          alt={`${project.title} feature graphic`}
                          width={900}
                          height={600}
                          className="w-full h-full object-contain dark:hidden"
                          priority={project === featuredProjects[0]}
                        />
                        {project.featureGraphicDark && (
                          <Image
                            src={project.featureGraphicDark}
                            alt={`${project.title} feature graphic`}
                            width={900}
                            height={600}
                            className="hidden w-full h-full object-contain dark:block"
                            priority={project === featuredProjects[0]}
                          />
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full min-h-[320px]" style={{ background: "var(--surface)" }} />
                    )}
                  </div>

                  <div className="lg:w-2/5 p-6 md:p-8 flex flex-col gap-5 lg:border-l"
                    style={{ borderColor: "var(--border-color)" }}>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span key={tag} className="tag-pill text-[11px] uppercase tracking-wide">{tag}</span>
                      ))}
                    </div>

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
                        <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{project.type}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>

                    <div className="flex items-center gap-3 pt-1">
                      <Link href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-4">
                        View live product <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block py-20 md:py-28">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-heading text-3xl md:text-4xl mb-4">{profile.ctaTitle}</h2>
            <p className="section-subtitle mx-auto mb-10">{profile.ctaSubtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <a href={profile.contact.email.href} className="contact-card">
                <Mail size={18} style={{ color: "var(--primary)" }} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Email</p>
                  <p className="text-sm truncate" style={{ color: "var(--text)" }}>{profile.contact.email.label}</p>
                </div>
              </a>
              <a href={profile.contact.linkedin.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <Linkedin size={18} style={{ color: "var(--primary)" }} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
                  <p className="text-sm truncate" style={{ color: "var(--text)" }}>{profile.contact.linkedin.label}</p>
                </div>
              </a>
              <a href={profile.contact.github.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <Github size={18} style={{ color: "var(--primary)" }} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>GitHub</p>
                  <p className="text-sm truncate" style={{ color: "var(--text)" }}>{profile.contact.github.label}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
