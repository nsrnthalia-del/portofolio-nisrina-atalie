import { motion } from 'motion/react';
import { Download, ArrowUpRight, Palette, Video, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero({ onDownloadCV }: { onDownloadCV: () => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const professions = ['Mahasiswi', 'Graphic Designer', 'Video Editor'];
  const floatingBadges = [
    { text: 'Creative Designer', icon: Palette, color: 'from-blue-500 to-blue-700', delay: 0.4, x: -160, y: -60 },
    { text: 'Pro Video Editor', icon: Video, color: 'from-slate-800 to-slate-950', delay: 0.6, x: 160, y: 70 },
    { text: 'Advisory Staff', icon: GraduationCap, color: 'from-slate-900 to-blue-900', delay: 0.8, x: -130, y: 120 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-grid-pattern dark:bg-grid-pattern-dark"
    >
      {/* Moving background glowing shapes */}
      <div className="glow-spot top-1/4 left-1/4 animate-pulse duration-10000" />
      <div className="glow-spot bottom-1/4 right-1/4 animate-pulse duration-7000" />

      {/* Decorative lines & elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[1px] bg-gradient-to-r from-blue-600/30 to-transparent" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[1px] bg-gradient-to-l from-blue-600/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left column: Text / Branding */}
        <div className="flex-1 text-center lg:text-left">
          {/* Tagline intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 rounded-full glass border border-slate-200 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono uppercase tracking-widest shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Personal Portfolio
          </motion.div>

          {/* Title and Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-4"
          >
            Nisrina Atalie <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-slate-900 dark:from-blue-400 dark:via-blue-300 dark:to-slate-300">
              Wijaya
            </span>
          </motion.h1>

          {/* Profession lists with divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
          >
            {professions.map((prof, idx) => (
              <span
                key={prof}
                className="flex items-center gap-1.5 text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300"
              >
                {idx > 0 && <span className="h-1.5 w-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-1.5 opacity-60" />}
                {prof}
              </span>
            ))}
          </motion.div>

          {/* Personal branding paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Buttons: View Portfolio & Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-900 dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-slate-950 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group shadow-xl hover:shadow-blue-600/10 dark:hover:shadow-white/10 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              View Portfolio
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>

            <button
              onClick={onDownloadCV}
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold rounded-xl flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <Download size={18} />
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Right column: Avatar portrait visual */}
        <div className="flex-1 flex justify-center items-center relative py-12">
          {/* Rotating glow boundary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full flex items-center justify-center"
          >
            {/* Soft decorative background shadow circle */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-600 via-slate-900 to-blue-400 opacity-20 dark:opacity-40 blur-lg animate-pulse" />

            {/* Glowing outer rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-900/10 dark:border-white/5 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Main Avatar Circle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute inset-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-950 shadow-2xl relative z-10"
            >
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover select-none"
              />
            </motion.div>

            {/* Floating Graphic elements / Badges */}
            {floatingBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x: badge.x, y: badge.y }}
                  transition={{ delay: badge.delay, duration: 0.8, type: 'spring' }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-slate-200/50 dark:border-white/10 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-100 select-none cursor-default"
                >
                  <div className={`p-1 rounded-full bg-gradient-to-br ${badge.color} text-white`}>
                    <BadgeIcon size={12} />
                  </div>
                  {badge.text}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
