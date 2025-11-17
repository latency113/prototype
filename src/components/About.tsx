import React from 'react';
import type { Resume } from '../types';
import { Sparkles } from 'lucide-react';

interface AboutProps {
  resume: Resume;
}

const About: React.FC<AboutProps> = ({ resume }) => {
return (
    <section id="about" className="relative py-20 px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Content layer */}
      <div className="relative max-w-4xl mx-auto">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <div className="space-y-6">
            {resume.summary.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-slate-700 leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Decorative quote */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 italic text-sm">
            "Passion for creating exceptional digital experiences"
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
