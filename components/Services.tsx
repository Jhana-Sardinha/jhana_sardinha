
import React from 'react';
import { CheckCircle2, MessageCircle, Zap, Package } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Diagnóstico Sincero",
      price: "R$ 150",
      description: "Uma análise real do que está travando o seu crescimento hoje.",
      items: ["Checkup completo do perfil", "Mapeamento de falhas de clareza", "PDF com próximos passos", "Reunião de 30min via Google Meet"],
      tag: "O PRIMEIRO PASSO",
      color: "bg-white"
    },
    {
      id: 2,
      title: "Projeto Piloto",
      price: "R$ 450/mês",
      description: "Oportunidade de crescimento mútuo: minha dedicação + sua estrutura.",
      items: ["4 posts estratégicos/mês", "Planejamento de Stories", "Linha editorial personalizada", "Apoio via WhatsApp"],
      tag: "CRESCIMENTO MÚTUO",
      color: "bg-white",
      highlight: true
    },
    {
      id: 3,
      title: "Ponto de Partida",
      price: "R$ 600",
      description: "Pacote fechado (entrega única) para organizar a casa de vez.",
      items: ["8 posts estratégicos", "Legendas diretas e claras", "Calendário inicial simples", "Apoio inicial no Meta Ads"],
      tag: "IMPULSO INICIAL",
      color: "bg-white",
      isOneTime: true
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-4 italic serif">Como podemos <span className="text-teal-600">começar?</span></h2>
            <p className="text-gray-600 text-lg">Sem promessas impossíveis, apenas passos reais para o seu negócio.</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500">
            <Zap size={14} className="text-teal-500" /> Vagas limitadas
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group relative p-8 rounded-3xl border border-black/5 transition-all duration-500 hover:bg-[#5EEAD4] hover:border-black/10 hover:-translate-y-2 cursor-pointer shadow-sm ${service.highlight ? 'ring-2 ring-teal-500 ring-offset-4' : ''} bg-white`}
            >
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 rounded mb-4 inline-block group-hover:bg-white group-hover:text-black transition-colors">
                  {service.tag}
                </span>
                <h3 className="text-2xl font-bold mb-2 serif tracking-tight group-hover:text-black">{service.title}</h3>
                <div className="text-3xl font-black mb-1 group-hover:text-black">
                  {service.price}
                </div>
                {service.isOneTime && <span className="text-[10px] font-bold text-teal-700 uppercase mb-4 block group-hover:text-black/60">Pagamento único</span>}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-black/80 mt-2">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm group-hover:text-black/90">
                    <CheckCircle2 size={18} className="text-teal-500 group-hover:text-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-black text-white rounded-2xl font-bold transition-all group-hover:bg-white group-hover:text-black flex items-center justify-center gap-2 active:scale-95">
                Vamos conversar?
                <MessageCircle size={18} />
              </button>

              <div className="absolute -top-3 right-8 w-6 h-12 bg-gray-300/20 border-x border-gray-400/10 rounded-full rotate-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
