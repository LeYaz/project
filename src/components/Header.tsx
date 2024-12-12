import React from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">Yazid Aadnan</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#accueil" className="hover:text-indigo-600 transition-colors">Accueil</a>
            <a href="#competences" className="hover:text-indigo-600 transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-indigo-600 transition-colors">Projets</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b">
            <div className="flex flex-col gap-4 p-4">
              <a href="#accueil" className="hover:text-indigo-600 transition-colors">Accueil</a>
              <a href="#competences" className="hover:text-indigo-600 transition-colors">Compétences</a>
              <a href="#projets" className="hover:text-indigo-600 transition-colors">Projets</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}