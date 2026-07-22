"use client";

import { motion } from "framer-motion";
import PeakChart from "./components/PeakChart";

const STATS = [
  { value: "30%", label: "Target Annual Return" },
  { value: "20%", label: "Maximum Drawdown" },
  { value: "100%", label: "Rule-Based Execution" },
];

const PRINCIPLES = [
  {
    index: "01",
    title: "Capital Preservation",
    desc: "Protecting capital always comes before pursuing returns. Every decision is filtered through this rule first.",
  },
  {
    index: "02",
    title: "Risk First",
    desc: "Every trade begins with predefined risk parameters set before entry, never adjusted in the heat of the moment.",
  },
  {
    index: "03",
    title: "Consistent Growth",
    desc: "Small, consistent gains compounded over time outperform emotional, high-variance trading.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#141b2c] text-[#f3f1ea]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 md:pt-48 pb-28 md:pb-36 px-6 md:px-8">
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%] opacity-90 pointer-events-none">
          <PeakChart className="w-full h-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="eyebrow mb-8">Systematic Investment Solutions</p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Building wealth through{" "}
              <span className="italic text-[#c6a15b]">disciplined</span>{" "}
              strategies
            </h1>

            <p className="mt-8 text-lg text-[#9099a4] max-w-xl leading-relaxed">
              Long-term systematic investment strategies designed to preserve
              capital, manage risk, and deliver sustainable growth through
              disciplined execution.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/performance"
                className="btn-primary px-8 py-4 text-center"
              >
                View Performance
              </a>
              <a
                href="/contact"
                className="btn-secondary px-8 py-4 text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat strip — reads like a terminal ticker, not a card grid */}
      <section className="border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-8 py-12 md:py-16 text-center sm:text-left"
            >
              <p className="font-data text-4xl md:text-5xl text-[#f3f1ea]">
                {stat.value}
              </p>
              <p className="mt-3 text-[#9099a4] eyebrow">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why BluePeak — a real sequence: preserve, then risk, then grow */}
      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Why BluePeak</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              A disciplined approach to long-term wealth creation
            </h2>
            <p className="mt-6 text-[#9099a4] text-lg leading-relaxed">
              We believe successful investing is not about chasing quick
              profits. It is about protecting capital, managing risk, and
              allowing compounding to work over time — in that order.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]">
            {PRINCIPLES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`py-10 pr-8 ${
                  i > 0 ? "md:border-l border-white/[0.08] md:pl-10" : ""
                }`}
              >
                <span className="font-data text-sm text-[#c6a15b]">
                  {item.index}
                </span>
                <h3 className="font-serif text-2xl mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-[#9099a4] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
