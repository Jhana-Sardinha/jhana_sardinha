
import React from 'react';
import { Search, PenTool, BarChart3, Rocket } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Query Data",
      desc: "Análise profunda do seu mercado local e público-alvo.",
      time: "01"
    },
    {
      icon: <PenTool size={24} />,
      title: "Clean Design",
      desc: "Criação de peças visuais limpas e que transmitem autoridade.",
      time: "02"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Build & Deploy",
      desc: "Postagem e monitoramento técnico de engajamento.",
      time: "03"
    },
    {
      icon: <Rocket size={24} />,
      title: "Scale",
      desc: "Otimização via Meta Ads para alcançar novos clientes.",
      time: "04"
    }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Processo <span className="serif italic">End-to-End</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">Da estrutura do código ao topo do feed</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center relative z-10 group-hover:bg-teal-400 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-teal-500/20 rounded-full border border-teal-500/30 flex items-center justify-center text-xs font-bold mono">
                    {step.time}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 serif italic text-teal-400">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 border border-white/10 rounded-2xl bg-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-500">
              <span className="mono font-bold text-xl">!</span>
            </div>
            <div>
                <p className="font-bold text-lg">Para Metalúrgicas & Contabilidades</p>
                <p className="text-sm text-gray-400">Entendemos a sua linguagem técnica. Focamos em B2B e autoridade.</p>
            </div>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-teal-400 transition-colors">
            Ver Casos de Sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
