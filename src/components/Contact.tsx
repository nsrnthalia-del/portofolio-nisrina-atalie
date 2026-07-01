import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Instagram, Mail, Phone, CheckCircle2, MessageSquare, Trash2, Eye } from 'lucide-react';
import { personalInfo } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Custom interactive inbox state for local testing (very premium feature)
  const [messagesList, setMessagesList] = useState<ContactMessage[]>([]);
  const [showAdminInbox, setShowAdminInbox] = useState(false);

  useEffect(() => {
    // Load local messages from previous tests on mount
    const saved = localStorage.getItem('nisrina_contact_messages');
    if (saved) {
      try {
        setMessagesList(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse messages', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);

    // Simulate sending progress
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        message,
        timestamp: new Date().toLocaleDateString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short'
        })
      };

      const updatedList = [newMessage, ...messagesList];
      setMessagesList(updatedList);
      localStorage.setItem('nisrina_contact_messages', JSON.stringify(updatedList));

      setIsSending(false);
      setIsSuccess(true);
      
      // Clear inputs
      setName('');
      setEmail('');
      setMessage('');

      // Auto clear success checkmark after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const updated = messagesList.filter(m => m.id !== id);
    setMessagesList(updated);
    localStorage.setItem('nisrina_contact_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern dark:bg-grid-pattern-dark">
      <div className="glow-spot top-1/4 right-1/4 animate-pulse duration-7000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-slate-100">
            Mari Berkolaborasi
          </h2>
          <div className="h-1 w-12 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Punya ide proyek kreatif atau ingin merekrut saya sebagai bagian dari tim Anda? Kirimkan pesan Anda di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Social Links / Information */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold font-display text-slate-900 dark:text-slate-100">
                Informasi Kontak
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Silakan hubungi saya melalui form di samping, atau langsung hubungi saya melalui beberapa kanal media sosial aktif saya berikut ini.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email Info */}
                <a
                  href={personalInfo.socials.email}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email</span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">nsrnthalia@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Info */}
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 bg-green-50 dark:bg-slate-950/20 text-green-600 dark:text-green-400 rounded-xl">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">WhatsApp</span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">+62 822-2852-3498</span>
                  </div>
                </a>

                {/* Instagram Info */}
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 bg-pink-50 dark:bg-slate-950/20 text-pink-600 dark:text-pink-400 rounded-xl">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Instagram</span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">@nsnatalie_</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Simulated Inbox Toggler for testing submissions */}
            {messagesList.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowAdminInbox(!showAdminInbox)}
                  className="px-4 py-2 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare size={14} />
                  {showAdminInbox ? 'Sembunyikan Kotak Masuk' : `Lihat Kotak Masuk (${messagesList.length})`}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-extrabold font-display text-slate-900 dark:text-slate-100 mb-6">
                Kirim Pesan
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan alamat email aktif"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pesan atau detail penawaran kerja sama..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                {/* Dynamic Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-slate-950 dark:bg-slate-100 dark:text-slate-950 hover:bg-slate-900 dark:hover:bg-slate-200 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <span className="h-4 w-4 border-2 border-white dark:border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>

              {/* Toast/Notification success banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-green-600 dark:text-green-400 shrink-0" size={20} />
                    <p className="text-xs font-semibold text-green-800 dark:text-green-300">
                      Pesan berhasil disimpan! Terima kasih telah menghubungi saya.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* OWNER INBOX BOX (COLLAPSIBLE TEST CONTAINER) */}
        <AnimatePresence>
          {showAdminInbox && messagesList.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 p-6 rounded-3xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye size={18} className="text-blue-600" />
                  <h4 className="font-extrabold font-display text-slate-900 dark:text-slate-100 text-sm">
                    Owner Inbox Preview (Simulasi Pesan Masuk LocalStorage)
                  </h4>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('nisrina_contact_messages');
                    setMessagesList([]);
                    setShowAdminInbox(false);
                  }}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={12} />
                  Hapus Semua
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {messagesList.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 shadow-sm relative group/msg"
                  >
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover/msg:opacity-100 transition-opacity cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-100">{msg.name}</span>
                        <span className="text-slate-400 font-mono">{msg.timestamp}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono">{msg.email}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
