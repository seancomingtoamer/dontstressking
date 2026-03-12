import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don't Stress King - Restoring Dignity to Displaced Men & Single Fathers",
  description:
    "A nonprofit movement restoring dignity to displaced men and single fathers in Atlanta & Charlotte. Distributing socks, hygiene kits, and meals at shelters. Founded by Sean Broughton, Navy Veteran.",
  keywords: [
    "nonprofit Atlanta",
    "homeless men Atlanta",
    "single father support",
    "dignity kits",
    "shelter meals Atlanta",
    "Charlotte nonprofit",
    "displaced men",
    "veteran nonprofit",
    "Don't Stress King",
  ],
  openGraph: {
    title: "Don't Stress King - Restoring Dignity to Displaced Men & Single Fathers",
    description:
      "A nonprofit movement distributing dignity kits, meals, and support to displaced men and single fathers in Atlanta & Charlotte.",
    url: "https://dontstressking.com",
    siteName: "Don't Stress King",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
