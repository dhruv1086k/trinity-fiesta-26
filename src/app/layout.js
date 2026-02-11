import "./globals.css";
import localFont from "next/font/local";
import { Josefin_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const ethno = localFont({
  src: "../../public/assets/font/Ethnocentric-Regular.ttf",
  variable: "--font-ethno",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "Trinity Fiesta",
  description:
    "Trinity Fiesta is a vibrant and dynamic event that celebrates the spirit of unity, creativity, and fun. It brings together people from all walks of life to enjoy a diverse range of activities, performances, and experiences. Whether it's music, art, food, or cultural showcases, Trinity Fiesta offers something for everyone to enjoy and create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${ethno.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
