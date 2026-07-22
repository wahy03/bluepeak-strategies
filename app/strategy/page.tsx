const METRICS = [
  { value: "30%", label: "Target Annual Return" },
  { value: "20%", label: "Maximum Drawdown" },
  { value: "Swing", label: "Trading Style" },
  { value: "$1,000", label: "Minimum Balance" },
];

const RISK_FRAMEWORK = [
  { label: "Capital Preservation", value: "High", width: "90%" },
  { label: "Risk Control", value: "Strict", width: "95%" },
  { label: "Return Potential", value: "Moderate", width: "75%" },
  { label: "Consistency", value: "High", width: "85%" },
];

const TRADING_DETAILS = [
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
];

export default function StrategyPage() {
  return (
    <main className="bg-[#141b2c] text-[#f3f1ea] px-6 md:px-8 pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Our Strategy</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            BluePeak Long-Term Strategy
          </h1>
          <p className="mt-6 text-[#9099a4] text-lg leading-relaxed">
            A systematic investment strategy designed to achieve sustainable
            long-term growth while prioritizing capital preservation and
            disciplined risk management.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/[0.08]">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className="border-r border-b border-white/[0.08] px-6 py-10 text-center"
            >
              <p className="font-data text-3xl text-[#c6a15b]">
                {metric.value}
              </p>
              <p className="mt-3 text-[#9099a4] text-xs eyebrow justify-center">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Strategy Overview + Risk Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          <div>
            <h2 className="font-serif text-3xl mb-6">Strategy Overview</h2>
            <p className="text-[#9099a4] leading-relaxed mb-8">
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
                  <div className="w-1.5 h-1.5 bg-[#c6a15b]" />
                  <span className="text-[#c9cdd6]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6">Risk Framework</h2>

            <div className="space-y-7">
              {RISK_FRAMEWORK.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 font-data text-sm">
                    <span className="text-[#9099a4]">{item.label}</span>
                    <span className="text-[#f3f1ea]">{item.value}</span>
                  </div>
                  <div className="w-full h-px bg-white/[0.08]">
                    <div
                      className="h-px bg-[#4c7dff]"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trading Details */}
        <div className="mt-24">
          <h2 className="font-serif text-3xl mb-12">Trading Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/[0.08]">
            {TRADING_DETAILS.map((section, index) => (
              <div
                key={index}
                className={`py-10 pr-6 ${
                  index > 0 ? "md:border-l border-white/[0.08] md:pl-8" : ""
                }`}
              >
                <h3 className="eyebrow mb-5">{section.title}</h3>
                <ul className="space-y-2.5 text-[#c9cdd6]">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/[0.08] pt-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to join BluePeak?
          </h2>
          <p className="text-[#9099a4] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Start building long-term wealth with a disciplined, systematic
            investment strategy focused on capital preservation and
            sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/performance" className="btn-primary px-8 py-4">
              View Performance
            </a>
            <a href="/contact" className="btn-secondary px-8 py-4">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
