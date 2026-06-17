import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Compass, Download, Sparkles, Volume2, VolumeX, Linkedin, Github, Mail } from 'lucide-react';

interface HeroProps {
  playAudio: (type: 'hover' | 'click') => void;
}

const ROLES = [
  "Technology Enthusiast",
  "AI Explorer",
  "Community Leader",
  "Public Speaker",
  "Content Writer",
  "Problem Solver"
];

export const Hero: React.FC<HeroProps> = ({ playAudio }) => {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Dynamic Text Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleVideoMute = () => {
    playAudio('click');
    setIsVideoMuted(!isVideoMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      // Sometimes browsers require a play trigger after unmuting
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 bg-bgPrimary overflow-hidden">
      
      {/* Background Decor Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-accentBlue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-accentBlue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left Section: Content Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Executive Badge */}
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-borderSilver bg-bgSurface text-textPrimary text-xs font-semibold tracking-wide mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-accentBlue" /> Technology Leader & Innovator
          </motion.div>

          {/* Name */}
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter text-textPrimary mb-4 leading-[1.05]">
            Aruthra <span className="text-accentBlue">S M</span>
          </motion.h1>
          
          {/* Dynamic Tagline */}
          <motion.div variants={textVariants} className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6 w-full overflow-hidden">
            <span className="text-xl md:text-2xl lg:text-3xl font-medium font-display text-textSecondary mr-2">
              Passionate
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl font-bold font-display text-accentBlue"
              >
                {ROLES[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Personal Tagline / Intro */}
          <motion.p variants={textVariants} className="text-base md:text-lg text-textSecondary mb-10 max-w-xl leading-relaxed font-sans">
            I specialize in orchestrating technology solutions, architecting scalable cloud ecosystems, and fostering communities that drive real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={textVariants} className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-10">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                playAudio('click');
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => playAudio('hover')}
              className="flex items-center gap-2 px-7 py-3.5 bg-accentBlue text-white text-sm font-semibold rounded-lg transition-all hover:bg-blue-700 shadow-lg hover:shadow-accentBlue/30 hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" /> Explore My Journey
            </a>

            <a
              href={import.meta.env.BASE_URL + "portfolio_images/updated_resume.jpg"}
              download="Aruthra_Resume.jpg"
              onClick={() => playAudio('click')}
              onMouseEnter={() => playAudio('hover')}
              className="flex items-center gap-2 px-7 py-3.5 border border-borderSilver bg-bgSurface text-textPrimary text-sm font-semibold rounded-lg transition-all hover:bg-bgPrimary hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={textVariants} className="flex items-center gap-5 text-textSecondary">
            <a href="https://www.linkedin.com/in/aruthra-sm" target="_blank" rel="noopener noreferrer" className="hover:text-accentBlue transition-colors hover:-translate-y-0.5" onMouseEnter={() => playAudio('hover')} onClick={() => playAudio('click')}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Aruthra07" target="_blank" rel="noopener noreferrer" className="hover:text-accentBlue transition-colors hover:-translate-y-0.5" onMouseEnter={() => playAudio('hover')} onClick={() => playAudio('click')}>
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:aruthramani785@gmail.com" className="hover:text-accentBlue transition-colors hover:-translate-y-0.5" onMouseEnter={() => playAudio('hover')} onClick={() => playAudio('click')}>
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>

        {/* Right Section: Video Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center items-center order-1 lg:order-2 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] mx-auto relative group"
        >
          {/* Video Container */}
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-accentBlue/10 border border-borderSilver/50 bg-bgSurface">
            <video
              ref={videoRef}
              className="w-full h-full object-cover object-top"
              src={import.meta.env.BASE_URL + "portfolio_images/PORTFOLIO_HERO.mp4"}
              loop
              autoPlay
              muted={isVideoMuted}
              playsInline
            />
            {/* Glass Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Audio Toggle Control */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleVideoMute}
                onMouseEnter={() => playAudio('hover')}
                className="p-2.5 bg-bgSurface/60 hover:bg-bgSurface backdrop-blur-md border border-borderSilver rounded-full text-textPrimary transition-all shadow-lg flex items-center gap-2 group/btn cursor-pointer"
              >
                {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-accentBlue" />}
              </button>
            </div>
          </div>
          
          {/* Subtle Backglow */}
          <div className="absolute inset-0 -z-10 bg-accentBlue/20 rounded-[2rem] blur-2xl group-hover:bg-accentBlue/30 transition-colors duration-700" />
        </motion.div>

      </div>
    </section>
  );
};
