import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Award, X, Image as ImageIcon, ArrowRight } from 'lucide-react';

interface EventsProps {
  playAudio: (type: 'hover' | 'click') => void;
}

const TIMELINE_EVENTS = [
  {
    id: 'e1',
    year: '2026',
    title: 'Microsoft Campus Visit',
    location: 'Bangalore, India',
    category: 'Corporate Summit',
    learning: 'Engaged with industry leaders to explore cutting-edge Microsoft Graph integrations, Azure cognitive services, and enterprise workspace automations. Gained profound insights into scaling cloud ecosystems.',
    skills: ['Azure', 'Enterprise Automation', 'Cloud Architecture', 'Networking'],
    image: 'portfolio_images/events/ms_campus.jpg',
    gallery: ['portfolio_images/events/ms_campus.jpg'],
    desc: 'An exclusive campus visit connecting with Microsoft architects. Discussions centered around the future of enterprise automation and AI-driven cloud solutions.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  },
  {
    id: 'e2',
    year: '2025',
    title: 'CAUSE 2025 Hackathon',
    location: 'CMR Bangalore',
    category: 'Competitive Hackathon',
    learning: 'Spearheaded rapid prototyping of an automated IoT modeling system under extreme time constraints, fostering team leadership and agile development.',
    skills: ['IoT Prototyping', 'Rapid Development', 'Team Leadership', 'Pitching'],
    image: 'portfolio_images/events/cause_2025.jpg',
    gallery: ['portfolio_images/events/cause_2025.jpg'],
    desc: 'Participated in the intense 48-hour CAUSE 2025 Hackathon, developing an innovative smart solution from conceptualization to a fully working prototype.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  },
  {
    id: 'e3',
    year: '2025',
    title: 'FeTNA International Conference',
    location: 'Global / Regional',
    category: 'Global Conference',
    learning: 'Bridged cultural insights with technological development, exploring methodologies for global networking and cross-cultural technological deployment.',
    skills: ['Global Networking', 'Leadership', 'Cross-Cultural Communication'],
    image: 'portfolio_images/events/fetna_1.jpg',
    gallery: ['portfolio_images/events/fetna_1.jpg', 'portfolio_images/events/fetna_2.jpg'],
    desc: 'Served as a delegate at the FeTNA International Conference, participating in deep-dive sessions on integrating regional cultural nuances with global software solutions.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  },
  {
    id: 'e4',
    year: '2024',
    title: 'TechX Conference',
    location: 'Chennai, India',
    category: 'Technology Summit',
    learning: 'Explored future hardware architectures, IoT standardization, and edge computing telemetry. Evaluated embedded engineering ecosystems for smart city implementations.',
    skills: ['IoT Standards', 'Edge Computing', 'Embedded Engineering', 'Hardware'],
    image: 'portfolio_images/events/techx.jpg',
    gallery: ['portfolio_images/events/techx.jpg'],
    desc: 'An immersive hardware and systems summit discussing future standards and integrated engineering ecosystems for next-generation edge devices.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  },
  {
    id: 'e5',
    year: '2024',
    title: 'CDAC Memory & Malware Forensics',
    location: 'Kerala, India',
    category: 'Security Bootcamp',
    learning: 'Mastered advanced cryptography, network telemetry security, and vulnerability mitigation through hands-on memory forensics and malware analysis.',
    skills: ['Malware Forensics', 'Cryptography', 'Vulnerability Mitigation', 'Security'],
    image: 'portfolio_images/Bootcamp.png',
    gallery: ['portfolio_images/Bootcamp.png'],
    desc: 'An intensive, hands-on bootcamp hosted by CDAC focused exclusively on deep memory analysis and mitigating sophisticated malware threats.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  },
  {
    id: 'e6',
    year: '2024',
    title: 'N8N & AI Automation Meetup',
    location: 'Coimbatore, India',
    category: 'Automation Workshop',
    learning: 'Designed and deployed multi-agent workflows, API connectors, and automation triggers for massive productivity gains in enterprise environments.',
    skills: ['N8N', 'API Connectors', 'Automation Triggers', 'Multi-agent AI'],
    image: 'portfolio_images/events/n8n.jpg',
    gallery: ['portfolio_images/events/n8n.jpg'],
    desc: 'A deep-dive technical session into deploying productivity-enhancing automation triggers and orchestrating multi-agent AI systems via N8N.',
    link: 'https://www.linkedin.com/in/aruthra-sm'
  }
];

export const EventsShowcase: React.FC<EventsProps> = ({ playAudio }) => {
  const [selectedEvent, setSelectedEvent] = useState<typeof TIMELINE_EVENTS[0] | null>(null);

  return (
    <section id="events" className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10 w-full">
      {/* Premium Header */}
      <div className="flex flex-col items-start mb-24">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-accentCyan mb-4 font-mono">
          Professional Exposure
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mb-6">
          Events & <span className="text-textSecondary">Conferences.</span>
        </h2>
        <p className="text-textSecondary text-base md:text-lg max-w-2xl font-sans leading-relaxed">
          A curated timeline of my professional footprint. Real interactions, technical summits, and global conferences shaping my engineering perspective.
        </p>
      </div>

      {/* Vertical Timeline Layout */}
      <div className="flex flex-col gap-24 md:gap-32 relative">
        {/* Subtle connecting line down the left side for desktop */}
        <div className="hidden md:block absolute left-[22.5%] top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-glass-border to-transparent" />

        {TIMELINE_EVENTS.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 group"
          >
            {/* Left: Thumbnail & Image (45% width on desktop) */}
            <div className="w-full md:w-[45%] relative z-10 flex flex-col justify-center">
              <div 
                className="rounded-2xl overflow-hidden relative shadow-2xl glass-card border border-glass-border aspect-[4/3] w-full cursor-pointer"
                onClick={() => {
                  playAudio('click');
                  setSelectedEvent(event);
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={import.meta.env.BASE_URL + event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>

            {/* Right: Details (55% width on desktop) */}
            <div className="w-full md:w-[55%] flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-4">
                <span className="text-lg md:text-xl font-display font-black text-white bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-glass-border shadow-lg">
                  {event.year}
                </span>
                <span className="text-xs uppercase font-bold text-accentCyan tracking-widest font-mono">
                  {event.category}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-black text-textPrimary group-hover:text-white transition-colors duration-300 tracking-tight">
                {event.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-textMuted font-mono">
                <MapPin className="w-4 h-4 text-accentPurple" />
                {event.location}
              </div>

              <p className="text-base text-textSecondary font-sans leading-relaxed max-w-lg pt-2">
                {event.learning}
              </p>

              <button 
                onClick={() => {
                  playAudio('click');
                  setSelectedEvent(event);
                }}
                className="w-fit flex items-center gap-2 mt-4 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-glass-border text-sm font-bold transition-all duration-300 text-textPrimary hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                View Event Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                playAudio('click');
                setSelectedEvent(null);
              }}
              className="absolute inset-0 bg-[#030612]/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-bgPrimary/80 border border-glass-border rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 w-full max-w-5xl max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-glass-border">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1.5 bg-white/5 border border-glass-border rounded-lg text-[10px] font-bold uppercase tracking-wider text-textSecondary">
                    {selectedEvent.year} • {selectedEvent.category}
                  </span>
                </div>
                <button
                  onClick={() => {
                    playAudio('click');
                    setSelectedEvent(null);
                  }}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-glass-border text-textSecondary hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto custom-scrollbar">
                {/* Left: Gallery */}
                <div className="lg:w-1/2 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-glass-border bg-black/20">
                  <div className="grid grid-cols-1 gap-6">
                    {selectedEvent.gallery.map((img: string, idx: number) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-glass-border shadow-xl">
                        <img 
                          src={import.meta.env.BASE_URL + img} 
                          alt="Event visual" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] text-white flex items-center gap-1.5 uppercase tracking-widest font-mono">
                          <ImageIcon className="w-3.5 h-3.5" /> Event Shot
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:w-1/2 p-8 md:p-10 flex flex-col gap-8 bg-gradient-to-b from-transparent to-black/10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black font-display text-white mb-4 tracking-tight">
                      {selectedEvent.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-mono text-accentCyan mb-6 border border-accentCyan/20 bg-accentCyan/5 px-4 py-2 rounded-xl w-fit">
                      <MapPin className="w-4 h-4" />
                      {selectedEvent.location}
                    </div>
                    <p className="text-base text-textSecondary font-sans leading-relaxed">
                      {selectedEvent.desc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                      <Award className="w-4 h-4 text-accentPurple" /> Core Learnings
                    </h4>
                    <p className="text-sm text-textPrimary leading-relaxed bg-white/5 p-5 rounded-2xl border border-glass-border font-sans">
                      {selectedEvent.learning}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                      Skills & Takeaways
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.skills.map((skill: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-black/40 border border-glass-border rounded-xl text-xs font-medium text-textSecondary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-glass-border">
                    <a
                      href={selectedEvent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-white text-black rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <i className="fab fa-linkedin text-lg" /> View Official Post / Proof
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
