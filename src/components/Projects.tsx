import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  playAudio: (type: 'hover' | 'click') => void;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  techs: string[];
  github: string;
  demo: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'hydro',
    title: 'Smart Hydroponics System',
    summary: 'Automated soil-less farming solution with real-time IoT environmental monitoring.',
    techs: ['IoT', 'Sensors', 'ESP32'],
    github: 'https://github.com/Aruthra07/Smart-Hydroponics',
    demo: '#',
    image: 'portfolio_images/hackathon_banner.png'
  },
  {
    id: 'rfid',
    title: 'RFID Smart Access',
    summary: 'Secure access logging system blending RFID and biometric verification.',
    techs: ['RFID', 'Security', 'C++'],
    github: 'https://github.com/Aruthra07',
    demo: '#',
    image: 'portfolio_images/cyber_banner.png'
  },
  {
    id: 'wear',
    title: 'Wearable Safety Proto',
    summary: 'Smart wearable embedded with distress triggers and real-time fall detection.',
    techs: ['IoT', 'Wearables', 'GPS'],
    github: 'https://github.com/Aruthra07',
    demo: '#',
    image: 'portfolio_images/tech_conf_banner.png'
  },
  {
    id: 'career',
    title: 'AI Career Engine',
    summary: 'Intelligent decision engine matching students with tailored career trajectories.',
    techs: ['Python', 'AI/ML', 'Pandas'],
    github: 'https://github.com/Aruthra07/AI-Career-Recommendation',
    demo: '#',
    image: 'portfolio_images/automation_banner.png'
  },
  {
    id: 'form',
    title: 'N8N Form Automation',
    summary: 'Serverless workflow script automating redundant database entries.',
    techs: ['N8N', 'Automation', 'Python'],
    github: 'https://github.com/Aruthra07/Automation-Workflows',
    demo: '#',
    image: 'portfolio_images/automation_banner.png'
  },
  {
    id: 'analytics',
    title: 'Enterprise BI Dashboard',
    summary: 'Interactive analytics dashboard presenting forecasting models and operational trends.',
    techs: ['Tableau', 'Data Viz', 'SQL'],
    github: 'https://github.com/Aruthra07/AI-Analytics-Dashboard',
    demo: '#',
    image: 'portfolio_images/tech_conf_banner.png'
  }
];

export const Projects: React.FC<ProjectsProps> = ({ playAudio }) => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-accentBlue mb-4 font-sans">
          Work
        </span>
        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-textPrimary">
          Featured Projects
        </h2>
        <p className="text-textSecondary text-sm md:text-base max-w-xl mt-4 leading-relaxed font-sans">
          A curated selection of systems bridging physical engineering, data analytics, and automation workflows.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            key={project.id}
            className="flex flex-col bg-bgSurface border border-borderSilver rounded-xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
            onMouseEnter={() => playAudio('hover')}
          >
            {/* Project Image */}
            <div className="w-full aspect-video overflow-hidden border-b border-borderSilver relative">
              <img 
                src={import.meta.env.BASE_URL + project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Project Content */}
            <div className="flex flex-col p-5 h-full">
              <h3 className="text-lg font-bold text-textPrimary mb-2 font-display">
                {project.title}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-4 line-clamp-2">
                {project.summary}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-semibold rounded bg-bgPrimary border border-borderSilver text-textMuted tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-borderSilver/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playAudio('click')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-bgPrimary hover:bg-borderSilver border border-borderSilver rounded-lg text-xs font-semibold text-textPrimary transition-colors"
                >
                  <i className="fab fa-github w-3.5 h-3.5" /> Source
                </a>
                {project.demo !== '#' ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playAudio('click')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-accentBlue hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Learn More
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-bgPrimary/50 border border-borderSilver/50 rounded-lg text-xs font-semibold text-textMuted cursor-not-allowed"
                  >
                    Private Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
