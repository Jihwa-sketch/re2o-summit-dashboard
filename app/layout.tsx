import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Re2O Masters Summit 사전접수 현황",
  description: "Re2O Masters Summit 사전접수 실시간 대시보드",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-text">{children}</body>
    </html>
  );
}
