import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Award, Calendar, ExternalLink, X } from 'lucide-react';
import { certificates } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-slate-50 dark:bg-slate-950/30 overflow-hidden">
      <div className="glow-spot bottom-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Prestasi Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
            Sertifikasi & Penghargaan
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Bukti kompetensi akademis dan kontribusi organisasi yang disahkan oleh lembaga resmi.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              key={cert.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-150 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlap zoom icon */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setZoomImage(cert.image)}
                    className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform cursor-pointer shadow-lg flex items-center gap-2 text-xs font-bold"
                  >
                    <Eye size={16} />
                    Perbesar Sertifikat
                  </button>
                </div>
              </div>

              {/* Certificate content info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                    <Award size={14} />
                    {cert.issuer}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 line-clamp-2 font-display">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>

                  <button
                    onClick={() => setZoomImage(cert.image)}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {zoomImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setZoomImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
                onClick={() => setZoomImage(null)}
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                src={zoomImage}
                alt="Certificate Full Zoom"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
