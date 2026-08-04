import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'success'>('cart');

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCompleteOrder = () => {
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1A120B] border-l border-[#E5BA73]/25 p-6 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E5BA73]/15">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E5BA73]" />
              <h2 className="font-serif text-2xl text-[#F5EBE0] font-light">
                Seu Pedido Sensorial
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#231911] text-[#F5EBE0] hover:text-[#E5BA73]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {checkoutStep === 'cart' ? (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-[#E5BA73]/30 mx-auto" />
                    <p className="font-serif text-xl text-[#F5EBE0]">Seu carrinho está vazio</p>
                    <p className="text-xs text-[#F5EBE0]/60 max-w-xs mx-auto">
                      Explore nosso Menu de Luxo ou Clube de Assinatura para adicionar suas bebidas e micro-lotes favoritos.
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#231911] border border-[#E5BA73]/15 flex items-center gap-3 relative group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-lg text-[#F5EBE0] truncate">{item.title}</h4>
                        <p className="text-[10px] text-[#E5BA73] truncate">{item.subtitle}</p>
                        <p className="text-xs font-semibold text-[#F5EBE0] mt-1">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2 bg-[#1A120B] p-1 rounded-lg border border-[#E5BA73]/20">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-[#F5EBE0] hover:text-[#E5BA73]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#E5BA73] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-[#F5EBE0] hover:text-[#E5BA73]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-[#F5EBE0]/40 hover:text-red-400 transition-colors"
                        title="Remover"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Summary & Checkout Button */}
              {items.length > 0 && (
                <div className="pt-4 border-t border-[#E5BA73]/15 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs uppercase font-mono text-[#E5BA73]">Total do Pedido</span>
                    <span className="font-serif text-3xl text-[#F5EBE0] font-medium">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={handleCompleteOrder}
                    className="w-full py-4 bg-[#4E6C50] text-[#F5EBE0] text-xs uppercase tracking-[0.2em] font-medium rounded-xl border border-[#E5BA73]/30 hover:bg-[#4E6C50]/90 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Finalizar Pedido de Luxo</span>
                    <ArrowRight className="w-4 h-4 text-[#E5BA73]" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Order Placed Success View */
            <div className="my-auto text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4E6C50]/30 border border-[#4E6C50] text-[#E5BA73] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-3xl text-[#F5EBE0]">
                Pedido Enviado para a Bancada Barista!
              </h3>

              <p className="text-xs text-[#E5BA73] font-mono">
                Comprovante N° #BS-{(Math.random() * 89999 + 10000).toFixed(0)}
              </p>

              <p className="text-xs text-[#F5EBE0]/70 font-light leading-relaxed">
                Nossos mestres baristas já estão separando os moedores e ajustando as balanças para preparar sua bebida com precisão.
              </p>

              <button
                onClick={() => {
                  onClearCart();
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full py-3.5 bg-[#E5BA73] text-[#1A120B] text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-[#F5EBE0] transition-colors"
              >
                Retornar à Experiência
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
