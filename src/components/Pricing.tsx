import { Truck, Globe, Phone } from "lucide-react";

const pricingCards = [
  {
    icon: Truck,
    title: "Nappali díjszabás",
    highlight: true,
    items: [
      { label: "Időszak", price: "8:00–22:00" },
      { label: "Autóbikázás díja", price: "18.000 Ft" },
      { label: "Előzetes ártájékoztatás", price: "Biztosított" },
      { label: "Rejtett költségek", price: "Nincsenek" },
    ],
    note: "A nappali, 8:00 és 22:00 közötti helyszíni autóbikázás díja 18.000 Ft. Nincsenek rejtett költségek.",
  },
  {
    icon: Globe,
    title: "Éjszakai díjszabás",
    highlight: true,
    items: [
      { label: "Időszak", price: "22:00–8:00" },
      { label: "Autóbikázás díja", price: "Egyedi" },
      { label: "Előzetes ártájékoztatás", price: "Biztosított" },
    ],
    note: "Az éjszakai, 22:00 és 8:00 közötti autóbikázás díja egyedi kalkuláció alapján kerül megállapításra. A pontos összegről előre tájékoztatást adunk.",
  },
];

export default function Pricing() {
  return (
    <section id="araink" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            DÍJSZABÁS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Autóbikázás díjazása
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nappal fix, éjszaka előzetesen egyeztetett díjszabás — Budapesten és Pest megyében.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className={`card-hover rounded-2xl p-8 flex flex-col ${
                card.highlight
                  ? "bg-accent-500/10 text-white border-2 border-accent-500/40 shadow-xl shadow-accent-500/10"
                  : "bg-gray-800/60 text-white border border-gray-700/50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  card.highlight ? "bg-accent-500" : "bg-accent-500/15"
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${
                    card.highlight ? "text-black" : "text-accent-500"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold mb-6">{card.title}</h3>

              <ul className="space-y-4">
                {card.items.map((item) => (
                  <li
                    key={item.label}
                    className={`flex justify-between items-start gap-2 pb-3 border-b ${
                      card.highlight
                        ? "border-accent-500/20"
                        : "border-gray-700/50"
                    }`}
                  >
                    <span className="text-sm text-gray-400">
                      {item.label}
                    </span>
                    <span
                      className={`text-sm font-bold whitespace-nowrap ${
                        card.highlight ? "text-accent-400" : "text-white"
                      }`}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                {card.note}
              </p>

              <div className="mt-auto pt-8">
                <a
                  href="tel:+36701718000"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-all text-sm ${
                    card.highlight
                      ? "bg-accent-500 hover:bg-accent-600 text-black hover:shadow-lg"
                      : "bg-accent-500/20 hover:bg-accent-500 text-accent-400 hover:text-black hover:shadow-lg"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Hívás most
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 bg-gray-800/40 rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-lg font-bold text-white mb-4">Fontos tudnivalók</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-1">•</span>
              A nappali és éjszakai díjszabást a hívás időpontja határozza meg.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-1">•</span>
              Minden esetben előzetes tájékoztatást adunk telefonon.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-1">•</span>
              Személyautók és kisteherautók helyszíni bikázását vállaljuk.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-1">•</span>
              Készpénzes és bankkártyás fizetés is elérhető.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
