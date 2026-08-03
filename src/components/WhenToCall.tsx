import { Phone, CircleDot } from "lucide-react";

const scenarios = [
  {
    number: "01",
    title: "Lemerült az akkumulátor, és nem indul a járműved",
    description:
      "Egy hívás, és már indulunk is. Csapatunk gyorsan a helyszínre érkezik, és szakszerűen beindítja a járművet.",
  },
  {
    number: "02",
    title: "Útközben merült le az akkumulátor",
    description:
      "Ha útközben nem indul az autó, minden perc számít. A lehető legrövidebb időn belül megérkezünk, és segítünk folytatni az utat.",
  },
  {
    number: "03",
    title: "Otthon, munkahelyen vagy parkolóban nem indul az autó",
    description:
      "A megadott címre érkezünk, és professzionális indítóberendezéssel helyben segítünk életre kelteni az akkumulátort.",
  },
  {
    number: "04",
    title: "A hideg idő miatt gyengült le az akkumulátor",
    description:
      "A hidegben legyengült akkumulátor gyakran váratlanul mondja fel a szolgálatot. Gyors helyszíni bikázással segítünk.",
  },
];

export default function WhenToCall() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            MIKOR HÍVJON?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Milyen helyzetekben számíthat ránk?
          </h2>
        </div>

        <div className="space-y-6">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.number}
              className={`card-hover flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-gray-800 ${
                index % 2 === 0 ? "bg-gray-900/60" : "bg-gray-800/30"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/20">
                  <span className="text-2xl font-black text-black">
                    {scenario.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <CircleDot className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  {scenario.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {scenario.description}
                </p>
                <a
                  href="tel:+36701718000"
                  className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Hívás most
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
