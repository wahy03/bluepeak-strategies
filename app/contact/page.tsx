const CHANNELS = [
  {
    index: "01",
    title: "Email",
    value: "contact@bluepeakstrategies.com",
    href: "mailto:contact@bluepeakstrategies.com",
    desc: "For detailed inquiries, strategy documentation, and onboarding questions.",
  },
  {
    index: "02",
    title: "Telegram",
    value: "@wae_fx",
    href: "https://t.me/wae_fx",
    desc: "Fastest way to reach the desk directly for quick questions.",
  },
  {
    index: "03",
    title: "LinkedIn",
    value: "BluePeak Strategies",
    href: "#",
    desc: "Follow updates, commentary, and firm announcements.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#141b2c] text-[#f3f1ea] px-6 md:px-8 pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            Let&apos;s talk about your capital
          </h1>
          <p className="mt-6 text-[#9099a4] text-lg leading-relaxed">
            Whether you have a question about the strategy, minimum balance,
            or copy trading setup — reach out through any channel below. We
            typically respond within one business day.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/[0.08]">
          {CHANNELS.map((channel) => (
            <a
              key={channel.index}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              className="group border-r border-b border-white/[0.08] p-8 md:p-10 transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-data text-sm text-[#c6a15b]">
                {channel.index}
              </span>
              <h2 className="font-serif text-2xl mt-4 mb-3">
                {channel.title}
              </h2>
              <p className="text-[#9099a4] leading-relaxed mb-6">
                {channel.desc}
              </p>
              <span className="font-data text-sm text-[#f3f1ea] group-hover:text-[#c6a15b] transition-colors inline-flex items-center gap-2">
                {channel.value}
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-24 border-t border-white/[0.08] pt-16 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl mb-4">
            Prefer to see the numbers first?
          </h2>
          <p className="text-[#9099a4] text-lg mb-10 leading-relaxed">
            Review live, unfiltered performance data before reaching out.
          </p>
          <a href="/performance" className="btn-primary px-8 py-4 inline-block">
            View Performance
          </a>
        </div>
      </div>
    </main>
  );
}
