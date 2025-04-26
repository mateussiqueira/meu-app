import React from 'react';

// Definindo o componente sem usar React.FC
const BenefitsSection = () => {
  return (
    <div className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 lg:pr-16 mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-10">
              Benefícios exclusivos
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1 mb-2 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99967 0.333313C3.33301 0.333313 0.333008 3.33331 0.333008 6.99998C0.333008 10.6666 3.33301 13.6666 6.99967 13.6666C10.6663 13.6666 13.6663 10.6666 13.6663 6.99998C13.6663 3.33331 10.6663 0.333313 6.99967 0.333313ZM9.99967 5.66665L6.88634 8.78665C6.80634 8.86665 6.69967 8.91331 6.58634 8.91331C6.47301 8.91331 6.36634 8.86665 6.28634 8.78665L4.71301 7.21331C4.55301 7.05331 4.55301 6.78665 4.71301 6.62665C4.87301 6.46665 5.13967 6.46665 5.29967 6.62665L6.58634 7.91331L9.41301 5.08665C9.57301 4.92665 9.83967 4.92665 9.99967 5.08665C10.1597 5.24665 10.1597 5.50665 9.99967 5.66665Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="text-base md:text-lg text-black">
                  100% Digital – sem máquinas ou QR codes físicos.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1 mb-2 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99967 0.333313C3.33301 0.333313 0.333008 3.33331 0.333008 6.99998C0.333008 10.6666 3.33301 13.6666 6.99967 13.6666C10.6663 13.6666 13.6663 10.6666 13.6663 6.99998C13.6663 3.33331 10.6663 0.333313 6.99967 0.333313ZM9.99967 5.66665L6.88634 8.78665C6.80634 8.86665 6.69967 8.91331 6.58634 8.91331C6.47301 8.91331 6.36634 8.86665 6.28634 8.78665L4.71301 7.21331C4.55301 7.05331 4.55301 6.78665 4.71301 6.62665C4.87301 6.46665 5.13967 6.46665 5.29967 6.62665L6.58634 7.91331L9.41301 5.08665C9.57301 4.92665 9.83967 4.92665 9.99967 5.08665C10.1597 5.24665 10.1597 5.50665 9.99967 5.66665Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="text-base md:text-lg text-black">
                  Suporte via Zendesk com especialistas.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1 mb-2 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99967 0.333313C3.33301 0.333313 0.333008 3.33331 0.333008 6.99998C0.333008 10.6666 3.33301 13.6666 6.99967 13.6666C10.6663 13.6666 13.6663 10.6666 13.6663 6.99998C13.6663 3.33331 10.6663 0.333313 6.99967 0.333313ZM9.99967 5.66665L6.88634 8.78665C6.80634 8.86665 6.69967 8.91331 6.58634 8.91331C6.47301 8.91331 6.36634 8.86665 6.28634 8.78665L4.71301 7.21331C4.55301 7.05331 4.55301 6.78665 4.71301 6.62665C4.87301 6.46665 5.13967 6.46665 5.29967 6.62665L6.58634 7.91331L9.41301 5.08665C9.57301 4.92665 9.83967 4.92665 9.99967 5.08665C10.1597 5.24665 10.1597 5.50665 9.99967 5.66665Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="text-base md:text-lg text-black">
                  Integrações com ERP, CRM e PDV.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1 mb-2 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99967 0.333313C3.33301 0.333313 0.333008 3.33331 0.333008 6.99998C0.333008 10.6666 3.33301 13.6666 6.99967 13.6666C10.6663 13.6666 13.6663 10.6666 13.6663 6.99998C13.6663 3.33331 10.6663 0.333313 6.99967 0.333313ZM9.99967 5.66665L6.88634 8.78665C6.80634 8.86665 6.69967 8.91331 6.58634 8.91331C6.47301 8.91331 6.36634 8.86665 6.28634 8.78665L4.71301 7.21331C4.55301 7.05331 4.55301 6.78665 4.71301 6.62665C4.87301 6.46665 5.13967 6.46665 5.29967 6.62665L6.58634 7.91331L9.41301 5.08665C9.57301 4.92665 9.83967 4.92665 9.99967 5.08665C10.1597 5.24665 10.1597 5.50665 9.99967 5.66665Z" fill="#22C55E"/>
                  </svg>
                </div>
                <div className="text-base md:text-lg text-black">
                  Customização de layout e marca.
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://placehold.co/600x600" 
              alt="Benefícios Fidelity" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;