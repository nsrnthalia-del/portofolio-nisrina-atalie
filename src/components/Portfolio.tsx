import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, BookOpen, X, ExternalLink, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

type CategoryType = 'All' | 'Graphic Design' | 'Social Media' | 'Poster' | 'Logo' | 'Presentation' | 'Video Editing';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);

  const categories: CategoryType[] = [
    'All',
    'Graphic Design',
    'Social Media',
    'Poster',
    'Logo',
    'Presentation',
    'Video Editing'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-grid-pattern dark:bg-grid-pattern-dark">
      <div className="glow-spot top-1/3 left-1/4 animate-pulse duration-10000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Galeri Karya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
            Portofolio Terpilih
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Kumpulan hasil karya desain kreatif, video sinematik, serta identitas brand yang dirancang dengan penuh dedikasi.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full cursor-pointer transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white dark:bg-slate-50 dark:text-slate-950 shadow-md'
                  : 'bg-white text-slate-600 border border-slate-150 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
               {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Thumbnail image and overlay controls */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Dark hover visual curtain */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveZoomImage(project.image)}
                      className="p-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full hover:scale-110 transition-transform cursor-pointer shadow-lg"
                      title="Preview Gambar"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:scale-110 transition-transform cursor-pointer shadow-lg"
                      title="Lihat Detail"
                    >
                      <BookOpen size={18} />
                    </button>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block uppercase tracking-wider">
                      {project.year} • {project.role}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 font-display line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Dynamic actions bottom line */}
                  <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800 mt-5">
                    <button
                      onClick={() => setActiveZoomImage(project.image)}
                      className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      Quick Preview
                    </button>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer group/btn transition-colors"
                    >
                      Lihat Detail
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX ZOOM MODAL */}
        <AnimatePresence>
          {activeZoomImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setActiveZoomImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
                onClick={() => setActiveZoomImage(null)}
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                src={activeZoomImage}
                alt="Zoomed Portfolio Preview"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* DETAILED PROJECT INFO MODAL */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.92, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 30 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-100 dark:border-slate-800"
              >
                {/* Modal Image Header */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-950/60 text-white rounded-full hover:bg-slate-950/80 transition-all shadow-lg"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-blue-600 border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                      {activeModalProject.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mt-2 font-display">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content Details */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-3 gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar size={16} className="text-blue-600" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Tahun</span>
                        <span className="text-xs font-semibold">{activeModalProject.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <User size={16} className="text-blue-600" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Peran</span>
                        <span className="text-xs font-semibold">{activeModalProject.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Tag size={16} className="text-blue-600" />
                      <div>
                        <span className="block text-[10px] text-slate-400 font-mono uppercase">Kategori</span>
                        <span className="text-xs font-semibold">{activeModalProject.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                      Deskripsi Proyek
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {activeModalProject.longDescription}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                      Teknologi / Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-150 dark:border-slate-700 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions row */}
                  <div className="flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800 pt-5 mt-4">
                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={() => {
                        setActiveModalProject(null);
                        setActiveZoomImage(activeModalProject.image);
                      }}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-blue-600 rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      Preview Fullscreen
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
