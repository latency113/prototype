import React from 'react';
import type { Resume } from '../types';

interface SkillsProps {
  resume: Resume;
}

const Skills: React.FC<SkillsProps> = ({ resume }) => {
  return (
    <section id="skills" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resume.skills.map((skillCategory, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="list-disc list-inside text-lg">
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
