
import React from 'react';
import { PersonStanding, Shield, Clock, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const differentials = [
    {
      icon: <PersonStanding className="w-8 h-8 text-secondary" />,
      title: "Atendimento personalizado",
      description: "Cada caso é único e recebe atenção individualizada."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      title: "Expertise em planejamento sucessório",
      description: "Soluções para proteção patrimonial e familiar."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Ética e transparência",
      description: "Compromisso com valores fundamentais da advocacia."
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Agilidade em processos judiciais",
      description: "Eficiência e celeridade nos procedimentos."
    }
  ];
  
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <ScrollReveal>
            <h2 className="section-title">Sobre Vagner Vieira</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="mb-6 overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/7dd58c43-3df7-44ca-8a2c-259ad2ace5f4.png" 
                alt="Vagner Vieira" 
                className="w-full h-[350px] object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-lg mb-6 text-neutral-dark/80 leading-relaxed">
              Advogado especializado em direito de família e sucessões, atuando com foco em soluções preventivas e conflitos familiares. Combinamos expertise técnica com abordagem humanizada, garantindo segurança jurídica e tranquilidade para nossos clientes em Rio Verde e região.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentials.map((item, index) => (
            <ScrollReveal key={index} delay={200 + (index * 100)}>
              <div className="p-6 bg-white rounded-md card-shadow h-full flex flex-col">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-neutral-dark/70">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
