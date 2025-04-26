import React from 'react';

const PricingSection = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
            Planos e funcionalidades
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl md:max-w-3xl mx-auto">
            Comece com o que você precisa e evolua junto com seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Plano Essencial */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 p-6 md:p-8 relative flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Essencial</h3>
            <div className="flex items-baseline justify-center mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl font-bold text-black">R$45</span>
              <span className="text-gray-600 ml-2">/mês</span>
            </div>
            <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">R$495,00/ano</p>
            <div className="border-t border-gray-200 my-4 md:my-6 pt-4 md:pt-6 w-full">
              <p className="text-gray-600 font-medium mb-2 md:mb-4 text-sm md:text-base">
                Ideal para autônomos e MEIs
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Carimbos digitais</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Pontuação simples</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Cupons básicos</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Painel básico</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg border-2 border-violet-600 text-violet-600 font-medium hover:bg-violet-50 transition-colors duration-300 text-base md:text-lg">
              Começar agora
            </button>
          </div>
          {/* Plano Pro */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-violet-600 p-6 md:p-8 relative transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium">
              Mais popular
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Pro</h3>
            <div className="flex items-baseline justify-center mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl font-bold text-black">R$85</span>
              <span className="text-gray-600 ml-2">/mês</span>
            </div>
            <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">R$935,00/ano</p>
            <div className="border-t border-gray-200 my-4 md:my-6 pt-4 md:pt-6 w-full">
              <p className="text-gray-600 font-medium mb-2 md:mb-4 text-sm md:text-base">
                PMEs até 5 funcionários
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tudo do Essencial</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automações</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Até 3 usuários</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Customização</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors duration-300 text-base md:text-lg">
              Começar agora
            </button>
          </div>
          {/* Plano Enterprise */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 p-6 md:p-8 relative flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Enterprise</h3>
            <div className="flex items-baseline justify-center mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl font-bold text-black">Sob consulta</span>
            </div>
            <p className="text-gray-600 mb-2 md:mb-4 opacity-0 text-sm md:text-base">Espaço</p>
            <div className="border-t border-gray-200 my-4 md:my-6 pt-4 md:pt-6 w-full">
              <p className="text-gray-600 font-medium mb-2 md:mb-4 text-sm md:text-base">
                Redes e franquias grandes
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tudo do Pro</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>API completa</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Business Intelligence</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>IA</span>
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Suporte Premium</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-lg border-2 border-violet-600 text-violet-600 font-medium hover:bg-violet-50 transition-colors duration-300 text-base md:text-lg">
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;