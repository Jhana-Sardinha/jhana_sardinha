
import React from 'react';
import { Instagram, Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-20 border-t border-black/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-black text-[#5EEAD4] flex items-center justify-center rounded-lg rotate-[-3deg]">
                <span className="mono font-bold text-lg">{`{}`}</span>
              </div>
              <span className="text-2xl font-bold serif italic">Jana Sardinha</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Menos improviso, mais clareza. Eu te ajudo a organizar sua casa digital com a lógica que seu negócio merece.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="w-12 h-12 border border-black/5 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 border border-black/5 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-12 h-12 border border-black/5 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-8 text-gray-400">Navegação</h4>
            <ul className="space-y-5 text-base text-gray-500 font-medium">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-teal-600 transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-teal-600 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-teal-600 transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-8 text-gray-400">Base & Contato</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                   <p className="font-bold text-gray-900">Itapira, SP</p>
                   <p className="text-sm text-gray-500 leading-tight">Atendimento Online para todo o Brasil e Mundo.</p>
                </div>
              </li>
              <li className="flex gap-4">
                 <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                   <p className="font-bold text-gray-900">@janasardinha.sm</p>
                   <p className="text-sm text-gray-500">Conteúdo diário no feed.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center md:text-left leading-relaxed">
            © 2024 Jana Sardinha. Criado com lógica e café em Itapira/SP.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:text-teal-600 transition-colors"
          >
            Voltar ao topo 
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-teal-600">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
