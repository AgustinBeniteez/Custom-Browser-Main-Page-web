"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Github, BookOpen, ArrowLeft, Terminal, Layout, Palette, Zap, 
  Menu, X, Search, ChevronRight, Clock, Star, FileText, Settings, 
  Users, AlertCircle, Monitor, Cloud, Timer, Calendar
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSelector from "@/components/LanguageSelector";
import { ChromeIcon, FirefoxIcon } from "@/components/BrowserIcons";

const sections = [
  { id: "introduction", icon: <Zap size={18} />, titleKey: "docs.sidebar.introduction" },
  { id: "installation", icon: <Terminal size={18} />, titleKey: "docs.sidebar.installation" },
  { id: "visuals", icon: <Palette size={18} />, titleKey: "docs.sidebar.visuals" },
  { id: "widgets", icon: <Layout size={18} />, titleKey: "docs.sidebar.widgets" },
  { id: "advanced", icon: <Settings size={18} />, titleKey: "docs.sidebar.advanced" },
  { id: "community", icon: <Users size={18} />, titleKey: "docs.sidebar.community" },
];

export default function Docs() {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-300">
      {/* Top Navbar */}
      <nav className="w-full h-16 border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-[100] px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Logo" width={28} height={28} />
            <span className="font-bold text-white hidden sm:inline-block">Custom Browser</span>
          </Link>
          <div className="h-6 w-[1px] bg-gray-800 mx-2 hidden sm:block"></div>
          <span className="text-sm font-medium text-gray-500 hidden sm:block">{t('docs.title')}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="bg-[#161616] border border-gray-800 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-blue w-64"
            />
          </div>
          <LanguageSelector />
          <a href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page" target="_blank" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Github size={20} />
          </a>
        </div>
      </nav>

      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 transition-transform duration-200 ease-in-out
          w-64 border-r border-gray-800 bg-[#0a0a0a] z-50 pt-20 md:pt-8 overflow-y-auto
        `}>
          <div className="px-6 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t('docs.sidebar.gettingStarted')}</h3>
              <div className="space-y-1">
                {sections.slice(0, 2).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id ? "bg-brand-blue/10 text-brand-blue font-medium" : "hover:bg-gray-800 text-gray-400"}`}
                  >
                    {s.icon}
                    {t(s.titleKey)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t('docs.sidebar.features')}</h3>
              <div className="space-y-1">
                {sections.slice(2, 5).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id ? "bg-brand-blue/10 text-brand-blue font-medium" : "hover:bg-gray-800 text-gray-400"}`}
                  >
                    {s.icon}
                    {t(s.titleKey)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t('docs.sidebar.community')}</h3>
              <div className="space-y-1">
                {sections.slice(5).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === s.id ? "bg-brand-blue/10 text-brand-blue font-medium" : "hover:bg-gray-800 text-gray-400"}`}
                  >
                    {s.icon}
                    {t(s.titleKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 md:px-12 py-12 overflow-y-auto">
          <div className="max-w-3xl">
            {activeSection === "introduction" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.introduction.title')}</h1>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {t('docs.sections.introduction.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <Star className="text-brand-purple mb-4" />
                    <h3 className="text-white font-bold mb-2">{t('docs.sections.introduction.customizable')}</h3>
                    <p className="text-sm text-gray-500">{t('docs.sections.introduction.customizableDesc')}</p>
                  </div>
                  <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <Monitor className="text-brand-blue mb-4" />
                    <h3 className="text-white font-bold mb-2">{t('docs.sections.introduction.ideDesign')}</h3>
                    <p className="text-sm text-gray-500">{t('docs.sections.introduction.ideDesignDesc')}</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t('docs.sections.introduction.whyTitle')}</h2>
                <ul className="space-y-4 text-gray-400 list-disc list-inside">
                  <li>{t('docs.sections.introduction.why1')}</li>
                  <li>{t('docs.sections.introduction.why2')}</li>
                  <li>{t('docs.sections.introduction.why3')}</li>
                </ul>
              </section>
            )}

            {activeSection === "installation" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.installation.title')}</h1>
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      {t('docs.sections.installation.chromeTitle')}
                    </h2>
                    <p className="text-gray-400 mb-4">{t('docs.sections.installation.chromeDesc')}</p>
                    <a 
                      href="https://chromewebstore.google.com/detail/khblnlhhfpfkfjagkbebffgognjjmhlp?utm_source=item-share-cb" 
                      target="_blank" 
                      className="inline-flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all border border-gray-200"
                    >
                      <ChromeIcon size={20} /> {t('docs.sections.installation.chromeBtn')} <ChevronRight size={16} />
                    </a>
                  </div>
                  <div className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-4">{t('docs.sections.installation.firefoxTitle')}</h2>
                    <p className="text-gray-400 mb-4">{t('docs.sections.installation.firefoxDesc')}</p>
                    <a 
                      href="https://addons.mozilla.org/es/firefox/addon/custom-browser-main-page/" 
                      target="_blank" 
                      className="inline-flex items-center gap-3 bg-[#E66000] text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all hover:bg-[#FF9500]"
                    >
                      <FirefoxIcon size={20} /> {t('docs.sections.installation.firefoxBtn')} <ChevronRight size={16} />
                    </a>
                  </div>
                  <div className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={20} className="text-brand-blue" /> {t('docs.sections.installation.manualTitle')}
                    </h2>
                    <div className="bg-[#161616] p-4 rounded-xl font-mono text-sm text-gray-400 space-y-2">
                      <p>{t('docs.sections.installation.manualStep1')}</p>
                      <p className="text-brand-blue">git clone https://github.com/AgustinBeniteez/Custom-Browser-Main-Page.git</p>
                      <p>{t('docs.sections.installation.manualStep2')}</p>
                      <p>{t('docs.sections.installation.manualStep2Desc')}</p>
                      <p>{t('docs.sections.installation.manualStep3Desc')}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "visuals" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.visuals.title')}</h1>
                <div className="space-y-8">
                  <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Palette className="text-brand-purple" /> {t('docs.sections.visuals.wallpapersTitle')}
                    </h3>
                    <p className="text-gray-400 mb-4">{t('docs.sections.visuals.wallpapersDesc')}</p>
                    <ul className="text-sm space-y-2 text-gray-500">
                      <li>• <span className="text-white font-medium">{t('docs.sections.visuals.wallpapersOption1').split(':')[0]}:</span>{t('docs.sections.visuals.wallpapersOption1').split(':')[1]}</li>
                      <li>• <span className="text-white font-medium">{t('docs.sections.visuals.wallpapersOption2').split(':')[0]}:</span>{t('docs.sections.visuals.wallpapersOption2').split(':')[1]}</li>
                      <li>• <span className="text-white font-medium">{t('docs.sections.visuals.wallpapersOption3').split(':')[0]}:</span>{t('docs.sections.visuals.wallpapersOption3').split(':')[1]}</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <FileText className="text-brand-blue" /> {t('docs.sections.visuals.typographyTitle')}
                    </h3>
                    <p className="text-gray-400 mb-4">{t('docs.sections.visuals.typographyDesc')}</p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "widgets" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.widgets.title')}</h1>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-4 p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <div className="bg-brand-blue/20 p-3 rounded-xl h-fit"><Monitor className="text-brand-blue" /></div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.widgets.systemTitle')}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t('docs.sections.widgets.systemDesc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <div className="bg-brand-purple/20 p-3 rounded-xl h-fit"><Cloud className="text-brand-purple" /></div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.widgets.weatherTitle')}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t('docs.sections.widgets.weatherDesc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <div className="bg-red-500/20 p-3 rounded-xl h-fit"><Timer className="text-red-500" /></div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.widgets.pomodoroTitle')}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t('docs.sections.widgets.pomodoroDesc')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                    <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Calendar className="text-green-500" /></div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.widgets.calendarTitle')}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t('docs.sections.widgets.calendarDesc')}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "advanced" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.advanced.title')}</h1>
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{t('docs.sections.advanced.editModeTitle')}</h2>
                    <p className="text-gray-400 mb-4">{t('docs.sections.advanced.editModeDesc')}</p>
                  </div>
                  <div className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-4">{t('docs.sections.advanced.templatesTitle')}</h2>
                    <p className="text-gray-400 mb-4">{t('docs.sections.advanced.templatesDesc')}</p>
                  </div>
                  <div className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap size={20} className="text-brand-blue" /> {t('docs.sections.advanced.performanceTitle')}
                    </h2>
                    <p className="text-gray-400 mb-4">{t('docs.sections.advanced.performanceDesc')}</p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "community" && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-extrabold text-white mb-6">{t('docs.sections.community.title')}</h1>
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-brand rounded-3xl text-white">
                    <h2 className="text-2xl font-bold mb-4">{t('docs.sections.community.improveTitle')}</h2>
                    <p className="mb-6 opacity-90">{t('docs.sections.community.improveDesc')}</p>
                    <a href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page" target="_blank" className="bg-black text-white px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                      <Github size={20} /> {t('docs.sections.community.githubBtn')}
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                      <AlertCircle className="text-brand-blue mb-4" />
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.community.reportTitle')}</h3>
                      <p className="text-sm text-gray-500 mb-4">{t('docs.sections.community.reportDesc')}</p>
                      <a href="https://github.com/AgustinBeniteez/Custom-Browser-Main-Page/issues" className="text-brand-blue text-sm font-bold hover:underline">{t('docs.sections.community.reportBtn')}</a>
                    </div>
                    <div className="p-6 bg-[#161616] border border-gray-800 rounded-2xl">
                      <FileText className="text-brand-purple mb-4" />
                      <h3 className="text-white font-bold mb-2">{t('docs.sections.community.translationsTitle')}</h3>
                      <p className="text-sm text-gray-500 mb-4">{t('docs.sections.community.translationsDesc')}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar - In page navigation */}
          <div className="hidden xl:block fixed right-12 top-32 w-48">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">En esta página</h4>
            <div className="space-y-3 text-sm">
              <div className="text-brand-blue font-medium border-l-2 border-brand-blue pl-4">Descripción</div>
              <div className="text-gray-500 hover:text-gray-300 transition-colors pl-4 border-l-2 border-transparent">Características</div>
              <div className="text-gray-500 hover:text-gray-300 transition-colors pl-4 border-l-2 border-transparent">Próximos pasos</div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer simple */}
      <footer className="w-full py-8 px-6 border-t border-gray-800 text-center text-gray-500 text-xs" suppressHydrationWarning>
        © {new Date().getFullYear()} Agustin Benitez. {t('footer.madeWith')}
      </footer>
    </div>
  );
}
