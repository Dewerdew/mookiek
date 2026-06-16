import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

/* ── Fonts ────────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/* ── SEO metadata ─────────────────────────────────────────── */
export const metadata = {
  title: "Portfolio — Creative Professional",
  description:
    "Personal portfolio showcasing services, projects, and skills. Dark themed with modern design.",
};

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
