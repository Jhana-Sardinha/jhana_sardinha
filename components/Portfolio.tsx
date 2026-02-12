
import React from 'react';
import { MessageCircle, Pin } from 'lucide-react';

const Portfolio: React.FC = () => {
  const cases = [
    {
      title: "Indústria de Embalagens",
      category: "B2B Estratégico",
      desc: "O desafio era humanizar algo frio. Transformamos fotos de máquinas em histórias de quem faz acontecer. Resultado: um perfil que agora passa confiança real.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      postit: "Humanizar o 'frio' gera confiança!"
    },
    {
      title: "Instagram do meu Pai",
      category: "Profissionalização",
      desc: "Do amador ao profissional. Organizamos a linha editorial, definimos cores e a comunicação fluiu. O resultado veio em clareza e novas parcerias.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600",
      postit: "Clareza traz parcerias!"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 italic serif">Casos e <span className="underline decoration-teal-500 underline-offset-8">Histórias</span></h2>
          <p className="text-gray-600 text-lg">Resultados de quem decidiu parar de improvisar.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {cases.map((c, idx) => (
            <div key={idx} className="group relative">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl aspect-[16/11] mb-8 shadow-xl border border-black/5 bg-white p-3">
                <img 
                  src={c.img} 
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={c.title} 
                />
                
                {/* Post-it Overlay */}
                <div className="absolute top-6 left-6 z-20">
                   <div className="bg-yellow-100 p-4 shadow-lg rotate-[-4deg] border border-black/5 max-w-[150px] transform group-hover:rotate-[-2deg] transition-transform">
                      <Pin size={14} className="text-red-500 mb-2 fill-current" />
                      <p className="text-xs font-bold serif leading-tight text-gray-800 uppercase tracking-tighter">
                        {c.postit}
                      </p>
                   </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-teal-600">{c.category}</span>
                  <div className="h-px bg-teal-500/20 flex-grow"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 serif italic">{c.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-teal-500 transition-all flex items-center gap-3 custom-shadow active:scale-95 group">
              <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
              Vamos conversar sobre o seu negócio?
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
