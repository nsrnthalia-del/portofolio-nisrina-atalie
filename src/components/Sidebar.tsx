import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Download, Home, User, Settings, Briefcase, Award, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onDownloadCV: () => void;
}

export default function Sidebar({ darkMode, toggleDarkMode, onDownloadCV }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Settings },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Award },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <aside className="w-80 h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col p-8 fixed top-0 left-0 overflow-y-auto z-30 select-none no-print">
      {/* Top profile container */}
      <div className="flex flex-col items-center text-center">
        {/* Animated circle border */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-28 h-28 rounded-full border-4 border-blue-600 p-1 mb-4 shadow-xl overflow-hidden bg-white/10 relative group cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            referrerPolicy="no-referrer"
            className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>

        <h1 
          onClick={() => handleNavClick('home')}
          className="text-lg font-black tracking-tight font-display hover:text-blue-400 transition-colors cursor-pointer"
        >
          {personalInfo.name}
        </h1>
        <p className="text-blue-400 text-xs font-semibold mt-1 tracking-wider uppercase font-mono">
          Designer & Editor
        </p>
      </div>

      {/* Navigation list */}
      <nav className="mt-8 flex-grow space-y-4">
        {/* Personal Branding Card */}
        <div className="p-3.5 bg-blue-600/10 border border-blue-600/20 rounded-xl">
          <p className="text-[9px] uppercase tracking-widest text-blue-400 font-bold mb-1 font-mono">
            Personal Branding
          </p>
          <p className="text-xs leading-relaxed text-slate-300 italic">
            "Turning creative visions into compelling visual narratives."
          </p>
        </div>

        {/* Action Links */}
        <div className="space-y-1 pt-3">
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center space-x-3 text-xs md:text-sm font-semibold transition-all p-2.5 rounded-xl cursor-pointer text-left ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                    : 'text-slate-400 hover:text-blue-400 hover:bg-slate-800'
                }`}
              >
                <LinkIcon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer / Meta details / Theme switch */}
      <div className="mt-auto pt-6 border-t border-slate-800 space-y-4">
        {/* Active socials quick items */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <span className="w-8 font-bold text-blue-400 font-mono text-[10px]">IG</span>
            <span className="truncate hover:text-blue-300 transition-colors">@nsnatalie_</span>
          </div>
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <span className="w-8 font-bold text-blue-400 font-mono text-[10px]">WA</span>
            <span className="truncate hover:text-blue-300 transition-colors">+62 82228523498</span>
          </div>
        </div>

        {/* Theme toggler + Download CV inline row */}
        <div className="flex items-center gap-2">
          {/* Theme control inside sidebar */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Quick download resume action */}
          <button
            onClick={onDownloadCV}
            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5 cursor-pointer text-white"
          >
            <Download size={12} />
            CV Resume
          </button>
        </div>
      </div>
    </aside>
  );
}
