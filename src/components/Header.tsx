
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4 ${scrolled ? 'scrolled-header' : 'bg-primary'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-playfair font-medium transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-accent'}`}>
            Vagner Vieira
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <button 
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('why-choose')}
            className="nav-link"
          >
            Vantagens
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="nav-link"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="nav-link"
          >
            Método
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contato
          </button>
        </nav>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="btn-primary text-sm"
        >
          Contate-nos
        </button>
      </div>
    </header>
  );
};

export default Header;
