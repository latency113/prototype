import React from 'react';
import type { Resume } from '../types';

interface EducationProps {
  resume: Resume;
}

const Education: React.FC<EducationProps> = ({ resume }) => {
  return (
    <section id="education" className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-3xl mx-auto">
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{edu.degree} in {edu.major}</h3>
            <p className="text-xl text-gray-700">{edu.university} - {edu.location}</p>
            <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
