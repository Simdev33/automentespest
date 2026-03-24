import type { Metadata } from "next";
import "./globals.css";
import { GTMHead, GTMBody, GtagScripts } from "@/components/GoogleTracking";

export const metadata: Metadata = {
  title: "auto024mentes.hu - Autómentés Budapest és Pest megye 0-24",
  description:
    "Gyors és megbízható autómentő szolgáltatás 0-24 órában. Budapest teljes területén és Pest megyében vállalunk szakszerű autómentést és járműszállítást. Hívjon: +36 20 628 2000",
  keywords:
    "autómentés, autómentés budapest, autómentés pest megye, járműszállítás, autómentő, autószállítás, non-stop autómentés, auto024mentes",
  openGraph: {
    title: "auto024mentes.hu - Autómentés Budapest és Pest megye 0-24",
    description:
      "Gyors és megbízható autómentő szolgáltatás 0-24 órában. Hívjon: +36 20 628 2000",
    type: "website",
    locale: "hu_HU",
  },
  icons: {
    icon: "/automentespestlogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <GTMHead />
        <GtagScripts />
      </head>
      <body className="antialiased bg-gray-950 text-gray-100">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
