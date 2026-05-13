import { Phone, CheckCircle } from "lucide-react";
import Gallery from "./Gallery";

const highlights = [
  "Gyors és szakszerű autómentés",
  "Korszerű autómentő járművek",
  "Korrekt árak, rejtett költségek nélkül",
  "0-24 elérhető, hétvégén és munkaszüneti napokon is",
  "Személyautók és kisteherautók mentése",
];

export default function About() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              RÓLUNK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Megbízható autómentés{" "}
              <span className="text-accent-500">
                Budapest és Pest megye területén
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Évek óta segítünk az utakon bajba jutott sofőröknek — éjjel-nappal,
              az év minden napján. Legyen szó váratlan meghibásodásról, balesetről
              vagy egyszerű lerobbanásról, tapasztalt csapatunk villámgyorsan a
              helyszínre érkezik és megoldja a helyzetet.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Modern, felszerelt mentőjárműveinkkel biztonságosan szállítjuk
              személyautóját vagy kisteherautóját bárhová. Nálunk nincsenek
              rejtett díjak és meglepetések — amit telefonon mondunk, az lesz a
              végösszeg.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+36701718000"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-accent-500/20"
            >
              <Phone className="w-5 h-5" />
              Hívás most
            </a>
          </div>

          <Gallery />
        </div>
      </div>
    </section>
  );
}
