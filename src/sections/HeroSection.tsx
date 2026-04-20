import { motion } from "framer-motion";

export function HeroSection() {
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white min-h-[100vh] overflow-hidden flex items-center">
      <div className="container-x w-full relative pt-10 pb-24">
        {/* Photo on top of name */}
        <div className="relative flex justify-center items-center min-h-[60vh]">
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-x-0 text-center font-black uppercase text-[#0D0D0D] leading-[0.9] z-10 select-none"
            style={{ fontSize: "clamp(72px, 13vw, 180px)", letterSpacing: "-0.03em" }}
          >
            BASKARA©
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative z-20 w-[220px] sm:w-[280px] lg:w-[320px] aspect-[3/4] rounded-lg overflow-hidden bg-[#E0E0E0]"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Side text - desktop only */}
          <p className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 text-[14px] text-[#555555] max-w-[200px] leading-relaxed z-10">
            Hello, I'm Baskara, a designer based in Indonesia — bringing innovative ideas to life through my designs and collaborations.
          </p>
          <p className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-[#555555] max-w-[200px] leading-relaxed text-right z-10">
            I bring innovative ideas to life through my designs and collaborations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mt-12 relative z-20"
        >
          <a href="#cv" className="btn btn-outline-dark">
            Download CV
          </a>
          <button onClick={scrollContact} className="btn btn-primary">
            Get Started
          </button>
        </motion.div>

        <div className="hidden sm:flex absolute bottom-4 left-6 lg:left-20 text-[13px] text-[#A0A0A0]">
          © Baskara {new Date().getFullYear()}
        </div>
        <button
          onClick={scrollDown}
          className="hidden sm:block absolute bottom-4 right-6 lg:right-20 text-[13px] text-[#A0A0A0] hover:text-[#0D0D0D] transition-colors"
        >
          Scroll Down ↓
        </button>
      </div>
    </section>
  );
}
