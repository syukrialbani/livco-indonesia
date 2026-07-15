"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, immediate = false }: { children: ReactNode; className?: string; delay?: number; immediate?: boolean }) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 30, filter: "blur(5px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
  const transition = { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
  return immediate
    ? <motion.div className={className} initial={initial} animate={visible} transition={transition}>{children}</motion.div>
    : <motion.div className={className} initial={initial} whileInView={visible} viewport={{ once: true, margin: "-70px" }} transition={transition}>{children}</motion.div>;
}
