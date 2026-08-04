import React, { useEffect, useRef } from 'react';
import { Calendar, Compass, Sparkles, Award, Flame } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal badge
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      }

      // Title reveal animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.4 }
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.7 }
        );
      }

      // CTAs
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.9 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experiencia" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden grain-overlay">
      {/* Background Hero Image with Cinematic Parallax Scale & Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600"
          alt="Espresso de Luxo Sendo Servido na Brew & Soul"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
        />
        {/* Dark Roast Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/80 to-[#1A120B]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A120B]/90 via-transparent to-[#1A120B]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Roasting Today Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#231911]/90 border border-[#E5BA73]/30 text-[#E5BA73] text-xs font-sans tracking-widest uppercase mb-8 shadow-xl backdrop-blur-md"
        >
          <Flame className="w-3.5 h-3.5 text-[#E5BA73] animate-pulse" />
          <span>Hoje na Torra: <strong className="text-[#F5EBE0] font-normal">Geisha Panama Barú Volcán (1.950m)</strong></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4E6C50] ml-1" />
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F5EBE0] leading-[1.05] font-light max-w-4xl mb-6"
        >
          A Essência do <br />
          <span className="italic text-[#E5BA73] font-normal gold-glow">
            Café Artesanal
          </span>
        </h1>

        {/* Hero Copy */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-[#F5EBE0]/85 font-light max-w-2xl leading-relaxed mb-10 tracking-wide font-sans"
        >
          Uma jornada sensorial do grão à alma, onde cada gota conta uma história de terroir, micro-lotes raros e dedicação impecável.
        </p>

        {/* Action Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Main CTA in Moss Green with Magnetic Hover */}
          <button
            onClick={onOpenReservation}
            id="hero-cta-main"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#4E6C50] hover:bg-[#4E6C50]/90 text-[#F5EBE0] text-sm uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-full border border-[#4E6C50]/60 shadow-2xl shadow-[#4E6C50]/30 hover:shadow-[#E5BA73]/30 hover:border-[#E5BA73] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#E5BA73]" />
            <span>Reserve sua Experiência</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#menu"
            id="hero-cta-menu"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#231911]/80 hover:bg-[#231911] text-[#E5BA73] hover:text-[#F5EBE0] text-sm uppercase tracking-[0.2em] font-light px-8 py-4 rounded-full border border-[#E5BA73]/30 hover:border-[#E5BA73]/60 transition-all duration-300 backdrop-blur-md"
          >
            <Compass className="w-4 h-4 text-[#E5BA73]" />
            <span>Explorar Menu de Luxo</span>
          </a>
        </div>

        {/* Key Highlights Banner at bottom of hero */}
        <div className="mt-16 pt-8 border-t border-[#E5BA73]/15 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-serif uppercase tracking-wider text-[#E5BA73]">Single Origin</p>
              <p className="text-xs text-[#F5EBE0]/70 font-light">100% Arábica de Alta Altitude</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-serif uppercase tracking-wider text-[#E5BA73]">Torra Loring</p>
              <p className="text-xs text-[#F5EBE0]/70 font-light">Perfil Térmico Milimétrico</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Flame className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-serif uppercase tracking-wider text-[#E5BA73]">Pontuação 88+</p>
              <p className="text-xs text-[#F5EBE0]/70 font-light">Curadoria da SCAA Internacional</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-serif uppercase tracking-wider text-[#E5BA73]">Barista Table</p>
              <p className="text-xs text-[#F5EBE0]/70 font-light">Degustação Guiada Exclusiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
