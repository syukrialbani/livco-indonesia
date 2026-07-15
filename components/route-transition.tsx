"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function RouteTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className="route-frame" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
