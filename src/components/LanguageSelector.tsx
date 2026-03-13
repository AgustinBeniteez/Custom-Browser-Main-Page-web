"use client";

import React from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Languages } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-brand-blue transition-colors">
        <Languages size={18} className="text-brand-blue" />
        <span className="uppercase text-xs font-bold">{language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
        <button 
          onClick={() => setLanguage('en')}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-brand-blue/10 transition-colors ${language === 'en' ? 'text-brand-blue font-bold' : 'text-gray-400'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('es')}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-brand-blue/10 transition-colors ${language === 'es' ? 'text-brand-blue font-bold' : 'text-gray-400'}`}
        >
          Español
        </button>
        <button 
          onClick={() => setLanguage('ru')}
          className={`w-full px-4 py-2 text-left text-sm hover:bg-brand-blue/10 transition-colors ${language === 'ru' ? 'text-brand-blue font-bold' : 'text-gray-400'}`}
        >
          Русский
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
