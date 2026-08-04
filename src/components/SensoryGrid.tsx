import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/coffeeData';
import { BeanDetail } from '../types';
import { ArrowUpRight, Sparkles, X, CheckCircle2, ShieldCheck, Droplet } from 'lucide-react';

export const SensoryGrid: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState<BeanDetail | null>(null);

  return (
    <section id="processo" className="py-24 bg-[#120C07] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E5BA73]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#4E6C50]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E5BA73]/15 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E5BA73] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ALQUIMIA & PROCESSOS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EBE0] font-light tracking-tight">
              A Arte do <span className="italic text-[#E5BA73]">Processo Sensorial</span>
            </h2>
          </div>
          <p className="text-sm text-[#F5EBE0]/70 max-w-md font-light leading-relaxed">
            Nada acontece por acaso. Da colheita manual em encostas íngremes ao raio de fluxo da extração, cada milímetro é orquestrado para revelar notas sensoriais inesquecíveis.
          </p>
        </div>

        {/* Asymmetric Vogue Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Torra Controlada (Large Left Column) */}
          <div
            onClick={() => setSelectedDetail(PROCESS_STEPS[0])}
            className="lg:col-span-7 glass-card rounded-2xl overflow-hidden group cursor-pointer border border-[#E5BA73]/20 hover:border-[#E5BA73]/50 transition-all duration-500 relative flex flex-col justify-between p-8 sm:p-10 min-h-[460px] image-zoom-container shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={PROCESS_STEPS[0].image}
                alt={PROCESS_STEPS[0].title}
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/70 to-transparent" />
            </div>

            {/* Content Top */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="bg-[#E5BA73] text-[#1A120B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                ETAPA 01
              </span>
              <div className="w-10 h-10 rounded-full bg-[#1A120B]/80 border border-[#E5BA73]/30 flex items-center justify-center text-[#E5BA73] group-hover:bg-[#E5BA73] group-hover:text-[#1A120B] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 mt-auto pt-12">
              <p className="text-xs uppercase tracking-widest text-[#E5BA73] mb-2 font-mono">
                {PROCESS_STEPS[0].origin} • {PROCESS_STEPS[0].altitude}
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5EBE0] font-light mb-3 group-hover:text-[#E5BA73] transition-colors">
                {PROCESS_STEPS[0].title}
              </h3>
              <p className="text-sm text-[#F5EBE0]/80 font-light line-clamp-2 max-w-xl">
                {PROCESS_STEPS[0].subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {PROCESS_STEPS[0].tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-[11px] bg-[#231911]/90 text-[#F5EBE0]/90 px-3 py-1 rounded-full border border-[#E5BA73]/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Card 2: Seleção Manual */}
            <div
              onClick={() => setSelectedDetail(PROCESS_STEPS[1])}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-[#E5BA73]/20 hover:border-[#E5BA73]/50 transition-all duration-500 relative flex flex-col justify-between p-6 sm:p-8 min-h-[220px] image-zoom-container shadow-xl flex-1"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={PROCESS_STEPS[1].image}
                  alt={PROCESS_STEPS[1].title}
                  className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/60 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-[#4E6C50] text-[#F5EBE0] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                  ETAPA 02
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1A120B]/80 border border-[#E5BA73]/30 flex items-center justify-center text-[#E5BA73] group-hover:bg-[#E5BA73] group-hover:text-[#1A120B] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <p className="text-[10px] uppercase tracking-widest text-[#E5BA73] font-mono">
                  {PROCESS_STEPS[1].origin}
                </p>
                <h3 className="font-serif text-2xl text-[#F5EBE0] font-light group-hover:text-[#E5BA73] transition-colors">
                  {PROCESS_STEPS[1].title}
                </h3>
                <p className="text-xs text-[#F5EBE0]/75 font-light mt-1">
                  {PROCESS_STEPS[1].subtitle}
                </p>
              </div>
            </div>

            {/* Card 3: Extração Perfeita */}
            <div
              onClick={() => setSelectedDetail(PROCESS_STEPS[2])}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-[#E5BA73]/20 hover:border-[#E5BA73]/50 transition-all duration-500 relative flex flex-col justify-between p-6 sm:p-8 min-h-[220px] image-zoom-container shadow-xl flex-1"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={PROCESS_STEPS[2].image}
                  alt={PROCESS_STEPS[2].title}
                  className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/60 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-[#E5BA73] text-[#1A120B] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                  ETAPA 03
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1A120B]/80 border border-[#E5BA73]/30 flex items-center justify-center text-[#E5BA73] group-hover:bg-[#E5BA73] group-hover:text-[#1A120B] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 mt-6">
                <p className="text-[10px] uppercase tracking-widest text-[#E5BA73] font-mono">
                  {PROCESS_STEPS[2].origin}
                </p>
                <h3 className="font-serif text-2xl text-[#F5EBE0] font-light group-hover:text-[#E5BA73] transition-colors">
                  {PROCESS_STEPS[2].title}
                </h3>
                <p className="text-xs text-[#F5EBE0]/75 font-light mt-1">
                  {PROCESS_STEPS[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal / Drawer for Process Inspection */}
      {selectedDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1A120B] border border-[#E5BA73]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#231911] text-[#F5EBE0] hover:text-[#E5BA73] hover:bg-[#E5BA73]/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedDetail.image}
                alt={selectedDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs uppercase tracking-widest text-[#E5BA73] font-mono bg-[#1A120B]/80 px-3 py-1 rounded-full border border-[#E5BA73]/30">
                  {selectedDetail.origin}
                </span>
              </div>
            </div>

            <h3 className="font-serif text-3xl text-[#F5EBE0] font-light mb-1">
              {selectedDetail.title}
            </h3>
            <p className="text-sm text-[#E5BA73] font-serif italic mb-4">
              {selectedDetail.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-[#231911] border border-[#E5BA73]/15 text-xs">
              <div>
                <span className="text-[#E5BA73] uppercase font-mono block text-[10px]">Altitude / Terroir</span>
                <span className="text-[#F5EBE0] font-medium">{selectedDetail.altitude}</span>
              </div>
              <div>
                <span className="text-[#E5BA73] uppercase font-mono block text-[10px]">Varietal & Processo</span>
                <span className="text-[#F5EBE0] font-medium">{selectedDetail.varietal}</span>
              </div>
              <div>
                <span className="text-[#E5BA73] uppercase font-mono block text-[10px]">Produtor / Curadoria</span>
                <span className="text-[#F5EBE0] font-medium">{selectedDetail.farmer}</span>
              </div>
              <div>
                <span className="text-[#E5BA73] uppercase font-mono block text-[10px]">Método de Extração</span>
                <span className="text-[#F5EBE0] font-medium">{selectedDetail.process}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#E5BA73] mb-2 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                História do Lote
              </h4>
              <p className="text-sm text-[#F5EBE0]/80 font-light leading-relaxed">
                {selectedDetail.story}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#E5BA73] mb-2 font-mono flex items-center gap-1.5">
                <Droplet className="w-4 h-4" />
                Atributos Sensoriais
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedDetail.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs bg-[#4E6C50]/30 text-[#F5EBE0] px-3 py-1 rounded-full border border-[#4E6C50] flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#E5BA73]" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
