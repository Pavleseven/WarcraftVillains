import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Villains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
