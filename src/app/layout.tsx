import type { Metadata } from "next";
import "./globals.css";
import { GTMHead, GTMBody, GtagScripts, PhoneConversionTracker } from "@/components/GoogleTracking";
import { PHONES_META } from "@/data/phones";

export const metadata: Metadata = {
  title: "auto024mentes.hu - Autóbikázás Budapest és Pest megye 0-24",
  description:
    `Gyors és megbízható autóbikázás 0-24 órában. Budapest teljes területén és Pest megyében vállalunk szakszerű helyszíni akkumulátor-indítást. Hívjon: ${PHONES_META}`,
  keywords:
    "autóbikázás, autóbikázás Budapest, autóbikázás Pest megye, akkumulátor bikázás, akkumulátor indítás, lemerült akkumulátor, helyszíni indítás, non-stop autóbikázás, auto024mentes",
  openGraph: {
    title: "auto024mentes.hu - Autóbikázás Budapest és Pest megye 0-24",
    description:
      `Gyors és megbízható autóbikázás és helyszíni akkumulátor-indítás 0-24 órában. Hívjon: ${PHONES_META}`,
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
        <PhoneConversionTracker />
        {children}
      </body>
    </html>
  );
}
