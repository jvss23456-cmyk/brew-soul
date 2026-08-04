/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SensoryGrid } from './components/SensoryGrid';
import { SignatureCollection } from './components/SignatureCollection';
import { CoffeeClub } from './components/CoffeeClub';
import { AtmosphereLocation } from './components/AtmosphereLocation';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#1A120B] text-[#F5EBE0] font-sans selection:bg-[#E5BA73] selection:text-[#1A120B] overflow-x-hidden">
      {/* Header */}
      <Header
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      {/* Main Content */}
      <main>
        {/* Section B: Hero (The First Sip) */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section C: Sensory Grid (Processo & Terroir) */}
        <SensoryGrid />

        {/* Section D: Signature Collection (Menu de Luxo) */}
        <SignatureCollection onAddToCart={handleAddToCart} />

        {/* Section E: Assinatura Brew & Soul Club */}
        <CoffeeClub onAddToCart={handleAddToCart} />

        {/* Section F: Localização & Atmosphere */}
        <AtmosphereLocation />
      </main>

      {/* Footer (The Aftertaste) */}
      <Footer />

      {/* Reservation Experience Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Cart & Order Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
