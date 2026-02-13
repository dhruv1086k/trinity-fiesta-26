import "./globals.css";
import localFont from "next/font/local";
import { Josefin_Sans, Poppins } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ethno = localFont({
  src: "../../public/assets/font/Ethnocentric-Regular.ttf",
  variable: "--font-ethno",
});

const witch = localFont({
  src: "../../public/assets/font/Ritual-of-the-Witch.ttf",
  variable: "--font-witch",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://trinityfiesta.com/"),

  title: {
    default: "Trinity Fiesta 2026 | Trinity Dwarka Annual Fest",
    template: "%s | Trinity Fiesta 2026",
  },

  description:
    "Trinity Fiesta 2026 is the annual fest of Trinity Dwarka, New Delhi. Join us on February 26–27 for 40+ events, competitions, performances, celebrity nights, and unforgettable experiences.",

  keywords: [
    "Trinity Fiesta 2026",
    "Trinity Dwarka fest",
    "Trinity annual fest",
    "Delhi college fest 2026",
    "Trinity Dwarka events",
    "College fest in Delhi",
    "Cultural fest New Delhi",
  ],

  authors: [{ name: "Alfa Coding Club" }],
  creator: "Alfa Coding Club",
  publisher: "Trinity Dwarka",

  openGraph: {
    title: "Trinity Fiesta 2026 | Annual Fest of Trinity Dwarka",
    description:
      "Join Trinity Fiesta 2026 at Trinity Dwarka on February 26–27. 40+ events, competitions, music performances, and celebrity nights.",
    url: "https://trinityfiesta.com/",
    siteName: "Trinity Fiesta 2026",
    images: [
      {
        url: "/metaImg.webp",
        width: 1200,
        height: 630,
        alt: "Trinity Fiesta 2026 Annual Festival",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trinity Fiesta 2026 | Trinity Dwarka",
    description:
      "Experience Trinity Fiesta 2026 – 40+ events, performances, and competitions in New Delhi.",
    images: ["/metaImg.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${ethno.variable} ${witch.variable} ${poppins.variable} antialiased`}
      >
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
