import React from 'react';

const CTASection = () => {
  return (
    <div data-layer="section" className="Section w-[1440px] h-96 left-0 top-[4313px] absolute bg-gradient-to-r from-violet-500 to-violet-700 border-gray-200">
      <div data-layer="div" className="Div w-[1280px] h-52 left-[80px] top-[96px] absolute bg-black/0 border-gray-200">
        <div data-layer="Pronto para começar?" className="ProntoParaComeAr w-96 h-11 left-[446.31px] top-[-2px] absolute text-center justify-start text-white text-4xl font-bold font-['Inter'] leading-9">Pronto para começar?</div>
        <div data-layer="Experimente o Fidelity gratuitamente por 7 dias" className="ExperimenteOFidelityGratuitamentePor7DiasEDescubraComoAumentarSuaReceitaEFidelizarSeusClientes w-[617px] h-6 left-[329.22px] top-[62px] absolute text-center justify-start text-white/90 text-xl font-normal font-['Inter'] leading-tight">Experimente o Fidelity gratuitamente por 7 dias e descubra como aumentar sua receita e fidelizar seus clientes.</div>
        <div data-layer="div" className="Div w-[1248px] h-14 left-[16px] top-[144px] absolute bg-black/0 border-gray-200">
          <div data-layer="button" className="Button w-48 h-14 left-[398.84px] top-0 absolute bg-white rounded-lg hover:bg-white/95 transition-colors duration-300 ease-in-out border-gray-200">
            <div data-layer="Criar conta grátis" className="CriarContaGrTis w-32 h-5 left-[32px] top-[20px] absolute text-center justify-start text-violet-600 text-base font-medium font-['Inter']">Criar conta grátis</div>
          </div>
          <div data-layer="button" className="Button w-60 h-14 left-[611.08px] top-0 absolute bg-black/0 rounded-lg outline outline-2 outline-offset-[-2px] outline-white hover:bg-white/10 transition-colors duration-300 ease-in-out">
            <div data-layer="Falar com especialista" className="FalarComEspecialista w-44 h-5 left-[34px] top-[20px] absolute text-center justify-start text-white text-base font-medium font-['Inter']">Falar com especialista</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;