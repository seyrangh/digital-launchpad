// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DotBackground from "@/components/ui/DotBackgroundDemo";
import Header from "@/components/Header";

// Import Square 721 Regular
const square721Regular = localFont({
  src: "./fonts/Square721Regular.woff",
  variable: "--font-square-regular",
  weight: "400",
  style: "normal",
});

// Import Square 721 Extended Bold
const square721ExtendedBold = localFont({
  src: "./fonts/Square721ExtendedBold.woff",
  variable: "--font-square-bold",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Digital Launchpad",
  description:
    "Your First $1k — The Blueprint To Start Making Money Online, Easiest Method.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${square721Regular.variable} ${square721ExtendedBold.variable} antialiased bg-black`}
      >
        <DotBackground />
        <Header />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
