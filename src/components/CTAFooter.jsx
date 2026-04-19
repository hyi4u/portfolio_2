import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
  Twitter,
  Mail,
} from "lucide-react";

const socials = [
  {
    label: "Telegram",
    icon: Send,
    href: "https://t.me/your_username",        // ← replace
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/your_number",         // ← replace (e.g. 9641234567890)
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/your_handle", // ← replace
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/your_handle",  // ← replace
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/your_handle", // ← replace
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/your_handle",    // ← replace
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/your_handle",   // ← replace
  },
];

const CTAFooter = () => (
  <section id="contact" className="py-24 border-t border-border">
    {/* CTA */}
    <div className="container max-w-4xl mx-auto px-6 text-center space-y-6">
      <p className="text-xs uppercase tracking-widest text-primary font-medium">
        Get In Touch
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        Let's Build Something Together
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
        Have a project in mind or want to discuss an opportunity? I'm available
        for freelance work and always open to interesting collaborations.
      </p>

      {/* Contact buttons */}
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a
          href="mailto:haider@example.com"     // ← replace with your email
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
        >
          <Mail size={15} />
          Send an Email
        </a>
        <a
          href="https://wa.me/your_number"     // ← replace
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors text-sm"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <a
          href="https://t.me/your_username"    // ← replace
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors text-sm"
        >
          <Send size={15} />
          Telegram
        </a>
      </div>

      {/* Social icons row */}
      <div className="flex justify-center gap-4 pt-2">
        {socials.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>

    {/* Footer bar */}
    <div className="container max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Haider Ali. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Designed & Built by{" "}
        <span className="text-foreground font-medium">Haider Ali</span>
      </p>
    </div>
  </section>
);

export default CTAFooter;