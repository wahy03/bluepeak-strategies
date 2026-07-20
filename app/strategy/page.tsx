export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      {/* Modern Background - sama dengan Homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-blue-600 font-semibold tracking-wide uppercase">
              Our Strategy
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              BluePeak Long-Term Strategy
            </h1>
            <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A systematic investment strategy designed to achieve sustainable
              long-term growth while prioritizing capital preservation and
              disciplined risk management.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "30%", label: "Target Annual Return" },
              { value: "20%", label: "Maximum Drawdown" },
              { value: "Swing", label: "Trading Style" },
              { value: "USD 1,000", label: "Minimum Balance" },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 text-center border border-slate-200/50 shadow-sm"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  {metric.value}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Strategy Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Strategy Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The BluePeak Long-Term Strategy combines systematic market
                analysis, predefined risk parameters, and disciplined execution
                to capture high-probability trading opportunities.
              </p>

              <div className="space-y-4">
                {[
                  "Systematic market analysis",
                  "Rule-based execution",
                  "Strict risk management",
                  "Long-term consistency focus",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Risk Framework</h2>

              <div className="space-y-6">
                {[
                  { label: "Capital Preservation", value: "High", width: "90%" },
                  { label: "Risk Control", value: "Strict", width: "95%" },
                  { label: "Return Potential", value: "Moderate", width: "75%" },
                  { label: "Consistency", value: "High", width: "85%" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trading Details */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm mb-20">
            <h2 className="text-3xl font-bold mb-8">Trading Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Markets Traded",
                  items: ["Major Forex Pairs", "Gold (XAUUSD)", "Selected Indices"],
                },
                {
                  title: "Trading Methodology",
                  items: [
                    "Technical analysis",
                    "Market structure analysis",
                    "Fair Value Gap (FVG)",
                    "Risk-reward optimization",
                  ],
                },
                {
                  title: "Position Management",
                  items: [
                    "Fixed risk per trade",
                    "Predefined stop loss",
                    "Dynamic take profit",
                    "Portfolio exposure limits",
                  ],
                },
                {
                  title: "Platform",
                  items: ["cTrader", "Copy Trading Available", "Transparent Performance"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    {section.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/50 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to join BluePeak?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Start building long-term wealth with a disciplined, systematic
              investment strategy focused on capital preservation and sustainable
              growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/performance"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                View Performance
              </a>

              <a
                href="/contact"
                className="border border-slate-300 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}