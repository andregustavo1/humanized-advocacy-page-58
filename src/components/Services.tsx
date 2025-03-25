
import React from 'react';
import { FileSignature, UserPlus, Heart, Landmark, BookOpen, Settings } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileSignature className="w-10 h-10 text-secondary" />,
      title: "Planejamento matrimonial e pactos antenupciais",
      description: "Estruturação patrimonial pré-nupcial para segurança jurídica."
    },
    {
      icon: <Settings className="w-10 h-10 text-secondary" />,
      title: "Divórcio consensual e litigioso",
      description: "Soluções para separação com mínimo impacto emocional."
    },
    {
      icon: <Heart className="w-10 h-10 text-secondary" />,
      title: "Pensão alimentícia",
      description: "Definição e ajuste de valores conforme necessidades."
    },
    {
      icon: <UserPlus className="w-10 h-10 text-secondary" />,
      title: "Reconhecimento de paternidade",
      description: "Processos para estabelecimento de vínculos legais."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-secondary" />,
      title: "Inventários e testamentos",
      description: "Planejamento sucessório e partilha de bens."
    },
    {
      icon: <Landmark className="w-10 h-10 text-secondary" />,
      title: "Alteração de regime de bens",
      description: "Ajustes nas regras patrimoniais durante o casamento."
    }
  ];
  
  return (
    <section id="services" className="section bg-neutral-light">
      <ScrollReveal>
        <h2 className="section-title text-center mx-auto w-fit mb-16">
          Áreas de Atuação
          <span className="block w-full h-0.5 bg-secondary mt-2"></span>
        </h2>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={100 + (index * 100)} animation="scale-in">
            <div className="bg-white rounded-lg p-8 h-full flex flex-col card-shadow">
              <div className="mb-6 p-3 rounded-md bg-accent/30 inline-flex items-center justify-center w-16 h-16">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">{service.title}</h3>
              <p className="text-neutral-dark/80 flex-grow">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
