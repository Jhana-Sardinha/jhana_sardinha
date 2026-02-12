
import React from 'react';
import { Target, CheckCircle, RefreshCcw } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/40 border-y border-black/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 italic serif">Organizando a casa <span className="text-teal-600">com transparência</span>.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Estou em constante evolução e quero aplicar o que aprendo para organizar o seu negócio. 
            Não acredito em milagres, mas acredito no poder de uma comunicação bem estruturada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="relative group">
            <div className="p-8 bg-[#F5F5DC] rounded-2xl border border-black/5 h-full transition-transform hover:-translate-y-1">
              <Target className="text-teal-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 serif italic">Clareza e Direção</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Meu papel é ajudar você a entender para onde seu conteúdo está indo. Menos barulho, mais intenção.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="p-8 bg-[#F5F5DC] rounded-2xl border border-black/5 h-full transition-transform hover:-translate-y-1">
              <CheckCircle className="text-teal-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 serif italic">Olhar Organizado</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Recém-formada em <strong>Programação Web</strong>, trago a lógica de organização de sistemas para o seu calendário de postagens.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="p-8 bg-[#F5F5DC] rounded-2xl border border-black/5 h-full transition-transform hover:-translate-y-1">
              <RefreshCcw className="text-teal-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 serif italic">Evolução Mútua</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A cada projeto eu aprendo algo novo, e o meu compromisso é entregar sempre o meu melhor para o seu crescimento.</p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-teal-400 mono text-xs mb-4 uppercase tracking-[0.2em]">// SOBRE MIM</p>
              <p className="text-2xl md:text-3xl leading-snug serif italic">
                "Sou Jana Sardinha. Recém-formada em <strong>Programação Web</strong> e eterna aprendiz de Social Media. Meu foco é a transparência: não prometo fórmulas mágicas, prometo clareza, dedicação e um olhar organizado para a sua comunicação."
              </p>
            </div>
            <div className="w-48 h-48 shrink-0 relative">
               <div className="absolute inset-0 bg-teal-500 rounded-full rotate-6"></div>
               <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" className="absolute inset-0 w-full h-full object-cover rounded-full -rotate-3 border-4 border-white" alt="Jana Sardinha" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
