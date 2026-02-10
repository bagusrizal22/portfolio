import type { Metadata } from "next";
import { New_Rocker, Plus_Jakarta_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import QueryProvider from "@/components/query-provider";
import { ThemeProvider } from "@/components/theme-provider";

import { siteItems } from "@/lib/config";
import "@/styles/globals.css";

import NotFound from "./not-found";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta-plus",
});

const newRocker = New_Rocker({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-new-rocker",
});

export const metadata: Metadata = {
  metadataBase: siteItems.url ? new URL(siteItems.url) : undefined,
  applicationName: siteItems.appName,
  title: {
    default: siteItems.title,
    template: "Bagus Rizal | %s",
  },
  keywords: [
    "bagus rizal valdianto",
    "bagus rizal",
    "fullstack developer",
    "UI/UX",
    "frontend",
    "backend",
    "laravel developer",
    "php developer",
    "nodejs developer",
    "react developer",
    "nextjs developer",
    "freelance developer",
    "web developer indonesia",
    "portfolio developer",
    "hire fullstack developer",
    "design engineer",
    "indonesia",
    "software engineer portfolio",
  ],
  verification: {
    google: "o2JC_24yWCXt25B4cLk_3kF-RTSQDBNab7JNqh33cHU",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  description: siteItems.description,
  openGraph: {
    title: "Bagus Rizal | Product Engineer",
    url: siteItems.url,
    siteName: "Bagus Rizal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteItems.url}/api/og`,
        alt: "Bagus Rizal",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagus Rizal | Fullstack Engineer",
    images: [`${siteItems.url}/api/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${newRocker.variable} antialiased`}
    >
      <body className="font-jakarta-plus">
        <ThemeProvider
          attribute="class"
          enableColorScheme={false}
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
