import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu, X, Coffee, Sparkles } from 'lucide-react';
import { AmbientSoundPlayer } from './AmbientSoundPlayer';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenCart,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Experiência', href: '#experiencia' },
    { name: 'Grãos & Terroir', href: '#processo' },
    { name: 'Menu de Luxo', href: '#menu' },
    { name: 'Assinatura', href: '#assinatura' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-header py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#1A120B]/90 via-[#1A120B]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none" id="brand-logo">
          <div className="w-9 h-9 rounded-full bg-[#E5BA73]/10 border border-[#E5BA73]/30 flex items-center justify-center text-[#E5BA73] group-hover:border-[#E5BA73] group-hover:bg-[#E5BA73]/20 transition-all duration-300">
            <Coffee className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl tracking-wider text-[#F5EBE0] font-semibold group-hover:text-[#E5BA73] transition-colors">
              BREW & SOUL
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#E5BA73]/80 font-sans -mt-1">
              Haute Specialty Coffee
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-light tracking-wide text-[#F5EBE0]/80 hover:text-[#E5BA73] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5BA73] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Buttons */}
        <div className="flex items-center gap-3">
          {/* Ambient Sound Player */}
          <div className="hidden lg:block">
            <AmbientSoundPlayer />
          </div>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full text-[#F5EBE0] hover:text-[#E5BA73] hover:bg-[#E5BA73]/10 transition-colors border border-transparent hover:border-[#E5BA73]/20 focus:outline-none"
            aria-label="Ver Carrinho"
            id="cart-button"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4E6C50] text-[#F5EBE0] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1A120B] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Magnetic CTA "Reserve sua Experiência" */}
          <button
            onClick={onOpenReservation}
            id="header-cta-reserve"
            className="hidden sm:flex items-center gap-2 bg-[#4E6C50] hover:bg-[#4E6C50]/90 text-[#F5EBE0] text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#4E6C50]/50 shadow-lg shadow-[#4E6C50]/20 hover:border-[#E5BA73] hover:shadow-[#E5BA73]/20 transition-all duration-300 font-medium active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E5BA73]" />
            <span>Reservar Experiência</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5EBE0] hover:text-[#E5BA73] focus:outline-none"
            aria-label="Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-[#E5BA73]/20 px-6 py-6 animate-fadeIn flex flex-col gap-4">
          <div className="mb-2 pb-3 border-b border-[#E5BA73]/10 flex justify-between items-center">
            <span className="text-xs uppercase tracking-widest text-[#E5BA73]">Atmosfera & Menu</span>
            <AmbientSoundPlayer />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#F5EBE0] hover:text-[#E5BA73] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#4E6C50] text-[#F5EBE0] text-sm uppercase tracking-widest py-3 rounded-full border border-[#E5BA73]/30"
          >
            <Sparkles className="w-4 h-4 text-[#E5BA73]" />
            <span>Reserve sua Experiência</span>
          </button>
        </div>
      )}
    </header>
  );
};
