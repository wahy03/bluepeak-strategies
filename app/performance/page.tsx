export default function PerformancePage() {
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

        <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100 overflow-hidden">
          <iframe
            src="https://ct.spotware.com/copy-provider/?lang=en&theme=dark&providerNickname=bluepeak.strategy"
            width="100%"
            height="900"
            frameBorder="0"
            className="rounded-2xl"
            title="BluePeak cTrader Performance"
          />
        </div>
      </div>
    </main>
  );
}