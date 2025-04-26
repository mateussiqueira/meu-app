import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import './App.css';
import beneficiosImage from './assets/beneficios.png';
import topoImage from './assets/topo.png';
import Navbar from './presentation/components/Navbar.tsx'; // Adicionando a extensão .tsx

// Placeholder Icon Components (Replace with actual icons or library like lucide-react)
const IconCheck = () => <span className="text-emerald-500 mr-2">✓</span>; // Verde #22C55E
const IconTarget = () => <span className="text-violet-600">🎯</span>;
const IconChart = () => <span className="text-violet-600">📈</span>;
const IconGift = () => <span className="text-violet-600">🎁</span>;
const IconPhone = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_phone)"><path d="M0.75 3C0.75 1.34531 2.09531 0 3.75 0H14.25C15.9047 0 17.25 1.34531 17.25 3V21C17.25 22.6547 15.9047 24 14.25 24H3.75C2.09531 24 0.75 22.6547 0.75 21V3ZM6.75 21C6.75 21.4125 7.0875 21.75 7.5 21.75H10.5C10.9125 21.75 11.25 21.4125 11.25 21C11.25 20.5875 10.9125 20.25 10.5 20.25H7.5C7.0875 20.25 6.75 20.5875 6.75 21ZM14.25 3H3.75V18H14.25V3Z" fill="#7C3AED" /></g><defs><clipPath id="clip0_phone"><path d="M0 0H18V24H0V0Z" fill="white" /></clipPath></defs>
  </svg>
);
const IconDashboard = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_dashboard)"><path d="M3.65625 3C3.65625 2.17031 2.98594 1.5 2.15625 1.5C1.32656 1.5 0.65625 2.17031 0.65625 3V18.75C0.65625 20.8219 2.33437 22.5 4.40625 22.5H23.1562C23.9859 22.5 24.6562 21.8297 24.6562 21C24.6562 20.1703 23.9859 19.5 23.1562 19.5H4.40625C3.99375 19.5 3.65625 19.1625 3.65625 18.75V3ZM22.7156 7.05938C23.3016 6.47344 23.3016 5.52188 22.7156 4.93594C22.1297 4.35 21.1781 4.35 20.5922 4.93594L15.6562 9.87656L12.9656 7.18594C12.3797 6.6 11.4281 6.6 10.8422 7.18594L5.59219 12.4359C5.00625 13.0219 5.00625 13.9734 5.59219 14.5594C6.17813 15.1453 7.12969 15.1453 7.71563 14.5594L11.9062 10.3734L14.5969 13.0641C15.1828 13.65 16.1344 13.65 16.7203 13.0641L22.7203 7.06406L22.7156 7.05938Z" fill="#7C3AED" /></g><defs><clipPath id="clip0_dashboard"><path d="M0.65625 0H24.6562V24H0.65625V0Z" fill="white" /></clipPath></defs>
  </svg>
);
const IconGamification = () => (
  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_gamification)"><path d="M19.5781 0H9.07812C7.83594 0 6.82344 1.02188 6.87031 2.25938C6.87969 2.50781 6.88906 2.75625 6.90313 3H1.95312C1.32969 3 0.828125 3.50156 0.828125 4.125C0.828125 8.46562 2.39844 11.4844 4.50781 13.5328C6.58437 15.5531 9.11563 16.5703 10.9813 17.0859C12.0781 17.3906 12.8281 18.3047 12.8281 19.2234C12.8281 20.2031 12.0312 21 11.0516 21H9.82812C8.99844 21 8.32812 21.6703 8.32812 22.5C8.32812 23.3297 8.99844 24 9.82812 24H18.8281C19.6578 24 20.3281 23.3297 20.3281 22.5C20.3281 21.6703 19.6578 21 18.8281 21H17.6047C16.625 21 15.8281 20.2031 15.8281 19.2234C15.8281 18.3047 16.5734 17.3859 17.675 17.0859C19.5453 16.5703 22.0766 15.5531 24.1531 13.5328C26.2578 11.4844 27.8281 8.46562 27.8281 4.125C27.8281 3.50156 27.3266 3 26.7031 3H21.7531C21.7672 2.75625 21.7766 2.5125 21.7859 2.25938C21.8328 1.02188 20.8203 0 19.5781 0ZM3.12031 5.25H7.07656C7.50313 9.47344 8.44531 12.2953 9.50937 14.1844C8.34219 13.6688 7.12813 12.9422 6.07812 11.9203C4.57812 10.4625 3.35938 8.35781 3.125 5.25H3.12031ZM22.5828 11.9203C21.5328 12.9422 20.3188 13.6688 19.1516 14.1844C20.2156 12.2953 21.1578 9.47344 21.5844 5.25H25.5406C25.3016 8.35781 24.0828 10.4625 22.5875 11.9203H22.5828Z" fill="#7C3AED" /></g><defs><clipPath id="clip0_gamification"><path d="M0.828125 0H27.8281V24H0.828125V0Z" fill="white" /></clipPath></defs>
  </svg>
);
const IconAppStore = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9391 12.5953C14.9297 10.875 15.7078 9.57656 17.2828 8.62031C16.4016 7.35938 15.0703 6.66563 13.3125 6.52969C11.6484 6.39844 9.82969 7.5 9.16406 7.5C8.46094 7.5 6.84844 6.57656 5.58281 6.57656C2.96719 6.61875 0.1875 8.6625 0.1875 12.8203C0.1875 14.0484 0.4125 15.3172 0.8625 16.6266C1.4625 18.3469 3.62812 22.5656 5.8875 22.4953C7.06875 22.4672 7.90312 21.6563 9.44062 21.6563C10.9312 21.6563 11.7047 22.4953 13.0219 22.4953C15.3 22.4625 17.2594 18.6281 17.8312 16.9031C14.775 15.4641 14.9391 12.6844 14.9391 12.5953ZM12.2859 4.89844C13.5656 3.37969 13.4484 1.99688 13.4109 1.5C12.2812 1.56563 10.9734 2.26875 10.2281 3.13594C9.40781 4.06406 8.925 5.2125 9.02813 6.50625C10.2516 6.6 11.3672 5.97188 12.2859 4.89844Z" fill="white" />
  </svg>
);
const IconGooglePlay = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9824 10.9828L5.63711 0.609375L18.7996 8.16562L15.9824 10.9828ZM2.93711 0C2.32773 0.31875 1.91992 0.9 1.91992 1.65469V22.3406C1.91992 23.0953 2.32773 23.6766 2.93711 23.9953L14.9652 11.9953L2.93711 0ZM22.8684 10.575L20.1074 8.97656L17.0277 12L20.1074 15.0234L22.9246 13.425C23.7684 12.7547 23.7684 11.2453 22.8684 10.575ZM5.63711 23.3906L18.7996 15.8344L15.9824 13.0172L5.63711 23.3906Z" fill="white" />
  </svg>
);
const IconLinkedIn = () => <div className="w-5 h-5 bg-gray-500 rounded-full"></div>; // Placeholder
const IconInstagram = () => <div className="w-5 h-5 bg-gray-500 rounded-full"></div>; // Placeholder
const IconDribbble = () => <div className="w-5 h-5 bg-gray-500 rounded-full"></div>; // Placeholder

