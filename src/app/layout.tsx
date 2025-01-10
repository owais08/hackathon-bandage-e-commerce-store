import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

// For SEO
export const metadata: Metadata = {
  title:
    "Bandage - Trendy Fashion Collection for Men, Women & Kids | Shop Accessories & More",
  description:
    "Explore BanFdage's latest collection of stylish apparel and accessories for men, women, and kids. Discover top picks, bestselling products, and exclusive deals. Shop now for quality, affordability, and trend-setting designs!",
};

// For Google Font
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background`}>
        {children}
      </body>
    </html>
  );
}
