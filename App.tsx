import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
const childrenPhoto = '/src/assets/images/enfants_choeur_1780673429489.png';
import { 
  FileText, 
  Wallet, 
  Phone, 
  ChevronRight,
  Church,
  Copy,
  Info,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Check,
  Send,
  Moon,
  Clock,
  ChevronLeft,
  Lock,
  ArrowRight,
  Heart,
  Calendar,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'home' | 'intentions' | 'offrande' | 'success'>('home');
  const [direction, setDirection] = useState(0); 
  const [copied, setCopied] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [offeringInitiated, setOfferingInitiated] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isValidating, setIsValidating] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);

  // States for the introductory Cross animated curtain
  const [introOpened, setIntroOpened] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnterApp = () => {
    setIsEntering(true);
    setTimeout(() => {
      setIntroOpened(true);
    }, 1200);
  };

  // Operational schedule state: Always open for offline testing
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const waveLink = "https://pay.wave.com/m/M_ci_Hv81mxpuJK74/c/ci/";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(waveLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 60,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#c5a059', '#b49051', '#ebd5a3', '#0f172a', '#1ca8e4']
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 60,
      origin: { x: 0.8, y: 0.6 },
      colors: ['#c5a059', '#b49051', '#ebd5a3', '#0f172a', '#1ca8e4']
    });
  };

  // Safe linear navigation 
  const navigateTo = (newScreen: 'home' | 'intentions' | 'offrande' | 'success', dir: number = 0) => {
    setDirection(dir);
    setScreen(newScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntentionsValidation = () => {
    setIsValidating(true);
    setTimeout(() => {
      setFormCompleted(true);
      setIsValidating(false);
      triggerConfetti();
      navigateTo('offrande', 1);
    }, 1200);
  };

  const resetProcess = () => {
    setFormCompleted(false);
    setOfferingInitiated(false);
    navigateTo('home', -1);
  };

  // Overnight sleep screen
  if (!isOpen) {
    return (
      <div id="closed-screen" className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-between selection:bg-[#c5a059]/30 relative overflow-hidden">
        {/* Sacred Stars & Golden Halo Light Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(28,168,228,0.06)_0%,transparent_50%)] pointer-events-none" />
        
        {/* Subtle geometric line decor */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[1px] h-full bg-gradient-to-b from-[#c5a059] to-transparent" />
        </div>

        {/* Header decoration */}
        <div className="pt-12 px-6 text-center shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#dbb573] text-[9px] font-bold uppercase tracking-[0.25em] shadow-inner mb-2">
            <Moon size={10} className="text-[#c5a059]" />
            <span>Portail en Sommeil</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">Paroisse de Nazareth • Divo</p>
        </div>

        {/* Central Content */}
        <div className="max-w-md w-full mx-auto px-6 py-8 flex flex-col items-center justify-center text-center z-10 space-y-8 flex-1">
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/10 to-[#1ca8e4]/10 rounded-full blur-xl scale-150"
            />
            <div className="w-24 h-24 bg-slate-900 rounded-full border border-[#c5a059]/40 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.15)] relative z-10">
              <Church size={42} className="text-[#dbb573] opacity-80" />
              <div className="absolute top-1 right-1 bg-slate-950 p-1.5 rounded-full border border-slate-800 text-[#1ca8e4]">
                <Moon size={14} className="animate-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#faf9f6]">
              Portail Actuellement Fermé
            </h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto" />
            <p className="text-slate-400 text-sm font-light max-w-sm leading-relaxed">
              Le service d'offrandes et d'enregistrement des intentions de messe est suspendu pour la nuit.
            </p>
          </div>

          {/* Time and Info Badge */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 w-full space-y-3 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 justify-center text-[#dbb573] border-b border-slate-800 pb-2.5">
              <Clock size={16} />
              <span className="text-xs font-semibold tracking-wider uppercase">Heures de Service</span>
            </div>
            
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span className="font-light">Ouverture :</span>
              <span className="font-mono font-semibold text-emerald-400">06h00 du Matin</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span className="font-light">Fermeture :</span>
              <span className="font-mono font-semibold text-rose-400">18h00 du Soir</span>
            </div>

            <p className="text-[11px] text-slate-500 font-light pt-2 leading-relaxed">
              Veuillez revenir de jour pendant les heures opérationnelles pour enregistrer vos prières.
            </p>
          </div>

          {/* Emergency / Contact banner */}
          <div className="border-t border-slate-800 pt-6 w-full space-y-4">
            <p className="text-[11px] text-slate-400 font-light uppercase tracking-wider">
              En cas d'urgence pastorale (Sacrement des malades)
            </p>
            <a 
              href="tel:+2250712041710"
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs bg-slate-900 hover:bg-slate-800 border border-[#c5a059]/40 text-[#dbb573] rounded-xl py-3 text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              <Phone size={14} />
              <span>Contacter le Secrétariat</span>
            </a>
          </div>
        </div>

        {/* Closing devotions */}
        <div className="pb-10 text-center shrink-0 z-10 px-4">
          <p className="font-serif italic text-slate-500 text-xs text-center max-w-xs mx-auto leading-relaxed">
            « Que la Sainte Famille de Nazareth veille sur votre repos et fortifie votre foi. »
          </p>
        </div>
      </div>
    );
  }

  const stepVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 120 : dir < 0 ? -120 : 0,
      opacity: 0,
      scale: 0.98
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : dir < 0 ? 120 : 0,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
    })
  };

  // static resources to display inside the side Information cards
  const faqEntries = [
    {
      q: "Pourquoi célébrer une intention de messe ?",
      a: "La messe est le plus grand acte de prière chrétienne. Faire célébrer une messe est un geste de foi profonde, adressé pour accompagner les âmes des défunts au ciel, soutenir les malades, fortifier les vivants ou exprimer une fervente action de grâce pour les bienfaits divins."
    },
    {
      q: "Comment s'effectue la validation de ma demande ?",
      a: "Le processus est entièrement géré de manière linéaire : dès que vous soumettez le formulaire d'Intentions à l'Étape 1, vos confessions liturgiques sont intégrées à la base de données. L'Étape 2 vous redirige vers le paiement de l'offrande Wave. Notre secrétariat valide ensuite le traitement pour la liturgie."
    },
    {
      q: "Quel est le montant attendu de l'offrande de messe ?",
      a: "Suivant les codes du droit canonique et les recommandations de notre évêché, l'offrande est facultative et laissée à la générosité spirituelle de chacun. La contribution usuelle pour la célébration d'une messe est de 1 000 FCFA ou plus. Ses fonds soutiennent la vie des prêtres et le fonctionnement de notre Paroisse Sainte Famille."
    }
  ];

  if (!introOpened) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950 font-sans flex items-center justify-center select-none text-white">
        
        {/* Luminous light halo behind the central cross */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.18)_0%,transparent_65%)] pointer-events-none" />

        {/* Liturgical Golden Cross & Lines inside Intro screen before they split */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Vertical axis line of the Cross */}
          <motion.div 
            animate={isEntering ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#c5a059] to-transparent origin-center"
          />
          {/* Horizontal axis line of the Cross */}
          <motion.div 
            animate={isEntering ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent origin-center"
          />
        </div>

        {/* 4 Quadrants that split outwards like a split cross curtain */}
        {/* Bottom-Right Quadrant */}
        <motion.div 
          initial={{ x: 0, y: 0 }}
          animate={isEntering ? { x: '100%', y: '100%' } : { x: 0, y: 0 }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-slate-950 pointer-events-none z-10"
        />
        {/* Bottom-Left Quadrant */}
        <motion.div 
          initial={{ x: 0, y: 0 }}
          animate={isEntering ? { x: '-100%', y: '100%' } : { x: 0, y: 0 }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-950 pointer-events-none z-10"
        />
        {/* Top-Right Quadrant */}
        <motion.div 
          initial={{ x: 0, y: 0 }}
          animate={isEntering ? { x: '100%', y: '-100%' } : { x: 0, y: 0 }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-950 pointer-events-none z-10"
        />
        {/* Top-Left Quadrant */}
        <motion.div 
          initial={{ x: 0, y: 0 }}
          animate={isEntering ? { x: '-100%', y: '-100%' } : { x: 0, y: 0 }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-slate-950 pointer-events-none z-10"
        />

        {/* Central Dynamic Content container */}
        <motion.div 
          animate={isEntering ? { scale: 0.85, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-md w-full px-6 text-center space-y-10 z-20 flex flex-col items-center justify-center"
        >
          {/* Liturgical Golden Cross badge symbol */}
          <div className="relative">
            {/* Ambient golden soft ripples */}
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#c5a059]/40 rounded-full blur-2xl scale-125"
            />
            
            <div className="w-24 h-24 bg-slate-900 rounded-full border border-[#c5a059]/40 flex items-center justify-center shadow-[0_0_40px_rgba(197,160,89,0.3)] relative z-10">
              <div className="text-[#dbb573]">
                <Church size={42} />
              </div>
              
              {/* Miniature spark effects */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] border border-dashed border-[#c5a059]/30 rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] text-[#dbb573] font-bold uppercase tracking-[0.3em] block">
              Paroisse Sainte Famille de Nazareth • Divo
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#faf9f6] text-balance">
              Secrétariat Numérique des Intentions de Messe
            </h1>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto" />
            <p className="text-slate-400 text-xs md:text-sm font-light max-w-sm leading-relaxed">
              Présentez vos prières liturgiques et soutenez la vie paroissiale par vos intentions et offrandes libres en toute simplicité.
            </p>
          </div>

          <div className="pt-4 w-full">
            <button
              onClick={handleEnterApp}
              className="w-full max-w-xs mx-auto bg-gradient-to-r from-[#c5a059] to-[#ebd5a3] hover:from-[#b49051] hover:to-[#dbb573] text-slate-950 font-bold py-4 px-6 rounded-2xl text-xs tracking-[0.15em] uppercase shadow-[0_4px_25px_rgba(197,160,89,0.25)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Entrer en Communion</span>
              <Sparkles size={14} className="text-slate-950 animate-pulse" />
            </button>
            <p className="text-[9px] text-[#dbb573]/60 font-mono tracking-wider mt-3 uppercase">
              Cliquez pour démarrer l'accompagnement liturgique
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-slate-900 font-sans selection:bg-[#c5a059]/20 relative overflow-x-hidden">
      
      {/* Background Altar Boys Image (Arrière plan discret et élégant de la paroisse) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.14] bg-cover bg-center filter contrast-[105%] saturate-[110%]"
        style={{ backgroundImage: `url(${childrenPhoto})` }}
      />

      {/* Elegance Gradient Backdrops (Figma style layout styling) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(28,168,228,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Global Brand Header - Masterclass Design Banner */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-40 px-4 md:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-950 rounded-2xl border border-[#c5a059]/50 flex items-center justify-center shadow-md">
              <Church className="text-[#dbb573] h-5.5 w-5.5" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-sm tracking-tight text-slate-900">Sainte Famille de Nazareth</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase flex items-center gap-1.5">
                <span>Divo, Côte d'Ivoire</span>
                <span className="inline-block w-1 h-1 rounded-full bg-emerald-500"></span>
                <span className="text-emerald-600 font-bold lowercase tracking-normal">En ligne</span>
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock size={14} className="text-[#c5a059]" />
              <span>Heures opérationnelles : <strong>06h00 - 18h00</strong></span>
            </div>
            <a 
              href="tel:+2250712041710"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold tracking-wide transition-all border border-slate-200"
            >
              <Phone size={13} className="text-[#c5a059]" />
              <span>+225 07 12 04 17 10</span>
            </a>
          </div>

          {/* Mobile Info toggle button */}
          <button 
            onClick={() => setMobileInfoOpen(true)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            title="Consignes & Faq"
          >
            <HelpCircle size={20} className="text-[#c5a059]" />
          </button>
        </div>
      </header>

      {/* Main Responsive Grid Layout - Physically separating the interactive card from text informational items */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 z-10 relative">
        {screen === 'intentions' ? (
          /* HIGH QUALITY WIDE FORM - DIRECT PRESENTATION */
          <motion.div
            key="intentions-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-[0_24px_70px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative z-10"
          >
            {/* Top controls unique to wide form */}
            <div className="bg-slate-50/95 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <button 
                  onClick={() => navigateTo('home', -1)} 
                  className="px-3.5 py-2 rounded-xl text-slate-800 bg-white hover:bg-slate-50 font-bold text-xs transition-all border border-slate-200 flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer"
                >
                  <ChevronLeft size={15} />
                  <span>Retour</span>
                </button>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-wider bg-[#c5a059]/10 px-2.5 py-0.5 rounded-full inline-block">
                    Étape 1 sur 2 : Intentions
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mt-1">Inscrivez vos vœux liturgiques</h3>
                </div>
              </div>

              {/* Progress and status */}
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#c5a059] text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-[#c5a059]/10">1</div>
                  <div className="w-4 h-[1.5px] bg-slate-200 rounded animate-pulse" />
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-[10px] font-bold">2</div>
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-3">
                  En cours
                </span>
              </div>
            </div>

            {/* Completely normal wide presentation container for Google Forms iframe */}
            <div className="bg-slate-50 w-full h-[650px] md:h-[840px] relative">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
                className="w-full h-full border-none"
                title="Formulaire liturgique"
              >
                Chargement du service…
              </iframe>
            </div>

            {/* Custom high-conversion bottom validation trigger bar */}
            <div className="p-6 bg-white border-t border-slate-100 space-y-3.5">
              <button 
                onClick={handleIntentionsValidation}
                disabled={isValidating}
                className="w-full bg-[#c5a059] hover:bg-[#b49051] text-white py-4.5 px-6 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isValidating ? (
                  <>
                    <Clock size={15} className="animate-spin" />
                    <span>Enregistrement en cours...</span>
                  </>
                ) : (
                  <>
                    <span>J’ai soumis mes intentions et je valide l’étape 1</span>
                    <CheckCircle2 size={15} />
                  </>
                )}
              </button>
              <p className="text-center text-[10px] text-slate-500 font-medium font-sans">
                Saisissez vos intentions dans le formulaire officiel ci-dessus, puis validez via ce bouton d’or pour passer au règlement de l’offrande libre Wave (Étape 2).
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: PARISH INFO PANEL - LEFT (Displayed as a master side view for desktop, extremely clean and organized) */}
          <section className="hidden md:block md:col-span-4 lg:col-span-5 space-y-6">
            
            {/* Visual Liturgy card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-[#c5a059]/30 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12)_0%,transparent_60%)] pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#dbb573] text-[9px] font-bold uppercase tracking-wider">
                  <Sparkles size={8} /> par la foi de christ
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-balance">
                  Offrez une Sainte Messe
                </h2>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Qu'il s'agisse de confier l'un de vos chers défunts, de soutenir la guérison d'un proche malade ou de rendre grâce pour les dons de la vie, le sacrifice de la messe est l'acte de prière suprême.
                </p>
                
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <h3 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Horaire des liturgies</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div>
                      <p className="font-medium text-white">Semaine :</p>
                      <p className="text-[11px] font-light text-slate-400">Tous les matins à 06h00</p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Dimanche :</p>
                      <p className="text-[11px] font-light text-slate-400">Messe unique à 08h30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liturgical Quote Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-sm text-center relative">
              <p className="font-serif italic text-slate-600 text-xs leading-relaxed">
                « Si vous m'aimez, gardez mes commandements. Et pour tout ce que vous demandez à mon Père céleste en mon nom, Il vous l'accordera. »
              </p>
              <div className="mt-3 flex items-center justify-center gap-1">
                <div className="h-[1px] w-6 bg-slate-300" />
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400">Prière de Nazareth</span>
                <div className="h-[1px] w-6 bg-slate-300" />
              </div>
            </div>

            {/* Doctrine Accordion Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <BookOpen size={16} className="text-[#c5a059]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Doctrine & Règlements</span>
              </div>

              <div className="space-y-3">
                {faqEntries.map((faq, idx) => {
                  const active = activeFaq === idx;
                  return (
                    <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden transition-all">
                      <button 
                        onClick={() => setActiveFaq(active ? null : idx)}
                        className="w-full px-4 py-3 bg-slate-50/50 hover:bg-slate-50 text-left flex justify-between items-center transition-colors"
                      >
                        <span className="text-xs font-bold text-slate-800 pr-2">{faq.q}</span>
                        <span className={`text-[10px] font-bold text-[#c5a059] shrink-0 transition-transform duration-200 ${active ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white p-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed font-light"
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

          </section>

          {/* COLUMN 2: THE INTERACTIVE WIZARD APP (Desktop Column 7 / Centered card frame that acts as a sleek high-end Figma interface) */}
          <section className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col items-center w-full">
            
            {/* FIGMA-COMPATIBLE DEVICE MOCKUP CONTAINER - Generously widened for Google Forms and interactive comfort */}
            <div className="w-full max-w-[700px] bg-white rounded-[32px] border border-slate-200 shadow-[0_24px_70px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col relative min-h-[640px] md:min-h-[780px]">
              
              {/* Virtual Mockup Bezel Top Header */}
              <div className="bg-slate-50/80 backdrop-blur-md px-5 py-4 border-b border-slate-100 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  {screen !== 'home' && screen !== 'success' && (
                    <button 
                      onClick={() => {
                        const prev = screen === 'offrande' ? 'intentions' : 'home';
                        navigateTo(prev, -1);
                      }} 
                      className="px-2.5 py-1.5 rounded-xl text-slate-600 hover:bg-slate-200/65 flex items-center gap-1.5 text-xs font-semibold transition-colors border border-slate-200/40 bg-white"
                    >
                      <ChevronLeft size={14} className="text-slate-700" />
                      <span>Retour</span>
                    </button>
                  )}
                  {screen === 'home' && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Processus</span>
                    </div>
                  )}
                  {screen === 'success' && (
                    <div className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Finalisé</span>
                    </div>
                  )}
                </div>

                {/* Linear Interactive Breadcrumbs (The Stepper that states clear progressive tracking) */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    {/* Step 1 label status */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      formCompleted 
                        ? 'bg-emerald-500 text-white' 
                        : screen === 'intentions' 
                          ? 'bg-[#c5a059] text-white ring-4 ring-[#c5a059]/10' 
                          : 'bg-slate-100 text-slate-400'
                    }`}>
                      {formCompleted ? <Check size={10} strokeWidth={3} /> : '1'}
                    </div>

                    {/* Progress connector */}
                    <div className={`w-4 h-[1.5px] rounded ${formCompleted ? 'bg-emerald-500' : 'bg-slate-200'}`} />

                    {/* Step 2 label status */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      screen === 'success' 
                        ? 'bg-[#1ca8e4] text-white' 
                        : screen === 'offrande' 
                          ? 'bg-[#1ca8e4] text-white ring-4 ring-[#1ca8e4]/10' 
                          : 'bg-slate-100 text-slate-400'
                    }`}>
                      {screen === 'success' ? <Check size={10} strokeWidth={3} /> : '2'}
                    </div>
                  </div>

                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-3">
                    {screen === 'home' ? 'Départ' : screen === 'intentions' ? '1/2' : screen === 'offrande' ? '2/2' : 'OK'}
                  </span>
                </div>
              </div>

              {/* DYNAMIC SCREEN CAROUSEL FRAME */}
              <div className="flex-1 flex flex-col p-5 md:p-6 pb-2.5">
                <AnimatePresence mode="wait" custom={direction}>
                  
                  {/* SCREEN 1: THE ACCUEIL / WELCOME BOARD (Simple, warm, focused on prayer with altar boys photo centered) */}
                  {screen === 'home' && (
                    <motion.div
                      key="home"
                      custom={direction}
                      variants={stepVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="space-y-6 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-6 flex-1 flex flex-col justify-center">
                        
                        {/* Elegant Sacred Liturgical Cross Box */}
                        <div className="relative rounded-2xl h-72 overflow-hidden border-2 border-[#c5a059]/40 shadow-xl bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
                          {/* Symmetrical ray of light behind the cross */}
                          <div className="absolute inset-x-0 top-1/2 -translate-y-12 h-1 bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent blur-md pointer-events-none" />
                          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-[#c5a059]/20 to-transparent blur-md pointer-events-none" />
                          
                          {/* Radial golden halo */}
                          <div className="absolute w-52 h-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)] pointer-events-none" />

                          {/* Beautiful Golden Liturgical Latin Cross Constructed visually */}
                          <div className="relative w-40 h-48 flex items-center justify-center pointer-events-none">
                            {/* Vertical Beam */}
                            <motion.div 
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                              className="absolute w-2 h-40 bg-gradient-to-b from-[#ebd5a3] via-[#c5a059] to-[#ebd5a3] rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)] origin-center"
                            />
                            {/* Horizontal Beam */}
                            <motion.div 
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                              className="absolute h-2 w-24 bg-gradient-to-r from-[#ebd5a3] via-[#c5a059] to-[#ebd5a3] rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)] -translate-y-6 origin-center"
                            />

                            {/* Center Star Glow */}
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute w-5 h-5 rounded-full bg-white -translate-y-6 flex items-center justify-center shadow-[0_0_18px_#ebd5a3]"
                            >
                              <Sparkles size={10} className="text-[#c5a059]" />
                            </motion.div>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#ebd5a3]/90 block">
                              Paroisse Sainte Famille de Nazareth • Divo
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* SIMPLE DIRECT CALL TO ACTION */}
                      <div className="pt-3 space-y-2.5">
                        <button
                          onClick={() => navigateTo(formCompleted ? 'offrande' : 'intentions', 1)}
                          className="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-6 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                        >
                          <span>{formCompleted ? "Continuer vers votre Offrande (Étape 2)" : "Déposer une Intention de Prière"}</span>
                          <ArrowRight size={13} className="text-[#dbb573] group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        
                        <p className="text-center text-[10px] text-slate-400 font-medium font-sans">
                          Saisie rapide de vos intentions liturgiques suivie du règlement de l'offrande libre Wave.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 3: STEP 2 - THE SECURE PAYMENT PORTAL (Wave app direct launcher) */}
                  {screen === 'offrande' && (
                    <motion.div
                      key="offrande"
                      custom={direction}
                      variants={stepVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="space-y-5 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[9px] font-bold text-[#1ca8e4] uppercase tracking-wider bg-[#1ca8e4]/10 px-2 py-0.5 rounded-full">
                              Étape 2 : Offrande
                            </span>
                            <h4 className="font-serif font-bold text-base text-slate-900 mt-1.5">Apporter votre Offrande</h4>
                          </div>
                          <div className="bg-sky-50 text-[#1ca8e4] p-2 rounded-xl">
                            <Wallet size={16} />
                          </div>
                        </div>

                        {/* Payment Voucher Representation (Highly visual Figma layout) */}
                        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-4 text-center">
                          <div className="w-10 h-10 bg-[#1ca8e4]/10 text-[#1ca8e4] rounded-full flex items-center justify-center mx-auto">
                            <Wallet size={18} />
                          </div>

                          <div className="space-y-1.5">
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider text-[10px]">Identifiant de Paiement Officiel</p>
                            <h5 className="text-sm font-bold text-slate-800 bg-white border border-slate-200/80 px-4 py-2 rounded-xl shadow-sm inline-block">
                              PHIL SERVICES • Paroisse Divo
                            </h5>
                          </div>

                          <p className="text-xs text-slate-500 font-light leading-relaxed max-w-sm mx-auto">
                            Le bouton ci-dessous va vous rediriger de manière sécurisée vers votre application Wave pour composer librement votre montant d'offrande.
                          </p>
                        </div>

                        <div className="space-y-2.5 pt-1">
                          {/* Main Trigger payment link */}
                          <a 
                            href={waveLink}
                            target="_top"
                            rel="noopener noreferrer"
                            onClick={() => setOfferingInitiated(true)}
                            className="w-full bg-[#1ca8e4] hover:bg-[#1289be] text-white py-4 px-6 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 text-center"
                          >
                            <span>Ouvrir l'application Wave</span>
                            <ExternalLink size={13} className="text-white" />
                          </a>

                          {/* Secondary Copy Option */}
                          <button 
                            onClick={copyToClipboard}
                            className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2"
                          >
                            <Copy size={13} className="text-slate-500" />
                            <span>Copier le lien d'offrande Wave</span>
                          </button>
                        </div>

                        {/* Guide card */}
                        <div className="bg-sky-50/50 rounded-xl p-3.5 border border-[#1ca8e4]/20 text-[11px] text-slate-600 leading-normal flex items-start gap-2.5">
                          <Info size={14} className="text-[#1ca8e4] shrink-0 mt-0.5" />
                          <p>
                            Une fois l'offrande envoyée via l'application Wave, veuillez retenir la référence de transaction. Notre secrétariat s'assure ainsi d'imprimer vos dévotions liturgiques correctement.
                          </p>
                        </div>
                      </div>

                      {/* Confirmation to complete */}
                      <div className="pt-2">
                        <button 
                          onClick={() => navigateTo('success', 1)}
                          className="w-full bg-slate-950 hover:bg-slate-800 text-[#dbb573] py-4 px-6 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <span>J'ai fait mon offrande, Finaliser</span>
                          <CheckCircle2 size={13} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* SCREEN 4: SUCCESS / BENEDICTION CARD */}
                  {screen === 'success' && (
                    <motion.div
                      key="success"
                      custom={direction}
                      variants={stepVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="space-y-6 text-center py-6 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        <div className="relative inline-block">
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.3, opacity: 0.25 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute inset-0 bg-[#c5a059]/30 rounded-full blur-xl"
                          />
                          <div className="w-20 h-20 bg-slate-950 rounded-full border-2 border-[#c5a059] flex items-center justify-center shadow-xl relative z-10 mx-auto">
                            <Heart size={32} className="text-[#dbb573] animate-pulse" />
                          </div>
                        </div>

                        <div className="space-y-2.5 max-w-sm mx-auto">
                          <span className="text-[#dbb573] text-[9px] font-bold uppercase tracking-wider bg-[#c5a059]/10 border border-[#c5a059]/20 px-3 py-1 rounded-full">
                            Bénédiction Transmise
                          </span>
                          <h3 className="font-serif text-2xl font-bold tracking-tight text-slate-900">
                            Que Dieu vous guide !
                          </h3>
                          <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto" />
                          <p className="text-xs text-slate-500 leading-relaxed font-light">
                            Vos intentions de messe ont bien été enregistrées par nos vicaires liturgiques et votre offrande a été notifiée avec succès.
                          </p>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 max-w-xs mx-auto">
                          <p className="font-serif italic text-slate-600 text-[11px] leading-relaxed">
                            « La moisson est abondante, mais les ouvriers sont peu nombreux. Priez donc le maître de la moisson d’envoyer des ouvriers pour sa moisson. »
                          </p>
                          <p className="text-[8px] uppercase tracking-wider font-mono text-slate-400 mt-2">Matthieu 9:37-38</p>
                        </div>
                      </div>

                      <div className="space-y-2 pt-4">
                        <button 
                          onClick={resetProcess}
                          className="w-full bg-[#c5a059] hover:bg-[#b49051] text-white py-3.5 px-6 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
                        >
                          Faire une nouvelle demande
                        </button>
                        <button 
                          onClick={() => navigateTo('home', -1)}
                          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 px-6 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors"
                        >
                          Retourner à l'accueil
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Seamless Bottom Indicator Decor */}
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>Paroisse de Nazareth Divo</span>
                <span className="font-serif italic">« Fidélité • Charité »</span>
              </div>
            </div>

          </section>

        </div>
        )}


      </main>

      {/* MOBILE FULLSCREEN SIDE-DRAWER PANEL FOR DOCUMENTATION (Figma modal fallback) */}
      <AnimatePresence>
        {mobileInfoOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* dark backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileInfoOpen(false)}
              className="absolute inset-0 bg-black"
            />
            
            {/* drawer content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#c5a059]" />
                    <span className="font-serif font-bold text-sm">Informations & FAQ</span>
                  </div>
                  <button 
                    onClick={() => setMobileInfoOpen(false)}
                    className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200"
                  >
                    <X size={16} className="text-slate-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  {faqEntries.map((faq, idx) => (
                    <div key={idx} className="space-y-2">
                      <h5 className="font-bold text-xs text-slate-900 border-l-2 border-[#c5a059] pl-2">{faq.q}</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <h5 className="font-bold text-slate-800">Horaires des Messes</h5>
                  <p className="text-slate-500 font-light leading-relaxed">
                    • Semaine : Tous les matins de messe à 06h00<br />
                    • Dimanche : Messe unique solennelle à 08h30
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a 
                  href="tel:+2250712041710"
                  onClick={() => setMobileInfoOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-[#dbb573] py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center"
                >
                  <Phone size={12} />
                  <span>Appeler le secrétariat</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ELEGANT TOAST ALERTS */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-950 text-[#faf9f6]/95 border border-[#c5a059]/40 px-5 py-3 rounded-full flex items-center gap-2.5 shadow-2.5xl backdrop-blur-md"
          >
            <Sparkles className="text-[#c5a059] h-3.5 w-3.5" size={14} />
            <span className="text-[10px] font-bold tracking-wider uppercase font-mono">Lien d'offrande copié !</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
