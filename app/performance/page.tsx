"use client";

import Script from "next/script";

export default function PerformancePage() {
  return (
    <main className="bg-[#141b2c] text-[#f3f1ea] px-6 md:px-8 pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-6">Live Performance</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            BluePeak Strategies performance
          </h1>
          <p className="mt-6 text-[#9099a4] text-lg leading-relaxed">
            Real-time performance data streamed directly from cTrader Copy
            Trading — no delays, no curation.
          </p>
        </div>

        <div className="panel p-4 md:p-6">
          <div
            id="ctrader-plugin-root"
            style={{ width: "100%", height: "900px", position: "relative" }}
          />
        </div>

        <Script
          id="ctrader-widget"
          src="https://ct.spotware.com/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            // @ts-expect-error - cTrader widget script attaches these globally
            window.putInitScript("runPlugin");

            // @ts-expect-error - cTrader widget script attaches these globally
            window.runPlugin("ctrader-plugin-root", {
              route:
                "/copy-provider/?lang=en&theme=dark&providerNickname=bluepeak.strategies",
              appConfig: {
                strategy: {
                  showStrategyPromotion: true,
                },
              },
            });
          }}
        />
      </div>
    </main>
  );
}
