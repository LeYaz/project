import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import bannerImage from '../assets/images/banner.png';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Développeur Web <span className="text-indigo-600">Full Stack</span>
            </h1>
            <p className="text-xl text-gray-600">
              Passionné par la création d'applications web innovantes et performantes
            </p>
            <div className="flex gap-4">
              <div className="flex gap-4">
                <a href="https://github.com/LeYaz" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/yazid-aadnan-webdev/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-indigo-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={bannerImage}
              alt="Developer workspace" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}