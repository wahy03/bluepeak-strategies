"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    putInitScript: (name: string) => void;
    runPlugin: (id: string, config: any) => void;
  }
}

export default function PerformancePage() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://ct.spotware.com/widget.js"]'
    );

    const initializeWidget = () => {
      const container = document.getElementById("ctrader-plugin-root");

      if (container) {
        container.innerHTML = ""; // clear previous widget

        if (window.putInitScript && window.runPlugin) {
          window.putInitScript("runPlugin");

          window.runPlugin("ctrader-plugin-root", {
            route:
              "/copy-provider/?lang=en&theme=dark&providerNickname=bluepeak.strategy",
            appConfig: {
              strategy: {
                showStrategyPromotion: true,
              },
            },
          });
        }
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://ct.spotware.com/widget.js";
      script.async = true;

      script.onload = () => {
        initializeWidget();
      };

      document.body.appendChild(script);
    } else {
      initializeWidget();
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Live Performance
          </p>
          <h1 className="text-5xl font-bold text-[#071C3D] mt-4">
            BluePeak Strategy Performance
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Real-time performance data directly from cTrader Copy Trading.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
          <div
            id="ctrader-plugin-root"
            style={{ width: "100%", height: "800px", position: "relative" }}
          />
        </div>
      </div>
    </main>
  );
}