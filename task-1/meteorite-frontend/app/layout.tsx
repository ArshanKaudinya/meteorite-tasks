import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/cn";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white text-slate-900 antialiased")}>
        {children}
      </body>
    </html>
  );
}
