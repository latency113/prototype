import React from 'react';
import resumeData from './data';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Header = ({ resume, scrollY }) => (
  <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
    {/* Parallax Background */}
    <div 
      className="absolute top-0 left-0 w-full h-full"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30" />
    </div>

    {/* Content */}
    <div 
      className="relative z-10 text-center text-white px-8"
      style={{ transform: `translateY(${scrollY * -0.2}px)`, opacity: Math.max(0, 1 - scrollY / 500) }}
    > 
      <h1 className="text-6xl md:text-8xl font-bold mb-4">{resume.name}</h1>
      <p className="text-2xl md:text-3xl mb-8 text-blue-100">{resume.title}</p>
      {(resume.email || resume.phone || resume.location) && (
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-lg">
          {resume.email && <span>📧 {resume.email}</span>}
          {resume.email && resume.phone && <span className="hidden md:inline">•</span>}
          {resume.phone && <span>📱 {resume.phone}</span>}
          {resume.phone && resume.location && <span className="hidden md:inline">•</span>}
          {resume.location && <span>📍 {resume.location}</span>}
        </div>
      )}
    </div>

    {/* Scroll Indicator */}
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
      </div>
    </div>
  </header>
);

// About Section with Parallax
const About = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        style={{ transform: `translateY(${sectionScroll * 0.15}px) rotate(${sectionScroll * 0.1}deg)` }}
      />
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"
        style={{ transform: `translateY(${sectionScroll * 0.1}px) rotate(${-sectionScroll * 0.1}deg)` }}
      />

      {/* Content */}
      <div 
        className="relative max-w-4xl mx-auto"
        style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
      >
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">เกี่ยวกับฉัน</h2>
        {resume.summary && (
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {resume.summary}
          </p>
        )}
      </div>
    </section>
  );
};

// Experience Section with Parallax
const Experience = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  if (!resume.experience || resume.experience.length === 0) return null;
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Parallax Geometric Shapes */}
      <div 
        className="absolute top-10 left-10 w-48 h-48 border-4 border-blue-200 rounded-lg transform rotate-12 opacity-20"
        style={{ transform: `translateY(${sectionScroll * 0.2}px) rotate(${12 + sectionScroll * 0.05}deg)` }}
      />
      <div 
        className="absolute bottom-20 right-20 w-64 h-64 border-4 border-purple-200 rounded-full opacity-20"
        style={{ transform: `translateY(${sectionScroll * 0.12}px)` }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.08}px)` }}
        >
          ประสบการณ์ทำงาน
        </h2>
        <div className="space-y-8">
          {resume.experience.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ transform: `translateY(${sectionScroll * (-0.04 * (index + 1))}px)` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.position}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                </div>
                {exp.period && <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>}
              </div>
              {exp.description && <p className="text-gray-700 leading-relaxed">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section with Parallax
const Education = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  if (!resume.education || resume.education.length === 0) return null;
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Parallax Elements */}
      <div 
        className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        style={{ transform: `translateY(${sectionScroll * 0.18}px) scale(${1 + sectionScroll * 0.0002})` }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.07}px)` }}
        >
          การศึกษา
        </h2>
        <div className="space-y-6">
          {resume.education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              style={{ transform: `translateY(${sectionScroll * (-0.05 * (index + 1))}px)` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
              {edu.field && <p className="text-xl text-blue-600 mb-2">{edu.field}</p>}
              <div className="flex justify-between items-center text-gray-600">
                {edu.school && <span>{edu.school}</span>}
                {edu.year && <span>{edu.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section with Parallax
const Skills = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  if (!resume.skills || resume.skills.length === 0) return null;
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"
        style={{ transform: `translateY(${sectionScroll * 0.22}px) translateX(${sectionScroll * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
        style={{ transform: `translateY(${sectionScroll * 0.14}px) translateX(${-sectionScroll * 0.1}px)` }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.08}px)` }}
        >
          ทักษะ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resume.skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              style={{ transform: `translateY(${sectionScroll * (-0.04 * (index + 1))}px)` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items && skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
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

// Projects Section with Parallax
const Projects = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  if (!resume.projects || resume.projects.length === 0) return null;
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Parallax Shapes */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg transform -rotate-12 opacity-20"
        style={{ transform: `translateY(${sectionScroll * 0.16}px) rotate(${-12 + sectionScroll * 0.05}deg)` }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.07}px)` }}
        >
          โปรเจกต์
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              style={{ transform: `translateY(${sectionScroll * (-0.03 * (index + 1))}px)` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              {project.description && <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>}
              {project.tech && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold">Tech Stack:</p>
                  <p className="text-sm text-blue-600">{project.tech}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section with Parallax
const Contact = ({ resume, scrollY, offsetTop }) => {
  const sectionScroll = Math.max(0, scrollY - offsetTop + 400);
  
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute top-20 left-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        style={{ transform: `translateY(${sectionScroll * 0.2}px)` }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        style={{ transform: `translateY(${sectionScroll * 0.12}px)` }}
      />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 
          className="text-5xl font-bold mb-8 text-gray-800"
          style={{ transform: `translateY(${sectionScroll * -0.08}px)` }}
        >
          ติดต่อฉัน
        </h2>
        <p 
          className="text-xl text-gray-700 mb-12"
          style={{ transform: `translateY(${sectionScroll * -0.05}px)` }}
        >
          สนใจร่วมงานหรือมีโปรเจกต์น่าสนใจ? ติดต่อได้เลย!
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ transform: `translateY(${sectionScroll * -0.03}px)` }}
        >
          {resume.email && (
            <a 
              href={`mailto:${resume.email}`}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              ส่งอีเมล
            </a>
          )}
          <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            ดาวน์โหลด Resume
          </button>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [sectionOffsets, setSectionOffsets] = React.useState<{ [key: string]: number }>({});

  const aboutRef = React.useRef<HTMLElement>(null);
  const experienceRef = React.useRef<HTMLElement>(null);
  const educationRef = React.useRef<HTMLElement>(null);
  const skillsRef = React.useRef<HTMLElement>(null);
  const projectsRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setSectionOffsets({
      about: aboutRef.current?.offsetTop || 0,
      experience: experienceRef.current?.offsetTop || 0,
      education: educationRef.current?.offsetTop || 0,
      skills: skillsRef.current?.offsetTop || 0,
      projects: projectsRef.current?.offsetTop || 0,
      contact: contactRef.current?.offsetTop || 0,
    });
  }, [scrollY]); // Recalculate offsets if scrollY changes (e.g., on resize or initial load)

  return (
    <div className="relative min-h-screen"> {/* Main container for the app */}
      {/* Global Parallax Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" // -z-10 to ensure content is on top
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Global+Parallax+Background')",
          // backgroundAttachment: 'fixed' is implied by 'fixed inset-0' and the parent being the viewport
        }}
      ></div>

      {/* Main content wrapper */}
      <div className="relative z-0 font-sans antialiased text-gray-900">
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

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-white">
        <p>© 2025 {resumeData.name} - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
