
import React, { useEffect, useRef } from 'react';
import { Calendar, FileText, Handshake, Phone, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && timelineRef.current) {
            timelineRef.current.classList.add('animate-progress-fill');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: "Consulta Inicial",
      description: "Análise detalhada do caso e orientações preliminares."
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Documentação e Planejamento",
      description: "Coleta de documentos e estratégia jurídica personalizada."
    },
    {
      icon: <Handshake className="w-8 h-8 text-secondary" />,
      title: "Solução Personalizada",
      description: "Negociação extrajudicial ou preparação para ação judicial."
    },
    {
      icon: <Phone className="w-8 h-8 text-secondary" />,
      title: "Acompanhamento",
      description: "Monitoramento do processo e atualizações ao cliente."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Conclusão",
      description: "Finalização do caso com segurança jurídica."
    }
  ];
  
  return (
    <section id="process" className="section">
      <ScrollReveal>
        <h2 className="section-title text-center mx-auto w-fit mb-16">
          Nosso Método de Atuação
          <span className="block w-full h-0.5 bg-secondary mt-2"></span>
        </h2>
      </ScrollReveal>
      
      <div className="relative mt-20 pb-10">
        <div 
          ref={timelineRef}
          className="absolute top-[25px] left-[calc(50%-2px)] w-1 h-0 bg-secondary transform -translate-x-1/2 md:top-[20px] md:left-0 md:w-0 md:h-1"
          style={{ 
            transition: 'width 2s ease-out, height 2s ease-out',
            width: '0%',
            height: '0%' 
          }}
        ></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index} 
              delay={200 + (index * 150)}
              className="flex-1 px-4 md:min-w-[150px] flex flex-col"
            >
              <div className="bg-white rounded-lg border border-accent p-6 mb-6 card-shadow h-full flex-1 flex flex-col">
                <div className="mb-4 p-3 rounded-full bg-accent/30 inline-flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 text-primary">{step.title}</h3>
                <p className="text-sm text-neutral-dark/70">{step.description}</p>
              </div>
              
              <div className="mx-auto w-4 h-4 rounded-full bg-secondary relative">
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-secondary animate-ping opacity-75"></div>
              </div>
              
              <div className="text-center mt-2 font-medium text-primary">
                Etapa {index + 1}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
