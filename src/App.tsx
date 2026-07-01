/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import CursorEffect from './components/CursorEffect';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Determine initial dark mode preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Sync dark mode class with state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="app-content" className="min-h-screen relative font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 selection:bg-blue-600 selection:text-white flex flex-col">
            {/* Custom interactive cursor trailing effect */}
            <CursorEffect />

            {/* Sidebar for Desktop Viewports */}
            <Sidebar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode} 
              onDownloadCV={() => setIsCVModalOpen(true)} 
            />

            {/* Global navigation header for Mobile Viewports */}
            <div className="lg:hidden">
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Direct layouts page blocks */}
            <main className="flex-1 lg:pl-80 min-h-screen flex flex-col">
              {/* Hero entry section */}
              <Hero onDownloadCV={() => setIsCVModalOpen(true)} />

              {/* Story summary & Education stats */}
              <About />

              {/* Progress items and tool competencies */}
              <Skills />

              {/* Timeline modern history */}
              <Experience />

              {/* Filterable categories grid gallery */}
              <Portfolio />

              {/* Award certificates zooming cards */}
              <Certificates />

              {/* Form validation and simulated inbox */}
              <Contact />

              {/* Footer with smooth Scroll to Top */}
              <Footer />
            </main>

            {/* Curriculum Vitae print/download Modal */}
            <AnimatePresence>
              {isCVModalOpen && (
                <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
