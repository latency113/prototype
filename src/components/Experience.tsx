import React from 'react';
import type { Resume } from '../types';

interface ExperienceProps {
  resume: Resume;
}

const Experience: React.FC<ExperienceProps> = ({ resume }) => {
  return (
    <section id="experience" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {resume.experience.map((exp, index) => (
          <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-xl text-gray-700">{exp.company} - {exp.location}</p>
            <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
            <ul className="list-disc list-inside mt-4 text-lg">
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
