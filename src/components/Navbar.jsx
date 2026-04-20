    import { useState } from "react";
    import { Menu, X } from "lucide-react";

    const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#projects" },
    ];

    const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container   mx-auto flex items-center justify-between h-16 px-6">
            <a
            href="#home"
            className="text-lg font-bold tracking-tight text-foreground"
            >
            dev<span className="text-primary">.</span>hyi4u
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                {item.label}
                </a>
            ))}
            <a
                href="#contact"
                className="text-sm font-medium px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
                Get In Touch
            </a>
            </div>

            {/* Mobile toggle */}
            <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            >
            {open ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>

        {/* Mobile menu */}
        {open && (
            <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
            {navItems.map((item) => (
                <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                {item.label}
                </a>
            ))}
            <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium px-5 py-2 rounded-lg bg-primary text-primary-foreground text-center"
            >
                Get In Touch
            </a>
            </div>
        )}
        </nav>
    );
    };

    export default Navbar;
