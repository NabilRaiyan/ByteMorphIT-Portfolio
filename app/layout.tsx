import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ByteMorphIT",
  description: "A futuristic tech company",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <div className="flex-1 w-full flex flex-col">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-black">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                
                {/* Left: Logo */}
                <div className="flex items-center font-semibold">
                  <a href="#" className="font-space text-xl text-cyan-300">ByteMorph<span className="text-orange-500">IT</span></a>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex items-center justify-center gap-14 font-manrope font-light text-base text-white">
                  <a href="#" id="nav-item" className="hover:text-amber-400 hover:border-b-2 border-amber-500">Services</a>
                  <a href="#" id="nav-item" className="hover:text-amber-400 hover:border-b-2 border-amber-500">About Us</a>
                  <a href="#" id="nav-item" className="hover:text-amber-400 hover:border-b-2 border-amber-500">Our Projects</a>
                </div>

                {/* Right: Contact Us Button */}
                <div className="flex items-center">
                  <a href="#" 
                    id="nav-item" 
                    className="text-white bg-gradient-to-r from-amber-500 to-orange-600 p-2 font-manrope font-semibold text-base rounded-md transition-all hover:from-orange-700 hover:to-amber-500">
                    Contact Us
                  </a>
                </div>
              </div>
            </nav>

              <div className="flex flex-col">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Copyright 2025{" "}
                  <span className="font-space text-cyan-700">ByteMorphIT</span>
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
