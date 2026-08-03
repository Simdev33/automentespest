import { Phone, MapPin } from "lucide-react";
import { CookieSettingsButton } from "./CookieConsent";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/automentespestlogo.svg"
                alt="auto024mentes logó"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-bold text-gray-400 text-lg">auto</span>
                <span className="font-extrabold text-accent-500 text-lg">024</span>
                <span className="font-bold text-gray-400 text-lg">mentes.hu</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Gyors és megbízható autóbikázás és helyszíni akkumulátor-indítás
              Budapest és Pest megye területén, a nap 24 órájában.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              {[
                { href: "#szolgaltatasok", label: "Szolgáltatások" },
                { href: "#araink", label: "Díjszabás" },
                { href: "#gyik", label: "Gyakori kérdések" },
                { href: "#kapcsolat", label: "Kapcsolat" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Elérhetőségek</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400" />
                <a
                  href="tel:+36701718000"
                  className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                >
                  +36 70 171 8000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-400" />
                <span className="text-gray-500 text-sm">
                  Budapest és Pest megye
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} auto024mentes.hu. Minden jog
            fenntartva.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/adatvedelem"
              className="text-gray-600 hover:text-accent-400 transition-colors text-xs"
            >
              Adatvédelmi tájékoztató
            </a>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
