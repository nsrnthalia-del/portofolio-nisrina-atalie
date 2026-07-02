import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { GraduationCap, Award, Calendar, FolderCheck, Trophy, Sparkles } from 'lucide-react';
import profil from "../assets/image/profil.43.51.jpeg";
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-50 dark:bg-slate-950/30 overflow-hidden">
      {/* Decorative Blur Spot */}
      <div className="glow-spot top-1/3 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Side: Modern Bento-ish Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                Siapa Saya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
                Tentang Saya
              </h2>
              <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full" />
            </motion.div>

            {/* Profile Brief Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-base"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Education & Main Experience Info Cards */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 tracking-wider block mb-1">PENDIDIKAN</span>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Pondok Modern Darussalam Gontor</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Gontor Putri Kampus 1 — Mantingan, Ngawi, Jawa Timur
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                  <Award size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 tracking-wider block mb-1">PENGALAMAN UTAMA</span>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Advisory Council Staff</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pondok Modern Darussalam Gontor Putri Kampus 8 — Labuhanbatu
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Visual Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => {
              // Select icons for stats
              const statIcons = [Calendar, FolderCheck, Trophy, Sparkles];
              const IconComponent = statIcons[idx % statIcons.length];

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between h-44 cursor-default"
                >
                  {/* Floating abstract decorative shape inside */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      METRIC {idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="block text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100 mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
