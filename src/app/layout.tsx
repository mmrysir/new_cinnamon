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

import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/ui/BookingModal";
import BookingCartIndicator from "@/components/layout/BookingCartIndicator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfairDisplay.variable} ${poppins.variable} scroll-smooth overflow-x-hidden`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden w-full">
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingBookButton />
          <BookingCartIndicator />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
