import React, { useState } from 'react';
import { SUBSCRIPTION_PLANS } from '../data/coffeeData';
import { CartItem } from '../types';
import { Sparkles, Check, Package, Gift, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

interface CoffeeClubProps {
  onAddToCart: (item: CartItem) => void;
}

export const CoffeeClub: React.FC<CoffeeClubProps> = ({ onAddToCart }) => {
  const [selectedGrind, setSelectedGrind] = useState<string>('grao');
  const [frequency, setFrequency] = useState<'mensal' | 'quinzenal'>('mensal');
  const [joinedPlanId, setJoinedPlanId] = useState<string | null>(null);

  const grindOptions = [
    { id: 'grao', label: 'Grão Inteiro (Moer em casa)' },
    { id: 'v60', label: 'Moagem Fina/Média (V60 / Filtro)' },
    { id: 'espresso', label: 'Moagem Fina (Espresso)' },
    { id: 'prensa', label: 'Moagem Grossa (Prensa Francesa)' },
  ];

  const handleSubscribe = (plan: typeof SUBSCRIPTION_PLANS[0]) => {
    const finalPrice = frequency === 'quinzenal' ? plan.monthlyPrice * 1.8 : plan.monthlyPrice;
    
    onAddToCart({
      id: `sub-${plan.id}-${selectedGrind}-${frequency}`,
      title: `Assinatura ${plan.name}`,
      subtitle: `${plan.gramsPerMonth} • Moagem: ${grindOptions.find(g => g.id === selectedGrind)?.label} • ${frequency === 'quinzenal' ? 'Frequência Quinzenal' : 'Frequência Mensal'}`,
      price: finalPrice,
      quantity: 1,
      type: 'beans',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1600',
    });

    setJoinedPlanId(plan.id);
    setTimeout(() => {
      setJoinedPlanId(null);
    }, 2000);
  };

  return (
    <section id="assinatura" className="py-24 bg-[#120C07] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5BA73]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5BA73] mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>CLUBE DE ASSINATURA EXCLUSIVO</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EBE0] font-light tracking-tight mb-4">
            Brew & Soul <span className="italic text-[#E5BA73]">Club</span>
          </h2>
          <p className="text-sm text-[#F5EBE0]/80 font-light leading-relaxed">
            Receba mensalmente em sua porta micro-lotes de altitude recém-torrados, selados a vácuo com atmosfera modificada de nitrogênio.
          </p>

          {/* Customization Selectors */}
          <div className="mt-8 p-6 rounded-2xl bg-[#1A120B]/80 border border-[#E5BA73]/20 backdrop-blur-md max-w-2xl mx-auto text-left space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-[#E5BA73] font-mono block mb-2">
                01. Escolha a Moagem Desejada:
              </label>
              <select
                value={selectedGrind}
                onChange={(e) => setSelectedGrind(e.target.value)}
                className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-4 py-2.5 text-xs text-[#F5EBE0] focus:outline-none focus:border-[#E5BA73]"
              >
                {grindOptions.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-[#E5BA73] font-mono block mb-2">
                02. Frequência de Envio:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFrequency('mensal')}
                  className={`py-2 px-3 text-xs uppercase tracking-wider rounded-xl border transition-all ${
                    frequency === 'mensal'
                      ? 'bg-[#E5BA73] text-[#1A120B] font-bold border-[#E5BA73]'
                      : 'bg-[#231911] text-[#F5EBE0]/70 border-[#E5BA73]/20 hover:border-[#E5BA73]'
                  }`}
                >
                  Mensal (1x por mês)
                </button>
                <button
                  onClick={() => setFrequency('quinzenal')}
                  className={`py-2 px-3 text-xs uppercase tracking-wider rounded-xl border transition-all ${
                    frequency === 'quinzenal'
                      ? 'bg-[#E5BA73] text-[#1A120B] font-bold border-[#E5BA73]'
                      : 'bg-[#231911] text-[#F5EBE0]/70 border-[#E5BA73]/20 hover:border-[#E5BA73]'
                  }`}
                >
                  Quinzenal (+80% Volume)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const price = frequency === 'quinzenal' ? plan.monthlyPrice * 1.8 : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`glass-card rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-500 border ${
                  plan.isPopular
                    ? 'border-[#E5BA73] shadow-2xl shadow-[#E5BA73]/10 bg-[#231911]/90 scale-102'
                    : 'border-[#E5BA73]/20 hover:border-[#E5BA73]/40'
                }`}
              >
                {/* Popular Tag */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E5BA73] text-[#1A120B] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Escolha do Sommelier
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-3xl text-[#F5EBE0] font-light mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#E5BA73] font-serif italic mb-6">
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#E5BA73]/15">
                    <span className="font-serif text-4xl text-[#E5BA73] font-medium">
                      R$ {price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-[#F5EBE0]/60 font-light"> /mês</span>
                    <p className="text-xs text-[#4E6C50] font-semibold mt-1">
                      {plan.gramsPerMonth}
                    </p>
                  </div>

                  <p className="text-[11px] uppercase tracking-widest text-[#E5BA73] font-mono mb-3">
                    Incluso no Plano:
                  </p>

                  <ul className="space-y-3 text-xs text-[#F5EBE0]/80 font-light mb-8">
                    {plan.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#E5BA73] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    joinedPlanId === plan.id
                      ? 'bg-[#4E6C50] text-[#F5EBE0]'
                      : plan.isPopular
                      ? 'bg-[#4E6C50] hover:bg-[#4E6C50]/90 text-[#F5EBE0] shadow-lg border border-[#E5BA73]/40'
                      : 'bg-[#231911] text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] border border-[#E5BA73]/30'
                  }`}
                >
                  {joinedPlanId === plan.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Assinatura Adicionada!</span>
                    </>
                  ) : (
                    <>
                      <span>Assinar {plan.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
