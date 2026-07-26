import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business } from "@/lib/business";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: `${business.name} — computer repair and IT support, Metro Vancouver`,
    template: `%s — ${business.name}`,
  },
  description: business.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1 pb-cta-safe">{children}</main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
