import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavMenu } from "@/components/ui/header";
import { ModeToggle } from "@/components/ui/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zen.",
  description: "habit tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="py-4 flex flex-row">
            <div className="flex justify-start">
              <p className="pl-8 text-lg font-semibold">
                zen.
              </p>
            </div>
            <div className="flex w-full justify-end gap-2">
              <NavMenu></NavMenu>
              <ModeToggle></ModeToggle>
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
