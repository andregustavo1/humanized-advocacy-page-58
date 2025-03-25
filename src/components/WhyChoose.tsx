
import React from 'react';
import { Users, ShieldCheck, Scale, FileCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WhyChoose: React.FC = () => {
  const advantages = [
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Foco em Família",
      description: "Atendimento sensível e estratégico para questões familiares."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: "Prevenção de Conflitos",
      description: "Planejamento patrimonial e familiar para evitar litígios futuros."
    },
    {
      icon: <Scale className="w-12 h-12 text-white" />,
      title: "Atuação Judicial",
      description: "Representação em divórcios, alimentos e inventários."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-white" />,
      title: "Acompanhamento Integral",
      description: "Suporte completo do início à conclusão do caso."
    }
  ];
  
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-playfair font-normal mb-12 text-white text-center">
            Vantagens de uma Advocacia Especializada
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <ScrollReveal key={index} delay={200 + (index * 100)}>
              <div className="bg-primary bg-opacity-50 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center h-full flex flex-col items-center">
                <div className="mb-6 p-4 rounded-full bg-secondary/20 inline-flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
