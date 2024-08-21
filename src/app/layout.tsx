import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VRecs - Vtuber Recommendations",
  description: "Recommendation list for Virtual Youtubers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen items-center justify-center p-6">
          <Link href="/">
            <h1 className="absolute bottom-2 right-3 text-xl text-gray-600/40">
              return to index
            </h1>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
