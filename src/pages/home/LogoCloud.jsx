const logos = ["Google", "Microsoft", "Stripe", "Vercel", "Shopify", "Notion"];

const LogoCloud = () => (
  <section className="py-16 border-b border-border">
    <div className="container max-w-6xl mx-auto px-6">
      {/* <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Companies I've Worked With
      </p> */}
      <div className="overflow-hidden">
        <div className="flex gap-16 logo-scroll whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="text-xl font-semibold text-muted-foreground/40 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoCloud;
