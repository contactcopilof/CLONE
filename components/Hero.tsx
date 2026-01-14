import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onStartGuide: () => void;
  onAskAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartGuide, onAskAI }) => {
  return (
    <div className="relative overflow-hidden bg-wp-dark text-white pb-16 pt-20 lg:pt-32">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Peut-on cloner un site <span className="text-wp-blue">WordPress</span> ?
        </h1>
        
        <div className="flex justify-center items-center gap-2 mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-bold border border-green-500/50">
                <CheckCircle className="w-5 h-5 mr-2" /> OUI, C'EST POSSIBLE
            </span>
        </div>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
          Que ce soit pour créer un environnement de staging, changer d'hébergeur ou dupliquer un template, 
          le clonage est une pratique courante. Découvrez comment le faire en toute sécurité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onStartGuide}
            className="px-8 py-4 rounded-lg bg-wp-blue hover:bg-blue-600 text-white font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            Voir le Guide étape par étape <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onAskAI}
            className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all backdrop-blur-sm border border-white/20"
          >
            Demander à l'Expert IA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;