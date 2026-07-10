import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harsh Patel | Robotics Software Engineer",
    template: "%s | Harsh Patel",
  },
  description: "Robotics software portfolio showcasing ROS 2, autonomous navigation, localization, simulation, controls, and computer vision projects.",
  metadataBase: new URL("https://harsh-robotics-portfolio.harsh8121998.chatgpt.site"),
  openGraph: {
    title: "Harsh Patel | Robotics Software Engineer",
    description: "ROS 2, autonomous navigation, localization, simulation, controls, and computer vision projects.",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
