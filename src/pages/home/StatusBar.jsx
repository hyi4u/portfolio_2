import { MapPin, Briefcase, Clock } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Based in", value: "Nasiriyah, Iraq" },
  {
    icon: Briefcase,
    label: "Specializing in",
    value: "Web Dev & AI Engineering",
  },
  { icon: Clock, label: "Experience", value: "2+ Years" },
];

const StatusBar = () => (
  <section className="border-y border-border bg-secondary/50 mt-10 sm:mt-0">
    <div className="container max-w-6xl mx-auto px-6 py-6 grid sm:grid-cols-3 gap-6 ">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <s.icon size={18} className="text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-sm font-medium text-foreground">{s.value}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatusBar;