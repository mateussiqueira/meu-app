import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-7 h-6 mr-2">
                <svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5215 3.21628C22.5579 3.24507 22.5882 3.28087 22.6105 3.32157C22.6329 3.36227 22.6468 3.40704 22.6516 3.45322C22.6563 3.4994 22.6517 3.54606 22.6381 3.59044C22.6244 3.63481 22.6021 3.67601 22.5722 3.71158C20.4194 6.27518 19.3105 9.27168 19.2455 12.7011C19.1259 19.1881 19.1519 26.5968 19.3235 34.9272C19.3282 35.1088 19.3817 35.2858 19.4785 35.4395C19.5752 35.5933 19.7117 35.7181 19.8734 35.8008C20.4402 36.0868 21.0694 36.2493 21.761 36.2883C24.1634 36.4157 25.3997 35.2366 25.4699 32.751C25.4959 31.7812 25.5128 28.8419 25.5206 23.9331C25.5204 23.8243 25.5615 23.7195 25.6355 23.6405C25.7095 23.5614 25.8108 23.514 25.9184 23.508C26.7816 23.4586 28.5158 23.4404 31.121 23.4534C33.1607 23.4612 34.7597 23.1921 35.5202 21.4839C35.7698 20.9223 35.8348 20.2463 35.7152 19.4559C35.4604 17.8049 34.3476 16.9508 32.3768 16.8936C30.8532 16.8494 28.7212 16.8299 25.9808 16.8351C25.8724 16.8365 25.7674 16.7968 25.6865 16.7239C25.6056 16.6509 25.5548 16.5501 25.544 16.4412C25.2788 13.5279 25.4855 9.21448 27.065 6.68338C29.5246 2.74178 33.019 0.560383 37.5482 0.139183C40.3068 -0.118217 42.9861 0.344582 45.5861 1.52758C50.3857 3.71158 53.0104 7.49718 53.4602 12.8844C54.1973 21.6516 48.7178 27.2013 42.7547 32.517C39.4813 35.4394 35.4552 38.757 30.6764 42.4698C29.561 43.3356 27.9854 44.5563 26.597 44.7552C25.7364 44.88 24.7536 44.5225 23.6486 43.6827C18.4902 39.7671 13.3253 35.2743 8.15393 30.2043C5.65793 27.759 3.23603 25.1694 1.69163 21.7374C-0.562574 16.7142 -0.563875 11.8197 1.68773 7.05388C2.80573 4.68268 4.66733 2.87698 7.27253 1.63678C12.7689 -0.984018 17.8519 -0.457517 22.5215 3.21628Z" fill="#7C3AED"/>
                </svg>
              </div>
              <div className="text-xl font-bold text-white">Fidelity</div>
            </div>
            <div className="text-gray-400 text-base font-normal leading-tight">
              Plataforma de fidelização e engajamento inteligente para o seu negócio.
            </div>
          </div>
          <div>
            <div className="text-white text-base font-bold mb-4">Produto</div>
            <div className="space-y-2">
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Recursos</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Preços</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Para Empresas</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Integrações</div>
            </div>
          </div>
          <div>
            <div className="text-white text-base font-bold mb-4">Empresa</div>
            <div className="space-y-2">
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Sobre nós</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Blog</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Carreiras</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Contato</div>
            </div>
          </div>
          <div>
            <div className="text-white text-base font-bold mb-4">Suporte</div>
            <div className="space-y-2">
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Central de Ajuda</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Documentação</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">Status</div>
              <div className="text-gray-400 text-base font-normal hover:text-white transition-colors duration-200 cursor-pointer">API</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-base font-normal mb-4 md:mb-0 text-center md:text-left">
            © 2025 Fidelity. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 justify-center">
            <div className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </div>
            <div className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <div className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;