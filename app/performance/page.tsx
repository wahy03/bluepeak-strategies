"use client";

import Script from "next/script";

export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Live Performance
          </p>
          <h1 className="text-5xl font-bold text-[#071C3D] mt-4">
            BluePeak Strategies Performance
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Real-time performance data directly from cTrader Copy Trading.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
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
            // @ts-ignore
            window.putInitScript("runPlugin");

            // @ts-ignore
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