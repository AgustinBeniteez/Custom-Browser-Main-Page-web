"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, BookOpen, ScrollText, ExternalLink, ArrowRight, Layout } from "lucide-react";
import { motion } from "framer-motion";
import patchNotesData from "../patch-notes.json";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSelector from "@/components/LanguageSelector";
import { ChromeIcon, FirefoxIcon } from "@/components/BrowserIcons";

export default function Home() {
  const { t } = useI18n();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Navbar */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center sticky top-0 z-50 bg-[#121212]/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-lg" />
          <div className="text-xl font-bold tracking-tight">Custom <span className="text-brand-purple">Browser</span></div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a>
          <a href="#patch-notes" className="hover:text-white transition-colors">{t('nav.patchNotes')}</a>
          <Link href="/docs" className="hover:text-white transition-colors">{t('nav.docs')}</Link>
          <a href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page" target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
            <Github size={16} /> {t('nav.github')}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <a href="#download" className="bg-gradient-brand px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            {t('nav.download')}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {t('hero.title')}<br />
            <span className="text-gradient">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="download">
            <a 
              href="https://chromewebstore.google.com/detail/khblnlhhfpfkfjagkbebffgognjjmhlp?utm_source=item-share-cb" 
              target="_blank"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all border border-gray-200"
            >
              <ChromeIcon size={22} /> {t('hero.installChrome')}
            </a>
            <a 
              href="https://addons.mozilla.org/es/firefox/addon/custom-browser-main-page/" 
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#E66000] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all hover:bg-[#FF9500]"
            >
              <FirefoxIcon size={22} /> {t('hero.installFirefox')}
            </a>
          </div>
        </motion.div>

        {/* Preview Image */}
        <motion.div 
          className="mt-20 relative w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-brand rounded-2xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <Image 
              src="/assets/preview-extension.webp" 
              alt="Preview" 
              width={1200} 
              height={675} 
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid (Bento Grid Style) */}
      <section id="features" className="w-full max-w-7xl px-6 py-24 bg-[#0a0a0a]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('features.title')}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('features.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Card 1: Notas (Ancha) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-[#161616] rounded-3xl border border-gray-800 p-8 flex flex-col md:flex-row gap-8 overflow-hidden group shadow-lg hover:border-brand-blue/50 transition-all duration-300"
          >
            <div className="flex-1">
              <div className="bg-brand-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ScrollText className="text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('features.notes.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('features.notes.description')}</p>
            </div>
            <div className="flex-1 relative h-full min-h-[150px] md:min-h-0 rounded-2xl overflow-hidden border border-gray-800">
              <Image src="/assets/notes.webp" alt="Notes" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Card 2: Favoritos (Alta) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 md:row-span-2 bg-[#161616] rounded-3xl border border-gray-800 p-8 flex flex-col group shadow-lg hover:border-brand-purple/50 transition-all duration-300"
          >
            <div className="bg-brand-purple/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <ExternalLink className="text-brand-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t('features.favorites.title')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{t('features.favorites.description')}</p>
            <div className="mt-auto relative h-full min-h-[200px] rounded-2xl overflow-hidden border border-gray-800">
              <Image src="/assets/favs.webp" alt="Favorites" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Card 3: Widgets (Ancha) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-gradient-brand rounded-3xl p-[1px] group shadow-xl transition-all duration-300"
          >
            <div className="bg-[#161616] w-full h-full rounded-3xl p-8 flex flex-col md:flex-row gap-8 overflow-hidden">
              <div className="flex-1">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Layout className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('features.widgets.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('features.widgets.description')}
                </p>
              </div>
              <div className="flex-1 relative h-full min-h-[150px] md:min-h-0 rounded-2xl overflow-hidden border border-gray-800">
                <Image src="/assets/preview-extension.webp" alt="Widgets" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Personalización (Ancha) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-12 bg-[#161616] rounded-3xl border border-gray-800 p-8 flex flex-col md:flex-row gap-12 overflow-hidden group shadow-lg hover:border-brand-blue/50 transition-all duration-300"
          >
            <div className="flex-[0.5]">
              <div className="bg-brand-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ArrowRight className="text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t('features.customization.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t('features.customization.description')}</p>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-full min-h-[120px] rounded-xl overflow-hidden border border-gray-800">
                <Image src="/assets/custom.webp" alt="Custom" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative h-full min-h-[120px] rounded-xl overflow-hidden border border-gray-800">
                <Image src="/assets/reloj-color.webp" alt="Color" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative h-full min-h-[120px] rounded-xl overflow-hidden border border-gray-800">
                <Image src="/assets/tipografia.webp" alt="Font" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative h-full min-h-[120px] rounded-xl overflow-hidden border border-gray-800">
                <Image src="/assets/light&dark.webp" alt="Mode" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patch Notes Section (Latest Only) */}
      <section id="patch-notes" className="w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            <ScrollText size={32} className="text-brand-purple" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('patchNotes.title')}</h2>
          </div>
          <Link 
            href="/patch-notes" 
            className="flex items-center gap-2 text-brand-blue font-bold hover:underline group"
          >
            {t('patchNotes.viewMore')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-12">
          {patchNotesData.slice(0, 1).map((patch: any, idx: number) => (
            <div key={idx} className="flex flex-col bg-[#161616]/40 rounded-3xl border border-gray-800 hover:border-brand-purple/30 transition-all duration-500 overflow-hidden">
              <div className="w-full border-b border-gray-800 overflow-hidden">
                <Image 
                  src={`/assets/patch-notes/${patch.version.replace('v ', 'v')}.webp`} 
                  alt={patch.title} 
                  width={1200} 
                  height={675} 
                  className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-700" 
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-blue/30">
                    {t('patchNotes.latestVersion')}: {patch.version}
                  </span>
                  <span className="text-gray-500 text-sm">{patch.date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
                  {t(`patchNotes.versions.v${patch.version.replace(/v\s?|\./g, '')}.title`)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                  {Object.keys(patch).filter(k => k.startsWith('contenido')).map((k, i) => (
                    <div key={k} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {t(`patchNotes.versions.v${patch.version.replace(/v\s?|\./g, '')}.c${i + 1}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/patch-notes" 
                  className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  {t('patchNotes.viewMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation & Open Source */}
      <section id="docs" className="w-full max-w-7xl px-6 py-20 bg-gradient-to-b from-transparent to-brand-blue/5 rounded-3xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <BookOpen className="text-brand-blue" /> {t('homeDocs.title')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('homeDocs.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-4 p-5 bg-[#161616] rounded-2xl border border-gray-800 hover:border-brand-blue/30 transition-colors">
                <div className="bg-brand-blue/20 p-3 rounded-xl h-fit"><Github size={24} className="text-brand-blue" /></div>
                <div>
                  <h4 className="font-bold text-white">{t('homeDocs.openSource')}</h4>
                  <p className="text-sm text-gray-500">{t('homeDocs.openSourceDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[#161616] rounded-2xl border border-gray-800 hover:border-brand-purple/30 transition-colors">
                <div className="bg-brand-purple/20 p-3 rounded-xl h-fit"><BookOpen size={24} className="text-brand-purple" /></div>
                <div>
                  <h4 className="font-bold text-white">{t('homeDocs.devGuide')}</h4>
                  <p className="text-sm text-gray-500">{t('homeDocs.devGuideDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 blur-3xl -mr-24 -mt-24 group-hover:bg-brand-blue/20 transition-colors"></div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('homeDocs.contribute')}</h3>
            <p className="text-gray-400 mb-8 text-base leading-relaxed">
              {t('homeDocs.contributeDesc')}
            </p>
            <a 
              href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page" 
              target="_blank"
              className="inline-flex items-center gap-2 text-brand-blue font-bold text-lg hover:underline group/link"
            >
              {t('homeDocs.repoBtn')} <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-bold">Custom Browser Main Page</span>
          </div>
          {mounted ? (
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Agustin Benitez. {t('footer.madeWith')}
            </p>
          ) : (
            <p className="text-gray-500 text-sm">
              © 2026 Agustin Benitez. Made with ❤️ for the community.
            </p>
          )}
          <div className="flex gap-6">
            <a href="https://github.com/AgustinBeniteez" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
