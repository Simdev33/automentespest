"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hol érhető el az autóbikázás szolgáltatás?",
    answer:
      "Szolgáltatásunk Budapest egész területén és Pest megyében érhető el, a nap 24 órájában — hétvégén és ünnepnapokon is.",
  },
  {
    question: "Milyen gyorsan érkeznek a helyszínre?",
    answer:
      "Budapesten belül jellemzően a lehető legrövidebb időn belül a helyszínen vagyunk. A pontos érkezési időről telefonon egyeztetünk.",
  },
  {
    question: "Mennyibe kerül az autóbikázás?",
    answer:
      "8:00 és 22:00 között az autóbikázás díja 18.000 Ft. 22:00 és 8:00 között egyedi árral dolgozunk, amelyről előzetesen tájékoztatást adunk telefonon.",
  },
  {
    question: "Milyen járművekhez kérhető a szolgáltatás?",
    answer:
      "Személyautók és kisteherautók helyszíni bikázását és akkumulátor-indítását vállaljuk.",
  },
  {
    question: "Milyen fizetési módokat fogadnak el?",
    answer:
      "Készpénzes és bankkártyás fizetés is elérhető — amelyik Önnek a legkényelmesebb.",
  },
  {
    question: "Biztonságos az autóbikázás a jármű elektronikájára nézve?",
    answer:
      "Igen. Professzionális indítóberendezést használunk, és az indítást körültekintően, a jármű elektronikájának védelmére figyelve végezzük.",
  },
  {
    question: "Mely településeken érhető el az autóbikázás?",
    answer:
      "Budapest, Érd, Szentendre, Vác, Gödöllő, Monor, Cegléd, Dunakeszi, Budaörs, Pilisvörösvár és Pest megye teljes területe.",
  },
  {
    question: "Van csereautó-bérlési lehetőség?",
    answer:
      "Ha az autó a bikázás után sem indul el, és azonnali megoldásra van szükséged, lehetőséged van csereautót bérelni Budapesten és Pest megye teljes területén a pestautoberles.hu oldalon.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gyik" className="py-20 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            GYIK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Gyakran ismételt kérdések
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
