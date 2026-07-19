export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-[#071C3D] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold tracking-wide uppercase">
            Our Strategy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            BluePeak Long-Term Strategy
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/10"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {metric.value}
              </h3>
              <p className="mt-2 text-gray-300 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Strategy Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Strategy Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The BluePeak Long-Term Strategy combines systematic market
              analysis, predefined risk parameters, and disciplined execution to
              capture high-probability trading opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Systematic market analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Rule-based execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Strict risk management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Long-term consistency focus</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Risk Framework</h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Capital Preservation</span>
                  <span className="font-semibold">High</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Risk Control</span>
                  <span className="font-semibold">Strict</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Return Potential</span>
                  <span className="font-semibold">Moderate</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Consistency</span>
                  <span className="font-semibold">High</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-20">
          <h2 className="text-3xl font-bold mb-8">Trading Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Markets Traded
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Major Forex Pairs</li>
                <li>• Gold (XAUUSD)</li>
                <li>• Selected Indices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Trading Methodology
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Technical analysis</li>
                <li>• Market structure analysis</li>
                <li>• Fair Value Gap (FVG)</li>
                <li>• Risk-reward optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Position Management
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fixed risk per trade</li>
                <li>• Predefined stop loss</li>
                <li>• Dynamic take profit</li>
                <li>• Portfolio exposure limits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Platform
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• cTrader</li>
                <li>• Copy Trading Available</li>
                <li>• Transparent Performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to join BluePeak?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start building long-term wealth with a disciplined, systematic
            investment strategy focused on capital preservation and sustainable
            growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/performance"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-blue-600/25"
            >
              View Performance
            </a>

            <a
              href="/contact"
              className="border border-white/20 hover:bg-white hover:text-[#071C3D] px-8 py-4 rounded-xl font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}