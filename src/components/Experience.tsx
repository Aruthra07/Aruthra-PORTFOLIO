import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Star, Users, Radio, Compass } from 'lucide-react';

interface ExperienceProps {
  playAudio: (type: 'hover' | 'click') => void;
}

interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  desc: string;
  icon: React.ReactNode;
  tags: string[];
}

const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    id: 'ceo',
    role: 'Chief Executive Officer (CEO)',
    organization: 'DotEco',
    period: '2024 - Present',
    desc: 'Leading DotEco, orchestrating overall organization strategy, managing cross-functional technical teams, coordinating environmental sustainability projects, and hosting networking workshops.',
    icon: <Star className="w-4 h-4" />,
    tags: ['Leadership', 'Strategic Vision', 'Team Building', 'Event Coordination', 'Sustainability']
  },
  {
    id: 'mlsa',
    role: 'Microsoft Learn Student Ambassador',
    organization: 'Microsoft Community',
    period: '2024 - Present',
    desc: 'Conducting campus webinars and hackathons, promoting Microsoft Azure technologies, and tutoring student peers on cloud fundamentals and software development integrations.',
    icon: <Users className="w-4 h-4" />,
    tags: ['Azure Cloud', 'Technical Speaking', 'Community Organizing', 'Webinars']
  },
  {
    id: 'aws',
    role: 'AWS Community Advocate & Educator',
    organization: 'AWS Learning Community',
    period: '2024 - Present',
    desc: 'Actively participating in AWS Cloud advocacy events, writing instructional material for peers, and facilitating study tracks for Solutions Architect certifications.',
    icon: <Compass className="w-4 h-4" />,
    tags: ['AWS Cloud', 'Mentorship', 'Technical Content', 'AWS Architectures']
  },
  {
    id: 'oracle',
    role: 'Oracle Cloud & GenAI Member',
    organization: 'Oracle Community Ecosystem',
    period: '2024 - Present',
    desc: 'Contributing to technical discussions surrounding Oracle Cloud Infrastructure (OCI) architectures, and deploying pilot enterprise pipelines using OCI Generative AI PROFESSIONAL suites.',
    icon: <Radio className="w-4 h-4" />,
    tags: ['OCI Cloud', 'Generative AI', 'Enterprise DB', 'System Pilots']
  },
  {
    id: 'academic',
    role: 'Academic Timeline (ECE Student)',
    organization: 'SNS College of Engineering',
    period: '2022 - Present',
    desc: 'Pursuing Bachelor of Engineering in Electronics & Communication. Fostered deep understanding of circuit design, IoT systems, telemetry protocols, and data structures. Maintaining a CGPA of 8.8 / 10.',
    icon: <Award className="w-4 h-4" />,
    tags: ['ECE Core', 'Signal Telemetry', 'IoT Sensors', '8.8 CGPA']
  }
];

export const Experience: React.FC<ExperienceProps> = ({ playAudio }) => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10 w-full">
      <div className="flex flex-col mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-accentBlue mb-4 font-sans">
          Professional Experience
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-textPrimary">
          Leadership & Journey
        </h2>
        <p className="text-textSecondary text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-sans">
          Tracking major academic milestones, global cloud advocate programs, and corporate execution as DotEco CEO.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 md:pl-12 ml-4 md:ml-6 flex flex-col gap-14">
        {EXPERIENCE_ITEMS.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            key={item.id}
            onMouseEnter={() => playAudio('hover')}
            className="relative group cursor-default"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 group-hover:border-accentBlue group-hover:bg-accentBlue flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-white transition-all duration-300 shadow-sm z-10">
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accentBlue transition-colors duration-300 tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 block">
                    {item.organization}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-accentBlue" />
                  {item.period}
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
