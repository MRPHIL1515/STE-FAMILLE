
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
  Copy,
  Info,
  CheckCircle2,
  Sparkles,
  BookOpen,
  HelpCircle,
  Check,
  Send
} from 'lucide-react';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [offeringInitiated, setOfferingInitiated] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const waveLink = "https://pay.wave.com/m/M_ci_Hv81mxpuJK74/c/ci/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waveLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-24 selection:bg-[#c5a059]/20">
      {/* Premium Elegant Header with Sacred Architecture Overlay */}
      <header className="bg-slate-950 text-white pt-20 pb-28 px-6 relative overflow-hidden border-b border-[#c5a059]/20 shadow-2xl">
        {/* Sacred Light Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Subtle geometry grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[1px] h-full bg-gradient-to-b from-[#c5a059] to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -top-12 -right-12 pointer-events-none select-none"
        >
          <Church size={320} strokeWidth={0.5} className="text-[#c5a059]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center"
        >
          {/* Parish Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/25 text-[#dbb573] text-[10px] font-bold uppercase tracking-[0.25em] mb-6 shadow-inner">
            <Sparkles size={10} className="text-[#c5a059]" />
            <span>Portail des Offrandes</span>
          </div>

          {/* Golden Halo cross emblem */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-slate-900 rounded-full border-2 border-[#c5a059] flex items-center justify-center shadow-[0_0_25px_rgba(197,160,89,0.25)] relative z-10">
              <Cross size={34} className="text-[#c5a059] animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-[#c5a059]/20 rounded-full blur-xl scale-125 z-0" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c5a059] mb-2">Archidiocèse de Gagnoa</p>
          <h1 className="font-serif text-4xl font-semibold text-white tracking-tight mb-2">Sainte Famille</h1>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-3" />
          <p className="text-slate-400 text-xs font-light max-w-[280px] leading-relaxed">
            Paroisse de Nazareth • Divo
          </p>
        </motion.div>
      </header>

      {/* Main Container */}
      <main className="max-w-md mx-auto px-4 -mt-14 relative z-20 space-y-6">
        
        {/* Status / Welcome card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-4"
        >
          <div className="bg-amber-50 p-3 rounded-xl text-[#b49051] shrink-0">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="font-serif text-lg font-semibold text-slate-900 tracking-tight">Intentions & Messes</h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Confiez vos intentions de prière et réalisez votre offrande facilement en 2 étapes consécutives.
            </p>
          </div>
        </motion.div>

        {/* Steps Progress Dashboard */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Progression</span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {formCompleted && offeringInitiated ? "Complété (2/2)" : formCompleted ? "Étape 1 validée" : "En attente"}
            </span>
          </div>

          {/* Step 1 Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${formCompleted ? 'border-[#c5a059]/40 shadow-md shadow-amber-500/[0.02]' : 'border-slate-100 shadow-sm'}`}
          >
            <button 
              onClick={() => {
                setShowForm(true);
                setFormCompleted(true);
              }}
              className="w-full p-5 flex items-center gap-4 text-left group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${formCompleted ? 'bg-amber-50 text-[#b49051]' : 'bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-[#c5a059]/10 group-hover:text-[#b49051]'}`}>
                {formCompleted ? <Check size={20} strokeWidth={2.5} /> : <span className="font-serif font-semibold text-sm">1</span>}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-sm">Remplir le formulaire</h3>
                  {formCompleted && (
                    <span className="text-[8px] bg-amber-100 text-[#b49051] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Rempli</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Détaillez vos intentions de messe</p>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
            </button>
            <div className="px-5 pb-3 pt-1 border-t border-slate-50 flex justify-between items-center bg-slate-50/50">
              <span className="text-[10px] text-slate-400 font-light">Enregistrement obligatoire</span>
              <button 
                onClick={() => setFormCompleted(!formCompleted)}
                className="text-[10px] font-semibold text-[#b49051] hover:underline"
              >
                {formCompleted ? "Marquer non fait" : "Marquer fait"}
              </button>
            </div>
          </motion.div>

          {/* Step 2 Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${offeringInitiated ? 'border-[#1ca8e4]/40 shadow-md shadow-[#1ca8e4]/[0.02]' : 'border-slate-100 shadow-sm'}`}
          >
            <a 
              href={waveLink}
              target="_top"
              rel="noopener noreferrer"
              onClick={() => setOfferingInitiated(true)}
              className="w-full p-5 flex items-center gap-4 text-left group block"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${offeringInitiated ? 'bg-sky-50 text-[#1ca8e4]' : 'bg-[#1ca8e4]/5 text-[#1ca8e4] group-hover:bg-[#1ca8e4]/10'}`}>
                {offeringInitiated ? <Check size={20} strokeWidth={2.5} /> : <span className="font-serif font-semibold text-sm">2</span>}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-900 text-sm">Faire l'offrande Wave</h3>
                  {offeringInitiated && (
                    <span className="text-[8px] bg-sky-100 text-[#1ca8e4] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider font-sans">Effectué</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Offrande sécurisée via l'application Wave</p>
              </div>
              <Wallet size={18} className="text-[#1ca8e4] group-hover:scale-110 transition-transform" />
            </a>
            <div className="px-5 pb-3 pt-1 border-t border-slate-50 flex justify-between items-center bg-slate-50/50">
              <span className="text-[10px] text-slate-400 font-light">Redirection directe</span>
              <button 
                onClick={() => setOfferingInitiated(!offeringInitiated)}
                className="text-[10px] font-semibold text-[#1ca8e4] hover:underline"
              >
                {offeringInitiated ? "Réinitialiser" : "Déclarer fait"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Elegant Information Banner & Helper */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-slate-50 pb-2.5">
            <Info size={16} className="text-[#c5a059]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Paiement Wave Direct</span>
          </div>
          
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Pour garantir un traitement immédiat, le lien ci-dessous ouvre directement l'interface sécurisée de paiement Wave <span className="font-semibold">PHIL Services</span> de la paroisse sans intermédiaire.
          </p>

          <div className="flex gap-2">
            <a 
              href={waveLink} 
              target="_top"
              rel="noopener noreferrer"
              onClick={() => setOfferingInitiated(true)}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 text-center text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Accéder au paiement direct</span>
              <ChevronRight size={14} className="text-[#c5a059]" />
            </a>
            <button 
              onClick={copyToClipboard}
              className="px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl shadow-sm border border-slate-200/50 transition-colors flex items-center justify-center"
              aria-label="Copier le lien"
            >
              <Copy size={16} />
            </button>
          </div>
        </motion.div>

        {/* Interactive FAQ & Teachings Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <BookOpen size={16} className="text-[#c5a059]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Consignes & Intentions</span>
          </div>

          <div className="space-y-2">
            {[
              {
                q: "Pourquoi célébrer une intention de messe ?",
                a: "La messe est le plus grand acte de prière chrétienne. Faire célébrer une messe s'adresse aux défunts pour hâter leur réunion céleste, ou pour rendre grâce pour les bienfaits de l'existence."
              },
              {
                q: "Comment s'assurer de la bonne transmission ?",
                a: "Aussitôt que vous remplissez le formulaire, la liste liturgique de la paroisse est mise à jour. Nous validons vos intentions dès réception de l'offrande Wave correspondante."
              },
              {
                q: "Quel est le montant attendu de l'offrande ?",
                a: "Selon les directives diocésaines, l'offrande recommandée pour l'intention d'une messe est à la discrétion et générosité de chaque fidèle. Les fonds collectés financent directement la catéchèse et s'assurent du bon fonctionnement de la Paroisse Sainte Famille."
              }
            ].map((faq, idx) => {
              const active = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-lg overflow-hidden transition-all duration-200">
                  <button 
                    onClick={() => setActiveFaq(active ? null : idx)}
                    className="w-full px-3.5 py-2.5 bg-slate-50/50 hover:bg-slate-50 text-left flex justify-between items-center"
                  >
                    <span className="text-xs font-semibold text-slate-800">{faq.q}</span>
                    <span className="text-[10px] font-bold text-[#c5a059] transition-transform duration-300">
                      {active ? '▲' : '▼'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-3.5 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed font-light"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing Benediction */}
        <div className="text-center pt-6 pb-2">
          <p className="font-serif italic text-slate-400 text-xs">« Paix, Joie et Charité dans la Sainte Famille »</p>
        </div>
      </main>

      {/* Floating Modern Tab-Bar (Responsive Bottom Navigation) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/60 z-40 shadow-lg">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
          <button className="flex flex-col items-center justify-center w-full h-full text-[#c5a059]">
            <Church size={20} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Paroisse</span>
          </button>
          
          <button 
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-900 transition-colors"
          >
            <FileText size={20} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Demander</span>
          </button>
          
          <a 
            href="tel:+2250712041710"
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Phone size={20} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Contact</span>
          </a>
        </div>
      </nav>

      {/* Floating Elegant Toast Notification System */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-[#faf9f6] border border-[#c5a059]/40 px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl backdrop-blur-sm"
          >
            <Sparkles className="text-[#c5a059]" size={14} />
            <span className="text-[11px] font-semibold tracking-wide uppercase">Lien de paiement copié !</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Bottom Drawer / Sheet with Smooth Backdrop overlay */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="fixed inset-0 z-50 bg-slate-950"
            />
            
            {/* Slide-Up Bottom Sheet */}
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed inset-x-0 bottom-0 top-10 md:top-20 z-50 bg-[#faf9f6] rounded-t-[2.5rem] overflow-hidden flex flex-col shadow-2xl border-t border-[#c5a059]/20"
            >
              {/* Header inside Bottom Sheet */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100 bg-white">
                <button 
                  onClick={() => setShowForm(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
                <div className="text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#c5a059]">Étape 1 sur 2</span>
                  <h3 className="font-serif font-semibold text-base text-slate-900 leading-none">Remplir les Intentions</h3>
                </div>
                <div className="w-8"></div>
              </div>
              
              {/* Embed Google Form */}
              <div className="flex-1 bg-white relative">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
                  className="w-full h-full border-none"
                  title="Formulaire"
                >
                  Chargement en cours…
                </iframe>
              </div>

              {/* Step Action leading directly to Wave and setting formCompleted flag */}
              <div className="p-4 bg-white border-t border-slate-100">
                <a 
                  href={waveLink}
                  target="_top"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setFormCompleted(true);
                    setOfferingInitiated(true);
                    setShowForm(false);
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Étape suivante : Faire l'offrande Wave</span>
                  <Send size={15} className="text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

