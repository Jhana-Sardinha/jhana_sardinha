
import React from 'react';
import { Terminal, Instagram, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F5DC]/80 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-black text-[#5EEAD4] flex items-center justify-center rounded-sm rotate-[-3deg] group-hover:rotate-0 transition-transform">
            <Terminal size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight serif italic">Jana <span className="text-teal-600 not-italic font-sans text-lg">Sardinha</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-teal-600 transition-colors">Sobre</a>
          <a href="#services" className="hover:text-teal-600 transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-teal-600 transition-colors">Casos</a>
          <a 
            href="https://wa.me/yournumber" 
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-teal-500 transition-all active:scale-95"
          >
            Diagnóstico Gratuito <ArrowRight size={16} />
          </a>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-4 h-0.5 bg-black"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
