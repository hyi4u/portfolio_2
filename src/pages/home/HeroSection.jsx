import { useEffect, useRef } from "react";
import heroImg from "../../assets/profile.jpg";
import heroImgSmall from "../../assets/profile-small.jpg"; // your tiny placeholder

const HeroSection = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const wrapper = wrapperRef.current;
    if (!img || !wrapper) return;

    function loaded() {
      wrapper.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
      return () => img.removeEventListener("load", loaded);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            Available for work
          </div> */}
          <h1 className="text-4xl text-start sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Hi, I'm <span className="text-primary">Haider Ali</span>
          </h1>
          <p className="text-lg text-start text-muted-foreground max-w-md leading-relaxed">
            What started as a hobby turned into my full-time passion and my
            bread and butter. Now, I help people and businesses bring their
            ideas to life with modern websites that just work—while actively
            mastering AI algorithms to build the next generation of intelligent,
            data-driven applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right — 3D card */}
        <div className="flex justify-center">
          <div
            ref={wrapperRef}
            className="blurred-img relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border border-border card-glow"
            style={{
              backgroundImage: `url(${heroImgSmall})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              ref={imgRef}
              src={heroImg}
              alt="3D abstract geometric shape"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
