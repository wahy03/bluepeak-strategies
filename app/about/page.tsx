export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071C3D] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold tracking-wide uppercase">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            BluePeak Strategies
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            BluePeak Strategies is a systematic investment firm focused on
            disciplined risk management, capital preservation, and sustainable
            long-term growth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To provide investors with transparent, disciplined, and
              risk-managed investment strategies that aim to deliver consistent
              long-term returns while protecting capital.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become a trusted global investment partner known for
              systematic execution, transparency, and sustainable wealth
              creation.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold tracking-wide uppercase">
              Investment Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Discipline over emotion
            </h2>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              We believe that successful investing is not driven by emotion or
              speculation. Our approach is built on systematic analysis,
              predefined risk parameters, and consistent execution. By focusing
              on capital preservation first, we create a foundation for
              sustainable long-term growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold tracking-wide uppercase">
              Core Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              What drives us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                desc: "We communicate performance and risk openly with our investors.",
              },
              {
                title: "Discipline",
                desc: "Every decision is guided by predefined rules and risk management.",
              },
              {
                title: "Integrity",
                desc: "We prioritize investor trust and long-term relationships.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-400 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to invest with discipline?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover how BluePeak Strategies can help you achieve sustainable
            long-term growth through systematic investing.
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