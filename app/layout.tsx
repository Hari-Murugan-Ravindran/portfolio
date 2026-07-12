import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://hari-murugan-ravindran.github.io/portfolio";
const title = "Hari Murugan Ravindran | Professional Portfolio";
const description = "Hari Murugan Ravindran’s professional portfolio featuring software, DevOps, AI, and machine learning projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: { title, description, type: "website", url: siteUrl, images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Hari Murugan Ravindran professional portfolio" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
