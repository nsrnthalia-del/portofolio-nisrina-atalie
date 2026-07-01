import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Award } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section visibility
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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-100 font-bold font-display tracking-widest text-sm group-hover:scale-105 transition-transform duration-300 shadow-md">
            NW
          </div>
          <div>
            <span className="block text-sm font-bold tracking-wider uppercase font-display text-slate-900 dark:text-slate-100">
              Nisrina Atalie
            </span>
            <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase">
              Creative Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-navy-900 dark:text-navy-300 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-navy-800 to-navy-500 dark:from-navy-600 dark:to-navy-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Dark Mode + CV Modal Trigger */}
        <div className="hidden md:flex items-center gap-3">
          {/* Toggle Theme */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Quick Connect / Inbox Shortcut */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100 bg-slate-900 dark:bg-slate-100 dark:text-slate-950 rounded-full hover:bg-navy-900 dark:hover:bg-navy-50 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Toggle Theme for mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-slate-800 dark:text-slate-200 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-3 text-left text-base font-medium border-b border-slate-100/50 dark:border-slate-800/50 cursor-pointer transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-navy-900 dark:text-navy-400 font-bold pl-2'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 w-full py-3 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 rounded-xl font-semibold text-center hover:bg-navy-900 cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
