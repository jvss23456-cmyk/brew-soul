import React, { useState } from 'react';
import { Calendar, Clock, Users, Coffee, Sparkles, X, CheckCircle2, Ticket } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState<ReservationData>({
    date: new Date().toISOString().split('T')[0],
    time: '15:00',
    guests: 2,
    experienceType: 'barista_table',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const experienceOptions = [
    {
      id: 'barista_table',
      title: 'Mesa do Barista Mestre',
      description: 'Degustação de 4 tempos com harmonização de pâtisserie francesa.',
    },
    {
      id: 'cupping',
      title: 'Cupping Orientado de Micro-Lotes',
      description: 'Análise sensorial guiada com pontuação SCAA ao vivo.',
    },
    {
      id: 'espresso_master',
      title: 'Masterclass de Espresso & Extração',
      description: 'Aprenda os segredos da curva de pressão na La Marzocco KB90.',
    },
    {
      id: 'lounge',
      title: 'Reserva de Mesa VIP Lounge',
      description: 'Mesa privativa nos Jardins ou Leblon para reuniões ou encontros.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1A120B] border border-[#E5BA73]/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#231911] text-[#F5EBE0] hover:text-[#E5BA73] hover:bg-[#E5BA73]/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5BA73] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESERVA DE RITUAL SENSORIAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5EBE0] font-light mb-2">
              Reserve sua <span className="italic text-[#E5BA73]">Experiência</span>
            </h2>
            <p className="text-xs text-[#F5EBE0]/70 font-light mb-6">
              Garanta seu lugar em nossas Boutiques. Atendimento exclusivo com barista dedicado.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Experience Selection */}
              <div>
                <label className="text-xs uppercase tracking-widest text-[#E5BA73] font-mono block mb-2">
                  Escolha o Ritual Desejado:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {experienceOptions.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          experienceType: exp.id as ReservationData['experienceType'],
                        })
                      }
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.experienceType === exp.id
                          ? 'bg-[#E5BA73]/15 border-[#E5BA73] text-[#F5EBE0]'
                          : 'bg-[#231911] border-[#E5BA73]/20 text-[#F5EBE0]/70 hover:border-[#E5BA73]/40'
                      }`}
                    >
                      <p className="text-xs font-bold text-[#E5BA73]">{exp.title}</p>
                      <p className="text-[10px] text-[#F5EBE0]/60 line-clamp-2 mt-0.5">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#E5BA73] font-mono block mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBE0] focus:outline-none focus:border-[#E5BA73]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#E5BA73] font-mono block mb-1">
                    Horário
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBE0] focus:outline-none focus:border-[#E5BA73]"
                  >
                    {['10:00', '11:30', '14:00', '15:30', '17:00', '18:30'].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#E5BA73] font-mono block mb-1">
                    Pessoas
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-3 py-2 text-xs text-[#F5EBE0] focus:outline-none focus:border-[#E5BA73]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Nome Completo *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-4 py-2.5 text-xs text-[#F5EBE0] placeholder-[#F5EBE0]/40 focus:outline-none focus:border-[#E5BA73]"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-4 py-2.5 text-xs text-[#F5EBE0] placeholder-[#F5EBE0]/40 focus:outline-none focus:border-[#E5BA73]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Telefone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#231911] border border-[#E5BA73]/30 rounded-xl px-4 py-2.5 text-xs text-[#F5EBE0] placeholder-[#F5EBE0]/40 focus:outline-none focus:border-[#E5BA73]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#4E6C50] text-[#F5EBE0] text-xs uppercase tracking-[0.2em] font-medium rounded-xl border border-[#E5BA73]/30 hover:bg-[#4E6C50]/90 transition-all duration-300 shadow-xl mt-4"
              >
                Confirmar Reserva VIP
              </button>
            </form>
          </div>
        ) : (
          /* Confirmed Ticket Pass */
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#4E6C50]/30 border border-[#4E6C50] text-[#E5BA73] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-3xl text-[#F5EBE0] mb-2">
              Reserva Confirmada com Sucesso!
            </h3>
            <p className="text-xs text-[#E5BA73] font-mono uppercase tracking-widest mb-6">
              Voucher N° BS-2026-{(Math.random() * 8999 + 1000).toFixed(0)}
            </p>

            {/* Digital Pass Voucher */}
            <div className="bg-[#231911] border border-[#E5BA73]/40 rounded-2xl p-6 text-left space-y-3 mb-6 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-[#E5BA73]/20 pb-3">
                <span className="font-serif text-lg text-[#F5EBE0]">BREW & SOUL PASS</span>
                <Ticket className="w-5 h-5 text-[#E5BA73]" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[#E5BA73] text-[10px] font-mono block">CLIENTE</span>
                  <span className="text-[#F5EBE0] font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="text-[#E5BA73] text-[10px] font-mono block">DATA & HORÁRIO</span>
                  <span className="text-[#F5EBE0] font-medium">{formData.date} às {formData.time}</span>
                </div>
                <div>
                  <span className="text-[#E5BA73] text-[10px] font-mono block">CONVIDADOS</span>
                  <span className="text-[#F5EBE0] font-medium">{formData.guests} pessoas</span>
                </div>
                <div>
                  <span className="text-[#E5BA73] text-[10px] font-mono block">RITUAL</span>
                  <span className="text-[#F5EBE0] font-medium">
                    {experienceOptions.find((e) => e.id === formData.experienceType)?.title}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#F5EBE0]/70 font-light mb-6">
              Enviamos os detalhes da sua reserva para <strong className="text-[#E5BA73]">{formData.email}</strong>. Aguardamos sua presença em nossa Boutique nos Jardins.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-[#E5BA73] text-[#1A120B] text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-[#F5EBE0] transition-colors"
            >
              Concluir & Retornar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
