import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató - auto024mentes.hu",
  description: "Az auto024mentes.hu weboldal adatvédelmi tájékoztatója.",
};

export default function AdatvedelemPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-8 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Vissza a főoldalra
        </a>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
          Adatvédelmi tájékoztató
        </h1>

        <div className="w-16 h-1 bg-accent-500 mx-auto mb-8 rounded-full" />

        <p className="text-gray-400 text-center leading-relaxed mb-12 italic">
          Jelen adatvédelmi tájékoztató célja, hogy rögzítse az auto024mentes.hu weboldalon
          keresztül megvalósuló adatkezelés körülményeit, figyelembe véve az Európai Parlament
          és a Tanács (EU) 2016/679 rendeletében (GDPR), valamint a 2011. évi CXII. törvényben
          (Info tv.) foglaltakat.
        </p>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 md:p-10 space-y-10 text-center">
          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">1. Adatkezelő adatai</h2>
            <p className="text-gray-400 italic leading-relaxed">
              <strong className="text-white">Cégnév:</strong> Sempy &amp; Dani Car Kft.<br />
              <strong className="text-white">Székhely:</strong> 2340 Kiskunlacháza, Rákóczi út 125.<br />
              <strong className="text-white">Adószám:</strong> 32875773-2-13
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">2. Kezelt adatok köre</h2>
            <p className="text-gray-400 italic leading-relaxed mb-4">
              Az oldalon található kapcsolatfelvételi űrlapon keresztül az alábbi személyes adatokat kezeljük:
            </p>
            <div className="text-gray-300 italic space-y-1">
              <p>Név</p>
              <p>Telefonszám</p>
              <p>E-mail cím</p>
              <p>Üzenet tartalma</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">3. Adatkezelés célja és jogalapja</h2>
            <p className="text-gray-400 italic leading-relaxed">
              Az adatkezelés célja a felhasználó megkeresésének megválaszolása, kapcsolattartás.
              Az adatkezelés jogalapja: GDPR 6. cikk (1) bekezdés a) pont (az érintett hozzájárulása).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">4. Az adatok megőrzésének időtartama</h2>
            <p className="text-gray-400 italic leading-relaxed">
              A beküldött adatokat az adatkezelő az ügy lezárását követően legfeljebb 90 napig tárolja,
              kivéve, ha jogszabály hosszabb megőrzési időt ír elő.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">5. Adattovábbítás, adatfeldolgozók</h2>
            <p className="text-gray-400 italic leading-relaxed mb-4">
              Az Ön adatait harmadik fél részére nem továbbítjuk. A rendszer működtetéséhez igénybe vett
              tárhelyszolgáltató technikai adatfeldolgozónak minősül:
            </p>
            <p className="text-gray-400 italic leading-relaxed">
              <strong className="text-white">Szolgáltató:</strong> Amazon Web Services (AWS)<br />
              <strong className="text-white">Székhely:</strong> Seattle, WA, USA<br />
              <strong className="text-white">Adatfeldolgozás:</strong> Szerver- és adatbiztonsági szolgáltatás
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">6. Az érintettek jogai</h2>
            <div className="text-gray-400 italic space-y-1">
              <p>Tájékoztatáshoz való jog</p>
              <p>Hozzáféréshez való jog</p>
              <p>Helyesbítéshez való jog</p>
              <p>Törléshez való jog (&bdquo;az elfeledtetéshez való jog&rdquo;)</p>
              <p>Adatkezelés korlátozásához való jog</p>
              <p>Adathordozhatósághoz való jog</p>
              <p>Tiltakozás az adatkezelés ellen</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">7. Jogorvoslati lehetőségek</h2>
            <p className="text-gray-400 italic leading-relaxed mb-4">
              Amennyiben úgy érzi, hogy adatkezelésünk jogsértő, kérjük, először vegye fel velünk a kapcsolatot.
              Továbbá Ön jogosult panasszal élni a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):
            </p>
            <div className="text-gray-400 italic leading-relaxed">
              <p className="font-bold text-white mb-1">NAIH</p>
              <p>Cím: 1055 Budapest, Falk Miksa utca 9-11.</p>
              <p>Telefon: +36 (1) 391-1400</p>
              <p>
                Web:{" "}
                <a
                  href="https://www.naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-500 hover:text-accent-400 transition-colors"
                >
                  www.naih.hu
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">8. Sütik (cookie-k) kezelése</h2>
            <p className="text-gray-400 italic leading-relaxed">
              A weboldal működéséhez szükséges sütiket alkalmazunk. A sütik elhelyezése a látogató
              hozzájárulásával történik, amelyet a megjelenő cookie banner segítségével adhat meg vagy
              utasíthat vissza.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent-500 mb-4">9. Záró rendelkezések</h2>
            <p className="text-gray-400 italic leading-relaxed">
              Az Adatkezelő fenntartja a jogot a tájékoztató módosítására. A változásokról a weboldalon
              keresztül értesítjük a felhasználókat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
