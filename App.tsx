
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cross, 
  FileText, 
  Wallet, 
  Phone, 
  X, 
  ChevronRight,
  Church,
  CalendarDays,
  ExternalLink,
  Copy,
  Info
} from 'lucide-react';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const waveLink = "https://pay.wave.com/m/M_ci_Hv81mxpuJK74/c/ci/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waveLink);
    alert("Lien copié !");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 selection:bg-amber-100">
      {/* En-tête professionnel */}
      <header className="bg-slate-900 text-white pt-16 pb-20 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 pointer-events-none transform translate-x-1/4 -translate-y-1/4"
        >
          <Church size={280} strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center justify-center mb-6 shadow-lg backdrop-blur-sm">
            <Cross size={32} className="text-[#c5a059]" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a059] mb-3">Paroisse de Divo</p>
          <h1 className="font-serif text-4xl font-medium text-white mb-3 tracking-tight">Sainte Famille</h1>
          <p className="text-slate-400 text-sm font-light max-w-[250px] leading-relaxed">
            Espace dédié aux intentions de messe et prières
          </p>
        </motion.div>
      </header>

      {/* Contenu Principal */}
      <main className="max-w-md mx-auto px-5 -mt-10 relative z-20 space-y-5">
        
        {/* Carte d'information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4"
        >
          <div className="bg-amber-50 p-3 rounded-xl text-amber-600 shrink-0">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="font-serif text-xl font-medium text-slate-900">Demander une messe</h2>
            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
              Confiez vos intentions à la paroisse en suivant ces deux étapes simples.
            </p>
          </div>
        </motion.div>

        {/* Étapes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {/* Étape 1 */}
          <button 
            onClick={() => setShowForm(true)}
            className="w-full bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:border-slate-300 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors shrink-0">
              <span className="font-serif font-medium text-lg">1</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-slate-900 text-base">Remplir le formulaire</h3>
              <p className="text-xs text-slate-500 mt-0.5">Détaillez votre intention de prière</p>
            </div>
            <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
          </button>

          {/* Étape 2 */}
          <a 
            href={waveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:border-[#1ca8e4]/30 hover:shadow-md transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#1ca8e4]/10 border border-[#1ca8e4]/20 flex items-center justify-center text-[#1ca8e4] shrink-0">
              <span className="font-serif font-medium text-lg">2</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-slate-900 text-base">Faire l'offrande</h3>
              <p className="text-xs text-slate-500 mt-0.5">Paiement sécurisé via Wave</p>
            </div>
            <Wallet size={20} className="text-[#1ca8e4]" />
          </a>
        </motion.div>

        {/* Section d'aide Wave */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-100/50 rounded-2xl p-5 border border-slate-200/60 mt-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Info size={16} className="text-slate-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Information Wave</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            Veuillez effectuer votre offrande via Wave. Le lien ouvrira l'application sur mobile ou affichera un QR code sur ordinateur.
          </p>
          <div className="flex gap-3">
            <a 
              href={waveLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white border border-slate-200 rounded-xl py-2.5 text-center text-sm font-medium text-[#1ca8e4] shadow-sm hover:bg-slate-50 transition-colors"
            >
              Ouvrir Wave
            </a>
            <button 
              onClick={copyToClipboard}
              className="px-4 bg-white border border-slate-200 rounded-xl text-slate-600 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Copier le lien"
            >
              <Copy size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center pt-8 pb-4"
        >
          <p className="font-serif text-slate-400 italic text-sm">Que Dieu vous bénisse</p>
        </motion.div>
      </main>

      {/* Barre de Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-6">
          <button className="flex flex-col items-center justify-center w-full h-full text-slate-900">
            <Church size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Accueil</span>
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-900 transition-colors"
          >
            <FileText size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Demande</span>
          </button>
          <a 
            href="tel:+2250712041710"
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Phone size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Contact</span>
          </a>
        </div>
      </nav>

      {/* Modal Formulaire */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-slate-50 flex flex-col"
          >
            <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200 bg-white shadow-sm">
            <button 
              onClick={() => setShowForm(false)}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="font-serif font-medium text-lg text-slate-900">Intention de Messe</h3>
            <div className="w-10"></div>
          </div>
          
          <div className="flex-1 bg-white relative">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
              className="w-full h-full border-none"
              title="Formulaire"
            >
              Chargement en cours…
            </iframe>
          </div>

          <div className="p-5 bg-white border-t border-slate-200">
            <button 
              onClick={() => setShowForm(false)}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium text-base shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              Étape suivante : Offrande <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
