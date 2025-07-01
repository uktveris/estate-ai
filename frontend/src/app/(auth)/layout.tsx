import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate AI | Login",
  description: "Real Estate listings",
  icons: {
    icon: "/estate-ai-icon.png",
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
          {children}
        </body>
      </html>
    </>
  )
}
