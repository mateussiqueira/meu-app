import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Controla o efeito de scroll na navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu quando a tela é redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu quando um item é clicado
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`w-full h-20 fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <svg width="34" height="28" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110">
                <path d="M22.5215 3.21628C22.5579 3.24507 22.5882 3.28087 22.6105 3.32157C22.6329 3.36227 22.6468 3.40704 22.6516 3.45322C22.6563 3.4994 22.6517 3.54606 22.6381 3.59044C22.6244 3.63481 22.6021 3.67601 22.5722 3.71158C20.4194 6.27518 19.3105 9.27168 19.2455 12.7011C19.1259 19.1881 19.1519 26.5968 19.3235 34.9272C19.3282 35.1088 19.3817 35.2858 19.4785 35.4395C19.5752 35.5933 19.7117 35.7181 19.8734 35.8008C20.4402 36.0868 21.0694 36.2493 21.761 36.2883C24.1634 36.4157 25.3997 35.2366 25.4699 32.751C25.4959 31.7812 25.5128 28.8419 25.5206 23.9331C25.5204 23.8243 25.5615 23.7195 25.6355 23.6405C25.7095 23.5614 25.8108 23.514 25.9184 23.508C26.7816 23.4586 28.5158 23.4404 31.121 23.4534C33.1607 23.4612 34.7597 23.1921 35.5202 21.4839C35.7698 20.9223 35.8348 20.2463 35.7152 19.4559C35.4604 17.8049 34.3476 16.9508 32.3768 16.8936C30.8532 16.8494 28.7212 16.8299 25.9808 16.8351C25.8724 16.8365 25.7674 16.7968 25.6865 16.7239C25.6056 16.6509 25.5548 16.5501 25.544 16.4412C25.2788 13.5279 25.4855 9.21448 27.065 6.68338C29.5246 2.74178 33.019 0.560383 37.5482 0.139183C40.3068 -0.118217 42.9861 0.344582 45.5861 1.52758C50.3857 3.71158 53.0104 7.49718 53.4602 12.8844C54.1973 21.6516 48.7178 27.2013 42.7547 32.517C39.4813 35.4394 35.4552 38.757 30.6764 42.4698C29.561 43.3356 27.9854 44.5563 26.597 44.7552C25.7364 44.88 24.7536 44.5225 23.6486 43.6827C18.4902 39.7671 13.3253 35.2743 8.15393 30.2043C5.65793 27.759 3.23603 25.1694 1.69163 21.7374C-0.562574 16.7142 -0.563875 11.8197 1.68773 7.05388C2.80573 4.68268 4.66733 2.87698 7.27253 1.63678C12.7689 -0.984018 17.8519 -0.457517 22.5215 3.21628Z" fill="#7C3AED"/>
              </svg>
              <span className="ml-2 text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-violet-600">Fidelity</span>
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#recursos" className="text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-600 after:transition-all after:duration-300">Recursos</a>
            <a href="#preços" className="text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-600 after:transition-all after:duration-300">Preços</a>
            <a href="#para-empresas" className="text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-600 after:transition-all after:duration-300">Para Empresas</a>
            <a href="/blog" className="text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-violet-600 after:transition-all after:duration-300">Blog</a>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              className="px-5 py-2.5 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors duration-300"
            >
              Entrar
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-base font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow"
            >
              Começar Grátis
            </motion.button>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-violet-600 focus:outline-none transition-colors duration-300"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                // Ícone X
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Ícone de Hambúrguer
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile com Animação */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden z-50"
          >
            <div className="px-4 py-4 space-y-4">
              <motion.a 
                href="#recursos" 
                onClick={handleMenuItemClick}
                className="block text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 py-3 border-b border-gray-100"
                whileHover={{ x: 4 }}
              >
                Recursos
              </motion.a>
              <motion.a 
                href="#preços" 
                onClick={handleMenuItemClick}
                className="block text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 py-3 border-b border-gray-100"
                whileHover={{ x: 4 }}
              >
                Preços
              </motion.a>
              <motion.a 
                href="#para-empresas" 
                onClick={handleMenuItemClick}
                className="block text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 py-3 border-b border-gray-100"
                whileHover={{ x: 4 }}
              >
                Para Empresas
              </motion.a>
              <motion.a 
                href="/blog" 
                onClick={handleMenuItemClick}
                className="block text-base font-medium text-gray-700 hover:text-violet-600 transition-colors duration-300 py-3 border-b border-gray-100"
                whileHover={{ x: 4 }}
              >
                Blog
              </motion.a>
              
              <div className="flex flex-col space-y-3 pt-4 pb-1">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 border border-gray-200 rounded-lg transition-all duration-300"
                >
                  Entrar
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white text-base font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow"
                >
                  Começar Grátis
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;