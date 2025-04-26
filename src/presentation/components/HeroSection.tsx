import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full min-h-[600px] md:min-h-[700px] lg:h-[800px] bg-gradient-to-r from-violet-500 to-violet-700 py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 lg:pr-12 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-10">
              Fidelização inteligente para seu negócio
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-14">
              Aumente a retenção de clientes e engaje colaboradores com a plataforma digital completa e moderna da Fidelity.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-10">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-violet-600 hover:bg-violet-700 transition duration-300 text-white font-medium rounded-lg w-full sm:w-auto">
                Começar agora
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 transition duration-300 font-medium rounded-lg w-full sm:w-auto">
                Ver demonstração
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
              <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="App Store" className="h-10"/>
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" alt="Google Play" className="h-10"/>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="https://placehold.co/675x603" alt="Hero illustration" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;