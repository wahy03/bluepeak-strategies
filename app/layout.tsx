import type { Metadata } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

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
      <body
        className={`${newsreader.variable} ${inter.variable} ${plexMono.variable} bg-[#141b2c] text-[#f3f1ea]`}
      >
        <Nav />
        {children}

        {/* Global Footer */}
        <footer className="border-t border-white/[0.08] bg-[#141b2c]">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <img
                  src="/logo/bluepeak-logo.png"
                  alt="BluePeak Strategies"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-95 mb-5"
                />
                <p className="text-[#9099a4] leading-relaxed max-w-md">
                  BluePeak Strategies is a systematic investment firm focused
                  on capital preservation, disciplined risk management, and
                  sustainable long-term growth.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="eyebrow mb-5">Navigate</h3>
                <ul className="space-y-3 text-[#c9cdd6]">
                  <li>
                    <Link href="/" className="hover:text-[#c6a15b] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-[#c6a15b] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/strategy" className="hover:text-[#c6a15b] transition-colors">
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/performance"
                      className="hover:text-[#c6a15b] transition-colors"
                    >
                      Performance
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-[#c6a15b] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="eyebrow mb-5">Contact</h3>
                <ul className="space-y-3 text-[#c9cdd6]">
                  <li>
                    <a
                      href="mailto:contact@bluepeakstrategies.com"
                      className="hover:text-[#c6a15b] transition-colors"
                    >
                      contact@bluepeakstrategies.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/wae_fx"
                      target="_blank"
                      className="hover:text-[#c6a15b] transition-colors"
                    >
                      Telegram — @wae_fx
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#c6a15b] transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/[0.08] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6b7284] text-sm font-data">
              <p>© 2026 BluePeak Strategies. All rights reserved.</p>

              <div className="flex gap-8">
                <a href="#" className="hover:text-[#c6a15b] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#c6a15b] transition-colors">
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
