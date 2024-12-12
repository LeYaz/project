import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;