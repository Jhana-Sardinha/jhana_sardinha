
import React from 'react';
import { ArrowUpRight, Sparkles, Instagram, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 z-20">
            <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-6 rotate-[-1deg]">
              Aprendizado constante + Organização
            </div>
            <h1 className="text-4xl md:text-6xl leading-tight mb-6">
              Não tenho todas as respostas, mas tenho um <span className="italic serif">método</span> para a gente parar de <span className="scribble-underline">improvisar</span>.
            </h1>
            <p className="text-lg text-gray-700 max-w-md mb-8 leading-relaxed">
              Sou <strong>Jhana Sardinha</strong>. Uso o que aprendi na <strong>Programação Web</strong> para ajudar pequenos negócios a organizarem sua comunicação com clareza e direção. Sem fórmulas mágicas, apenas dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-500 transition-all custom-shadow flex items-center justify-center gap-2 active:scale-95">
                Vamos conversar sobre o seu negócio?
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          {/* Overlapping Collage Section */}
          <div className="lg:col-span-6 relative h-[450px] md:h-[550px] flex items-center justify-center lg:justify-end">
            
            {/* Main Photo Card */}
            <div className="collage-item absolute z-10 w-64 md:w-80 h-80 md:h-[400px] bg-white shadow-2xl rotate-[-3deg] p-3 border border-black/5 translate-x-[-10%] lg:translate-x-[-20%]">
              <div className="w-full h-full bg-gray-100 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-90" alt="Jhana Sardinha" />
                  <div className="absolute inset-0 bg-teal-500/10 mix-blend-multiply"></div>
              </div>
            </div>

            {/* Overlapping Code Window - Simplified to show structure/process */}
            <div className="collage-item absolute z-20 w-72 bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden translate-x-16 translate-y-24 md:translate-x-20 md:translate-y-32 rotate-[3deg]">
              <div className="bg-[#2d2d2d] px-3 py-1.5 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[9px] text-gray-400 mono">organizar_processos.js</span>
              </div>
              <div className="p-4 text-[10px] mono leading-relaxed">
                <p><span className="text-teal-400">// Estruturando o caminho</span></p>
                <p><span className="text-pink-400">const</span> <span className="text-blue-300">plano</span> = {`{`}</p>
                <p className="pl-3">objetivo: <span className="text-orange-300">"clareza"</span>,</p>
                <p className="pl-3">metodo: <span className="text-orange-300">"organizacao"</span>,</p>
                <p className="pl-3">entrega: <span className="text-orange-300">"transparente"</span></p>
                <p>{`}`};</p>
                <p className="mt-2 text-gray-500 font-bold">>>> Construindo direção...</p>
              </div>
            </div>

            {/* Hand Drawn Elements & Stickers */}
            <div className="absolute z-30 top-10 right-10 md:right-20 bg-yellow-200 text-black p-3 shadow-lg rotate-[12deg] text-xs font-bold border border-black/10">
              MÉTODO PÉ NO CHÃO
            </div>
            
            <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl"></div>

            {/* Custom Arrow SVG */}
            <svg className="absolute z-30 -bottom-4 left-1/4 w-24 h-24 text-teal-500/60" viewBox="0 0 100 100">
              <path d="M10,10 Q40,10 40,50 T90,90" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M85,80 L90,90 L80,85" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            <div className="absolute z-30 -bottom-8 right-12 md:right-24 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md border border-black/5 rotate-[-2deg]">
              <MousePointer2 size={16} className="text-teal-600" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Foco no Real</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
