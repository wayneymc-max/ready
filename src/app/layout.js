
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://fodmapguide.com"),

  title: {
    default: "FODMAP Food Guide",
    template: "%s | FODMAP Food Guide",
  },

  description:
    "Explore a food guide with FODMAP information, food categories, serving sizes, and helpful details for understanding low, medium, and high FODMAP foods.",

  applicationName: "FODMAP Food Guide",

  keywords: [
    "FODMAP food guide",
    "low FODMAP foods",
    "FODMAP serving sizes",
    "high FODMAP foods",
    "FODMAP food list",
    "IBS diet",
    "IBS symptoms",
  ],

  verification: {
    other: {
      "google-adsense-account": "ca-pub-9820571283008425",
    },
  },

  openGraph: {
    title: "FODMAP Food Guide",
    description:
      "Explore FODMAP foods, serving sizes, and food information.",
    type: "website",
    url: "https://fodmapguide.com",
    siteName: "FODMAP Food Guide",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        {children}

        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9820571283008425"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
