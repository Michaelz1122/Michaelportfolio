import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Zahy - Media Buyer & Digital Marketing Specialist",
  description: "Professional portfolio of Michael Zahy, Junior Media Buyer specializing in Facebook Ads and digital marketing strategies.",
  keywords: ["Michael Zahy", "Media Buyer", "Digital Marketing", "Facebook Ads", "Social Media Marketing", "Egypt"],
  authors: [{ name: "Michael Zahy" }],
  openGraph: {
    title: "Michael Zahy - Media Buyer & Digital Marketing Specialist",
    description: "Professional portfolio showcasing expertise in Facebook Ads and digital marketing strategies.",
    url: "https://michaelzahy.com",
    siteName: "Michael Zahy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Zahy - Media Buyer & Digital Marketing Specialist",
    description: "Professional portfolio showcasing expertise in Facebook Ads and digital marketing strategies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
