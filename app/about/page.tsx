export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden">
      {/* Modern Background - sama persis dengan Homepage */}
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

      <div className="relative z-10 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wide uppercase">
              About BluePeak
            </p>
            <h1 className="text-5xl font-bold mt-4 tracking-tight">
              A disciplined approach to long-term wealth creation
            </h1>
            <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              BluePeak Strategies is a systematic investment management company
              focused on preserving capital, managing risk, and generating
              sustainable long-term growth through disciplined trading execution.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide investors with a transparent, disciplined, and
                risk-controlled investment strategy that prioritizes capital
                preservation while seeking consistent long-term returns.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted investment strategy provider recognized for
                disciplined execution, transparency, and sustainable wealth
                creation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-sm">
            <h2 className="text-3xl font-bold text-center mb-10">
              Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Discipline</h3>
                <p className="text-slate-600">
                  Following predefined rules without emotional decision-making.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-slate-600">
                  Providing clear and honest performance reporting to investors.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-7 h-7 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                <p className="text-slate-600">
                  Protecting capital through strict risk control and drawdown
                  limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}