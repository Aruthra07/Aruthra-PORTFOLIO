import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface EventsProps {
  playAudio: (type: 'hover' | 'click') => void;
}

const EVENTS_AND_ARTICLES = [
  {
    id: 'e1',
    title: 'A Day at Microsoft : Walking Into a Dream',
    location: 'Microsoft Campus, Bangalore',
    image: 'portfolio_images/events/ms_campus.jpg',
    link: 'https://www.linkedin.com/pulse/day-microsoft-walking-dream-aruthra-manivannan-e9syc?utm_source=share&utm_medium=member_android&utm_campaign=share_via'
  },
  {
    id: 'e2',
    title: 'Time Transformed: My Solo Ride to Bangalore',
    location: 'Bangalore',
    image: 'portfolio_images/events/ms_campus.jpg',
    link: 'https://www.linkedin.com/pulse/time-transformed-my-solo-ride-bangalore-aruthra-manivannan-qc03c?utm_source=share&utm_medium=member_android&utm_campaign=share_via'
  },
  {
    id: 'e3',
    title: 'SmartEcoSign - Hackathon',
    location: 'Bangalore Institute of Technology',
    image: 'portfolio_images/events/SmartEcoSign.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_entrepreneurship-leadership-businessgrowth-activity-7419571306318389248-uXsm?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e4',
    title: 'FeTNA International Conference',
    location: 'Le Meridien, Coimbatore',
    image: 'portfolio_images/events/FetNa.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_n8n-snowflake-nocodetools-activity-7355582416150818816-rEPr?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e5',
    title: 'N8N Webinar',
    location: 'Coimbatore',
    image: 'portfolio_images/events/n8n.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_uiuxdesign-creativebootcamp-designthinking-activity-7353812593477668870-Bzpg?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e6',
    title: 'DeSignSprint, Figma Bootcamp',
    location: 'Bootcamp',
    image: 'portfolio_images/Bootcamp.png',
    link: 'https://www.linkedin.com/posts/aruthra-sm_ai-githubcopilot-techjourney-activity-7347239876007772160-tTCe?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e7',
    title: 'Prompt to Production Meetup',
    location: 'Coimbatore',
    image: 'portfolio_images/events/techx.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_the-journey-activity-7319381930657886209-N3wt?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e8',
    title: 'CAUSE 2025 Hackathon',
    location: 'CMR, Bangalore',
    image: 'portfolio_images/events/cause_2025.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_cybersecurity-digitalforensics-memoryforensics-activity-7311772796945055745-MYl9?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  },
  {
    id: 'e9',
    title: 'CDAC Memory & Malware Forensics',
    location: 'Bootcamp',
    image: 'portfolio_images/events/Kerala, CDAC bootcamp_.jpg',
    link: 'https://www.linkedin.com/posts/aruthra-sm_techxconf-ai-cloudcomputing-activity-7263856949098627072-8-xO?utm_source=share&utm_medium=member_android&rcm=ACoAAEVTo0kBn2Ff2_vDMJvzWNUqqHGgFZ1i-3k'
  }
];

export const EventsShowcase: React.FC<EventsProps> = ({ playAudio }) => {
  return (
    <section id="events" className="py-16 px-6 md:px-12 max-w-7xl mx-auto relative z-10 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accentBlue mb-2 font-sans">
          Journey & Updates
        </span>
        <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-textPrimary mb-2">
          Events & Articles
        </h2>
        <p className="text-sm text-textSecondary max-w-2xl font-sans">
          A collection of my professional exposure, keynotes, and published thoughts.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {EVENTS_AND_ARTICLES.map((item, idx) => (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playAudio('click')}
            onMouseEnter={() => playAudio('hover')}
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="flex flex-col bg-bgSurface border border-borderSilver rounded-lg overflow-hidden group shadow-sm hover:shadow-md hover:border-accentBlue transition-all duration-300"
          >
            <div className="w-full aspect-video overflow-hidden relative border-b border-borderSilver">
              <img 
                src={import.meta.env.BASE_URL + item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = import.meta.env.BASE_URL + 'portfolio_images/cyber_banner.png';
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-xs font-bold text-textPrimary font-display leading-snug line-clamp-2 mb-1 group-hover:text-accentBlue transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-1 mt-auto text-[9px] text-textMuted uppercase font-semibold tracking-wider">
                <MapPin className="w-2.5 h-2.5" />
                <span className="truncate">{item.location}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
