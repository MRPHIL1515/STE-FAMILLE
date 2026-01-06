
import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  Cross, 
  Calendar, 
  FileText, 
  CheckCircle, 
  ExternalLink,
  Phone,
  CreditCard,
  Menu,
  X,
  Wallet
} from 'lucide-react';

// --- Types ---
interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Sub-components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EADAC5]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#708238] p-2 rounded-full">
            <Cross size={24} className="text-[#FDFBF7]" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-[#4A3728] leading-tight">
              Sainte Famille de Nazareth
            </h1>
            <p className="text-xs text-[#708238] font-medium uppercase tracking-widest">Divo, Côte d'Ivoire</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#presentation" className="hover:text-[#708238] transition-colors">Présentation</a>
          <a href="#comment-ca-marche" className="hover:text-[#708238] transition-colors">Étapes</a>
          <a href="#formulaire" className="hover:text-[#708238] transition-colors">Formulaire</a>
          <a 
            href="#payment" 
            className="bg-[#708238] text-white px-6 py-2.5 rounded-full hover:bg-[#5a6b2d] transition-all shadow-md active:scale-95"
          >
            Faire l'offrande
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EADAC5] absolute w-full left-0 py-6 px-4 flex flex-col gap-4 shadow-xl">
          <a href="#presentation" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Présentation</a>
          <a href="#comment-ca-marche" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Étapes</a>
          <a href="#formulaire" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Demande de messe</a>
          <a 
            href="#payment" 
            onClick={() => setIsOpen(false)}
            className="bg-[#708238] text-white px-6 py-3 rounded-xl text-center font-semibold"
          >
            Faire l'offrande (Wave)
          </a>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-[#EADAC5] text-[#4A3728] text-sm font-semibold mb-6">
        Portail Paroissial Officiel
      </span>
      <h2 className="text-4xl md:text-6xl font-serif text-[#4A3728] mb-6 leading-tight">
        Offrez une Intention de Messe
      </h2>
      <p className="text-lg md:text-xl text-[#6B5A4B] mb-10 max-w-2xl mx-auto leading-relaxed">
        Confiez vos intentions de prière ou le repos de vos défunts à la prière de notre communauté paroissiale de Divo.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#formulaire" 
          className="w-full sm:w-auto px-8 py-4 bg-[#708238] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#5a6b2d] transition-all flex items-center justify-center gap-2"
        >
          Remplir le formulaire <ArrowRight size={20} />
        </a>
        <a 
          href="#presentation" 
          className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#EADAC5] text-[#4A3728] rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
        >
          Pourquoi une messe ?
        </a>
      </div>
    </div>
  </section>
);

