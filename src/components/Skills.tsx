import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    technologies: ["Angular", "TypeScript", "CSS", "React"]
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-indigo-600" />,
    technologies: ["NestJs", "Java", "Node.js", "C#"]
  },
  {
    category: "Base de données",
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    technologies: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-8 w-8 text-indigo-600" />,
    technologies: ["Docker", "CI/CD", "Git", "GCP"]
  },
  {
    category: "Automatisation",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    technologies: ["n8n", "Make"]
  }
];

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}