// --- Animações e Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  scale: 1.05,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

// --- Componentes de Seção ---

const HeroSection = () => (
  <section className="w-full h-auto md:min-h-[800px] bg-violet-600 text-white px-4 py-16 md:py-32 pt-28 md:pt-40"> {/* Roxo #7C3AED */}
    <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row items-center">
      {/* Coluna de Texto */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight mb-4">
          Fidelização inteligente para seu negócio
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-normal font-['Inter'] leading-tight mb-8 max-w-xl mx-auto md:mx-0">
          Aumente a retenção de clientes e engaje colaboradores com a plataforma digital completa e moderna da Fidelity.
        </p>
        {/* Botões */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <motion.button
            whileHover={scaleOnHover}
            className="w-full md:w-auto px-8 py-3.5 h-14 bg-white text-violet-600 rounded-lg font-medium font-['Inter'] transition-transform"
          >
            Começar agora
          </motion.button>
          <motion.button
            whileHover={scaleOnHover}
            className="w-full md:w-auto px-8 py-3.5 h-14 bg-transparent rounded-lg outline outline-2 outline-white font-medium font-['Inter'] transition-transform"
          >
            Ver demonstração
          </motion.button>
        </div>
        {/* Badges */}
        <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="w-auto h-16 bg-black rounded-lg p-3 flex items-center space-x-2 hover:opacity-90"
          >
            <IconAppStore />
            <div className="flex flex-col justify-center">
              <span className="text-white text-xs font-normal font-['Inter']">Download on the</span>
              <span className="text-white text-lg font-medium font-['Inter'] leading-none">App Store</span>
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="w-auto h-16 bg-black rounded-lg p-3 flex items-center space-x-2 hover:opacity-90"
          >
            <IconGooglePlay />
            <div className="flex flex-col justify-center">
              <span className="text-white text-xs font-normal font-['Inter']">Get it on</span>
              <span className="text-white text-lg font-medium font-['Inter'] leading-none">Google Play</span>
            </div>
          </motion.a>
        </div>
      </motion.div>
      {/* Coluna de Imagem */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
      >
        <img className="w-full max-w-[500px] md:max-w-[675px] h-auto rounded-lg" src={topoImage} alt="Fidelity App Mockup" />
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    custom={delay}
    className="w-full md:w-1/3 bg-white rounded-xl shadow-sm p-8 text-center md:text-left"
  >
    <div className="inline-flex size-14 mb-4 bg-violet-100 rounded-lg items-center justify-center">
      {icon}
    </div>
    <h3 className="text-black text-lg md:text-xl font-bold font-['Inter'] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-normal">{description}</p>
  </motion.div>
);

const FeaturesSection = () => (
  <section id="recursos" className="w-full bg-gray-100 py-16 md:py-24 px-4">
    <div className="container mx-auto max-w-[1280px]">
      {/* Título e Descrição */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-tight mb-4">
          Tudo que você precisa em um só lugar
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-normal font-['Inter'] leading-normal max-w-3xl mx-auto">
          Combine fidelização por carimbos, pontuação, cupons automáticos e gamificação em uma experiência moderna e poderosa.
        </p>
      </motion.div>
      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8"
      >
        <FeatureCard
          icon={<IconPhone />}
          title="App Cliente"
          description="Acumule carimbos, pontos e resgate recompensas direto do celular."
          delay={0}
        />
        <FeatureCard
          icon={<IconDashboard />}
          title="Gestão Completa"
          description="Dashboard com métricas e relatórios para acompanhar resultados."
          delay={0.1}
        />
        <FeatureCard
          icon={<IconGamification />}
          title="Gamificação"
          description="Engaje clientes e colaboradores com rankings e recompensas."
          delay={0.2}
        />
      </motion.div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="w-full bg-white py-16 md:py-24 px-4"> {/* Fundo Branco */}
    <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row items-center">
      {/* Coluna de Texto */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-12"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-tight mb-6">
          Benefícios exclusivos
        </h2>
        <div className="space-y-4">
          {[
            "100% Digital – sem máquinas ou QR codes físicos.",
            "Suporte via Zendesk com especialistas.",
            "Integrações com ERP, CRM e PDV.",
            "Customização de layout e marca."
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start space-x-3"
            >
              <div className="flex-shrink-0 size-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <IconCheck />
              </div>
              <p className="text-black text-base md:text-lg font-normal font-['Inter'] leading-normal">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Coluna de Imagem */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img className="w-full max-w-[500px] md:max-w-[600px] h-auto rounded-lg" src={beneficiosImage} alt="Benefícios Fidelity" />
      </motion.div>
    </div>
  </section>
);

const PricingCard = ({ plan, price, annualPrice, idealFor, features, ctaText, ctaLink = "#", isPopular = false, isEnterprise = false }) => (
  <motion.div
    variants={fadeInUp}
    className={`w-full md:w-1/3 bg-white rounded-xl p-8 flex flex-col justify-between relative ${isPopular ? 'shadow-lg outline outline-2 outline-violet-600' : 'shadow-sm'}`}
  >
    {isPopular && (
      <div className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-sm font-normal font-['Inter'] px-4 py-1 rounded-full">
        Mais popular
      </div>
    )}
    <div>
      <h3 className={`text-black text-xl md:text-2xl font-bold font-['Inter'] mb-2 ${isPopular ? 'mt-4' : ''}`}>{plan}</h3>
      <div className="mb-4">
        {isEnterprise ? (
          <div className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-none">Sob consulta</div>
        ) : (
          <>
            <div className="flex items-baseline space-x-1">
              <span className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-none">{price}</span>
              <span className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-none">/mês</span>
            </div>
            <div className="text-gray-600 text-xs mt-1">{annualPrice}</div>
          </>
        )}
      </div>
      <div className="pt-4 border-t border-gray-200">
        <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-none mb-4">{idealFor}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center text-black text-sm"
            >
              <IconCheck />{feature}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <motion.a
      whileHover={scaleOnHover}
      href={ctaLink}
      className={`w-full h-12 mt-6 rounded-lg flex items-center justify-center font-normal font-['Inter'] text-base transition-transform ${isPopular ? 'bg-violet-600 text-white' : 'bg-transparent text-violet-600 outline outline-2 outline-violet-600'}`}
    >
      {ctaText}
    </motion.a>
  </motion.div>
);

const PricingSection = () => (
  <section id="preços" className="w-full bg-gray-100 py-16 md:py-24 px-4"> {/* Cinza Claro */}
    <div className="container mx-auto max-w-[1280px]">
      {/* Título e Descrição */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-tight mb-4">
          Planos e funcionalidades
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-normal font-['Inter'] leading-normal max-w-xl mx-auto">
          Comece com o que você precisa e evolua junto com seu negócio.
        </p>
      </motion.div>
      {/* Cards de Planos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8"
      >
        <PricingCard
          plan="Essencial"
          price="R$ 45,00"
          annualPrice="(ou R$ 495,00/ano)"
          idealFor="Ideal para Autônomos e MEIs"
          features={[
            "Carimbos digitais",
            "Pontuação simples",
            "Cupons básicos",
            "Painel básico"
          ]}
          ctaText="Começar agora"
        />
        <PricingCard
          plan="Pro"
          price="R$ 85,00"
          annualPrice="(ou R$ 935,00/ano)"
          idealFor="Ideal para PMEs até 5 funcionários"
          features={[
            "Tudo do Essencial +",
            "Automações",
            "Relatórios avançados",
            "Até 3 usuários",
            "Customização"
          ]}
          ctaText="Começar agora"
          isPopular={true}
        />
        <PricingCard
          plan="Enterprise"
          price="Sob consulta"
          annualPrice=""
          idealFor="Ideal para Redes e franquias grandes"
          features={[
            "Tudo do Pro +",
            "API completa",
            "Business Intelligence",
            "IA",
            "Painel dedicado",
            "Suporte Premium"
          ]}
          ctaText="Falar com especialista"
          isEnterprise={true}
        />
      </motion.div>
    </div>
  </section>
);

const BusinessSection = () => (
  <section id="para-empresas" className="w-full bg-white py-16 md:py-24 px-4">
    <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row items-center">
      {/* Coluna de Texto */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-12"
      >
        <h2 className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-tight mb-4">
          Fidelity for Business
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-normal font-['Inter'] leading-tight mb-8 max-w-xl mx-auto md:mx-0">
          Gamifique o desempenho da sua equipe com inteligência e motivação.
        </p>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <div className="flex-shrink-0 size-12 bg-violet-100 rounded-lg flex items-center justify-center"><IconTarget /></div>
            <div>
              <h4 className="text-black text-base md:text-lg font-bold font-['Inter'] leading-none">Pontuação por Metas 🎯</h4>
              <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-normal">Recompense entregas e resultados</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <div className="flex-shrink-0 size-12 bg-violet-100 rounded-lg flex items-center justify-center"><IconChart /></div>
            <div>
              <h4 className="text-black text-base md:text-lg font-bold font-['Inter'] leading-none">Rankings e Evolução 📈</h4>
              <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-normal">Acompanhe o progresso da equipe</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <div className="flex-shrink-0 size-12 bg-violet-100 rounded-lg flex items-center justify-center"><IconGift /></div>
            <div>
              <h4 className="text-black text-base md:text-lg font-bold font-['Inter'] leading-none">Loja de Recompensas 🎁</h4>
              <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-normal">Prêmios exclusivos para colaboradores</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Coluna de Imagem */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img className="w-full max-w-[500px] md:max-w-[561px] h-auto rounded-lg shadow-lg" src="https://placehold.co/561x561/EEEEEE/121212?text=Business+Mockup" alt="Fidelity for Business Mockup" />
      </motion.div>
    </div>
  </section>
);

const TestimonialCard = ({ name, role, company, quote, imageSrc }) => (
  <motion.div
    variants={fadeInUp}
    className="w-full md:w-1/3 bg-white rounded-xl shadow-sm p-8"
  >
    <div className="flex items-center space-x-4 mb-4">
      <img className="w-16 h-16 rounded-full bg-gray-300" src={imageSrc} alt={name} />
      <div>
        <h4 className="text-black text-base font-bold font-['Inter'] leading-none">{name}</h4>
        <p className="text-gray-600 text-base font-normal font-['Inter'] leading-none mt-1">{role ? `${role}, ${company}` : company}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm md:text-base font-normal font-['Inter'] leading-normal">"{quote}"</p>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-[1280px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-black text-3xl md:text-4xl font-bold font-['Inter'] leading-tight text-center mb-12 md:mb-16"
        >
          Quem usa, aprova
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8"
        >
          <TestimonialCard
            name="João Silva"
            company="Café Aroma"
            quote="Aumentamos em 40% o retorno dos clientes após usar o Fidelity!"
            imageSrc="https://placehold.co/64x64/DDDDDD/121212?text=JS"
          />
          <TestimonialCard
            name="Maria Costa"
            company="Salão Beauty"
            quote="Sistema super fácil de usar. Os clientes adoram acumular pontos!"
            imageSrc="https://placehold.co/64x64/CCCCCC/121212?text=MC"
          />
          <TestimonialCard
            name="Pedro Santos"
            company="PetShop Amigo"
            quote="Ferramenta excelente para fidelizar. Suporte muito atencioso!"
            imageSrc="https://placehold.co/64x64/BBBBBB/121212?text=PS"
          />
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="w-full bg-violet-600 text-white py-16 md:py-24 px-4"> {/* Roxo */}
    <div className="container mx-auto max-w-[1280px] text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold font-['Inter'] leading-tight mb-4">
          Pronto para começar?
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-normal font-['Inter'] leading-tight mb-8 max-w-2xl mx-auto">
          Experimente o Fidelity gratuitamente por 7 dias e descubra como aumentar sua receita e fidelizar seus clientes.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            whileHover={scaleOnHover}
            className="w-full md:w-auto px-8 py-3.5 h-14 bg-white text-violet-600 rounded-lg font-medium font-['Inter'] transition-transform"
          >
            Criar conta grátis
          </motion.button>
          <motion.button
            whileHover={scaleOnHover}
            className="w-full md:w-auto px-8 py-3.5 h-14 bg-transparent rounded-lg outline outline-2 outline-white font-medium font-['Inter'] transition-transform"
          >
            Falar com especialista
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-black text-gray-400 py-16 px-4"> {/* Preto #121212 */}
    <div className="container mx-auto max-w-[1280px]">
      <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 mb-12">
        {/* Coluna Logo e Descrição */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            {/* Placeholder Logo */}
            <div className="w-7 h-6 rounded bg-gray-500"></div>
            <span className="text-white text-xl font-bold font-['Inter'] leading-tight">Fidelity</span>
          </div>
          <p className="text-base font-normal font-['Inter'] leading-normal">
            Plataforma de fidelização e engajamento inteligente para o seu negócio.
          </p>
        </div>
        {/* Colunas de Links */}
        <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-white text-base font-bold font-['Inter'] leading-none mb-4">Produto</h5>
            <ul className="space-y-2">
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#preços" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#para-empresas" className="hover:text-white transition-colors">Para Empresas</a></li>
              <li><a href="#integrações" className="hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-base font-bold font-['Inter'] leading-none mb-4">Empresa</h5>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#carreiras" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-base font-bold font-['Inter'] leading-none mb-4">Suporte</h5>
            <ul className="space-y-2">
              <li><a href="#ajuda" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Linha Copyright e Redes Sociais */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base font-normal font-['Inter'] leading-none mb-4 md:mb-0">
          © 2025 Fidelity. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110"><IconLinkedIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110"><IconInstagram /></a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="transition-transform hover:scale-110"><IconDribbble /></a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Componente Principal da Página ---

function App() {
  // Efeito de scroll suave
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o header fixo
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-['Inter'] bg-white text-black scroll-smooth"> {/* Default font and colors */}
      <Navbar />
      <main className="w-full relative bg-white pt-20"> {/* Adicionado pt-20 para compensar a altura da navbar fixa */}
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <PricingSection />
        <BusinessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
