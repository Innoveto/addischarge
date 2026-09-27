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
  title: "AddisCharge — EV charging across Addis Ababa",
  description:
    "Demo microsite for an Addis Ababa EV charging consolidator: find chargers, see occupancy, and pay in-app. Built by Innoveto.",
  openGraph: {
    title: "AddisCharge",
    description:
      "Find, see occupancy, and pay for EV chargers across Addis Ababa.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
