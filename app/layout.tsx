import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Vivienne Kay | Senior Product Designer",
  description: "Product designer born in Hong Kong, raised in New Zealand, based in Florida. Loves blueberry smoothies and running with rescue dogs.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " bg-[#FBFBFB]"}>
        {children}
      </body>
    </html>
  );
}
