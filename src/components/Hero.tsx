import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-autobikazas.png')" }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/40 via-black/30 to-yellow-950/30" />

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent-500/20 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-accent-500/30 mb-6">
            0-24 ÓRÁS SZOLGÁLTATÁS
          </span>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
          AUTÓBIKÁZÁS
          <br />
          <span className="text-accent-400">BUDAPEST</span> ÉS PEST MEGYE
        </h1>

        <h2 className="animate-fade-in-up-delay-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-8">
          GYORS ÉS MEGBÍZHATÓ SEGÍTSÉG
        </h2>

        <p className="animate-fade-in-up-delay-3 text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          Lemerült az akkumulátor, és nem indul az autód? Ne aggódj —
          csapatunk rövid időn belül úton van feléd! Budapesten és Pest
          megyében gyors, szakszerű helyszíni autóbikázást biztosítunk,
          tisztességes áron.
        </p>

        <p className="animate-fade-in-up-delay-3 text-xl md:text-2xl font-bold text-accent-400 mb-10">
          8:00–22:00 között 18.000 Ft, 22:00–8:00 között egyedi ár
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="tel:+36701718000"
            className="group relative bg-accent-500 hover:bg-accent-600 text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-accent-500/30 flex items-center gap-3"
          >
            <Phone className="w-5 h-5 group-hover:animate-bounce" />
            +36 70 171 8000
          </a>
          <a
            href="#szolgaltatasok"
            className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-white/20 hover:border-white/40"
          >
            Szolgáltatásaink
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}
