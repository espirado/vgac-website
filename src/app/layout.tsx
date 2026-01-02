import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VGAC | Stop Waiting. Start Computing.",
  description:
    "Know exactly when your GPU jobs will run. VGAC gives your team predictable scheduling, maximized utilization, and zero wasted compute time.",
  keywords: [
    "GPU cluster",
    "queue prediction",
    "HPC",
    "AI infrastructure",
    "GPU scheduling",
    "compute optimization",
  ],
  openGraph: {
    title: "VGAC | Stop Waiting. Start Computing.",
    description:
      "Know exactly when your GPU jobs will run. Predictable scheduling for GPU clusters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