const Presentation: React.FC = () => (
  <section id="presentation" className="py-20 px-4 bg-[#F7F3EE]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-8">Pourquoi demander une messe ?</h2>
      <p className="text-[#6B5A4B] mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
        Toute messe a une valeur infinie. C'est le plus beau cadeau que l'on puisse offrir pour confier à Dieu les intentions qui nous sont chères.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#EADAC5] shadow-sm">
          <div className="inline-block mb-4 bg-[#B8860B]/10 p-3 rounded-xl text-[#B8860B]">
            <Heart size={28} />
          </div>
          <h4 className="font-bold text-[#4A3728] mb-2">Action de grâce</h4>
          <p className="text-sm text-[#6B5A4B]">Remercier pour un bienfait (santé, mariage, examen, anniversaire).</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-[#EADAC5] shadow-sm">
          <div className="inline-block mb-4 bg-[#B8860B]/10 p-3 rounded-xl text-[#B8860B]">
            <CheckCircle size={28} />
          </div>
          <h4 className="font-bold text-[#4A3728] mb-2">Pour les défunts</h4>
          <p className="text-sm text-[#6B5A4B]">Prier pour le repos de l'âme d'un être cher.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-[#EADAC5] shadow-sm">
          <div className="inline-block mb-4 bg-[#B8860B]/10 p-3 rounded-xl text-[#B8860B]">
            <Calendar size={28} />
          </div>
          <h4 className="font-bold text-[#4A3728] mb-2">Intentions diverses</h4>
          <p className="text-sm text-[#6B5A4B]">Demander une grâce particulière pour soi ou pour ses proches.</p>
        </div>
      </div>
    </div>
  </section>
);

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => (
  <div className="relative p-8 bg-white rounded-3xl border border-[#EADAC5] shadow-sm hover:shadow-md transition-shadow group">
    <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#708238] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#FDFBF7]">
      {number}
    </div>
    <div className="mb-6 text-[#708238] group-hover:scale-110 transition-transform flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-[#6B5A4B] text-sm leading-relaxed">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => (
  <section id="comment-ca-marche" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">Fonctionnement</h2>
        <p className="text-[#6B5A4B]">Suivez ces deux étapes pour valider votre demande.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Step 
          number={1}
          icon={<FileText size={48} />}
          title="Remplir le formulaire"
          description="Renseignez vos intentions de prière et les dates souhaitées via le formulaire ci-dessous."
        />
        <Step 
          number={2}
          icon={<Wallet size={48} />}
          title="Effectuer l'offrande"
          description="Réglez votre offrande via Wave pour soutenir la paroisse et finaliser votre demande."
        />
      </div>
    </div>
  </section>
);

const FormSection: React.FC = () => (
  <section id="formulaire" className="py-24 px-4 bg-[#FDFBF7]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">1. Remplir le formulaire</h2>
        <p className="text-[#6B5A4B]">Veuillez fournir les détails de votre demande de messe.</p>
      </div>
      
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-[#EADAC5]">
        <div className="p-3 md:p-4 bg-gray-50 flex items-center justify-between border-b border-[#EADAC5]">
           <span className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-medium px-2">
             <ExternalLink size={14} /> Formulaire Intégré
           </span>
           <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#708238] text-xs font-bold hover:underline px-2"
           >
             Ouvrir en plein écran
           </a>
        </div>
        <div className="relative w-full overflow-hidden" style={{ minHeight: '600px', height: '85vh' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdDaheghnXz89Ff5Y6cZm0E7D53rPCkmVGDEbYeLSmS1fMJcg/viewform?embedded=true" 
            className="w-full absolute inset-0 h-full border-none"
            title="Formulaire de demande de messe"
          >
            Chargement…
          </iframe>
        </div>
      </div>
    </div>
  </section>
);

const PaymentBanner: React.FC = () => (
  <section id="payment" className="py-20 px-4 bg-[#708238] text-white rounded-t-[3rem] md:rounded-t-[5rem]">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-medium">
        <CreditCard size={18} /> 2. Effectuer l'offrande
      </div>
      <h2 className="text-3xl md:text-5xl font-serif mb-6">Paiement par Wave</h2>
      <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
        L'offrande de messe est un geste de partage libre qui permet de soutenir la mission des prêtres et la vie matérielle de la paroisse.
      </p>
      <a 
        href="https://pay.wave.com/m/M_ci_15fCRNAgit8_/c/ci/" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#1ca8e4] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1589bc] transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
      >
        <img src="https://www.wave.com/static/icons/wave-logo.svg" alt="Wave" className="h-8 w-auto invert" />
        Payer avec Wave
      </a>
      <div className="mt-12 p-6 rounded-2xl bg-black/10 border border-white/20 max-w-2xl mx-auto">
        <h4 className="font-bold flex items-center justify-center gap-2 mb-2">
          <CheckCircle size={18} /> Rappel important
        </h4>
        <p className="text-sm text-white/70">
          Votre demande sera validée par le secrétariat une fois le formulaire rempli et l'offrande effectuée.
        </p>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 px-4 bg-[#4A3728] text-[#FDFBF7]/80 text-center border-t border-white/10">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
        <Cross size={24} className="text-white" />
      </div>
      <h3 className="text-2xl font-serif text-white mb-2">Paroisse Sainte Famille de Nazareth</h3>
      <p className="font-medium tracking-wide mb-8">DIVO – CÔTE D'IVOIRE</p>
      
      <div className="flex items-center justify-center gap-6 mb-8">
        <a href="tel:+22500000000" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={16} /> Contacter le Secrétariat
        </a>
      </div>

      <div className="h-px w-20 bg-white/20 mx-auto mb-8"></div>
      <p className="text-sm">© {new Date().getFullYear()} Paroisse Sainte Famille de Nazareth de Divo. Tous droits réservés.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <HowItWorks />
        <FormSection />
        <PaymentBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
