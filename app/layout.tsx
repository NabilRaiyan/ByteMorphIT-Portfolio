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
  description: "A futurestic tech company",
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
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-slate-300">
                <div className="w-full max-w-5xl flex justify-center items-center p-3 px-5 text-sm">
                  <div className="flex gap-10 items-center font-semibold">
                    <a href="#" className="font-space text-xl pr-9">ByteMorphIT</a>
                  </div>
                  <div className="flex items-center justify-center gap-10 font-manrope font-light text-base text-black">
                    <a href="#" id="nav-item" className="hover:text-blue-800 hover:border-b-2 border-blue-900">Services</a>
                    <a href="#" id="nav-item" className="hover:text-blue-800 hover:border-b-2 border-blue-900">About Us</a>
                    <a href="#" id="nav-item" className="hover:text-blue-800 hover:border-b-2 border-blue-900">Our Projects</a>
                    <a href="#" 
                    id="nav-item" 
                    className="items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-900 p-2 font-manrope font-semibold text-base rounded-md transition-all hover:from-blue-700 hover:to-blue-500">
                    Contact Us
                  </a>
                  </div>
                  
                </div>
            </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
