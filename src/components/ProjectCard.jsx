import { ArrowUpRight } from "lucide-react";
import { Github, Lock } from "lucide-react";

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
const ProjectCard = ({ p }) => (
  <div className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 h-full">
    {/* Banner */}
    <div
      className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center shrink-0`}
    >
      <span className="text-4xl font-extrabold text-foreground/10">
        {p.year}
      </span>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-5 space-y-3">
      <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {p.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
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
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
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
);
export default ProjectCard;
