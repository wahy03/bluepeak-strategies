const VALUES = [
  {
    index: "01",
    title: "Discipline",
    desc: "Following predefined rules without emotional decision-making.",
  },
  {
    index: "02",
    title: "Transparency",
    desc: "Providing clear and honest performance reporting to investors.",
  },
  {
    index: "03",
    title: "Risk Management",
    desc: "Protecting capital through strict risk control and drawdown limits.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#141b2c] text-[#f3f1ea] px-6 md:px-8 pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">About BluePeak</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            A disciplined approach to long-term wealth creation
          </h1>
          <p className="mt-6 text-[#9099a4] text-lg leading-relaxed">
            BluePeak Strategies is a systematic investment management company
            focused on preserving capital, managing risk, and generating
            sustainable long-term growth through disciplined trading
            execution.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 border-t border-white/[0.08]">
          <div className="py-10 md:pr-12">
            <h2 className="font-serif text-2xl mb-4">Our Mission</h2>
            <p className="text-[#9099a4] leading-relaxed">
              To provide investors with a transparent, disciplined, and
              risk-controlled investment strategy that prioritizes capital
              preservation while seeking consistent long-term returns.
            </p>
          </div>

          <div className="py-10 md:pl-12 md:border-l border-white/[0.08]">
            <h2 className="font-serif text-2xl mb-4">Our Vision</h2>
            <p className="text-[#9099a4] leading-relaxed">
              To become a trusted investment strategy provider recognized for
              disciplined execution, transparency, and sustainable wealth
              creation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <p className="eyebrow mb-6">Core Values</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-14">
            What guides every decision we make
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className={`py-10 pr-8 ${
                  i > 0 ? "md:border-l border-white/[0.08] md:pl-10" : ""
                }`}
              >
                <span className="font-data text-sm text-[#c6a15b]">
                  {value.index}
                </span>
                <h3 className="font-serif text-2xl mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-[#9099a4] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
