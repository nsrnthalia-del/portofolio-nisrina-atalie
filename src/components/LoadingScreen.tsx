import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const greetings = [
    'Welcome',
    'Selamat Datang',
    'ahlan wa sahlan',
    'Kreatif',
    'Inspiratif',
    'Nisrina Atalie Wijaya'
  ];

  useEffect(() => {
    // Cycle through greetings
    const greetingInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % greetings.length);
    }, 400);

    // Progress bar counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(greetingInterval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, greetings.length]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(30,58,138,0.15)_0%,transparent_70%]" />
      
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated logo/initial mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-navy-700 bg-slate-900 text-xl font-bold font-display tracking-widest text-navy-400 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          NW
        </motion.div>

        {/* Dynamic greeting sequence */}
        <div className="h-12 overflow-hidden mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-2xl font-semibold tracking-wider font-display text-slate-100"
            >
              {greetings[textIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-navy-600 to-navy-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.span 
          className="text-xs font-mono text-slate-400 tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {progress}% LOADED
        </motion.span>
      </div>
    </div>
  );
}
