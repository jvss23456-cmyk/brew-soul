import React, { useState } from 'react';
import { Coffee, Instagram, Facebook, Youtube, Send, Sparkles, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#120C07] text-[#F5EBE0] border-t border-[#E5BA73]/20 pt-20 pb-12 relative overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E5BA73]/15">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E5BA73]/10 border border-[#E5BA73]/30 flex items-center justify-center text-[#E5BA73]">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-serif text-3xl tracking-wider text-[#F5EBE0] font-semibold">
                BREW & SOUL
              </span>
            </div>

            <p className="text-xs text-[#F5EBE0]/70 font-light max-w-sm leading-relaxed">
              Uma jornada sensorial do grão à alma. Seleção rigorosa de micro-lotes de alta altitude, torra de precisão Loring e rituais de extração sob medida.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#231911] border border-[#E5BA73]/20 flex items-center justify-center text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#231911] border border-[#E5BA73]/20 flex items-center justify-center text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#231911] border border-[#E5BA73]/20 flex items-center justify-center text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#1A120B] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5BA73]">
              Navegação Editorial
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#F5EBE0]/80">
              <li>
                <a href="#experiencia" className="hover:text-[#E5BA73] transition-colors">
                  A Experiência
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-[#E5BA73] transition-colors">
                  Grãos & Terroir Single Origin
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E5BA73] transition-colors">
                  Menu de Luxo
                </a>
              </li>
              <li>
                <a href="#assinatura" className="hover:text-[#E5BA73] transition-colors">
                  Clube de Assinatura
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#E5BA73] transition-colors">
                  Boutiques & Santuários
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter: Notas de Degustação */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5BA73]">
              Newsletter: "Notas de Degustação"
            </h4>
            <p className="text-xs text-[#F5EBE0]/70 font-light leading-relaxed">
              Receba em primeira mão notificações de lançamentos de micro-lotes raros, convites para cuppings privativos e ensaios sobre gastronomia de luxo.
            </p>

            <form onSubmit={handleSubscribeNewsletter} className="space-y-2 pt-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail VIP..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-4 py-3 text-xs text-[#F5EBE0] placeholder-[#F5EBE0]/40 focus:outline-none focus:border-[#E5BA73] pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#4E6C50] text-[#F5EBE0] rounded-lg hover:bg-[#4E6C50]/90 transition-colors flex items-center justify-center"
                  aria-label="Inscrever-se"
                >
                  <Send className="w-3.5 h-3.5 text-[#E5BA73]" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#4E6C50] font-semibold animate-fadeIn">
                  <Check className="w-4 h-4 text-[#E5BA73]" />
                  <span>Inscrição confirmada com sucesso!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5EBE0]/50 font-light gap-4">
          <p>© 2026 Brew & Soul Haute Specialty Coffee. Todos os direitos reservados.</p>
          <p className="font-serif italic text-[#E5BA73]/80">
            Concebido & Arquitetado pela Vibe Studio
          </p>
        </div>
      </div>
    </footer>
  );
};
