import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { x: 0, y: 32 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
};

export function RevealOnScroll({ children, delay = 0, direction = "up", className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const off = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: off.x, y: off.y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
