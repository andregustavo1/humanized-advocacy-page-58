
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
    
    // Add base styles
    document.body.classList.add('bg-white');
    
    // Add global styles for sections
    const style = document.createElement('style');
    style.innerHTML = `
      .section {
        padding: 6rem 2rem;
        max-width: 1280px;
        margin: 0 auto;
      }
      .section-title {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-family: 'Playfair Display', serif;
        color: #2D3346;
        margin-bottom: 2rem;
        font-weight: normal;
      }
      .card-shadow {
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      .btn-primary {
        background-color: #213523;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        font-weight: 500;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(33, 53, 35, 0.15);
      }
      .btn-primary:hover {
        background-color: #769176;
        transform: translateY(-2px);
      }
      
      /* Timeline connector animation for desktop */
      @media (min-width: 768px) {
        .animate-progress-fill {
          width: 100% !important;
          height: 1px !important;
        }
      }
      
      /* Timeline connector animation for mobile */
      @media (max-width: 767px) {
        .animate-progress-fill {
          width: 1px !important;
          height: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
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
