
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Vagner Vieira Advocacia | Direito de Família e Sucessões";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Process />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
