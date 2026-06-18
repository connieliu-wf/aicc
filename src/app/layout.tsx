import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { LayoutContent } from "@/components/designer/layout/LayoutContent";
import { ModeProvider } from "@/context/ModeContext";
import { NavigatorProvider } from "@/context/NavigatorContext";
import { PagesProvider } from "@/context/PagesContext";
import { AppProvider } from "@/context/AppContext";
import { RouteThemeProvider } from "@/context/RouteThemeProvider";
import { PanelProvider } from "@/context/PanelContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Template",
  description: "A clean template for building web applications",
  icons: {
    icon: [
      { url: '/spring/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/spring/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1E1E1E]">
      <div className="text-white">Loading...</div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/spring/favicon.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[#1E1E1E]`}>
        <Suspense fallback={<LoadingFallback />}>
          <RouteThemeProvider>
            <AppProvider>
              <ModeProvider>
                <NavigatorProvider>
                  <PagesProvider>
                    <PanelProvider>
                      <LayoutContent>{children}</LayoutContent>
                    </PanelProvider>
                  </PagesProvider>
                </NavigatorProvider>
              </ModeProvider>
            </AppProvider>
          </RouteThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
