import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl md:max-w-4xl mx-auto">
            Combine fidelização por carimbos, pontuação, cupons automáticos e gamificação em uma experiência moderna e poderosa.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 md:mb-10 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L11.8 22.53C12.29 23.16 13.11 23.16 13.6 22.53L16.1 19.34C16.27 19.13 16.6 18.94 16.9 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" fill="#7C3AED"/>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-4">
              App Cliente
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Acumule carimbos, pontos e resgate recompensas direto do celular.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 md:mb-10 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 10.9V8.89C21.5 7.14 20.36 6 18.61 6H15.39C13.64 6 12.5 7.14 12.5 8.89V10.9C12.5 12.65 13.64 13.79 15.39 13.79H18.61C20.36 13.79 21.5 12.65 21.5 10.9Z" fill="#7C3AED"/>
                <path d="M11.5 15.1V13.09C11.5 11.34 10.36 10.2 8.61 10.2H5.39C3.64 10.2 2.5 11.34 2.5 13.09V15.1C2.5 16.86 3.64 17.99 5.39 17.99H8.61C10.36 17.99 11.5 16.86 11.5 15.1Z" fill="#7C3AED"/>
                <path d="M11.5 8.89V6.88C11.5 5.13 10.36 3.99 8.61 3.99H5.39C3.64 3.99 2.5 5.13 2.5 6.88V8.89C2.5 10.64 3.64 11.78 5.39 11.78H8.61C10.36 11.78 11.5 10.64 11.5 8.89Z" fill="#7C3AED"/>
                <path d="M21.5 17.11V15.1C21.5 13.35 20.36 12.21 18.61 12.21H15.39C13.64 12.21 12.5 13.35 12.5 15.1V17.11C12.5 18.86 13.64 20 15.39 20H18.61C20.36 20 21.5 18.86 21.5 17.11Z" fill="#7C3AED"/>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-4">
              Gestão Completa
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Dashboard com métricas e relatórios para acompanhar resultados.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 md:mb-10 mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2ZM19 16.17L12 20.17L5 16.17V7.83L12 3.83L19 7.83V16.17Z" fill="#7C3AED"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#7C3AED"/>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-4">
              Gamificação
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Engaje clientes e colaboradores com rankings e recompensas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;