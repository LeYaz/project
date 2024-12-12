import React, { useState } from 'react';
import { Building2, Code, Layout, Package } from 'lucide-react';
import waitImage from '../assets/images/wait.png';
import mapsLeadsImage from '../assets/images/mapsleads.png';
import autocleanImage from '../assets/images/autocleanworkflow.png';
import emailclassifierImage from '../assets/images/emailclassifier.png';
import chatbotImage from '../assets/images/chatbotperso.png';
import portImage from '../assets/images/port.png';
import digitalscalesImage from '../assets/images/digitalscales.png';
const projects = {
  saas: [
    {
      title: "MapsLeads",
      description: "SaaS de recherche de prospect via Google Maps",
      image: mapsLeadsImage,
      technologies: ["Angular", "Nest.js", "PostgreSQL", "VPS"]
    }
  ],
  autom: [
    {
      title: "Suivi de tâches",
      description: "Système de suivi des tâches et intégrations sur Google Sheets automatisées",
      image: autocleanImage,
      technologies: ["Angular", "NestJs", "n8n", "PostgreSQL"]
    },
    {
      title: "Classification de mails",
      description: "Solution de classification de mails à partir de critères définis via un dashboard",
      image: emailclassifierImage,
      technologies: ["n8n", "OpenAi api", "Angular", "NestJs", "PostgreSQL"]
    }
  ],
  industrie: [
    {
      title: "Application Système informations",
      description: "Développement d'une application permettant la gestion des informations diffusées au sein d'une zone portuaire (sonorisation, panneaux d'affichage, horaires d'arrivées et de départs, etc.)",
      image: portImage,
      technologies: ["Angular", "C#", ".Net", "MariaDB"]
    }
  ], 
  concept: [
    {
      title: "DigitalScales",
      description: "Site vitrine pour DigitalScales",
      image: digitalscalesImage,
      technologies: ["Angular", "SCSS"]
    },
    {
      title: "Site humoristique de meme sur le temps",
      description: "Chaque page est une page de chargement, et à chaque rechargement du site une page différente est affichée",
      image: waitImage,
      technologies: ["React", "Tailwind CSS", "Vite"]
    },
    {
      title: "ChatBot personalisé",
      description: "ChatBot avec une personalité bien marquée (romantique, confus, idiot, etc.)",
      image: chatbotImage,
      technologies: ["Vue.js", "Nest.js", "OpenAi api"]
    }
  ]
};

const categories = [
  { id: 'saas', label: 'SaaS', icon: <Building2 className="h-5 w-5" /> },
  { id: 'autom', label: 'Automatisation', icon: <Package className="h-5 w-5" /> },
  { id: 'industrie', label: 'Industrie/Transport', icon: <Layout className="h-5 w-5" /> },
  { id: 'concept', label: 'Concept/Site vitrine', icon: <Code className="h-5 w-5" /> }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('saas');

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap sm:flex-direction: column">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects[activeCategory as keyof typeof projects].map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full  object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}