import React from 'react';

const BusinessSection = () => {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold text-black mb-6">
              Fidelity for Business
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Gamifique o desempenho da sua equipe com inteligência e motivação.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22H22" stroke="#7C3AED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Pontuação por Metas 🎯</h3>
                  <p className="text-gray-600">Recompense entregas e resultados</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.76 17.05C10.76 17.43 10.46 17.76 10.05 17.79C9.66 17.83 9.33 17.53 9.33 17.15V6.85C9.33 6.47 9.63 6.14 10.04 6.11C10.43 6.07 10.76 6.37 10.76 6.75V17.05ZM14.67 17.05C14.67 17.43 14.37 17.76 13.95 17.79C13.57 17.83 13.24 17.53 13.24 17.15V6.85C13.24 6.47 13.54 6.14 13.95 6.11C14.34 6.07 14.67 6.37 14.67 6.75V17.05Z" fill="#7C3AED"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Rankings e Evolução 📈</h3>
                  <p className="text-gray-600">Acompanhe o progresso da equipe</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8.5C21 5.46 18.54 3 15.5 3H8.5C5.46 3 3 5.46 3 8.5C3 11.54 5.46 14 8.5 14H15.5C18.54 14 21 11.54 21 8.5Z" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14V21" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21H16" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 8.5H9.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 8.5H16.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Loja de Recompensas 🎁</h3>
                  <p className="text-gray-600">Prêmios exclusivos para colaboradores</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://placehold.co/561x561" 
              alt="Fidelity for Business" 
              className="w-full h-auto max-w-[561px] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;