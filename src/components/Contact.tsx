import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="kapcsolat" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            KAPCSOLAT
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Lépj velünk kapcsolatba
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Szolgáltatási terület
                </h3>
                <p className="text-gray-400">Budapest és Pest megye</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Telefonszám
                </h3>
                <a
                  href="tel:+36701718000"
                  className="block text-2xl font-bold text-accent-500 hover:text-accent-400 transition-colors"
                >
                  +36 70 171 8000
                </a>
              </div>
            </div>
          </div>

          <div className="bg-accent-500/10 border border-accent-500/20 rounded-2xl p-8 text-white mt-8 text-center">
            <h3 className="text-xl font-bold mb-3">
              Sürgős segítségre van szüksége?
            </h3>
            <p className="text-gray-400 mb-6">
              Hívjon minket bármikor, az év minden napján, 0-24!
            </p>
            <a
              href="tel:+36701718000"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-black font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              +36 70 171 8000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
