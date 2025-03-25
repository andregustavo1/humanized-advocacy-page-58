
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-neutral-light">
      <ScrollReveal>
        <h2 className="section-title text-center mx-auto w-fit mb-16">
          Entre em Contato
          <span className="block w-full h-0.5 bg-secondary mt-2"></span>
        </h2>
      </ScrollReveal>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-6 md:p-8 card-shadow">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <div>
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Endereço</h3>
                    <p className="text-neutral-dark/80 text-sm md:text-base">Rua Rui Barbosa, 1.214, Centro, Rio Verde/GO, CEP 75901-250</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Phone className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5564984190392" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-secondary hover:underline text-sm md:text-base"
                    >
                      (64) 98419-0392
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Mail className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary mb-1">E-mail</h3>
                    <a 
                      href="mailto:vagnervieira.adv@gmail.com" 
                      className="text-secondary hover:underline text-sm md:text-base break-words"
                    >
                      vagnervieira.adv@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div>
                <h3 className="font-medium text-primary mb-4">Redes Sociais</h3>
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://www.facebook.com/share/157HUJkbHK/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/vagnervieira.adv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://youtube.com/@vagnervieira-adv?si=upn2KFsxnba8dbKp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </div>
                
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15386.377823640022!2d-50.92843!3d-17.79212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936876ff7a6e03e9%3A0x44e6e3add42c18c6!2sRio%20Verde%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1711334566951!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="200" 
                  style={{border:0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md shadow-sm"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
