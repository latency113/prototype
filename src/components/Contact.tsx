import React from 'react';
import type { Resume } from '../types';
import { Mail, Phone, Linkedin, Github, Globe, MapPin } from 'lucide-react';

interface ContactProps {
  resume: Resume;
}

const Contact: React.FC<ContactProps> = ({ resume }) => {
  const { contact } = resume;

  return (
    <section id="contact" className="py-24 px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-lg">
            Feel free to reach out to me
          </p>
        </div>

        {/* Contact List */}
        <div className="flex flex-wrap justify-center gap-8">
          <a 
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-50 transition-colors group min-w-[160px]"
          >
            <Mail className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-1">Email</p>
              <p className="text-slate-800 text-sm">{contact.email}</p>
            </div>
          </a>

          {contact.phone && (
            <a 
              href={`tel:${contact.phone}`}
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-50 transition-colors group min-w-[160px]"
            >
              <Phone className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <p className="text-slate-800 text-sm">{contact.phone}</p>
              </div>
            </a>
          )}

          {contact.linkedin && (
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-50 transition-colors group min-w-[160px]"
            >
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <p className="text-slate-800 text-sm">View Profile</p>
              </div>
            </a>
          )}

          {contact.github && (
            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-50 transition-colors group min-w-[160px]"
            >
              <Github className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <p className="text-slate-800 text-sm">View Profile</p>
              </div>
            </a>
          )}

          {contact.website && (
            <a 
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-slate-50 transition-colors group min-w-[160px]"
            >
              <Globe className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">Website</p>
                <p className="text-slate-800 text-sm">Visit Site</p>
              </div>
            </a>
          )}

          {contact.address && (
            <div className="flex flex-col items-center gap-3 p-6 min-w-[160px]">
              <MapPin className="w-6 h-6 text-slate-400" />
              <div className="text-center">
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-slate-800 text-sm">{contact.address}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
