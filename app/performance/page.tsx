"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PerformancePage() {
  const chartOptions = {
    chart: {
      toolbar: { show: false },
      background: "transparent",
    },
    theme: {
      mode: "dark" as const,
    },
    stroke: {
      curve: "smooth" as const,
      width: 3,
    },
    colors: ["#38BDF8"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: { style: { colors: "#94A3B8" } },
    },
    yaxis: {
      labels: { style: { colors: "#94A3B8" } },
    },
    grid: {
      borderColor: "#1E293B",
    },
  };

  const chartSeries = [
    {
      name: "Equity",
      data: [1000, 1080, 1150, 1230, 1320, 1450],
    },
  ];

  return (
    <main className="min-h-screen bg-[#071C3D] text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-wide uppercase">
            Performance
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Transparent Results
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Our performance is built on disciplined risk management,
            systematic execution, and long-term consistency.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "+30%", label: "Annual Return" },
            { value: "-20%", label: "Max Drawdown" },
            { value: "64%", label: "Win Rate" },
            { value: "1.8", label: "Profit Factor" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Equity Curve */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-bold mb-6">Equity Curve</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>

        {/* Monthly Returns */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Monthly Returns</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-gray-300">Month</th>
                  <th className="pb-4 text-gray-300">Return</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["January", "+8.0%"],
                  ["February", "+6.5%"],
                  ["March", "+5.2%"],
                  ["April", "+7.1%"],
                  ["May", "+4.8%"],
                  ["June", "+5.9%"],
                ].map(([month, returnValue], index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4">{month}</td>
                    <td className="py-4 text-green-400 font-semibold">
                      {returnValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}