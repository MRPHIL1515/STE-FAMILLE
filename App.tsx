
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
  CalendarDays,
  ExternalLink,
  Copy
} from 'lucide-react';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const waveLink = "https://pay.wave.com/m/M_ci_15fCRNAgit8_/c/ci/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waveLink);
    alert("Lien copié !");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none overflow-hidden">
      
      {/* Barre d'état / Header Style App APK */}
      <header className="bg-[#1e3a8a] text-[#d4af37] px-6 pt-10 pb-8 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        {/* Motif religieux discret */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Church size={140} strokeWidth={1} />
        </div>
        
        <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#d4af37] p-2.5 rounded-2xl shadow-lg border border-[#b8860b]">
              <Cross size={28} className="text-[#1e3a8a]" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-2xl leading-tight text-white tracking-tight">Sainte Famille</h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] opacity-90">Paroisse de Divo</p>
            </div>
          </div>
          <a href="tel:+22500000000" className="bg-white/10 p-3 rounded-2xl backdrop-blur-lg border border-white/20 active:scale-90 transition-transform">
            <Phone size={22} className="text-white" />
          </a>
        </div>

        <div className="mt-10 relative z-10">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/30 mb-2">
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Service Officiel</p>
          </div>
          <h2 className="text-3xl font-serif font-bold text-white">Espace de Prière</h2>
        </div>
      </header>

      {/* Contenu Principal - Dashboard APK Style */}
      <main className="flex-1 px-6 py-8 overflow-y-auto space-y-8 pb-32">
        
        {/* Widget Intentions */}
        <div className="bg-white p-6 rounded-[2.5rem] shadow-md border border-slate-200 flex items-center gap-4 active:bg-slate-50 transition-colors">
          <div className="bg-slate-50 p-4 rounded-2xl text-[#d4af37] border border-slate-200">
            <CalendarDays size={28} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base">Intentions de Messe</h3>
            <p className="text-xs text-slate-500 font-medium">Suivez les deux étapes ci-dessous</p>
          </div>
          <ChevronRight size={20} className="text-[#d4af37]" />
        </div>

        {/* Grille de Boutons Iconiques */}
        <div className="grid grid-cols-2 gap-5">
          {/* Étape 1 : Formulaire */}
          <button 
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-[3rem] border-2 border-slate-200 shadow-sm active:scale-95 transition-all group hover:border-[#1e3a8a]"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#1e3a8a] transition-colors border border-slate-200">
              <FileText size={36} className="text-[#1e3a8a] group-hover:text-[#d4af37]" />
            </div>
            <span className="font-bold text-sm tracking-tight">1. Demande</span>
            <span className="text-[9px] text-[#1e3a8a] font-black uppercase mt-1 opacity-60">Formulaire</span>
          </button>

          {/* Étape 2 : Paiement */}
          <a 
            href={waveLink}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-[3rem] border-2 border-slate-200 shadow-sm active:scale-95 transition-all group hover:border-[#1ca8e4]"
          >
            <div className="w-20 h-20 bg-[#EBF7FF] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#1ca8e4] transition-colors border border-slate-200">
              <Wallet size={36} className="text-[#1ca8e4] group-hover:text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight">2. Offrande</span>
            <span className="text-[9px] text-[#1ca8e4] font-black uppercase mt-1 opacity-60">Via Wave</span>
          </a>
        </div>

        {/* Section de secours / Lien direct spécifique */}
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-inner space-y-4">
          <div className="flex items-center gap-2 text-slate-700">
            <ExternalLink size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Lien de paiement direct</span>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-[11px] text-slate-600 leading-relaxed text-center italic">
              "Veuillez Payer <strong>PHIL services</strong> avec Wave en cliquant sur le lien ci-dessous. Ajoutez cet expéditeur à vos contacts pour rendre le lien cliquable."
            </p>
            
            <div className="mt-4 flex flex-col items-center gap-3">
              <a 
                href={waveLink} 
                className="text-[#1ca8e4] font-bold text-[13px] break-all text-center underline px-4"
              >
                {waveLink}
              </a>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-[#1ca8e4]/10 text-[#1ca8e4] rounded-full text-[10px] font-bold active:scale-90 transition-transform"
              >
                <Copy size={14} /> Copier le lien
              </button>
            </div>
          </div>
        </div>

        {/* Message de Foi */}
        <div className="text-center pt-4">
          <p className="font-serif text-slate-500 opacity-60 text-sm">Que Dieu vous bénisse</p>
        </div>
      </main>

      {/* Barre de Navigation style APK */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 py-4 px-10 flex justify-between items-center rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] z-50">
        <button className="flex flex-col items-center gap-1.5 text-[#1e3a8a] active:scale-90 transition-transform">
          <div className="bg-[#1e3a8a]/10 p-2.5 rounded-2xl">
            <Cross size={22} />
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">Paroisse</span>
        </button>
        <button 
          onClick={() => setShowForm(true)}
          className="flex flex-col items-center gap-1.5 text-slate-400 active:scale-90 transition-transform"
        >
          <FileText size={22} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Demande</span>
        </button>
        <a 
          href="tel:+22500000000"
          className="flex flex-col items-center gap-1.5 text-slate-400 active:scale-90 transition-transform"
        >
          <Phone size={22} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Contact</span>
        </a>
      </nav>

      {/* Modal Formulaire Full Screen APK */}
      {showForm && (
        <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col animate-in slide-in-from-bottom duration-500">
          <div className="px-6 py-5 flex items-center justify-between border-b border-slate-200 bg-white shadow-sm">
            <button 
              onClick={() => setShowForm(false)}
              className="p-2 text-[#1e3a8a] bg-slate-50 rounded-xl active:scale-90 transition-transform"
            >
              <X size={24} />
            </button>
            <h3 className="font-serif font-bold text-xl text-[#1e3a8a]">Intention de Messe</h3>
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

          <div className="p-6 bg-white border-t border-slate-200 flex flex-col gap-3">
            <button 
              onClick={() => setShowForm(false)}
              className="w-full bg-[#1e3a8a] text-[#d4af37] py-5 rounded-[2rem] font-bold text-base shadow-xl active:scale-95 transition-all border border-[#d4af37]/20"
            >
              Suivant : Faire l'offrande
            </button>
            <p className="text-[10px] text-center text-slate-500">Appuyez ici après avoir validé le formulaire</p>
          </div>
        </div>
      )}

      {/* Footer Minimaliste */}
      <div className="pb-24 pt-4 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">
          Sainte Famille Nazareth • Divo
        </p>
      </div>

    </div>
  );
};

export default App;
