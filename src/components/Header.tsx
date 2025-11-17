import React from 'react';
import type { Resume } from '../types';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

interface HeaderProps {
  resume: Resume;
}

const Header: React.FC<HeaderProps> = ({ resume }) => {
  const { name, title, contact } = resume;

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-8 py-12">
        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
            {title}
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300">
          {/* Email */}
          <a 
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{contact.email}</span>
          </a>

          {/* Phone */}
          {contact.phone && (
            <>
              <span className="text-slate-600">•</span>
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contact.phone}</span>
              </a>
            </>
          )}

          {/* LinkedIn */}
          {contact.linkedin && (
            <>
              <span className="text-slate-600">•</span>
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </>
          )}

          {/* GitHub */}
          {contact.github && (
            <>
              <span className="text-slate-600">•</span>
              <a 
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
