"use client";

import Script from "next/script";
import { useEffect } from "react";
import { PHONES } from "@/data/phones";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
/** Google Ads account ID from conversion snippet */
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "AW-18039875633";
/** Phone click conversion (Google Ads snippet) */
const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ||
  "AW-18039875633/VtyJCOvIguccELHQippD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function GTMHead() {
  if (!GTM_ID) return null;
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}

export function GTMBody() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export function GtagScripts() {
  const primaryId = GA4_ID || GADS_ID;
  if (!primaryId) return null;

  const configLines: string[] = [];
  if (GA4_ID) configLines.push(`gtag('config', '${GA4_ID}');`);
  if (GADS_ID) {
    configLines.push(`gtag('config', '${GADS_ID}');`);
    configLines.push(
      `gtag('config', '${GADS_CONVERSION_LABEL}', { 'phone_conversion_number': '${PHONES[0].display}' });`
    );
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${configLines.join("\n            ")}

            function gtag_report_conversion(url) {
              var navigated = false;
              var callback = function () {
                if (navigated || typeof(url) == 'undefined') return;
                navigated = true;
                window.location = url;
              };
              gtag('event', 'conversion', {
                'send_to': '${GADS_CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'HUF',
                'event_callback': callback
              });
              setTimeout(callback, 1000);
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `,
        }}
      />
    </>
  );
}

export function PhoneConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      e.preventDefault();
      const url = link.getAttribute("href") || link.href;

      if (typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion(url);
        return;
      }

      // Fallback if gtag script has not loaded yet
      window.location.href = url;
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export { GADS_CONVERSION_LABEL };
