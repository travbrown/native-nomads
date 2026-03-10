import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { dancingScript, dmSans, leagueSpartan } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Native Nomads — Live Globally. Connect Deeply.",
  description:
    "A global creative agency and digital connector platform. Branding, content creation, social media, and community building across borders.",
  openGraph: {
    title: "Native Nomads — Live Globally. Connect Deeply.",
    description:
      "A global creative agency and digital connector platform.",
    type: "website",
    images: ["/images/hero-bg.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Native Nomads — Live Globally. Connect Deeply.",
    description:
      "A global creative agency and digital connector platform.",
    images: ["/images/hero-bg.jpg"],
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
        className={`${dancingScript.variable} ${dmSans.variable} ${leagueSpartan.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
