import type { Metadata } from "next";
import { Nunito_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunitoSans",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libreBaskerville",
});

export const metadata: Metadata = {
  title: "Vu Tu Blog",
  description: "My Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
