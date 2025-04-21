import { Geist, Geist_Mono } from "next/font/google";
import "../public/global.css";

import { EmailProvider } from "./_contexts/EmailContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zadatak",
  description: "Intervju zadatak",
};

export default function RootLayout({ children }) {
  return (
    <EmailProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen justify-center items-center`}
        >
          {children}
        </body>
      </html>
    </EmailProvider>
  );
}
