import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Projects", to: "/", hash: "#projects" },
  { label: "Contact", to: "/", hash: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHomePage = path === "/";

  const handleAnchor = (hash: string) => (e: React.MouseEvent) => {
    if (onHomePage && hash) {
      e.preventDefault();
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-[100] bg-white border-b border-[#E0E0E0] transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="container-x flex items-center justify-between h-14 lg:h-16">
        <Link to="/" className="font-black text-base tracking-tight uppercase text-[#0D0D0D]">
          BASKARA©
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = onHomePage && l.hash === "" && path === "/";
            return (
              <a
                key={l.label}
                href={l.hash || "/"}
                onClick={handleAnchor(l.hash)}
                className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                  active
                    ? "text-[#0D0D0D] border-b-2 border-[#FFE500]"
                    : "text-[#555555] hover:text-[#0D0D0D]"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={handleAnchor("#contact")}
            className="hidden sm:inline-flex btn btn-yellow !py-2 !px-5 !text-[13px]"
          >
            Hire Me
          </a>
          <button
            className="md:hidden p-2 text-[#0D0D0D]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[200] bg-[#0D0D0D] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-5 right-5 text-white p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.hash || "/"}
                onClick={handleAnchor(l.hash)}
                className="text-white font-bold text-3xl"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
