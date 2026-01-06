
import React, { useState } from 'react';
import { 
  Cross, 
  FileText, 
  Wallet, 
  Phone, 
  Info, 
  X, 
  ChevronRight,
  Heart,
  Church,
  CalendarDays
} from 'lucide-react';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3E2C1C] flex flex-col font-sans select-none overflow-hidden">
      
      {/* Barre d'état / Header Style App */}
      <header className="bg-[#2E4A25] text-[#D4AF37] px-6 pt-10 pb-6 rounded-b-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Motif discret en arrière-plan */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Church size={120} strokeWidth={1} />
        </div>
        
        <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-[#D4AF37] p-2 rounded-2xl shadow-inner">
              <Cross size={24} className="text-[#2E4A25]" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl leading-tight text-white">Sainte Famille</h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Paroisse de Divo</p>
            </div>
          </div>
          <button className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20 active:scale-90 transition-transform">
            <Phone size={20} className="text-white" />
          </button>
        </div>

        <div className="mt-8 relative z-10">
          <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">Bienvenue</p>
          <h2 className="text-2xl font-serif font-bold text-white">Espace de Prière</h2>
        </div>
      </header>

      {/* Contenu Principal - Dashboard APK Style */}
      <main className="flex-1 px-6 py-8 overflow-y-auto space-y-6">
        
        {/* Section "Aujourd'hui" */}
        <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-[#EADAC5] flex items-center gap-4">
          <div className="bg-[#FAF7F2] p-3 rounded-2xl text-[#D4AF37]">
            <CalendarDays size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">Intentions du jour</h3>
            <p className="text-[11px] text-[#6B5A4B]">Confiez vos proches au Seigneur</p>
          </div>
          <ChevronRight size={18} className="text-[#D4AF37]" />
        </div>

        {/* Grille d'Actions (Icon Buttons) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Bouton Formulaire */}
          <button 
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2.5rem] border-2 border-[#EADAC5] shadow-sm active:scale-95 transition-all group hover:border-[#2E4A25]"
          >
            <div className="w-16 h-16 bg-[#F1F5EF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2E4A25] transition-colors">
              <FileText size={32} className="text-[#2E4A25] group-hover:text-[#D4AF37]" />
            </div>
            <span className="font-bold text-sm">Demande</span>
            <span className="text-[10px] text-[#6B5A4B] opacity-60 font-medium">ÉTAPE 1</span>
          </button>

          {/* Bouton Paiement */}
          <a 
            href="https://pay.wave.com/m/M_ci_15fCRNAgit8_/c/ci/"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2.5rem] border-2 border-[#EADAC5] shadow-sm active:scale-95 transition-all group hover:border-[#1ca8e4]"
          >
            <div className="w-16 h-16 bg-[#EBF7FF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1ca8e4] transition-colors">
              <Wallet size={32} className="text-[#1ca8e4] group-hover:text-white" />
            </div>
            <span className="font-bold text-sm">Offrande</span>
            <span className="text-[10px] text-[#6B5A4B] opacity-60 font-medium">ÉTAPE 2</span>
          </a>
        </div>

        {/* Bannière Info Catholique */}
        <div className="bg-[#2E4A25] p-6 rounded-[2.5rem] text-white relative overflow-hidden shadow-lg">
          <div className="absolute -bottom-4 -right-4 opacity-10">
            <Heart size={80} fill="currentColor" />
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <Info size={16} className="text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Instructions</span>
            </div>
            <p className="text-sm font-serif leading-relaxed italic">
              "Faites cela en mémoire de moi."
            </p>
            <p className="text-[11px] opacity-80 leading-snug">
              Veuillez remplir le formulaire avant de procéder à l'offrande via Wave.
            </p>
          </div>
        </div>
      </main>

      {/* Barre de Navigation style APK */}
      <nav className="bg-white border-t border-[#EADAC5] py-4 px-10 flex justify-between items-center rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center gap-1 text-[#2E4A25]">
          <div className="bg-[#2E4A25]/10 p-2 rounded-xl">
            <Cross size={20} />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-tighter">Paroisse</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#6B5A4B]/60" onClick={() => setShowForm(true)}>
          <FileText size={20} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">Demande</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#6B5A4B]/60">
          <Phone size={20} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">Contact</span>
        </button>
      </nav>

      {/* Modal Formulaire Full Screen APK */}
      {showForm && (
        <div className="fixed inset-0 z-[100] bg-[#FAF7F2] flex flex-col animate-in slide-in-from-bottom duration-300">
          <div className="p-4 flex items-center justify-between border-b border-[#EADAC5] bg-white">
            <button 
              onClick={() => setShowForm(false)}
              className="p-2 text-[#2E4A25]"
            >
              <X size={24} />
            </button>
            <h3 className="font-serif font-bold text-lg">Votre Demande</h3>
            <div className="w-10"></div> {/* Spacer */}
          </div>
          <div className="flex-1 bg-white">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
              className="w-full h-full border-none"
              title="Formulaire"
            >
              Chargement…
            </iframe>
          </div>
          <div className="p-6 bg-white border-t border-[#EADAC5]">
            <button 
              onClick={() => setShowForm(false)}
              className="w-full bg-[#2E4A25] text-[#D4AF37] py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
            >
              J'ai terminé ma demande
            </button>
          </div>
        </div>
      )}

      {/* Footer minimaliste */}
      <footer className="bg-white pb-6 pt-2 text-center text-[9px] text-[#6B5A4B] opacity-40 uppercase tracking-widest font-bold">
        Ste Famille Nazareth Divo
      </footer>

    </div>
  );
};

export default App;
