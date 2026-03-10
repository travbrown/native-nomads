import type { Metadata } from "next";
import { dancingScript, dmSans, leagueSpartan } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Native Nomads",
  description: "Live Globally. Connect Deeply.",
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
      </body>
    </html>
  );
}
