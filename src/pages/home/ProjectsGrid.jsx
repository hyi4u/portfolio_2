import { ArrowUpRight, Github, Lock } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "NestJS", "PostgreSQL"],
    year: "2024",
    description:
      "Full-stack e-commerce store with product management, cart, orders, and a complete admin dashboard for inventory and user control.",
    color: "from-blue-500/20 to-cyan-500/20",
    live: "https://frontend-ecomerce-nu.vercel.app/",
    repoFront: null, // private
    repoBack: null,  // private
  },
  {
    title: "Client Blog Platform",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "NestJS", "PostgreSQL"],
    year: "2024",
    description:
      "Production blog built for a real client with a full admin dashboard for publishing, editing, and managing content.",
    color: "from-violet-500/20 to-pink-500/20",
    live: "https://tayser-blog-dev.vercel.app/",
    repoFront: null, // private
    repoBack: null,  // private
  },
  {
    title: "Chloris Chronicles Blog",
    tags: ["React", "TailwindCSS", "Supabase"],
    year: "2024",
    description:
      "A clean personal blog powered by Supabase for auth, storage, and real-time data — no traditional backend needed.",
    color: "from-emerald-500/20 to-teal-500/20",
    live: "https://chloris-chronicles-blog.vercel.app/",
    repoFront: null, // set your repo URL or leave null if private
    repoBack: null,  // supabase — no separate backend repo
  },
];

const RepoButton = ({ href, label, isPrivate }) => {
  if (isPrivate || !href) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border text-muted-foreground cursor-not-allowed select-none">
        <Lock size={12} />
        {label} (Private)
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
    >
      <Github size={12} />
      {label}
    </a>
  );
};

const ProjectsGrid = () => (
  <section id="projects" className="py-24 border-t border-border">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-4">
        Portfolio
      </p>
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
          >
            {/* Banner */}
            <div className={`h-40 bg-linear-to-br ${p.color} flex items-center justify-center shrink-0`}>
              <span className="text-4xl font-extrabold text-foreground/10">{p.year}</span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 space-y-3">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {/* Live */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                )}

                {/* Repos */}
                <RepoButton
                  href={p.repoFront}
                  label="Frontend"
                  isPrivate={!p.repoFront}
                />
                {p.repoBack !== undefined && (
                  <RepoButton
                    href={p.repoBack}
                    label="Backend"
                    isPrivate={!p.repoBack}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGrid;