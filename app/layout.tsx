import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://re2o-summit-dashboard-13gc.vercel.app";
const TITLE = "Re2O Masters Summit 사전접수 현황";
const DESCRIPTION = "Re2O Masters Summit 사전접수 실시간 대시보드";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-text">{children}</body>
    </html>
  );
}
