import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="h-screen min-h-[600px] bg-cover bg-center flex items-center justify-center px-6 md:px-10 relative">
      <div className="absolute inset-0">
        <img 
          src="https://img.freepik.com/free-photo/man-making-his-move_53876-64862.jpg?t=st=1742918223~exp=1742921823~hmac=5b96469f269d64f10a8db01d4e6cc6184f4048bba5b56ed8baa3802f45d97df7&w=996" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
            Advocacia Humanizada para Sua Família e Patrimônio
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Especialista em direito de família, sucessões e planejamento preventivo. 
            Soluções jurídicas com ética e sensibilidade.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Fale com o Advogado
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
