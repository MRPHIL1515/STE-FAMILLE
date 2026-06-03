import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cross, 
  FileText, 
  Wallet, 
  Phone, 
  X, 
  ChevronRight,
  ChevronLeft,
  Church,
  CalendarDays,
  Copy,
  Info,
  CheckCircle2,
  Sparkles,
  BookOpen,
  HelpCircle,
  Check,
  Send,
  Loader2
} from 'lucide-react';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(4); // 4 seconds auto-redirect on step 2
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const waveLink = "https://pay.wave.com/m/M_ci_Hv81mxpuJK74/c/ci/";
  const parishPhone = "+2250712041710";

  // Auto-redirect effect when reaching Step 2
  useEffect(() => {
    if (currentStep === 2) {
      setCountdown(4); // reset
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Auto open wave
            window.open(waveLink, '_top');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waveLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNextFromStep1 = () => {
    setCurrentStep(2);
  };

  const triggerManualWave = () => {
    window.open(waveLink, '_top');
  };

  const resetFlow = () => {
    setIframeLoaded(false);
    setCurrentStep(1);
  };

  // Slide transition variants for steps
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Track slide direction (purely local state to keep transition direction pristine)
  const [direction, setDirection] = useState(1);

  const setStepWithDirection = (step: 1 | 2 | 3) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-28 selection:bg-[#c5a059]/20 relative overflow-x-hidden">
      
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#c5a059] via-amber-500 to-[#c5a059] sticky top-0 z-[60]" />

      {/* Premium Elegant Header with Sacred Architecture Overlay */}
      <header className="bg-slate-950 text-white pt-14 pb-20 px-6 relative overflow-hidden border-b border-[#c5a059]/15 shadow-2xl">
        {/* Sacred Light Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.1)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Subtle Geometry Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[1px] h-full bg-gradient-to-b from-[#c5a059] to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
        </div>

        {/* Floating sacred architecture Church silhouette */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 0.04, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -top-6 -right-12 pointer-events-none select-none"
        >
          <Church size={300} strokeWidth={0.5} className="text-[#c5a059]" />
        </motion.div>
        
        <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center">
          {/* Archdiocese Label */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#dbb573] text-[9px] font-bold uppercase tracking-[0.25em] mb-5 shadow-inner"
          >
            <Sparkles size={9} className="text-[#c5a059] animate-pulse" />
            <span>Archidiocèse de Gagnoa</span>
          </motion.div>

          {/* Golden Sacred Emblem with animated layout glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mb-5"
          >
            <div className="w-16 h-16 bg-slate-900 rounded-full border-2 border-[#c5a059] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] relative z-10">
              <Cross size={28} className="text-[#c5a059]" />
            </div>
            <div className="absolute inset-0 bg-[#c5a059]/15 rounded-full blur-md scale-125 z-0" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-3xl font-semibold text-white tracking-tight mb-1"
          >
            Sainte Famille
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-2" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-slate-400 text-xs font-light max-w-[280px]"
          >
            Paroisse de Nazareth • Divo
          </motion.p>
        </div>
      </header>

      {/* Main Interactive Step Wizard */}
      <main className="max-w-md mx-auto px-4 -mt-10 relative z-20 space-y-6">
        
        {/* Dynamic Multi-Step Progress Dashboard (UX Designer Inspired) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-[0_10px_25px_rgba(0,0,0,0.02)] border border-slate-100"
        >
          {/* Central Progress Flow Indicator dots/lines */}
          <div className="relative flex justify-between items-center max-w-[280px] mx-auto pb-1 mt-1">
            {/* Connecting background progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            {/* Dynamic foreground progress bar based on active step */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#c5a059] to-amber-500 -translate-y-1/2 transition-all duration-500 ease-out z-0"
              style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
            />

            {[
              { id: 1, label: 'Intentions', icon: FileText },
              { id: 2, label: 'Offrande', icon: Wallet },
              { id: 3, label: 'Bénédiction', icon: CheckCircle2 }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <button 
                    onClick={() => setStepWithDirection(step.id as 1 | 2 | 3)}
                    aria-label={`Aller au étape ${step.id}`}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${
                      isCompleted 
                        ? 'bg-[#c5a059] text-white' 
                        : isActive 
                        ? 'bg-slate-900 text-white ring-4 ring-[#c5a059]/20' 
                        : 'bg-white border-2 border-slate-200 text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    {isCompleted ? <Check size={16} strokeWidth={3} /> : <StepIcon size={16} />}
                  </button>
                  <span className={`text-[9px] font-bold tracking-wider uppercase mt-1.5 transition-colors duration-300 ${isActive ? 'text-slate-900 font-extrabold' : 'text-slate-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Step Content Area with Framer Motion Sliding transitions */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                {/* Step Title / Helper */}
                <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.015)] border border-slate-100 flex items-start gap-3.5">
                  <div className="bg-amber-50 p-2.5 rounded-xl text-[#b49051] shrink-0">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif text-base font-semibold text-slate-900 tracking-tight">Rédiger votre intention</h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      L'écriture de votre intention se fait à travers le formulaire de la paroisse ci-dessous. Dès validation, passez à l'étape 2.
                    </p>
                  </div>
                </div>

                {/* Google Forms Integration Block */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-[520px] relative">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-3 z-30">
                      <Loader2 className="text-[#c5a059] animate-spin" size={32} />
                      <p className="text-xs text-slate-400 font-light mt-1">Chargement du formulaire sécurisé...</p>
                    </div>
                  )}
                  
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
                    className="w-full h-full border-none z-10"
                    title="Formulaire d'Intention Liturgique"
                    onLoad={() => setIframeLoaded(true)}
                  >
                    Chargement en cours…
                  </iframe>

                  {/* Elegant Floating helper over iframe scroll path */}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
                </div>

                {/* Prompting action for Step 1 -> Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col gap-3"
                >
                  <p className="text-[11px] text-slate-400 leading-tight text-center font-light">
                    Une fois que vous avez cliqué sur <span className="font-semibold text-slate-600">"Envoyer"</span> dans le formulaire ci-dessus :
                  </p>
                  <button 
                    onClick={handleNextFromStep1}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-[#faf9f6] py-3.5 rounded-xl font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 group border border-[#c5a059]/20"
                  >
                    <span>Valider & Passer au Paiement</span>
                    <ChevronRight size={14} className="text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                {/* Step Title / Helper */}
                <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(0,0,0,0.015)] border border-slate-100 flex items-start gap-3.5">
                  <div className="bg-sky-50 p-2.5 rounded-xl text-[#1ca8e4] shrink-0">
                    <Wallet size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif text-base font-semibold text-slate-900 tracking-tight">Faire l'offrande sécurisée</h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      L'offrande pour l'intention de messe est réalisée sur la passerelle sécurisée <span className="font-semibold text-[#1ca8e4]">Wave</span>.
                    </p>
                  </div>
                </div>

                {/* Automation Countdown Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 border border-[#c5a059]/20 shadow-xl overflow-hidden relative">
                  
                  {/* Decorative golden ring element */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-white/5 pointer-events-none" />
                  
                  <div className="flex flex-col items-center text-center space-y-4 py-4 relative z-10">
                    <div className="relative">
                      {/* Interactive Countdown Loader Spinner */}
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-slate-800"
                          strokeWidth="4"
                          fill="transparent"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-[#1ca8e4] transition-all duration-1000 ease-linear"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray={213.6}
                          strokeDashoffset={213.6 - (213.6 * countdown) / 4}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-2xl font-bold text-white">{countdown}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm tracking-wide text-[#faf9f6]">Redirection automatique</h3>
                      <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed max-w-[260px] font-light">
                        Nous vous redirigeons automatiquement vers la passerelle sécurisée de la paroisse Sainte Famille.
                      </p>
                    </div>

                    <div className="w-full pt-2 flex flex-col gap-2">
                      <button 
                        onClick={triggerManualWave}
                        className="w-full bg-[#1ca8e4] hover:bg-[#1a9ad2] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group"
                      >
                        <span>Ouvrir Wave maintenant</span>
                        <ChevronRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      
                      <button 
                        onClick={copyToClipboard}
                        className="w-full bg-slate-800 hover:bg-slate-700/80 text-slate-300 py-2.5 rounded-xl font-medium text-xs border border-slate-700/60 transition-all flex items-center justify-center gap-2"
                      >
                        <Copy size={13} />
                        <span>{copied ? "Lien copié !" : "Copier le lien direct"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Next stage panel */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-light">
                    <Info size={14} className="text-slate-400" />
                    <span>Une fois le paiement complété</span>
                  </div>
                  
                  <button 
                    onClick={() => setStepWithDirection(3)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-1"
                  >
                    <span>Étape suivante</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                {/* Spiritual Sacred Success Panel */}
                <div className="bg-white rounded-3xl p-6 border border-[#c5a059]/30 shadow-[0_15px_30px_rgba(197,160,89,0.05)] text-center relative overflow-hidden space-y-5">
                  <div className="absolute top-0 right-0 pointer-events-none opacity-5">
                    <Church size={150} className="text-[#c5a059]" />
                  </div>
                  
                  {/* Big Glowing Confirmation Icon */}
                  <div className="flex justify-center relative my-2">
                    <div className="w-14 h-14 bg-amber-50 rounded-full border border-[#c5a059] flex items-center justify-center relative z-10 shadow-sm">
                      <Sparkles size={24} className="text-[#c5a059] animate-pulse" />
                    </div>
                    <div className="absolute inset-0 bg-[#c5a059]/10 rounded-full blur-md scale-150 z-0" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-xl font-semibold text-slate-900 tracking-tight">Merci pour votre Offrande</h2>
                    <p className="font-serif italic text-sm text-[#b49051]">« Que Dieu vous accorde sa Paix et sa Grâce »</p>
                  </div>

                  <div className="h-[1px] w-full bg-slate-100" />

                  <p className="text-xs text-slate-500 leading-relaxed font-light px-2">
                    Votre intention de prière a été enregistrée avec succès. L'équipe liturgique de la paroisse Sainte Famille s'assurera du bon déroulement de votre célébration à l'autel divin.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-100 space-y-2.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-light">Service liturgique</span>
                      <span className="text-slate-800 font-semibold">Paroisse Sainte Famille Divo</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-light">Transmission</span>
                      <span className="text-amber-600 font-semibold flex items-center gap-1">
                        <Check size={12} strokeWidth={3} /> Automatique
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-light">Archidiocèse</span>
                      <span className="text-slate-800 font-medium font-sans">Gagnoa</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <button 
                      onClick={resetFlow}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3.5 text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <FileText size={13} />
                      <span>Nouvelle Demande</span>
                    </button>
                    
                    <a 
                      href={`tel:${parishPhone}`}
                      className="px-4.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl shadow-sm border border-slate-200/60 transition-colors flex items-center justify-center gap-1.5 text-xs font-semibold"
                    >
                      <Phone size={13} />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>

                {/* Consignes, Teachings & Accordion inside Step 3 for support */}
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                    <BookOpen size={16} className="text-[#c5a059]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">Enseignements liturgiques</span>
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
                        a: "Selon les directives diocésaines, l'offrande recommandée pour l'intention d'une messe est à la discrétion et générosité de chaque fidèle. Les fonds collectés financent directement les activités paroissiales de Sainte Famille Nazareth."
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
                            <span className="text-[9px] font-bold text-[#c5a059] transition-transform duration-300">
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Back-step Button when active */}
        {currentStep > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center pt-2"
          >
            <button 
              onClick={() => setStepWithDirection((currentStep - 1) as 1 | 2 | 3)}
              className="text-xs text-slate-400 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors"
            >
              <ChevronLeft size={14} />
              <span>Retourner à l'étape précédente</span>
            </button>
          </motion.div>
        )}

        {/* Closing Benediction */}
        <div className="text-center pt-6 pb-2">
          <p className="font-serif italic text-slate-400 text-xs">« Paix, Joie et Charité dans la Sainte Famille »</p>
        </div>
      </main>

      {/* Floating Elegant Tab-Bar (Synced bottom controls) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/60 z-40 shadow-lg">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
          <button 
            onClick={() => setStepWithDirection(1)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${currentStep === 1 ? 'text-[#c5a059]' : 'text-slate-400 hover:text-slate-900'}`}
          >
            <FileText size={18} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1 font-sans">1. Demander</span>
          </button>
          
          <button 
            onClick={() => setStepWithDirection(2)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${currentStep === 2 ? 'text-[#1ca8e4]' : 'text-slate-400 hover:text-slate-900'}`}
          >
            <Wallet size={18} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1 font-sans">2. Offrande</span>
          </button>

          <button 
            onClick={() => setStepWithDirection(3)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${currentStep === 3 ? 'text-amber-600' : 'text-slate-400 hover:text-slate-900'}`}
          >
            <CheckCircle2 size={18} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1 font-sans">3. Bénédiction</span>
          </button>
          
          <a 
            href={`tel:${parishPhone}`}
            className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-slate-900 transition-colors border-l border-slate-100 pl-2"
          >
            <Phone size={18} />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1 font-sans">Paroisse</span>
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
    </div>
  );
};

export default App;
