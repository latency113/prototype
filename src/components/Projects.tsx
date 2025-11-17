import React from 'react';
import type { Resume } from '../types';

interface ProjectsProps {
  resume: Resume;
}

const Projects: React.FC<ProjectsProps> = ({ resume }) => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {resume.projects.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
