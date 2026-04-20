import { motion, useInView } from "framer-motion";
import { Children, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.08, className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const parent = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  };
  const child = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      ref={ref}
      variants={parent}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {Children.map(children, (c, i) => (
        <motion.div key={i} variants={child}>
          {c}
        </motion.div>
      ))}
    </motion.div>
  );
}
