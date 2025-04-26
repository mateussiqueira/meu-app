import React from 'react';

const CTASection = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-gradient-to-r from-violet-500 to-violet-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Pronto para começar?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 max-w-3xl mx-auto">
          Experimente o Fidelity gratuitamente por 7 dias e descubra como aumentar sua receita e fidelizar seus clientes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-violet-600 font-medium rounded-lg hover:bg-white/95 transition-colors duration-300 shadow-sm">
            Criar conta grátis
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
            Falar com especialista
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;