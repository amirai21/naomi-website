import React from 'react';
import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <style>
        {`
          body {
            direction: rtl;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          
          * {
            direction: rtl;
          }
          
          .prose {
            direction: rtl;
          }
        `}
      </style>
      
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <About />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}