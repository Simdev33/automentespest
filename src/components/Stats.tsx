import { Clock, Phone, Banknote } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "0-24 órás szolgáltatás",
    description: "Az év minden napján, éjjel-nappal rendelkezésre állunk",
  },
  {
    icon: Phone,
    title: "+36 70 171 8000",
    description: "Bármilyen vészhelyzet esetén azonnal a helyszínre sietünk",
  },
  {
    icon: Banknote,
    title: "Fix 260 Ft/km",
    description: "Pontos, tiszta árak — 100 km alatt fix 26.000 Ft",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-accent-500 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-black/70 text-sm mt-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
