import { Star } from "lucide-react";

const reviews = [
  {
    name: "Haider Hassan",
    company: "Client",
    text: "Haider delivered exactly what we needed. The website was clean, fast, and worked perfectly from day one. Great attention to detail throughout the whole project.",
  },
  {
    name: "Hassan Emad",
    company: "Client",
    text: "Very professional and easy to work with. He understood what I wanted quickly and delivered a polished result on time. Would definitely work with him again.",
  },
  {
    name: "Moamel Mohammed",
    company: "Client",
    text: "The blog platform he built for us has been running smoothly since launch. Clean design, solid backend, and he was always responsive whenever we had questions.",
  },
];

const Testimonials = () => (
  <section className="py-24 border-t border-border">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-4">
        Testimonials
      </p>
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        What Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="p-6 rounded-2xl border border-border bg-card space-y-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "{r.text}"
            </p>
            <div>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;