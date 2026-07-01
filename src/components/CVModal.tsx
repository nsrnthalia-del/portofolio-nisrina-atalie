import { motion } from 'motion/react';
import { X, Printer, Download, Mail, Phone, Instagram, MapPin, Award, GraduationCap, Briefcase, Settings } from 'lucide-react';
import { personalInfo, experiences, skills } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm print:p-0 print:bg-white">
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-cv-area, #print-cv-area * {
            visibility: visible;
          }
          #print-cv-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: white !important;
            color: black !important;
            padding: 1.5cm !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full h-[90vh] flex flex-col border border-slate-100 dark:border-slate-800 print:border-none print:h-auto print:shadow-none"
      >
        {/* Modal Controls Banner (Hidden in print) */}
        <div className="no-print p-5 border-b border-slate-150 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-navy-800 dark:text-navy-400" />
            <h3 className="font-extrabold font-display text-slate-900 dark:text-slate-100 text-sm">
              Curriculum Vitae — Nisrina Atalie
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 bg-slate-900 hover:bg-navy-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <Printer size={14} />
              Cetak / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CV Body Content Area */}
        <div id="print-cv-area" className="flex-1 overflow-y-auto p-8 md:p-12 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Header / Name card */}
            <div className="border-b-2 border-slate-100 dark:border-slate-800 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
                  Nisrina Atalie Wijaya
                </h1>
                <p className="text-sm font-semibold text-navy-800 dark:text-navy-400 font-mono tracking-wider uppercase">
                  Graphic Designer | Video Editor
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin size={12} />
                  Labuhanbatu, Sumatera Utara, Indonesia
                </p>
              </div>

              {/* Contact Icons block */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-navy-700" />
                  <span>nsrnthalia@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-navy-700" />
                  <span>+62 822-2852-3498</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={12} className="text-navy-700" />
                  <span>@nsnatalie_</span>
                </div>
              </div>
            </div>

            {/* Profile Brief block */}
            <div className="space-y-2">
              <h2 className="text-sm font-extrabold uppercase font-display tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                <Briefcase size={14} className="text-navy-700" />
                Profil Singkat
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Experiences timeline block */}
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold uppercase font-display tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                <Briefcase size={14} className="text-navy-700" />
                Pengalaman Kerja & Organisasi
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-extrabold text-slate-800 dark:text-slate-200">{exp.role}</span>
                    <span className="font-mono text-slate-400 font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-xs font-semibold text-navy-800 dark:text-navy-400">{exp.organization}</p>
                  <ul className="list-disc pl-5 pt-1.5 space-y-1 text-slate-600 dark:text-slate-400">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-xs leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Block */}
            <div className="space-y-3">
              <h2 className="text-sm font-extrabold uppercase font-display tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                <GraduationCap size={14} className="text-navy-700" />
                Pendidikan
              </h2>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="font-extrabold text-slate-800 dark:text-slate-200">
                    Kulliyatu-l-Mu'allimat al-Islamiyyah (KMI)
                  </span>
                  <span className="font-mono text-slate-400 font-semibold">Lulus 2025</span>
                </div>
                <p className="text-xs font-semibold text-navy-800 dark:text-navy-400">
                  Pondok Modern Darussalam Gontor Putri Kampus 1
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Mantingan, Ngawi, Jawa Timur. Pendidikan intensif berasrama dengan fokus pengembangan karakter kepemimpinan, keputrian, disiplin, penguasaan bahasa Arab dan Inggris aktif, serta nilai-nilai keislaman kemasyarakatan.
                </p>
              </div>
            </div>

            {/* Skills grid split */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-sm font-extrabold uppercase font-display tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                  <Settings size={14} className="text-navy-700" />
                  Keahlian Teknis
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300"
                    >
                      {skill.name} ({skill.level}%)
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-extrabold uppercase font-display tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                  <Award size={14} className="text-navy-700" />
                  Sertifikasi Utama
                </h2>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 text-xs list-disc pl-4">
                  <li>Sertifikat Advisory Council Staff Gontor Putri Kampus 8 (2026)</li>
                  <li>Sertifikat Kelulusan Resmi KMI Gontor Putri Kampus 1 (2025)</li>
                  <li>Creative Design & Visual Communication Certification (2025)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
