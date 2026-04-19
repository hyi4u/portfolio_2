const techCategories = [
  {
    label: "Frontend",
    techs: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux / RTK Query", "TailwindCSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express", "NestJS", "PostgreSQL", "Supabase", "REST APIs", "Auth & JWT"],
  },
  {
    label: "AI / ML",
    techs: ["Python", "Machine Learning", "Deep Learning"],
  },
  {
    label: "Tools",
    techs: ["Git", "Docker"],
  },
];

const TechStack = () => (
  <section className="py-24 border-t border-border">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-4">
        Tech Stack
      </p>
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        Technologies I Work With
      </h2>
      <div className="space-y-10">
        {techCategories.map((category) => (
          <div key={category.label}>
            <p className="text-xs text-start uppercase tracking-widest text-muted-foreground font-medium mb-4">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {category.techs.map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-center px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:card-glow transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;