"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        {/* Gradient Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo/bluepeak-logo.png"
                alt="BluePeak Strategies Logo"
                className="h-30 w-auto object-contain"
              />
            </div>

            <div className="space-x-8 hidden md:flex text-slate-700 font-medium">
              <a href="/about" className="hover:text-blue-600 transition">
                About
              </a>
              <a href="/strategy" className="hover:text-blue-600 transition">
                Strategy
              </a>
              <a href="/performance" className="hover:text-blue-600 transition">
                Performance
              </a>
              <a href="/contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-44 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-slate-700 font-medium">
                Systematic Investment Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl tracking-tight">
              Building Wealth Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Disciplined Strategies
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Long-term systematic investment strategies designed to preserve
              capital, manage risk, and deliver sustainable growth through
              disciplined execution.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/performance"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-slate-900/20"
              >
                View Performance
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white px-8 py-4 rounded-2xl font-semibold transition shadow-sm"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-24 max-w-6xl mx-auto">
          {[
            { value: "30%", label: "Target Annual Return" },
            { value: "20%", label: "Maximum Drawdown" },
            { value: "100%", label: "Rule-Based Execution" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-slate-900">
                {stat.value}
              </h3>
              <p className="mt-3 text-slate-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </section>

        {/* About Section */}
        <section className="px-8 py-24 max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-blue-600 font-semibold tracking-wide uppercase">
              Why BluePeak
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              A disciplined approach to long-term wealth creation
            </h2>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We believe successful investing is not about chasing quick
              profits. It is about protecting capital, managing risk, and
              allowing compounding to work over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Capital Preservation",
                desc: "Protecting capital always comes before pursuing returns.",
              },
              {
                title: "Risk First",
                desc: "Every trade begins with predefined risk parameters.",
              },
              {
                title: "Consistent Growth",
                desc: "Small consistent gains outperform emotional trading.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}