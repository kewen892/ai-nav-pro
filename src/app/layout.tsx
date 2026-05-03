import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI NavHub Pro | 2026 全球优质AI工具导航站",
  description: "发现、对比、使用最前沿的AI生产力工具。场景化推荐，实测验证，独家折扣。",
  keywords: ["AI工具导航", "AI软件推荐", "2026 AI", "免费AI工具", "生产力工具"],
  openGraph: { title: "AI NavHub Pro", description: "发现下一代AI生产力工具", url: "https://ainav.pro", siteName: "AI NavHub Pro" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}