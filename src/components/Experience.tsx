import { motion } from 'motion/react';
import { Calendar, MapPin, ShieldCheck, Award, MessageSquare } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-50 dark:bg-slate-950/30 overflow-hidden">
      <div className="glow-spot top-1/4 right-1/4" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Riwayat Dedikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
            Pengalaman & Kepemimpinan
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Pengalaman kepemimpinan strategis dalam mengelola kegiatan kepengurusan di lingkungan pondok pesantren modern.
          </p>
        </div>

        {/* Timeline List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot identifier with glowing effect */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 h-6 w-6 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-600 dark:bg-blue-500 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]" />

              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
                {/* Duration Tag */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-semibold">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>

                {/* Role Title and Organization */}
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 font-display">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                {/* Sub-points and details */}
                <div className="space-y-2 pt-2">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-semibold flex items-start gap-2">
                    <ShieldCheck size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Tugas Pokok:</span>
                  </p>
                  <ul className="space-y-2 pl-6">
                    {exp.description.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed list-disc marker:text-blue-600 dark:marker:text-blue-400"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
