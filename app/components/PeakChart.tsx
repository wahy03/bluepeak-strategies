"use client";

import { motion } from "framer-motion";

/**
 * The site's signature graphic: a systematic equity curve that rises,
 * takes a disciplined, bounded drawdown, then resumes its climb to a peak.
 * It literalizes both halves of the brand — "BluePeak" and a rule-based
 * trading strategy — instead of decorative blobs.
 */
export default function PeakChart({ className = "" }: { className?: string }) {
  const linePath =
    "M0,300 C60,290 110,280 150,255 C190,230 200,180 240,175 " +
    "C280,170 300,220 330,245 C355,266 365,285 380,278 " +
    "C420,260 440,190 480,150 C520,110 540,95 580,70 " +
    "C620,46 650,40 700,18 C740,3 760,-4 800,-14";

  const fillPath = linePath + " L800,340 L0,340 Z";

  return (
    <svg
      viewBox="-10 -30 820 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* faint terminal grid */}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          x2="800"
          y1={i * 50}
          y2={i * 50}
          stroke="rgba(243,241,234,0.05)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`v-${i}`}
          y1="-30"
          y2="340"
          x1={i * 100}
          x2={i * 100}
          stroke="rgba(243,241,234,0.045)"
          strokeWidth="1"
        />
      ))}

      <defs>
        <linearGradient id="peakFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4c7dff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#4c7dff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={fillPath}
        fill="url(#peakFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />

      <motion.path
        d={linePath}
        stroke="#4c7dff"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.1, ease: "easeInOut" }}
      />

      {/* the marked drawdown, called out the way a terminal annotates risk */}
      <motion.circle
        cx="380"
        cy="278"
        r="3.5"
        fill="#c6a15b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      <motion.line
        x1="380"
        y1="278"
        x2="380"
        y2="330"
        stroke="rgba(198,161,91,0.35)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />

      {/* the peak */}
      <motion.circle
        cx="800"
        cy="-14"
        r="4"
        fill="#f3f1ea"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      />
    </svg>
  );
}
