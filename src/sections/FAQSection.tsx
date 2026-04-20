import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What design services do you offer?",
    a: "I offer UI/UX design for web and mobile apps, brand identity and visual design, packaging design, and custom business websites tailored to your goals.",
  },
  {
    q: "How does your design process typically work?",
    a: "I begin with a discovery phase to understand your goals and users, followed by wireframing, high-fidelity mockups, iterative feedback rounds, and final asset delivery.",
  },
  {
    q: "Are you open to collaboration or part-time work?",
    a: "Yes — I'm open to freelance collaborations and part-time engagements depending on project scope, timeline, and mutual fit. Feel free to reach out.",
  },
  {
    q: "How long does it typically take to complete a project?",
    a: "Timelines vary by scope. A simple landing page takes 1–2 weeks; a full branding project or complex app typically takes 4–8 weeks with proper feedback cycles.",
  },
  {
    q: "How do I start a project with you?",
    a: "Simply reach out via email or WhatsApp with a brief overview of your project. I'll respond within 24 hours to schedule a free discovery call.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white section-pad border-t border-[#E0E0E0]">
      <div className="container-x grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20">
        <div>
          <h2 className="font-bold text-[36px] text-[#0D0D0D] max-w-[280px] leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
            Frequently Asked Question
          </h2>
          <p className="text-[14px] text-[#555555] mt-3">
            Here are some common questions along with their answers to help clear up any confusions.
          </p>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#E0E0E0] py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="w-full flex justify-between items-center text-left gap-4"
                >
                  <span className="font-medium text-[15px] text-[#0D0D0D]">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#555555] flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-[#555555] leading-[1.7] pt-3 pr-8">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
