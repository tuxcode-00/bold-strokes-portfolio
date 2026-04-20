import CountUp from "react-countup";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  { end: 50, label: "Projects" },
  { end: 3, label: "Years Experience" },
  { end: 20, label: "Happy Clients" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white section-pad">
      <div className="container-x grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
        <RevealOnScroll direction="left">
          <span className="inline-block bg-[#FFE500] text-[#0D0D0D] text-[12px] font-medium px-3 py-1 rounded-full">
            About Me
          </span>
          <h2
            className="font-bold text-[#0D0D0D] mt-4 max-w-[420px] leading-[1.15]"
            style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.02em" }}
          >
            A Deep Dive into My Life's Experiences and Lessons Learned
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 mt-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 ${i > 0 ? "sm:pl-6 sm:border-l sm:border-[#E0E0E0]" : ""} ${
                  i < stats.length - 1 ? "sm:pr-6" : ""
                }`}
              >
                <div className="font-black text-[36px] text-[#0D0D0D] leading-none">
                  <CountUp end={s.end} suffix="+" enableScrollSpy scrollSpyDelay={200} duration={1.8} />
                </div>
                <p className="text-[14px] text-[#555555] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="rounded-xl overflow-hidden bg-[#E0E0E0] max-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
              alt="About Baskara"
              loading="lazy"
              className="w-full h-full object-cover max-h-[420px]"
            />
          </div>
          <p className="mt-6 text-[15px] text-[#555555] leading-[1.75]">
            I'm a passionate designer and developer with a strong eye for aesthetics and a love
            for creativity. My journey is filled with exciting projects and collaborations that
            inspire me. Over the years, I've had the privilege of working on diverse projects —
            from branding for local businesses to creating user-friendly interfaces for tech
            startups. I believe great design is not just about looking pretty, it's about solving
            real problems and enhancing user experience. I'm always eager to learn and grow,
            constantly seeking challenges that push the boundaries of my creativity.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
