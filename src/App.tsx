import React from 'react';
import resumeData from './data';
import type { Resume } from './types';

// Header Component
const Header: React.FC<{ resume: Resume; scrollY: number }> = ({ resume, scrollY }) => (
  <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">

    {/* Parallax Background: Adjusted for softer blending and deeper colors */}
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{ transform: `translateY(${scrollY * 0.4}px)` }} // Slightly slower parallax
    >
      {/* Decorative Blob 1: Top Left - Larger, deeper blue */}
      <div className="absolute top-10 left-5 w-[28rem] h-[28rem] bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
      {/* Decorative Blob 2: Center Right - Subtle purple-pink */}
      <div className="absolute top-1/3 right-10 w-[24rem] h-[24rem] bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
      {/* Decorative Blob 3: Bottom Left - New element for ground fill */}
      <div className="absolute bottom-[-10rem] left-0 w-[30rem] h-[30rem] bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
    </div>

    {/* Content (Name & Title) */}
    <div
      className="relative z-10 text-center text-white px-4"
      style={{ transform: `translateY(${scrollY * -0.15}px)`, opacity: Math.max(0, 1 - scrollY / 400) }} // Smoother fade and slower ascent
    >
      <h1 className="text-7xl sm:text-8xl lg:text-[7rem] font-extrabold mb-2 tracking-tight drop-shadow-lg animate-fadeInDown">{resume.name}</h1>
      <p className="text-2xl sm:text-4xl mb-12 font-light text-purple-200 animate-fadeInUp delay-300">{resume.title}</p>

      {/* Contact Information - Structured and Iconified */}
      {(resume.contact.email || resume.contact.phone || resume.contact.address) && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center text-lg md:text-lg font-medium">
          {resume.contact.email && (
            <span className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              {resume.contact.email}
            </span>
          )}
          {(resume.contact.email || resume.contact.phone) && <span className="text-purple-300 hidden md:inline">•</span>}

          {resume.contact.phone && (
            <span className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.058 11.058 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74A1 1 0 0118 16.847V18a1 1 0 01-1 1h-2C7.82 19 2 13.18 2 5V3z" /></svg>
              {resume.contact.phone}
            </span>
          )}
          {(resume.contact.phone || resume.contact.address) && <span className="text-purple-300 hidden md:inline">•</span>}

          {resume.contact.address && (
            <span className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              {resume.contact.address}
            </span>
          )}
        </div>
      )}
    </div>

    {/* Scroll Indicator - More visual and robust */}
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      style={{ opacity: Math.max(0, 1 - scrollY / 250) }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white text-sm mb-2 opacity-80">Scroll Down</p>
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-pulse-slow" /> {/* Changed to pulse for modern look */}
        </div>
      </div>
    </div>
  </header>
);

