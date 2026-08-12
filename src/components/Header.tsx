"use client";

import { useState } from "react";
import { Phone, Menu, X, Clock } from "lucide-react";
import Image from "next/image";
import { PHONES } from "@/data/phones";

const navLinks = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#araink", label: "Áraink" },
  { href: "#gyik", label: "Gyakori kérdések" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:block bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-500" />
            <span>Hétfő - Vasárnap | 0-24</span>
          </div>
          <div className="flex items-center gap-4">
            {PHONES.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-500" />
                <span className="font-semibold">{phone.display}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/automentespestlogo.svg"
              alt="auto024mentes logó"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="leading-tight">
              <span className="font-bold text-white text-lg">auto</span>
              <span className="font-extrabold text-accent-500 text-lg">024</span>
              <span className="font-bold text-white text-lg">mentes.hu</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 font-medium hover:text-accent-500 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONES[0].href}
              className="bg-accent-500 hover:bg-accent-600 text-black font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Hívás most
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 font-medium hover:text-accent-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              {PHONES.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="block bg-accent-500 hover:bg-accent-600 text-black font-bold px-5 py-3 rounded-full text-center transition-all"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
