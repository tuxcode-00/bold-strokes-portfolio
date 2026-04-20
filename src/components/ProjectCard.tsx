import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group bg-[#161616] border border-[#2A2A2A] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[#FFE500]"
    >
      <div className="overflow-hidden bg-[#2A2A2A] aspect-[4/3]">
        <motion.img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-base">{project.title}</h3>
        <p className="text-[#A0A0A0] text-[13px] mt-1">{project.category}</p>
        <div className="flex justify-end items-center gap-2 mt-3">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            aria-label={`View ${project.title} case study`}
            className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-white opacity-70 group-hover:opacity-100 transition-all duration-300 hover:!bg-[#FFE500] hover:!text-[#0D0D0D]"
          >
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={project.driveUrl}
            target="_blank"
            rel="noreferrer"
            title="View on Drive"
            aria-label={`View ${project.title} on Drive`}
            className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-white opacity-70 group-hover:opacity-100 transition-all duration-300 hover:!bg-[#FFE500] hover:!text-[#0D0D0D]"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
