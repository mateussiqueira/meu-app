import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full h-[800px] bg-gradient-to-r from-violet-500 to-violet-700">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="w-full flex justify-between items-center">
          <div className="w-1/2 pr-12">
            <h1 className="text-6xl font-bold text-white leading-tight mb-10">
              Fidelização inteligente para seu negócio
            </h1>
            <p className="text-xl text-white/90 mb-14">
              Aumente a retenção de clientes e engaje colaboradores com a plataforma digital completa e moderna da Fidelity.
            </p>
            <div className="flex space-x-4 mb-10">
              <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 transition duration-300 text-white font-medium rounded-lg">
                Começar agora
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 transition duration-300 font-medium rounded-lg">
                Ver demonstração
              </button>
            </div>
            <div className="flex space-x-4 items-center">
              <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="App Store" className="h-10"/>
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" alt="Google Play" className="h-10"/>
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://placehold.co/675x603" alt="Hero illustration" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;