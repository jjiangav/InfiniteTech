import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business } from "@/lib/business";

export const metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: `${business.name} — mobile computer repair, Metro Vancouver`,
    template: `%s — ${business.name}`,
  },
  description: business.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
