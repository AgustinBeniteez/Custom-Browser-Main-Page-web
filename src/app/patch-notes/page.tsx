"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ScrollText, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import patchNotesData from "../../patch-notes.json";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function PatchNotes() {
  const { t } = useI18n();
  const [mounted, setMounted] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a]">
      {/* Navbar */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft size={20} className="text-brand-blue" />
          <span className="font-bold text-white">{t('docs.back')}</span>
        </Link>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-lg font-bold text-white">{t('patchNotes.title')}</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <a href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
      </nav>

      <section className="w-full max-w-5xl px-6 py-20">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <ScrollText size={40} className="text-brand-purple" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{t('patchNotes.title')}</h1>
        </div>

        <div className="space-y-24">
          {patchNotesData.map((patch: any, idx: number) => (
            <div key={idx} className="flex flex-col bg-[#161616]/40 rounded-3xl border border-gray-800 hover:border-brand-purple/30 transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="w-full border-b border-gray-800 overflow-hidden">
                <Image 
                  src={`/assets/patch-notes/${patch.version.replace('v ', 'v')}.webp`} 
                  alt={patch.title} 
                  width={1200} 
                  height={675} 
                  className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-1000 cursor-zoom-in"
                  onClick={() => setSelectedImage(`/assets/patch-notes/${patch.version.replace('v ', 'v')}.webp`)}
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-brand-blue/20 text-brand-blue px-4 py-1 rounded-full text-sm font-bold border border-brand-blue/30">
                    {patch.version}
                  </span>
                  <span className="text-gray-500 text-sm">{patch.date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  {t(`patchNotes.versions.v${patch.version.replace(/v\s?|\./g, '')}.title`)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {Object.keys(patch).filter(k => k.startsWith('contenido')).map((k, i) => (
                    <div key={k} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0 shadow-[0_0_8px_rgba(180,134,240,0.6)]" />
                      <p className="text-sm md:text-base">
                        {t(`patchNotes.versions.v${patch.version.replace(/v\s?|\./g, '')}.c${i + 1}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-gray-800 text-center text-gray-500 text-sm" suppressHydrationWarning>
        © {mounted ? new Date().getFullYear() : "2026"} Agustin Benitez. {t('footer.madeWith')}
      </footer>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-40px] right-0 text-white hover:text-brand-purple transition-colors p-2"
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={selectedImage} 
                  alt="Full size preview" 
                  width={1920} 
                  height={1080} 
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
