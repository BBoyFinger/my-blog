import type { Metadata } from "next";
import { Nunito_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "./StoreProvider";

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
    <StoreProvider>
      <html lang="en">
        <body className={libreBaskerville.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
