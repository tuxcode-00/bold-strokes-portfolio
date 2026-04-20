import { Layers, Search, Palette, MousePointer, Laptop, Brain } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const features = [
  { icon: Layers, title: "UI Design", desc: "With a strong background in UI design I create user-friendly solutions that meet user needs and enhance their experience." },
  { icon: Search, title: "UX Research", desc: "With a strong background in UX research I create user-friendly solutions that meet user needs and enhance their experience." },
  { icon: Palette, title: "Branding Design", desc: "With a strong background in branding I design user-friendly solutions that meet user needs and enhance their experience." },
  { icon: MousePointer, title: "Interaction Design", desc: "With a strong background in interaction design I create solutions that meet user needs and enhance their experience." },
];

const hardSkills = ["UI Design", "UX Research", "Figma", "HTML & CSS", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "Git & GitHub", "Adobe Illustrator", "Branding Design", "Interaction Design"];
const softSkills = ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Time Management", "Critical Thinking", "Creativity", "Leadership", "Attention to Detail"];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white section-pad border-t border-[#E0E0E0]">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <RevealOnScroll>
            <p className="eyebrow">Our Features</p>
            <h2
              className="font-bold text-[#0D0D0D] mt-3"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.02em" }}
            >
              I Have Expertise to Tackle Challenges
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <p className="text-[15px] text-[#555555] max-w-[380px]">
              With experience in my field, I can handle challenges and provide solutions. My
              skills enhance my problem-solving and make me a valuable asset to any team.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white border border-[#E0E0E0] rounded-xl p-6 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-full"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="w-11 h-11 bg-[#FFE500] rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-[#0D0D0D]" />
                </div>
                <h3 className="font-bold text-base text-[#0D0D0D] mt-4">{f.title}</h3>
                <p className="text-[14px] text-[#555555] leading-[1.6] mt-2">{f.desc}</p>
              </div>
            );
          })}
        </StaggerContainer>

        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div className="bg-[#0D0D0D] rounded-2xl p-8">
            <RevealOnScroll direction="left">
              <Laptop size={28} className="text-white" />
              <h3 className="font-bold text-[22px] text-white mt-4">Hard Skills</h3>
              <StaggerContainer staggerDelay={0.04} className="flex flex-wrap gap-2 mt-5">
                {hardSkills.map((s) => (
                  <span
                    key={s}
                    className="bg-[#2A2A2A] text-white rounded-full px-3 py-1.5 text-[13px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </StaggerContainer>
            </RevealOnScroll>
          </div>

          <div className="bg-[#FFE500] rounded-2xl p-8">
            <RevealOnScroll direction="right">
              <Brain size={28} className="text-[#0D0D0D]" />
              <h3 className="font-bold text-[22px] text-[#0D0D0D] mt-4">Soft Skills</h3>
              <StaggerContainer staggerDelay={0.04} className="flex flex-wrap gap-2 mt-5">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="bg-[#0D0D0D] text-white rounded-full px-3 py-1.5 text-[13px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </StaggerContainer>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
