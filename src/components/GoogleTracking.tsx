"use client";

import Script from "next/script";
import { useEffect } from "react";
import { PHONES } from "@/data/phones";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "AW-18039875633";

/**
 * Click-to-call conversion (Google Ads snippet the user provided).
 * Hardcoded on purpose: Vercel still had an older CALL conversion label in env,
 * which does not accept website phone-click events.
 */
const GADS_CLICK_CONVERSION = "AW-18039875633/VtyJCOvIguccELHQippD";

/**
 * Optional "Calls to a phone number on your website" conversion
 * (Google forwarding numbers). Kept separate from click conversion.
 */
const GADS_CALL_CONVERSION =
  process.env.NEXT_PUBLIC_GADS_CALL_CONVERSION_LABEL ||
  "AW-18039875633/2_aqCN-fl48cELHQippD";

const PHONE_DISPLAY = PHONES[0].display;
const isPlaceholderGtm = !GTM_ID || /X{3,}/i.test(GTM_ID);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function GTMHead() {
  if (isPlaceholderGtm) return null;
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
  if (isPlaceholderGtm) return null;
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

    // Website call tracking with Google forwarding numbers (actual calls).
    // Callback is required for React apps — auto DOM rewrite often fails.
    if (GADS_CALL_CONVERSION) {
      configLines.push(`
            gtag('config', '${GADS_CALL_CONVERSION}', {
              'phone_conversion_number': '${PHONE_DISPLAY}',
              'phone_conversion_callback': function(formatted_number, mobile_number) {
                function applyForwardingNumber() {
                  document.querySelectorAll('a[href^="tel:"]').forEach(function(a) {
                    var want = 'tel:' + mobile_number;
                    if (a.getAttribute('href') !== want) {
                      a.setAttribute('href', want);
                    }
                    var text = (a.textContent || '').trim();
                    if (/^[+0-9\\s().-]+$/.test(text) && text !== formatted_number) {
                      a.textContent = formatted_number;
                    }
                  });
                }
                applyForwardingNumber();
                if (!window.__phoneConvObserver) {
                  window.__phoneConvObserver = new MutationObserver(applyForwardingNumber);
                  window.__phoneConvObserver.observe(document.body, { childList: true, subtree: true });
                }
              }
            });`);
    }
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
            ${configLines.join("\n")}

            // Click-to-call conversion. For tel: links we must NOT block/delay
            // navigation — mobile browsers drop dialer opens after async callbacks.
            function gtag_report_conversion(url) {
              var isTel = typeof url === 'string' && url.indexOf('tel:') === 0;
              gtag('event', 'conversion', {
                'send_to': '${GADS_CLICK_CONVERSION}',
                'value': 1.0,
                'currency': 'HUF',
                'event_callback': function () {
                  if (!isTel && typeof url !== 'undefined') {
                    window.location = url;
                  }
                }
              });
              return isTel ? true : false;
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

      // Never preventDefault on tel: — keep the user gesture for the dialer.
      const url = link.getAttribute("href") || undefined;

      if (typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion(url);
      } else if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: GADS_CLICK_CONVERSION,
          value: 1.0,
          currency: "HUF",
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

export { GADS_CLICK_CONVERSION as GADS_CONVERSION_LABEL };
