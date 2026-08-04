import React, { useState } from 'react';
import { SIGNATURE_COFFEES } from '../data/coffeeData';
import { CoffeeItem, CartItem } from '../types';
import { ShoppingBag, Sparkles, Plus, Check, Star, Info } from 'lucide-react';

interface SignatureCollectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedItemMap, setAddedItemMap] = useState<{ [key: string]: boolean }>({});
  const [selectedCoffeeModal, setSelectedCoffeeModal] = useState<CoffeeItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Mimos' },
    { id: 'signature', label: 'Bebidas de Assinatura' },
    { id: 'pourover', label: 'Métodos Filtrados' },
    { id: 'cold', label: 'Gelados & Maturados' },
    { id: 'artisan', label: 'Rituais Artesanais' },
  ];

  const filteredCoffees = activeCategory === 'all'
    ? SIGNATURE_COFFEES
    : SIGNATURE_COFFEES.filter((c) => c.category === activeCategory);

  const handleAdd = (coffee: CoffeeItem) => {
    onAddToCart({
      id: coffee.id,
      title: coffee.name,
      subtitle: coffee.tagline,
      price: coffee.price,
      quantity: 1,
      type: 'drink',
      image: coffee.image,
    });

    setAddedItemMap((prev) => ({ ...prev, [coffee.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [coffee.id]: false }));
    }, 1800);
  };

  return (
    <section id="menu" className="py-24 bg-[#1A120B] relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5BA73] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVIDADE EM CADA XÍCARA</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EBE0] font-light tracking-tight mb-4">
            Signature <span className="italic text-[#E5BA73]">Collection</span>
          </h2>
          <p className="text-sm text-[#F5EBE0]/80 font-light leading-relaxed">
            Nossos carros-chefes e criações autorais criadas pelos baristas da casa. Cada item celebra a pureza dos micro-lotes de altitude.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 font-sans ${
                  activeCategory === cat.id
                    ? 'bg-[#E5BA73] text-[#1A120B] border-[#E5BA73] font-medium shadow-lg shadow-[#E5BA73]/20'
                    : 'bg-[#231911]/60 text-[#F5EBE0]/70 border-[#E5BA73]/20 hover:border-[#E5BA73]/50 hover:text-[#F5EBE0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-[#E5BA73]/20 p-6 relative group shadow-2xl"
            >
              {/* Badge */}
              {coffee.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#4E6C50] text-[#F5EBE0] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[#4E6C50]/80 shadow-md">
                    {coffee.badge}
                  </span>
                </div>
              )}

              {/* Coffee Image Container */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 image-zoom-container">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-transparent to-transparent opacity-80" />

                {/* Info Trigger Button */}
                <button
                  onClick={() => setSelectedCoffeeModal(coffee)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-[#1A120B]/80 text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] transition-colors border border-[#E5BA73]/30"
                  title="Detalhes Sensoriais"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              {/* Coffee Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-2xl text-[#F5EBE0] font-light group-hover:text-[#E5BA73] transition-colors">
                      {coffee.name}
                    </h3>
                    <span className="font-serif text-xl text-[#E5BA73] font-medium">
                      R$ {coffee.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <p className="text-xs text-[#E5BA73] font-serif italic mb-3">
                    {coffee.tagline}
                  </p>

                  <p className="text-xs text-[#F5EBE0]/70 font-light line-clamp-2 leading-relaxed mb-4">
                    {coffee.description}
                  </p>

                  {/* Sensory Bar Highlights */}
                  <div className="space-y-1.5 my-4 p-3 rounded-lg bg-[#120C07]/80 border border-[#E5BA73]/10 text-[11px]">
                    <div className="flex justify-between items-center text-[#F5EBE0]/80">
                      <span>Corpo</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i <= coffee.bodyScore ? 'bg-[#E5BA73]' : 'bg-[#E5BA73]/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[#F5EBE0]/80">
                      <span>Acidez</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i <= coffee.acidityScore ? 'bg-[#4E6C50]' : 'bg-[#4E6C50]/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notes Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {coffee.notes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] bg-[#231911] text-[#F5EBE0]/80 px-2.5 py-0.5 rounded-full border border-[#E5BA73]/15"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleAdd(coffee)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                    addedItemMap[coffee.id]
                      ? 'bg-[#4E6C50] text-[#F5EBE0]'
                      : 'bg-[#231911] text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] border border-[#E5BA73]/30'
                  }`}
                >
                  {addedItemMap[coffee.id] ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Adicionado ao Pedido!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Pedir para Degustar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coffee Modal Details */}
      {selectedCoffeeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1A120B] border border-[#E5BA73]/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedCoffeeModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#231911] text-[#F5EBE0] hover:text-[#E5BA73]"
            >
              ✕
            </button>

            <div className="h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedCoffeeModal.image}
                alt={selectedCoffeeModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-serif text-3xl text-[#F5EBE0] mb-1">
              {selectedCoffeeModal.name}
            </h3>
            <p className="text-sm text-[#E5BA73] font-serif italic mb-4">
              {selectedCoffeeModal.tagline}
            </p>

            <p className="text-xs text-[#F5EBE0]/80 leading-relaxed mb-4">
              {selectedCoffeeModal.description}
            </p>

            {selectedCoffeeModal.recommendedPairing && (
              <div className="p-3 bg-[#4E6C50]/20 border border-[#4E6C50] rounded-xl text-xs text-[#F5EBE0] mb-6">
                <span className="text-[#E5BA73] font-bold block uppercase mb-0.5">Harmonização Sugerida</span>
                {selectedCoffeeModal.recommendedPairing}
              </div>
            )}

            <button
              onClick={() => {
                handleAdd(selectedCoffeeModal);
                setSelectedCoffeeModal(null);
              }}
              className="w-full py-3 bg-[#E5BA73] text-[#1A120B] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#F5EBE0] transition-colors"
            >
              Adicionar ao Pedido — R$ {selectedCoffeeModal.price.toFixed(2).replace('.', ',')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
