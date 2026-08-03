import { Truck, Package, Wrench, RefreshCw, Fuel, Globe, Phone } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Autóbikázás",
    description:
      "Lemerült akkumulátor esetén gyors és szakszerű autóbikázás Budapest és Pest megye teljes területén.",
  },
  {
    icon: Package,
    title: "Helyszíni akkumulátor-indítás",
    description:
      "Személyautók és kisteherautók biztonságos beindítása professzionális indítóberendezéssel.",
  },
  {
    icon: Wrench,
    title: "Akkumulátor-ellenőrzés",
    description:
      "A helyszínen ellenőrizzük az akkumulátor állapotát, és segítünk feltárni, miért nem indul a jármű.",
  },
  {
    icon: RefreshCw,
    title: "Professzionális indítássegítés",
    description:
      "Korszerű eszközzel, a jármű elektronikájának védelmére figyelve indítjuk be autódat.",
  },
  {
    icon: Fuel,
    title: "Gyors kiszállás",
    description:
      "Otthon, munkahelyen, parkolóban vagy útközben is gyorsan a helyszínre érkezünk.",
  },
  {
    icon: Globe,
    title: "0-24 elérhetőség",
    description:
      "Éjjel-nappal, hétvégén és ünnepnapokon is hívhatóak vagyunk, ha lemerült az akkumulátor.",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            SZOLGÁLTATÁSAINK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Miben tudunk segíteni?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Megbízható autóbikázás és helyszíni akkumulátor-indítás, gyors reagálással és korrekt árakkal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="w-14 h-14 bg-accent-500/15 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <a
                href="tel:+36701718000"
                className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Hívás most
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-lg">
          Szolgáltatásainkat elsősorban Budapest és Pest megye területén
          biztosítjuk, így a legtöbb esetben rövid időn belül a helyszínre
          érkezünk.
        </p>
      </div>
    </section>
  );
}
