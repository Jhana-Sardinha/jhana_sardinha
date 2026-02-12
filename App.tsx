
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-texture selection:bg-teal-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessTimeline />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
