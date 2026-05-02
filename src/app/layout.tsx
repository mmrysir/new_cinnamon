import type { Metadata } from "next";
import { Open_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import FloatingBookButton from "@/components/layout/FloatingBookButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cinnamon Spa & Massage | Zanzibar",
  description: "Located at Cinnamon Spa, Zanzibar. Directly on the beach, our spa location and massage team will help you get rid of the tension.",
  icons: {
    icon: "/assets/img/cinnamon-logo.jpeg",
    apple: "/assets/img/cinnamon-logo.jpeg",
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
      className={`${openSans.variable} ${playfairDisplay.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingBookButton />
      </body>
    </html>
  );
}
