"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toogle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Include "/home", "/settings", and "/tables" in the sidebar display logic
  const showSidebar =
    pathname.startsWith("/home") ||
    pathname.startsWith("/settings") ||
    pathname.startsWith("/tables") ||
    pathname.startsWith("/music")

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {showSidebar ? (
            <SidebarProvider>
              {/* Render AppSidebar for /home, /settings, and /tables */}
              <AppSidebar />
              <main className="w-full">
                {/* Render SidebarTrigger for /home, /settings, and /tables */}
                <SidebarTrigger />
                <ModeToggle />
                {children}
              </main>
            </SidebarProvider>
          ) : (
            <main>{children}</main> // For pages without sidebar, show only content
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
