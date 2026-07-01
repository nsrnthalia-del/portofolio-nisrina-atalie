import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data';
import { SkillItem } from '../types';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Safe dynamic icon rendering helper
  const renderIcon = (iconName: string) => {
    // @ts-ignore
    const IconComponent = LucideIcons[iconName];
    if (IconComponent) {
      return <IconComponent size={20} />;
    }
    return <LucideIcons.Sparkles size={20} />;
  };

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern dark:bg-grid-pattern-dark">
      <div className="glow-spot bottom-1/3 left-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Keahlian Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
            Skills & Kompetensi
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Kombinasi keahlian desain kreatif, kecakapan teknis penyuntingan video, serta penguasaan bahasa asing aktif dan komunikasi publik.
          </p>
        </div>

        {/* Skills Grid Layout (Two thematic sections) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill: SkillItem, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between group cursor-default"
            >
              {/* Subtle accent hover indicator bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Header of skill card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                    {renderIcon(skill.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mb-1">
                  {skill.name}
                </h3>
              </div>

              {/* Progress bar and label */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">Tingkat Penguasaan</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>

                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
