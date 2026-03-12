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
  title: "VGAC | Calibration-Aware GPU Queue Intelligence",
  description:
    "Predict GPU queue wait times with 96.9% accuracy. Autonomous agents monitor, predict, calibrate, and act — gated by model confidence. Full observability for GPU clusters, LLM inference, and HPC.",
  keywords: [
    "GPU cluster",
    "queue prediction",
    "HPC",
    "AI infrastructure",
    "GPU scheduling",
    "calibration",
    "LLM inference",
    "observability",
    "NIXL",
    "Slurm",
  ],
  openGraph: {
    title: "VGAC | Calibration-Aware GPU Queue Intelligence",
    description:
      "Predict GPU queue wait times with 96.9% accuracy. Autonomous calibration-aware agents for GPU clusters.",
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






