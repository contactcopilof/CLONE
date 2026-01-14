import React, { useState } from 'react';
import Hero from './components/Hero';
import Guide from './components/Guide';
import AIChat from './components/AIChat';
import { Copy, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'guide' | 'chat'>('guide');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-wp-dark/95 backdrop-blur-md text-white z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-wp-blue flex items-center justify-center">
                <Copy className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">WP Clone Master</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                    onClick={() => setView('guide')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${view === 'guide' ? 'bg-wp-blue text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  Guide de Clonage
                </button>
                <button 
                    onClick={() => setView('chat')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${view === 'chat' ? 'bg-wp-blue text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                >
                  Assistant IA
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-wp-dark border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => { setView('guide'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'guide' ? 'bg-wp-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Guide de Clonage
              </button>
              <button
                onClick={() => { setView('chat'); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${view === 'chat' ? 'bg-wp-blue text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                Assistant IA
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero 
            onStartGuide={() => setView('guide')} 
            onAskAI={() => setView('chat')}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
             {view === 'guide' ? <Guide /> : <AIChat />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} WP Clone Master. Outil éducatif.</p>
          <p className="mt-2">Ce site ne clone pas automatiquement les sites pour des raisons de sécurité (CORS/Backend).</p>
        </div>
      </footer>
    </div>
  );
};

export default App;