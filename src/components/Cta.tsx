
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Cta: React.FC = () => {
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
    <section className="py-24 bg-cta-pattern bg-cover bg-center relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-8">
            Precisa de Aconselhamento Jurídico?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades jurídicas com ética, dedicação e conhecimento especializado.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Agendar Consulta
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Cta;
