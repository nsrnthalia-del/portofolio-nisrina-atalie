import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(30,58,138,0.06)_0%,transparent_60%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left">
          <span className="block text-sm font-bold tracking-widest uppercase font-display text-white">
            Nisrina Atalie Wijaya
          </span>
          <p className="text-[11px] text-slate-500 font-mono tracking-wider mt-1 uppercase">
            © {new Date().getFullYear()} Creative Portfolio. All rights reserved.
          </p>
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-900 hover:bg-navy-900 border border-slate-800 hover:border-navy-800 text-white rounded-full transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
          title="Kembali ke atas"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
