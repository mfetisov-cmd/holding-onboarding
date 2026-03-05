import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeWrapper } from "./ThemeWrapper";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-100.woff2", weight: "100" },
    { path: "../../public/fonts/inter-400.woff2", weight: "400" },
    { path: "../../public/fonts/inter-500.woff2", weight: "500" },
    { path: "../../public/fonts/inter-600.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi-300.woff2", weight: "300" },
    { path: "../../public/fonts/satoshi-500.woff2", weight: "500" },
    { path: "../../public/fonts/satoshi-700.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "../../public/fonts/ibm-plex-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivid Vibe UI",
  description: "Prototyping environment with Vivid SME design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable} ${ibmPlexMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
