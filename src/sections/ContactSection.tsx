import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const cards = [
  { icon: Mail, label: "Email", value: "hello@baskara.com", href: "mailto:hello@baskara.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/baskara", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", value: "@baskara", href: "https://instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 812-XXXX-XXXX", href: "https://wa.me/62812" },
];

export function ContactSection() {
  const scrollAbout = () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contact" className="bg-[#FFE500] py-24">
      <div className="container-x text-center">
        <h2
          className="font-black text-[#0D0D0D] max-w-[640px] mx-auto leading-[1.05]"
          style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.02em" }}
        >
          Let's Whip Up Something Fun!
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="mailto:hello@baskara.com" className="btn btn-primary">
            Get Started
          </a>
          <button onClick={scrollAbout} className="btn btn-outline-dark">
            Learn More
          </button>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
              >
                <span className="w-10 h-10 rounded-full bg-[#FFE500] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#0D0D0D]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase text-[#A0A0A0] tracking-[0.1em]">
                    {c.label}
                  </span>
                  <span className="block font-bold text-[15px] text-[#0D0D0D] mt-1 truncate">
                    {c.value}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
