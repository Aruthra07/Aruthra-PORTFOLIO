import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Users, Mic, Edit, Database } from 'lucide-react';

interface AboutProps {
  playAudio: (type: 'hover' | 'click') => void;
}

const EXPERTISE_CARDS = [
  {
    title: "Technology & AI",
    icon: <Cpu className="w-5 h-5" />,
    techs: ["Python", "TensorFlow", "OpenAI"],
    achievements: "Built intelligent recommendation engines and deployed multi-agent workflows."
  },
  {
    title: "Cloud & Automation",
    icon: <Cloud className="w-5 h-5" />,
    techs: ["AWS", "Azure", "N8N"],
    achievements: "Architected scalable serverless infrastructures saving 15+ hours weekly."
  },
  {
    title: "Leadership & Community",
    icon: <Users className="w-5 h-5" />,
    techs: ["Team Building", "Agile", "Mentorship"],
    achievements: "CEO of DotEco, leading initiatives and empowering student developers."
  },
  {
    title: "Public Speaking",
    icon: <Mic className="w-5 h-5" />,
    techs: ["Keynotes", "Workshops", "Panels"],
    achievements: "Delivered technical sessions at global conferences including FeTNA."
  },
  {
    title: "Content Creation",
    icon: <Edit className="w-5 h-5" />,
    techs: ["Technical Writing", "Documentation"],
    achievements: "Authored comprehensive engineering guides bridging complex topics."
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-5 h-5" />,
    techs: ["Tableau", "Pandas", "SQL"],
    achievements: "Developed BI dashboards improving decision speed by 40%."
  }
];

export const About: React.FC<AboutProps> = ({ playAudio }) => {
  return (
    <section id="about" className="py-12 px-6 md:px-12 max-w-6xl mx-auto relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Portrait & Intro */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accentBlue mb-2 font-sans">
            Who I Am
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-textPrimary mb-6">
            Building Tomorrow's Tech
          </h2>
          
          <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center flex-shrink-0 group overflow-hidden rounded-2xl shadow-xl border border-borderSilver bg-bgSurface mb-6 mx-auto lg:mx-0">
            <img
              src={import.meta.env.BASE_URL + "portfolio_images/aruthra_photo.jpg"}
              alt="Aruthra S M Portrait"
              className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          
          <p className="text-sm text-textSecondary font-sans leading-relaxed mb-4">
            As an ECE student with an <strong className="text-textPrimary">8.8 CGPA</strong>, I blend technical exploration with active leadership.
          </p>
          <div className="text-xs font-medium text-textMuted italic border-l-2 border-borderSilver pl-3">
            "True innovation happens at the intersection of technology and human connection."
          </div>
        </div>

        {/* Right Column: Strengths Swiper */}
        <div className="lg:col-span-8 flex flex-col pt-2 lg:pt-14">
          <h3 className="text-xs font-bold text-textPrimary mb-4 tracking-wide uppercase">Professional Expertise</h3>
          
          {/* Horizontal Swiping Container */}
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory custom-scrollbar w-full">
            {EXPERTISE_CARDS.map((card, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                onMouseEnter={() => playAudio('hover')}
                className="flex-shrink-0 w-[220px] snap-start p-5 rounded-xl bg-bgSurface border border-borderSilver hover:border-accentBlue transition-all duration-300 flex flex-col gap-4 group shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col gap-3">
                  <div className="p-2.5 w-max bg-bgPrimary border border-borderSilver rounded-xl text-textSecondary group-hover:text-accentBlue transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-textPrimary">{card.title}</h4>
                </div>
                
                <p className="text-xs text-textMuted leading-relaxed flex-1">
                  {card.achievements}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-borderSilver/50">
                  {card.techs.map((tech, i) => (
                    <span key={i} className="text-[9px] font-semibold bg-bgPrimary border border-borderSilver px-1.5 py-0.5 rounded text-textSecondary uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Swiper Hint */}
          <div className="flex items-center gap-2 text-[10px] text-textMuted font-semibold tracking-wider mt-2 ml-1">
            <span className="w-8 h-[1px] bg-borderSilver"></span>
            SWIPE TO EXPLORE
          </div>
        </div>
      </div>
    </section>
  );
};
