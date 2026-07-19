import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BluePeak Strategies",
  description:
    "Systematic investment strategies focused on capital preservation, disciplined risk management, and sustainable long-term growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#071C3D] text-white">
        {children}

        {/* Global Footer */}
        <footer className="border-t border-white/10 bg-[#071C3D]">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/logo/bluepeak-logo.png"
                    alt="BluePeak Strategies Logo"
                    className="h-16 w-auto object-contain brightness-0 invert"
                  />
                </div>

                <p className="text-gray-300 leading-relaxed max-w-md">
                  BluePeak Strategies is a systematic investment firm focused on
                  capital preservation, disciplined risk management, and
                  sustainable long-term growth.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a href="/" className="hover:text-blue-400 transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-blue-400 transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/strategy" className="hover:text-blue-400 transition">
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/performance"
                      className="hover:text-blue-400 transition"
                    >
                      Performance
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-blue-400 transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a
                      href="mailto:contact@bluepeakstrategies.com"
                      className="hover:text-blue-400 transition"
                    >
                      contact@bluepeakstrategies.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/wae_fx"
                      target="_blank"
                      className="hover:text-blue-400 transition"
                    >
                      Telegram: @wae_fx
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2026 BluePeak Strategies. All rights reserved.</p>

              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}