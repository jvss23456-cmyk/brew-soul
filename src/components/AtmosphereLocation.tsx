import React, { useState } from 'react';
import { BOUTIQUE_LOCATIONS } from '../data/coffeeData';
import { MapPin, Phone, Clock, Compass, Sparkles, Navigation } from 'lucide-react';

export const AtmosphereLocation: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>('jardins-sp');

  const activeLoc = BOUTIQUE_LOCATIONS.find((l) => l.id === activeLocationId) || BOUTIQUE_LOCATIONS[0];

  return (
    <section id="localizacao" className="py-24 bg-[#1A120B] relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5BA73] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>NOSSOS SANTUÁRIOS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EBE0] font-light tracking-tight mb-4">
            Boutiques <span className="italic text-[#E5BA73]">Brew & Soul</span>
          </h2>
          <p className="text-sm text-[#F5EBE0]/80 font-light leading-relaxed">
            Espaços desenhados com arquitetura brutalista suave, madeira nobre, acústica tratada e iluminação cenográfica.
          </p>

          {/* Location Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {BOUTIQUE_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`text-xs uppercase tracking-wider px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeLocationId === loc.id
                    ? 'bg-[#E5BA73] text-[#1A120B] font-bold border-[#E5BA73] shadow-lg shadow-[#E5BA73]/20'
                    : 'bg-[#231911] text-[#F5EBE0]/70 border-[#E5BA73]/20 hover:border-[#E5BA73]'
                }`}
              >
                {loc.city} ({loc.neighborhood.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Atmosphere Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card rounded-2xl p-6 sm:p-10 border border-[#E5BA73]/25 shadow-2xl">
          {/* Location Image Column */}
          <div className="lg:col-span-7 relative h-80 sm:h-96 rounded-xl overflow-hidden image-zoom-container">
            <img
              src={activeLoc.image}
              alt={activeLoc.address}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-[#4E6C50] text-[#F5EBE0] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#E5BA73]/30">
                Santuário Oficial
              </span>
              <h3 className="font-serif text-3xl text-[#F5EBE0] font-light mt-2">
                {activeLoc.city} — {activeLoc.neighborhood}
              </h3>
            </div>
          </div>

          {/* Location Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E5BA73] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5BA73]">Endereço</span>
                  <p className="text-sm text-[#F5EBE0] font-light">{activeLoc.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E5BA73] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5BA73]">Horário de Funcionamento</span>
                  <p className="text-sm text-[#F5EBE0] font-light">{activeLoc.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E5BA73] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5BA73]">Contato Direto Concierge</span>
                  <p className="text-sm text-[#F5EBE0] font-light">{activeLoc.phone}</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5BA73] block mb-2">
                Diferenciais da Unidade:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeLoc.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs bg-[#231911] text-[#F5EBE0]/80 px-3 py-1 rounded-full border border-[#E5BA73]/20"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#4E6C50] text-[#F5EBE0] py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest font-medium border border-[#E5BA73]/30 hover:bg-[#4E6C50]/90 transition-all shadow-lg"
            >
              <Navigation className="w-4 h-4 text-[#E5BA73]" />
              <span>Como Chegar no GPS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
