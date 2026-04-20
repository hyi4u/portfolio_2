import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

const ReviewCard = ({ r }) => (
  <div className="p-6 rounded-2xl border border-border bg-card space-y-4 h-full">
    <div className="flex gap-1 justify-center items-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
    <div>
      <p className="text-sm font-semibold text-foreground">{r.name}</p>
      <p className="text-xs text-muted-foreground">{r.company}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-24 border-t border-border">
    <div className="container max-w-6xl mx-auto px-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-4">
        Testimonials
      </p>
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">
        What Clients Say
      </h2>

      {/* Mobile — Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name} className="!h-auto">
              <ReviewCard r={r} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop — grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;