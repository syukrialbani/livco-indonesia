"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <>
      <motion.div className="hero-bg" initial={reduceMotion ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} style={reduceMotion ? undefined : { y }} />
      <motion.div className="hero-glow" animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -18, 0], opacity: [0.28, 0.42, 0.28] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />
    </>
  );
}
