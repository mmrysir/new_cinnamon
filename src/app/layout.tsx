import type { Metadata } from "next";
import { Open_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Cinnamon Spa & Massage | Mnarani Beach Cottages",
  description: "Located at mnarani beach cottages, Zanzibar. Directly on the beach, our spa location and massage team will help you get rid of the tension.",
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
        {children}
      </body>
    </html>
  );
}
