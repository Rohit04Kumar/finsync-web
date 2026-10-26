import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090D16",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://finsync-web-dun.vercel.app"),
  title: "Finsync — Personal Expense Tracker & Smart Budget Manager",
  description: "Track daily expenses, manage category budgets, track loans & debts, and securely sync backups to your private Google Drive.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Finsync — Personal Expense Tracker",
    description: "Your private, secure personal finance companion. 100% offline-first with optional Google Drive cloud backup.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`} data-theme="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen overflow-x-hidden transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
