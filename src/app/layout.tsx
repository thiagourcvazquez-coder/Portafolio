import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiago Vázquez · Desarrollador web full stack",
  description:
    "Portafolio de Thiago Vázquez — TM Soluciones Digitales. Sitios, tiendas, turneros y sistemas a medida con Next.js, React y Supabase. Salta, Argentina.",
  openGraph: {
    title: "Thiago Vázquez · Desarrollador web full stack",
    description: "Sitios y sistemas que reservan, cobran y se administran solos.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${grotesk.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
