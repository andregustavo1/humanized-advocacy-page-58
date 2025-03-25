
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-playfair font-medium text-accent mb-2">
              Vagner Vieira
              <span className="block text-sm font-montserrat font-light text-white/80">
                Advocacia e Assessoria Jurídica
              </span>
            </h2>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Vantagens
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Método
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-accent transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Vagner Vieira Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm">
            OAB/XX 123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
