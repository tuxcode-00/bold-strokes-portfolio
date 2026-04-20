import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Settings2, TrendingUp, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }] };
    return {
      meta: [
        { title: `${loaderData.title} — Baskara© Case Study` },
        { name: "description", content: loaderData.overview },
        { property: "og:title", content: `${loaderData.title} — Baskara©` },
        { property: "og:description", content: loaderData.overview },
        { property: "og:image", content: loaderData.bannerImage },
        { name: "twitter:image", content: loaderData.bannerImage },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="font-black text-[#E0E0E0]" style={{ fontSize: "clamp(96px,20vw,200px)" }}>
        404
      </h1>
      <p className="font-bold text-[28px] text-[#0D0D0D] mt-2">Project not found.</p>
      <Link to="/" className="btn btn-primary mt-6">
        ← Back to Home
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <p className="text-[#555555]">Something went wrong: {error.message}</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData() as (typeof projects)[number];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white"
    >
      <Navbar />

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative w-full h-[55vh] min-h-[420px] overflow-hidden bg-[#E0E0E0]"
      >
        <img
          src={project.bannerImage}
          alt={project.title}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 60%)" }}
        />
        <div className="absolute bottom-0 inset-x-0 pb-8">
          <div className="container-x">
            <span className="inline-block bg-[#FFE500] text-[#0D0D0D] font-bold text-[12px] uppercase px-3 py-1 rounded-full tracking-wider">
              {project.category}
            </span>
            <h1
              className="font-black text-white max-w-[700px] leading-[1.05] mt-3"
              style={{ fontSize: "clamp(36px,6vw,56px)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Container */}
      <div className="container-x">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 pt-10 text-[14px] text-[#A0A0A0] hover:text-[#0D0D0D] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Meta */}
        <StaggerContainer staggerDelay={0.1} className="mt-8 pb-8 border-b border-[#E0E0E0]">
          <div className="flex flex-wrap gap-12">
            {[
              { label: "CLIENT", value: project.client },
              { label: "YEAR", value: project.year },
              { label: "ROLE", value: project.role },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[11px] font-medium uppercase text-[#A0A0A0] tracking-[0.1em]">
                  {m.label}
                </p>
                <p className="font-bold text-[15px] text-[#0D0D0D] mt-1.5">{m.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="bg-[#F5F5F5] text-[#0D0D0D] rounded-full px-3 py-1 text-[13px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </StaggerContainer>

        {/* Overview */}
        <RevealOnScroll>
          <div className="pt-16">
            <h2 className="font-bold text-[32px] text-[#0D0D0D]" style={{ letterSpacing: "-0.02em" }}>
              Project Overview
            </h2>
            <p className="text-[16px] text-[#555555] max-w-[680px] mt-3 leading-[1.75]">
              {project.overview}
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 cards */}
        <StaggerContainer staggerDelay={0.15} className="grid lg:grid-cols-3 gap-6 mt-10">
          <DetailCard
            icon={<Target size={20} className="text-[#0D0D0D]" />}
            iconBg="#FFE500"
            title="Tujuan (Objective)"
            body={project.objective}
          />
          <DetailCard
            icon={<Settings2 size={20} className="text-white" />}
            iconBg="#0D0D0D"
            title="Metode (Method)"
            body={project.method.description}
            pills={project.method.tools.map((t) => (
              <span
                key={t}
                className="bg-[#F5F5F5] text-[#0D0D0D] rounded-full px-3 py-1 text-[12px] font-medium"
              >
                {t}
              </span>
            ))}
          />
          <DetailCard
            icon={<TrendingUp size={20} className="text-[#0D0D0D]" />}
            iconBg="#FFE500"
            title="Hasil (Result)"
            body={project.result.description}
            pills={project.result.metrics.map((m) => (
              <span
                key={m}
                className="bg-[#0D0D0D] text-white rounded-full px-3 py-1 text-[12px] font-bold"
              >
                {m}
              </span>
            ))}
          />
        </StaggerContainer>

        {/* CTAs */}
        <RevealOnScroll>
          <div className="flex flex-wrap gap-3 mt-16 mb-24">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              View Live Project ↗
            </a>
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark"
            >
              View on Drive
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <Footer />
    </motion.div>
  );
}

function DetailCard({
  icon,
  iconBg,
  title,
  body,
  pills,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  body: string;
  pills?: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl p-7 h-full">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-[18px] text-[#0D0D0D] mt-5">{title}</h3>
      <p className="text-[15px] text-[#555555] leading-[1.75] mt-3">{body}</p>
      {pills && <div className="flex flex-wrap gap-2 mt-4">{pills}</div>}
    </div>
  );
}
