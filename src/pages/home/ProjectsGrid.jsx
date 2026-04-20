import { ArrowUpRight, Github, Lock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Client Blog Platform",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "NestJS", "PostgreSQL"],
    year: "2024",
    description:
      "Production blog built for a real client with a full admin dashboard for publishing, editing, and managing content.",
    color: "from-violet-500/20 to-pink-500/20",
    live: "https://tayser-blog-dev.vercel.app/",
    repoFront: null,
    repoBack: null,
  },
  {
    title: "EqarZone Real Estate",
    tags: ["React", "TailwindCSS", "NestJS", "PostgreSQL"],
    year: "2025",
    description:
      "A comprehensive real estate platform featuring dynamic property listings, advanced search filtering, and management dashboards for users and agents.",
    color: "from-amber-500/20 to-orange-500/20",
    live: "https://eqarzone.com/",
    repoFront: null,
    repoBack: null,
  },
  {
    title: "E-Commerce Platform",
    tags: ["React", "Redux Toolkit", "TailwindCSS", "NestJS", "PostgreSQL"],
    year: "2024",
    description:
      "Full-stack e-commerce store with product management, cart, orders, and a complete admin dashboard for inventory and user control.",
    color: "from-blue-500/20 to-cyan-500/20",
    live: "https://frontend-ecomerce-nu.vercel.app/",
    repoFront: "https://github.com/hyi4u/frontend-ecomerce",
    repoBack: "https://github.com/hyi4u/ecomerce",
  },
  {
    title: "Chloris Chronicles Blog",
    tags: ["React", "TailwindCSS", "Supabase"],
    year: "2024",
    description:
      "A clean personal blog powered by Supabase for auth, storage, and real-time data — no traditional backend needed.",
    color: "from-emerald-500/20 to-teal-500/20",
    live: "https://chloris-chronicles-blog.vercel.app/",
    repoFront: "https://github.com/hyi4u/Chloris-Chronicles-Blog",
    repoBack: null,
  },
];


const ProjectsGrid = () => (
  <section id="projects" className="py-24 border-t border-border">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-4">
        Portfolio
      </p>
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        Featured Projects
      </h2>

      {/* Mobile — Swiper slider */}
      <div className="md:hidden pb-10">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title} className="!h-auto">
              <ProjectCard p={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop — original grid */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGrid;