// About Section
const About: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Blob 1: Top Right - Dynamic movement and color */}
      <div
        className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-10"
        style={{ transform: `translateY(${sectionScroll * 0.1}px) rotate(${sectionScroll * 0.05}deg)` }}
      />
      {/* Decorative Blob 2: Bottom Left - Dynamic movement and color */}
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-10"
        style={{ transform: `translateY(${sectionScroll * 0.08}px) rotate(${-sectionScroll * 0.05}deg)` }}
      />

      <div
        className="relative max-w-4xl mx-auto z-20"
        style={{ transform: `translateY(${sectionScroll * -0.04}px)` }} // Smoother Parallax for the content block
      >
        <h2 className="text-4xl font-extrabold text-center mb-16 text-indigo-800 tracking-tight">
          เกี่ยวกับฉัน
        </h2>

        {resume.summary && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border-t-4 border-indigo-500">
            {/* Iterate over summary lines for better formatting */}
            {resume.summary.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-gray-700 leading-snug ${index === 0 ? 'font-semibold' : ''} ${index > 0 ? 'mt-4 pt-4 border-t border-gray-100' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Experience Section
const Experience: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  if (!resume.experience || resume.experience.length === 0) return null;

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div
        className="absolute top-10 left-10 w-48 h-48 border-4 border-indigo-100 rounded-xl transform rotate-3 opacity-50 z-10"
        style={{ transform: `translateY(${sectionScroll * 0.15}px) rotate(${3 + sectionScroll * 0.03}deg)` }}
      />
      {/* Decorative Element 2: Bottom Right - Soft gradient blur */}
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full opacity-60 blur-3xl z-10"
        style={{ transform: `translateY(${sectionScroll * 0.1}px)` }}
      />

      <div className="relative max-w-5xl mx-auto z-20">
        <h2
          className="text-4xl font-extrabold text-center mb-20 text-indigo-800 tracking-tight"
          style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
        >
          ประสบการณ์ทำงาน
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-indigo-200 pl-8 space-y-12">
          {Array.isArray(resume.experience) && resume.experience.map((exp, index) => (
            <div
              key={index}
              className="relative group pr-4" // Added group for hover effects on the marker
              style={{ transform: `translateY(${sectionScroll * (-0.03 * (index + 1))}px)` }}
            >
              {/* Timeline Marker (Dot) */}
              <div className="absolute -left-10 top-2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-600"></div>

              {/* Experience Card */}
              <div
                className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-indigo-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    <p className="text-lg text-purple-600 font-semibold">{exp.company}</p>
                  </div>

                  {/* Date Badge */}
                  {(exp.startDate || exp.endDate) && (
                    <span className="text-sm font-medium px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full mt-2 md:mt-0 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  )}
                </div>

                {/* Description/Key Achievements */}
                {exp.description && (
                  <ul className="list-none text-gray-700 leading-relaxed space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  if (!resume.education || resume.education.length === 0) return null;

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative Blob 1: Top Left - Larger, softer color, subtle movement and scale */}
      <div
        className="absolute top-10 left-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 z-10"
        style={{ transform: `translateY(${sectionScroll * 0.15}px) scale(${1 + sectionScroll * 0.0001})` }}
      />
      {/* Decorative Blob 2: Bottom Right - New blob for balance */}
      <div
        className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-10"
        style={{ transform: `translateY(${-sectionScroll * 0.1}px) scale(${1 + sectionScroll * -0.0001})` }}
      />

      <div className="relative max-w-5xl mx-auto z-20">
        <h2
          className="text-4xl font-extrabold text-center mb-20 text-indigo-700 tracking-tight"
          style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
        >
          ประวัติการศึกษา
        </h2>
        <div className="space-y-8">
          {/* Education Timeline/List */}
          {Array.isArray(resume.education) && resume.education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white p-6 sm:p-10 rounded-3xl shadow-xl transition-all duration-500 ease-in-out border-l-4 border-indigo-400 hover:shadow-2xl hover:scale-[1.01]"
              style={{ transform: `translateY(${sectionScroll * (-0.03 * (index + 1))}px)` }}
            >
              {/* Time Marker - New element */}
              <div className="absolute -left-3 top-10 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>

              <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center mb-1">
                <h3 className="text-2xl font-bold text-gray-800 leading-snug">{edu.degree}</h3>
                {/* Date Badge */}
                {(edu.startDate || edu.endDate) && (
                  <span className="mt-2 sm:mt-0 px-4 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full shadow-md whitespace-nowrap">
                    {edu.startDate} - {edu.endDate}
                  </span>
                )}
              </div>

              {edu.major && <p className="text-lg text-purple-600 font-medium mb-3">{edu.major}</p>}

              <div className="flex justify-between items-center text-gray-600 border-t pt-3 mt-3">
                {/* University with Icon */}
                {edu.university && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-9a5 5 0 0110 0v1a3 3 0 11-6 0v-1H5v1zm11 1v-1a6 6 0 10-12 0v1h12z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-700">{edu.university}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  if (!resume.skills || resume.skills.length === 0) return null;

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">  {/* Decorative Blob 1: Top Right - Less opaque, softer color */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-15 blur-3xl z-10"
        style={{ transform: `translateY(${sectionScroll * 0.2}px) translateX(${sectionScroll * 0.1}px)` }}
      />
      {/* Decorative Blob 2: Bottom Left - Less opaque, softer color */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-15 blur-3xl z-10"
        style={{ transform: `translateY(${sectionScroll * 0.15}px) translateX(${-sectionScroll * 0.1}px)` }}
      />

      <div className="relative max-w-6xl mx-auto z-20">
        <h2
          className="text-4xl font-extrabold text-center mb-20 text-indigo-800 tracking-tight"
          style={{ transform: `translateY(${sectionScroll * -0.06}px)` }}
        >
          ทักษะ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Ensure resume.skills is an array before mapping */}
          {Array.isArray(resume.skills) && resume.skills.map((skillGroup: any, index: any) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border-b-4 border-indigo-400 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
            // style={{ transform: `translateY(${sectionScroll * (-0.03 * (index + 1))}px)` }}
            >
              <h3 className="text-lg font-bold text-indigo-700 mb-6 text-center border-b pb-3">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items && skillGroup.items.map((skill: any, i: any) => (
                  <div key={i} className="flex items-center gap-4">
                    {/* Icon for visual appeal (e.g., checkmark or diamond) */}
                    <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  if (!resume.projects || resume.projects.length === 0) return null;

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Decorative Blob 1: Top Left - Softer color and blur */}
      <div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl transform rotate-6 opacity-40 blur-2xl z-10"
        style={{ transform: `translateY(${sectionScroll * 0.12}px) rotate(${6 + sectionScroll * 0.03}deg)` }}
      />
      {/* Decorative Blob 2: Bottom Right - New element for balance */}
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-indigo-100 to-purple-100 rounded-full opacity-30 blur-3xl z-10"
        style={{ transform: `translateY(${sectionScroll * 0.08}px)` }}
      />

      <div className="relative max-w-6xl mx-auto z-20">
        <h2
          className="text-4xl font-extrabold text-center mb-20 text-indigo-800 tracking-tight"
          style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
        >
          ผลงานและโปรเจกต์
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.isArray(resume.projects) && resume.projects.map((project: any, index: any) => (
            <a
              key={index}
              href={project.url || '#'} // Assuming 'url' field exists for the link
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-t-4 border-indigo-400/0 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between h-full"
              // style={{ transform: `translateY(${sectionScroll * (-0.02 * (index + 1))}px)` }} // Smoother parallax
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  {project.description && <p className="text-gray-700 mb-4 leading-relaxed text-base">{project.description}</p>}
                </div>

                {/* Tech Stack and Link Indicator */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Stack:</p>
                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: any, i: any) => (
                          <span key={i} className="text-xs font-medium px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Call to Action Link */}
                  <div className="flex items-center justify-end text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                    ดูรายละเอียด
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact: React.FC<{ resume: Resume; scrollY: number; offsetTop: number }> = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);

  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div
        className="absolute top-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        style={{ transform: `translateY(${sectionScroll * 0.2}px)` }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        style={{ transform: `translateY(${sectionScroll * 0.12}px)` }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <h2
          className="text-5xl font-bold mb-8 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.08}px)` }}
        >
          ติดต่อฉัน
        </h2>
        <p
          className="text-lg text-gray-700 mb-12"
          style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
        >
          สนใจร่วมงานหรือมีโปรเจกต์น่าสนใจ? ติดต่อได้เลย!
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ transform: `translateY(${sectionScroll * -0.03}px)` }}
        >
          {resume.contact.email && (
            <a
              href={`mailto:${resume.contact.email}`}
              className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              ส่งอีเมล
            </a>
          )}
          <button className="px-8 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-md text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            ดาวน์โหลด Resume
          </button>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [sectionOffsets, setSectionOffsets] = React.useState({
    about: 0,
    experience: 0,
    education: 0,
    skills: 0,
    projects: 0,
    contact: 0,
  });
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateOffsets = () => {
      setSectionOffsets({
        about: document.getElementById('about')?.offsetTop || 0,
        experience: document.getElementById('experience')?.offsetTop || 0,
        education: document.getElementById('education')?.offsetTop || 0,
        skills: document.getElementById('skills')?.offsetTop || 0,
        projects: document.getElementById('projects')?.offsetTop || 0,
        contact: document.getElementById('contact')?.offsetTop || 0,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateOffsets);
    updateOffsets();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffsets);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap");
        
        * {
          font-family: "Noto Sans Thai", sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>

      <Header resume={resumeData} scrollY={scrollY} />
      <main>
        <div id="about">
          <About resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.about || 0} />
        </div>
        <div id="experience">
          <Experience resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.experience || 0} />
        </div>
        <div id="education">
          <Education resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.education || 0} />
        </div>
        <div id="skills">
          <Skills resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.skills || 0} />
        </div>
        <div id="projects">
          <Projects resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.projects || 0} />
        </div>
        <div id="contact">
          <Contact resume={resumeData} scrollY={scrollY} offsetTop={sectionOffsets.contact || 0} />
        </div>
      </main>

      <footer className="py-2 text-center bg-gray-900 text-white">
        <p>© 2025 {resumeData.name} - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;