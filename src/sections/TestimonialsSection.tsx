import { useRef } from "react";
import { Plus, ArrowRight } from "lucide-react";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const testimonials = [
  {
    brand: "Screentime",
    color: "#FF6B35",
    body: "Entirely, we were hesitant about partnering, due to our concerns about the timeline. However, those reservations were completely unfounded and our project hit the bullseye.",
  },
  {
    brand: "Goodwell",
    color: "#22C55E",
    body: "Entirely, we were hesitant about partnering with Baskara due to our concerns regarding the approach. However, those reservations were entirely exceeded by the final outcome.",
  },
  {
    brand: "BuildingBlocks",
    color: "#3B82F6",
    body: "Entirely, we were hesitant about partnering with Baskara due to our concerns. However, those occasional worries were completely dissolved by the quality of the final product.",
  },
  {
    brand: "Clandestine",
    color: "#8B5CF6",
    body: "Entirely, we were hesitant about partnering with Baskara and had concerns about the timeline. However, those concerns completely exceeded our project to the fullest.",
  },
];

export function TestimonialsSection() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    scroller.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-white section-pad border-t border-[#E0E0E0]">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="font-bold text-[36px] text-[#0D0D0D]" style={{ letterSpacing: "-0.02em" }}>
              Testimonials
            </h2>
            <p className="text-[14px] text-[#555555] mt-2">
              Explore customer feedback as my service and its impact on their experiences.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-340)}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#555555] transition-all duration-200 hover:!bg-[#FFE500] hover:!border-[#FFE500] hover:!text-[#0D0D0D]"
            >
              <Plus size={18} />
            </button>
            <button
              onClick={() => scrollBy(340)}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#555555] transition-all duration-200 hover:!bg-[#FFE500] hover:!border-[#FFE500] hover:!text-[#0D0D0D]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-8 flex flex-row overflow-x-auto gap-4 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible scrollbar-hide pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <StaggerContainer staggerDelay={0.1} className="contents">
            {testimonials.map((t) => (
              <div
                key={t.brand}
                className="bg-white border border-[#E0E0E0] rounded-2xl p-6 flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-full"
                    style={{ background: t.color }}
                    aria-hidden
                  />
                  <span className="font-bold text-[14px] text-[#0D0D0D]">{t.brand}</span>
                </div>
                <h3 className="font-bold text-base text-[#0D0D0D] mt-3">{t.brand}</h3>
                <p className="italic text-[14px] text-[#555555] leading-[1.65] mt-2">{t.body}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
