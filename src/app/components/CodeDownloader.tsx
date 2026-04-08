import { Download } from 'lucide-react';

export default function CodeDownloader() {
  const downloadAllCode = () => {
    const completeCode = `MONEYSCAN WEBSITE - COMPLETE SOURCE CODE
========================================
Generated: April 6, 2026
All React Components and Configuration Files

Send this entire file to your designer.

========================================
FILE: package.json
========================================
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "canvas-confetti": "1.9.4",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-hook-form": "7.55.0",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "peerDependenciesMeta": {
    "react": {
      "optional": true
    },
    "react-dom": {
      "optional": true
    }
  },
  "pnpm": {
    "overrides": {
      "vite": "6.3.5"
    }
  }
}


========================================
FILE: src/app/App.tsx
========================================
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import HomePage from './components/HomePage';
import WealthEngine from './components/WealthEngine';
import BehavioralFinance from './components/BehavioralFinance';
import DebtElimination from './components/DebtElimination';
import RealEstateCrowdfunding from './components/RealEstateCrowdfunding';
import HouseHacking from './components/HouseHacking';
import CashFlowMastery from './components/CashFlowMastery';
import AIEraCareers from './components/AIEraCareers';
import AICareerTools from './components/AICareerTools';
import AISkillsMapWorksheet from './components/AISkillsMapWorksheet';
import ToolsHub from './components/ToolsHub';
import Moneyscan from './components/Moneyscan';
import SkilledTrades from './components/SkilledTrades';
import TradeOpportunityFinder from './components/TradeOpportunityFinder';
import LegalPrivacy from './components/LegalPrivacy';
import CodeDownloader from './components/CodeDownloader';

type Page = 'home' | 'old-home' | 'wealth-engine' | 'behavioral-finance' | 'debt-elimination' | 'real-estate-crowdfunding' | 'house-hacking' | 'cash-flow-mastery' | 'ai-era-careers' | 'ai-career-tools' | 'ai-skills-worksheet' | 'tools-hub' | 'moneyscan' | 'skilled-trades' | 'trade-opportunity-finder' | 'legal-privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('moneyscan');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Show minimal header only on Moneyscan page (handled within Moneyscan component)
  const showHeader = currentPage !== 'moneyscan';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hidden code downloader - press Ctrl+Shift+D to download all code */}
      <CodeDownloader />

      {/* Header - Show on all pages except Moneyscan */}
      {showHeader && <Header onNavigate={navigateTo} currentPage={currentPage} />}

      {/* Main Content */}
      <main className="flex-1">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'old-home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'wealth-engine' && <WealthEngine onNavigate={navigateTo} />}
        {currentPage === 'behavioral-finance' && <BehavioralFinance onNavigate={navigateTo} />}
        {currentPage === 'cash-flow-mastery' && <CashFlowMastery onNavigate={navigateTo} />}
        {currentPage === 'debt-elimination' && <DebtElimination onNavigate={navigateTo} />}
        {currentPage === 'real-estate-crowdfunding' && <RealEstateCrowdfunding onNavigate={navigateTo} />}
        {currentPage === 'house-hacking' && <HouseHacking onNavigate={navigateTo} />}
        {currentPage === 'ai-era-careers' && <AIEraCareers onNavigate={navigateTo} />}
        {currentPage === 'ai-career-tools' && <AICareerTools onNavigate={navigateTo} />}
        {currentPage === 'ai-skills-worksheet' && <AISkillsMapWorksheet />}
        {currentPage === 'tools-hub' && <ToolsHub onNavigate={navigateTo} />}
        {currentPage === 'moneyscan' && <Moneyscan onNavigate={navigateTo} />}
        {currentPage === 'skilled-trades' && <SkilledTrades onNavigate={navigateTo} />}
        {currentPage === 'trade-opportunity-finder' && <TradeOpportunityFinder onNavigate={navigateTo} />}
        {currentPage === 'legal-privacy' && <LegalPrivacy onNavigate={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">First Principles</span>
                  <span className="text-xs">Lasting Wealth.</span>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Clear direction based on timeless financial truths.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('home')} className="hover:text-emerald-400 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('wealth-engine')} className="hover:text-emerald-400 transition-colors">
                    Wealth Engine
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('tools-hub')} className="hover:text-emerald-400 transition-colors">
                    Tools
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('moneyscan')} className="hover:text-emerald-400 transition-colors">
                    \$29 Blueprint
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('cash-flow-mastery')} className="hover:text-emerald-400 transition-colors">
                    Cash Flow
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('debt-elimination')} className="hover:text-emerald-400 transition-colors">
                    Debt Elimination
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('ai-era-careers')} className="hover:text-emerald-400 transition-colors">
                    AI Era Careers
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('legal-privacy')} className="hover:text-emerald-400 transition-colors">Disclaimers</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('legal-privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400">
            <p>
              © 2026 Moneyscan Financial. Educational only — not personalized advice.
              Past performance is no guarantee of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

========================================
FILE: src/app/components/Header.tsx
========================================
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center"
          >
            <img
              src={logoImage}
              alt="MONEYSCAN"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigate('home')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'home'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('wealth-engine')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'wealth-engine'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              Wealth Engine
            </button>
            <button
              onClick={() => handleNavigate('cash-flow-mastery')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'cash-flow-mastery'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              Cash Flow Mastery
            </button>
            <button
              onClick={() => handleNavigate('debt-elimination')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'debt-elimination'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              Debt Elimination
            </button>
            <button
              onClick={() => handleNavigate('ai-era-careers')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'ai-era-careers'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              AI Era Careers
            </button>
            <button
              onClick={() => handleNavigate('tools-hub')}
              className={\`px-4 py-2 rounded-lg transition-colors \${
                currentPage === 'tools-hub'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }\`}
            >
              Tools
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-emerald-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <button
              onClick={() => handleNavigate('home')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('wealth-engine')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Wealth Engine
            </button>
            <button
              onClick={() => handleNavigate('cash-flow-mastery')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Cash Flow Mastery
            </button>
            <button
              onClick={() => handleNavigate('debt-elimination')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Debt Elimination
            </button>
            <button
              onClick={() => handleNavigate('ai-era-careers')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              AI Era Careers
            </button>
            <button
              onClick={() => handleNavigate('tools-hub')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Tools
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}


========================================
FILE: src/app/components/Home.tsx
========================================
import { ArrowRight, TrendingUp, DollarSign, CreditCard, Briefcase, Calculator } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            First Principles. Lasting Wealth.
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Build Lasting Wealth – A First Principles Blueprint
          </h1>

          <p className="text-2xl md:text-3xl text-slate-700 mb-6 max-w-3xl mx-auto">
            Understand the math. Choose your path. Build wealth that lasts.
          </p>

          <p className="text-lg md:text-xl italic text-slate-600 mb-12">
            Directional & Actionable in the AI Era
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <span>Explore the Wealth Engine</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('moneyscan')}
              className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Get the \$49 Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why First Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Why First Principles Matter
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            Most financial advice changes with trends and market noise. First principles never do.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
            One Simple Truth That Changes Everything
          </h3>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-4">
            Even pro athletes with massive contracts are often stunned when they first see a basic compound interest table. Once you understand how consistently investing a portion of your money grows over time — after taxes, spending, and fees — everything clicks. That single benchmark becomes your clearest overlay for every investing decision.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            This is where we start: with the math that actually builds lasting wealth.
          </p>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Your Blueprint for Building Wealth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Wealth Engine */}
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Wealth Engine
              </h3>
              <p className="text-slate-700">
                Master the core math of compounding and steady investing
              </p>
            </button>

            {/* Cash Flow Mastery */}
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Cash Flow Mastery
              </h3>
              <p className="text-slate-700">
                Create consistent surplus you can actually invest
              </p>
            </button>

            {/* Debt Elimination */}
            <button
              onClick={() => onNavigate('debt-elimination')}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Debt Elimination
              </h3>
              <p className="text-slate-700">
                Stop reverse compounding and free up your money
              </p>
            </button>

            {/* AI Era Careers */}
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                AI Era Careers
              </h3>
              <p className="text-slate-700">
                High-growth, AI-resistant paths including skilled trades
              </p>
            </button>

            {/* Tools */}
            <button
              onClick={() => onNavigate('tools-hub')}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all text-left group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Tools
              </h3>
              <p className="text-slate-700">
                Practical calculators, assessments, and worksheets
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* AI Era Insight Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Built for the AI Era
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            AI is reshaping jobs and opportunities. This site helps you navigate both white-collar hybrid roles and high-demand skilled trades so you can build surplus faster and protect your wealth long-term.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Build Lasting Wealth?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('moneyscan')}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <span>Get the \$49 Blueprint</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('tools-hub')}
              className="bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <span>Browse Free Tools</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/HomePage.tsx
========================================
import { TrendingUp, Shield, DollarSign, Home, Lightbulb, Users, Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import CompoundCalculator from './CompoundCalculator';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                First Principles for Financial Freedom
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get timeless direction on compound growth, debt elimination, house hacking, real estate crowdfunding, and more — before you spend a dime on any app or service.
              </p>
              <p className="text-lg text-slate-700 mb-8 font-medium">
                Understand the math. Choose your path. Build wealth that lasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('wealth-engine')}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start with the Wealth Engine
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all">
                  Browse All Principles
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                General education only — not personalized advice. Past performance is no guarantee of future results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <CompoundCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* How It All Connects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              One Wealth Engine. Multiple Principles That Protect and Accelerate It.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything starts with the proven mathematics of compounding. The other principles either create more fuel for the engine, stop money from leaking out, protect it from setbacks, or provide additional paths to grow and control your wealth.
            </p>
          </div>

          {/* Visual Map */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Circle */}
            <div className="flex justify-center mb-12">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="relative group"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-16 h-16 text-white mb-4" />
                  <span className="text-2xl font-bold text-white text-center px-6">
                    The Wealth Engine
                  </span>
                  <span className="text-sm text-emerald-100 text-center px-6 mt-2">
                    Compound Interest at Work
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
              </button>
            </div>

            {/* Orbiting Modules */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ModuleCard
                icon={<DollarSign className="w-8 h-8" />}
                title="Fix the Leaks"
                description="Cash flow + debt elimination stop reverse compounding"
                onClick={() => onNavigate('debt-elimination')}
                color="from-red-500 to-orange-500"
              />

              <ModuleCard
                icon={<Shield className="w-8 h-8" />}
                title="Protect & Grow"
                description="Emergency buffers + tax-free layers"
                color="from-blue-500 to-indigo-500"
              />

              <ModuleCard
                icon={<Home className="w-8 h-8" />}
                title="Real Estate Paths"
                description="House hacking + passive crowdfunding"
                onClick={() => onNavigate('real-estate-crowdfunding')}
                color="from-purple-500 to-pink-500"
              />

              <ModuleCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Alternative Strategies"
                description="Bank on Yourself + side income"
                color="from-amber-500 to-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured First Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Featured First Principles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard
              title="The Wealth Engine"
              description="Consistent contributions + long-term growth (historical ~10% nominal for broad indexes) turn small monthly amounts into significant wealth over time."
              onClick={() => onNavigate('wealth-engine')}
            />

            <PrincipleCard
              title="Debt Elimination"
              description="High-interest credit card debt (~21–25% APR) is reverse compounding. Use 0% balance transfers and structured payoffs to free up cash flow fast."
              onClick={() => onNavigate('debt-elimination')}
            />

            <PrincipleCard
              title="Real Estate Paths"
              description="Turn housing from a pure expense into an asset. House hack with multi-unit properties or add passive exposure through real estate crowdfunding."
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />

            <PrincipleCard
              title="Cash Flow Mastery"
              description="Create reliable surplus by paying yourself first. Automate it before lifestyle spending so your wealth engine stays fueled."
            />
          </div>
        </div>
      </section>

      {/* Life Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Choose Your Starting Point – Life Stages
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center">Not sure where to begin? Start based on where you are.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LifeStageCard
              title="Early Career"
              focus="Focus on debt payoff and building your first emergency fund."
            />
            <LifeStageCard
              title="Building a Family"
              focus="House hacking + basic protection strategies."
            />
            <LifeStageCard
              title="Mid-Career"
              focus="Max out tax-advantaged accounts and explore real estate paths."
            />
            <LifeStageCard
              title="Approaching Retirement"
              focus="Optimize drawdown and passive income streams."
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Free Tools</h2>
          <p className="text-slate-300 mb-12 text-center text-lg">Put the Principles to Work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolCard icon={<Calculator />} title="Compound Growth Calculator" />
            <ToolCard icon={<DollarSign />} title="Debt Payoff Projector" />
            <ToolCard icon={<Home />} title="House Hacking Estimator" />
            <ToolCard icon={<TrendingUp />} title="Savings Rate Tracker" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build Wealth on Solid Ground?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Start with the Wealth Engine or explore any principle that speaks to your current situation. No hype. No pressure. Just clear, first-principles direction you can trust.
          </p>
          <button
            onClick={() => onNavigate('wealth-engine')}
            className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Begin Your Journey
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ModuleCard({ icon, title, description, onClick, color }: any) {
  return (
    <button
      onClick={onClick}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-emerald-300 text-left"
    >
      <div className={\`w-16 h-16 bg-gradient-to-br \${color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform\`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600">{description}</p>
      <div className="mt-4 text-emerald-600 text-sm font-semibold flex items-center gap-1">
        Explore <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}

function PrincipleCard({ title, description, onClick }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all">
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <button
        onClick={onClick}
        className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 flex items-center gap-1"
      >
        Learn the principle <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function LifeStageCard({ title, focus }: any) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Users className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{focus}</p>
    </div>
  );
}

function ToolCard({ icon, title }: any) {
  return (
    <button className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all text-left group">
      <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-3 text-emerald-400 text-sm font-semibold flex items-center gap-1">
        Try Now <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}


========================================
FILE: src/app/components/Moneyscan.tsx
========================================
import { ArrowRight } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface MoneyscanProps {
  onNavigate: (page: string) => void;
}

export default function Moneyscan({ onNavigate }: MoneyscanProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      {/* Minimal Header - Moneyscan Landing Page Only */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center"
            >
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="h-10 w-auto"
              />
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Centered with Generous Spacing */}
      <section className="pt-8 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* MONEYSCAN Logo */}
            <div className="flex justify-center" style={{ paddingTop: '40px', marginBottom: '70px' }}>
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="w-full max-w-[450px] h-auto"
                style={{ maxWidth: '450px' }}
              />
            </div>

            {/* Stacked Hero Headline */}
            <div className="max-w-4xl mx-auto" style={{ marginBottom: '45px' }}>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-slate-900 leading-tight">
                Building Lasting Wealth
              </h2>
              <p className="text-3xl md:text-4xl font-bold font-sans text-slate-900 mt-2">
                A First Principles Blueprint
              </p>
            </div>

            {/* Tag Line - 24-28px on desktop */}
            <p className="text-2xl md:text-[28px] text-slate-700 max-w-3xl mx-auto" style={{ marginBottom: '45px' }}>
              Understand the math. Choose your path. Build wealth that lasts.
            </p>

            {/* Sub Tag - 18-22px italicized */}
            <p className="text-lg md:text-xl italic text-slate-600 max-w-xl mx-auto" style={{ marginBottom: '55px' }}>
              Directional & Actionable in the AI Era
            </p>

            {/* What You Get - Stacked Text with Title and Infinity Symbols */}
            <div className="max-w-2xl mx-auto px-12" style={{ marginBottom: '55px' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What You Get:</h3>
              <div className="space-y-3 text-left">
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>First Principles Framework</strong> — Timeless math-based guidance on investing, cash flow, debt elimination, and wealth building.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>Practical Tools Included</strong> — Compound interest calculator, debt payoff projector, AI literacy assessment, and skills mapping worksheet.
                </p>
                <p className="text-base md:text-lg text-slate-700 leading-snug">
                  <span className="text-xl mr-2">♾️</span>
                  <strong>Lifetime Access</strong> — One-time \$49 fee. No subscription. Includes future updates as AI and markets evolve.
                </p>
              </div>
            </div>

            {/* Pricing - 36-42px */}
            <div style={{ marginBottom: '55px' }}>
              <p className="text-[40px] font-bold text-emerald-600">
                One-Time Fee: \$49
              </p>
            </div>

            {/* CTA Button - Large and Prominent */}
            <div style={{ marginBottom: '35px' }}>
              {/* Legal Agreement Text */}
              <p className="text-sm md:text-base text-slate-600 mb-4">
                By purchasing, you agree to our{' '}
                <button
                  onClick={() => {
                    onNavigate('legal-privacy');
                    setTimeout(() => {
                      document.getElementById('disclaimers')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Disclaimers
                </button>
                {' '}and{' '}
                <button
                  onClick={() => {
                    onNavigate('legal-privacy');
                    setTimeout(() => {
                      document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Privacy Policy
                </button>
                .
              </p>

              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-12 py-5 md:px-16 md:py-6 rounded-xl font-bold text-xl md:text-2xl transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-3 group min-w-[360px] md:min-w-[440px]">
                <span>Get Instant Access — \$49</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Trust Line */}
            <div className="mb-20">
              <p className="text-lg md:text-xl text-slate-600">
                Instant access. No subscription. Lifetime updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/ToolsHub.tsx
========================================
import { Wrench, CheckCircle, ArrowRight, FileText, BookOpen, Calculator, TrendingUp, Download, Brain, Zap } from 'lucide-react';

interface ToolsHubProps {
  onNavigate: (page: string) => void;
}

export default function ToolsHub({ onNavigate }: ToolsHubProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Tools Hub
            </h1>
          </div>
          <p className="text-2xl text-slate-600 mb-4">
            Free Resources to Build Wealth and Advance Your Career
          </p>
          <p className="text-sm text-slate-500">
            Practical tools to assess your situation, plan your next steps, and turn principles into action.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Awareness without action is just information. These tools turn timeless first-principles thinking into consistent, repeatable behaviors that create surplus and build lasting wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Wealth Tools Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Wealth Tools</h2>

          <div className="space-y-6">
            {/* Compound Interest Calculator */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Compound Interest Calculator</h3>
                  <p className="text-slate-700 leading-relaxed">
                    See exactly how small, consistent monthly contributions grow over decades using the historical ~10% nominal benchmark. Adjust contribution amount, time horizon, and rate to visualize the real power of compounding.
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Calculator className="w-5 h-5" />
                <span>Try It Free</span>
              </button>
            </div>

            {/* Debt Payoff Projector */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Debt Payoff Projector</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Reverse the compounding engine. Input your highest-interest debts and see how aggressive payoff strategies free up future surplus — often dramatically faster than minimum payments.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('debt-elimination')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Launch Tool</span>
              </button>
            </div>

            {/* Surplus Tracker Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Surplus Tracker Worksheet</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A simple monthly framework to help you "pay yourself first," track spending leaks, and direct consistent surplus toward investing and wealth building.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('cash-flow-mastery')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Get Worksheet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Career Tools Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">AI Era Career Tools</h2>

          <div className="space-y-6">
            {/* AI Literacy Assessment */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI Literacy Assessment</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    12-question interactive quiz designed to measure not just familiarity, but your ability to use AI strategically for career advantage and wealth building.
                  </p>
                  <button
                    onClick={() => onNavigate('ai-career-tools')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Take the Assessment</span>
                  </button>
                </div>
              </div>

              {/* Assessment Details */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Rate each statement from 0–3 (0 = Never / Strongly Disagree, 3 = Always / Strongly Agree):</h4>
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <ol className="space-y-3 text-slate-700 list-decimal list-inside">
                    <li>I regularly use AI tools (ChatGPT, Claude, Gemini, etc.) to help me work faster or smarter.</li>
                    <li>I know how to write effective prompts that get useful, specific results instead of generic answers.</li>
                    <li>I can critically evaluate AI output for accuracy, bias, or hallucinations.</li>
                    <li>I use AI to research or analyze topics related to my career or finances.</li>
                    <li>I understand the difference between using AI as a tool versus becoming overly dependent on it.</li>
                    <li>I have experimented with AI to automate repetitive tasks in my job or side projects.</li>
                    <li>I actively look for ways AI can increase my earning power (e.g., new services, faster delivery, better quality).</li>
                    <li>I track how AI is changing jobs and opportunities in my industry or local area.</li>
                    <li>I combine my existing domain knowledge/skills with AI tools to create unique value.</li>
                    <li>I have a basic understanding of AI's limitations (what it's good at and what it still struggles with).</li>
                    <li>I regularly practice using AI for wealth-building activities (researching investments, analyzing side hustle ideas, optimizing budgets, etc.).</li>
                    <li>I view AI as a collaborator that can help me build surplus faster rather than a threat to my career.</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Scoring</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>0–12 points: Beginner</strong> – Focus on foundational prompting and daily use.</li>
                    <li><strong>13–24 points: Intermediate</strong> – Start experimenting with automation and career applications.</li>
                    <li><strong>25–36 points: Advanced</strong> – Look for high-leverage opportunities to turn AI into real surplus.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Map Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Skills Map Worksheet</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Downloadable PDF template to map your existing skills, identify transferable strengths, and spot high-leverage opportunities where AI can amplify your earning power.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => onNavigate('ai-skills-worksheet')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>View Online</span>
                </button>
              </div>
            </div>

            {/* Freelance AI Gigs Explorer */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Freelance AI Gigs Explorer</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Discover accessible freelance opportunities that combine basic AI tools with your current skills. Most gigs require only prompting skills and 5–10 hours per week to start.
                  </p>
                </div>
              </div>

              {/* Gigs Table */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Example Freelance AI Gigs (Realistic 2026 Opportunities)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Gig</th>
                        <th className="px-6 py-4 text-left font-semibold">Description</th>
                        <th className="px-6 py-4 text-left font-semibold">Who It's Good For</th>
                        <th className="px-6 py-4 text-left font-semibold">Monthly Earnings (Part-Time)</th>
                        <th className="px-6 py-4 text-left font-semibold">Difficulty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI-Assisted Content Creation</td>
                        <td className="px-6 py-4 text-slate-700">Use AI tools to draft, edit, and optimize blog posts, social media, or email campaigns for small businesses.</td>
                        <td className="px-6 py-4 text-slate-700">Writers, marketers, teachers</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$800 – \$2,500</td>
                        <td className="px-6 py-4 text-slate-700">Beginner</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Prompt Engineering for Small Businesses</td>
                        <td className="px-6 py-4 text-slate-700">Help local businesses create better prompts for ChatGPT, Claude, or Midjourney to improve their marketing or operations.</td>
                        <td className="px-6 py-4 text-slate-700">Anyone comfortable with AI chat tools</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$1,000 – \$3,000</td>
                        <td className="px-6 py-4 text-slate-700">Beginner–Intermediate</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI Workflow Automation</td>
                        <td className="px-6 py-4 text-slate-700">Build simple automations (e.g., Zapier + AI) for tradespeople, real estate agents, or small retailers to save them time.</td>
                        <td className="px-6 py-4 text-slate-700">Organized people who like systems</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$1,200 – \$4,000</td>
                        <td className="px-6 py-4 text-slate-700">Intermediate</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI Data Labeling / Training Data</td>
                        <td className="px-6 py-4 text-slate-700">Review and label data for AI models (images, text, audio). Steady remote work.</td>
                        <td className="px-6 py-4 text-slate-700">Detail-oriented people</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$600 – \$1,800</td>
                        <td className="px-6 py-4 text-slate-700">Beginner</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">AI-Enhanced Consulting</td>
                        <td className="px-6 py-4 text-slate-700">Offer niche consulting using AI research tools (e.g., market research, competitor analysis for local businesses).</td>
                        <td className="px-6 py-4 text-slate-700">Experienced professionals in any field</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$1,500 – \$5,000+</td>
                        <td className="px-6 py-4 text-slate-700">Intermediate–Advanced</td>
                      </tr>
                      <tr className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Custom AI Image or Video Generation</td>
                        <td className="px-6 py-4 text-slate-700">Create professional visuals or short videos for businesses using tools like Midjourney or Runway.</td>
                        <td className="px-6 py-4 text-slate-700">Creative people</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">\$900 – \$2,800</td>
                        <td className="px-6 py-4 text-slate-700">Beginner–Intermediate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Get Started */}
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-4">How to Get Started (Simple 3-Step Process)</h4>
                <ol className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">1.</span>
                    <span>Take the AI Literacy Assessment to identify your current level.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">2.</span>
                    <span>Pick 1–2 gigs that match your existing skills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 text-lg flex-shrink-0">3.</span>
                    <span>Practice with free tools for 1 week, then create a simple profile on Upwork, Fiverr, or LinkedIn.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-emerald-100 rounded-lg border-l-4 border-emerald-600">
                  <p className="text-slate-900 font-semibold mb-2">💡 Pro Tip</p>
                  <p className="text-slate-700">Many people start earning their first \$500–\$1,000 within 30–45 days by offering "AI-enhanced" versions of services they already understand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade & Opportunity Tools Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trade & Opportunity Tools</h2>

          <div className="space-y-6">
            {/* Trade Opportunity Finder */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Opportunity Finder</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Interactive tool: Enter your zip code and select a trade to instantly see local demand, salary ranges, growth projections, training options, and time to \$100K+ potential.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('trade-opportunity-finder')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Wrench className="w-5 h-5" />
                <span>Launch Trade Finder</span>
              </button>
            </div>

            {/* National Trades Report */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">National Trades Report</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Comprehensive downloadable report covering 25+ high-demand trades across all 50 states and major metros, with detailed \$100K timelines and side-by-side comparisons to traditional white-collar paths.
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Download className="w-5 h-5" />
                <span>Download Report (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use These Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Use These Tools</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Start with the <strong>Compound Interest Calculator</strong> or <strong>AI Literacy Assessment</strong> — they provide the clearest "aha" moments. Then move to the <strong>Surplus Tracker</strong>, <strong>Freelance AI Gigs Explorer</strong>, or <strong>Trade Opportunity Finder</strong> to turn insight into consistent action.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              How This Connects
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Wealth Engine</strong> → Use the calculators to fuel steady investing</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Cash Flow Mastery</strong> → The Surplus Tracker helps you create the fuel</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>AI Era Careers & Skilled Trades</strong> → The assessment, gigs explorer, and finder help you protect and grow your earning power</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Next Steps</h3>
            <p className="text-lg text-slate-800">
              Pick one tool and use it today. Small, consistent action compounds faster than you think.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Take Action?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start with one tool today and build momentum toward lasting wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Return to The Wealth Engine</span>
            </button>
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Explore AI Era Careers</span>
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="text-emerald-100 hover:text-white underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Back to Cash Flow Mastery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/WealthEngine.tsx
========================================
import { TrendingUp, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import CompoundCalculator from './CompoundCalculator';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';

interface WealthEngineProps {
  onNavigate: (page: string) => void;
}

export default function WealthEngine({ onNavigate }: WealthEngineProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              The Wealth Engine
            </h1>
          </div>
          <p className="text-2xl text-slate-600 mb-4">
            Compound Interest and Long-Term Investing
          </p>
          <p className="text-sm text-slate-500">
            Meta: Master the first principle of wealth building: consistent contributions plus long-term compounding growth.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Wealth is built through the mathematics of compound interest.</strong> Small, consistent contributions allowed to grow over long periods become the engine that creates financial freedom.
            </p>
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-slate-700 mb-4">
              Every dollar you save or invest has two jobs:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>Survive today</li>
              <li><strong>Work for you tomorrow</strong> — growing exponentially instead of being spent once</li>
            </ol>
            <p className="text-slate-700">
              This is the only principle that turns time into your greatest financial ally.
            </p>

            <div className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-3">Simple Illustration</h4>
              <p className="text-slate-700">
                Imagine putting away <strong>\$300 per month</strong> instead of spending it. Over decades, that money doesn't just add up — it <strong>multiplies</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <CompoundCalculator />
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Benchmark: The Math You Can Count On</h2>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-xl border border-emerald-200">
              <p className="text-lg text-slate-800">
                <strong>Historical Performance:</strong> Broad U.S. stock market indexes (represented by the S&P 500) have delivered an average annual total return of approximately <strong>10% nominally</strong> (including dividends) over the past 90+ years, or roughly <strong>7% after inflation</strong>.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Contribution</th>
                  <th className="px-6 py-4 text-left font-semibold">Time Period</th>
                  <th className="px-6 py-4 text-left font-semibold">At ~7% Real Return</th>
                  <th className="px-6 py-4 text-left font-semibold">At ~10% Nominal Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">\$200</td>
                  <td className="px-6 py-4 text-slate-700">20 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~\$82,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~\$95,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">\$300</td>
                  <td className="px-6 py-4 text-slate-700">30 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~\$300,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~\$415,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">\$500</td>
                  <td className="px-6 py-4 text-slate-700">40 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~\$1,050,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~\$1,650,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              Key Takeaway
            </h4>
            <p className="text-slate-700">
              <strong>Time + Consistency + Reasonable Growth Rate = Life-changing results.</strong> You don't need to pick winning stocks or time the market. You need to start and stay in the game.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-slate-700 mb-4">
              Millions of everyday investors have built substantial wealth by simply:
            </p>
            <ul className="space-y-3">
              {['Investing regularly in low-cost broad-market funds', 'Ignoring daily market noise', 'Leaving the money alone for decades'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 mt-6">
              This approach has survived the Great Depression, multiple recessions, wars, inflation spikes, and market crashes — and still delivered strong long-term results for patient investors.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-8">
            These popular, low-cost options help many people execute the principle of consistent, diversified long-term investing:
          </p>

          <div className="space-y-6">
            <VehicleCard
              name="Vanguard Total Stock Market ETF (VTI)"
              description="Provides broad exposure to nearly the entire U.S. stock market (large-, mid-, and small-cap stocks) with an ultra-low expense ratio of 0.03%. A simple, set-it-and-forget-it core holding for compounding."
              features={[
                'Expense ratio: 0.03% (very low — about \$3 per year on a \$10,000 investment)',
                'High liquidity and diversification across thousands of stocks',
                'Practical note: Hold it inside a 401(k), IRA, or taxable brokerage; automate monthly contributions'
              ]}
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              gradient="from-emerald-500 to-blue-600"
            />

            <VehicleCard
              name="Schwab U.S. Broad Market ETF (SCHB)"
              description="Another ultra-low-cost total market ETF that delivers similar broad U.S. stock exposure (tracking the Dow Jones U.S. Broad Stock Market Index)."
              features={[
                'Expense ratio: 0.03%',
                'Strong asset base and tight tracking to the broad market',
                'Practical note: Ideal if you already have a Schwab account; pair with automatic investing'
              ]}
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              gradient="from-blue-500 to-emerald-600"
            />
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <p className="text-slate-700">
              Open or use an existing tax-advantaged account (401(k) with employer match first, then IRA), select one of these (or a similar total-market fund), and set up recurring investments from your paycheck. Increase the amount over time as income grows.
            </p>
          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Context & Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Risk:</strong> Stocks can drop sharply in the short term (20–50% declines have happened multiple times). This strategy works because you invest for the long term (10+ years).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Past vs Future:</strong> Historical ~10% nominal returns are not a guarantee of future results.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Inflation:</strong> Always think in real (after-inflation) terms — roughly 7% has been a realistic long-term expectation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Personal Factors:</strong> Your age, risk tolerance, job stability, and goals matter. This is general education, not personalized advice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Creates the monthly contributions that feed the engine"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Stops high-interest leaks (21–25% APR credit cards) that destroy compounding"
              onClick={() => onNavigate('debt-elimination')}
            />
            <ConnectionCard
              title="Protection & Liquidity"
              description="Builds an emergency fund so you never have to sell investments at a loss"
            />
            <ConnectionCard
              title="Real Estate Paths"
              description="Provides additional surplus or alternative forms of growth and control"
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Put the Wealth Engine to Work?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Start by calculating what consistent investing could mean for you, then explore how to protect and accelerate it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('debt-elimination')}
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Fix the Leaks (Debt)
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('behavioral-finance')}
              className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Behavioral Finance
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/BehavioralFinance.tsx
========================================
import { Brain, AlertCircle, CheckCircle, ArrowRight, TrendingDown, Eye, TrendingUp } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface BehavioralFinanceProps {
  onNavigate: (page: string) => void;
}

export default function BehavioralFinance({ onNavigate }: BehavioralFinanceProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Behavioral Finance
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Why Smart People Sabotage Their Wealth
          </p>
          <p className="text-base text-slate-600">
            Discover how psychological biases derail even the best financial plans and how to protect your Wealth Engine from your own mind.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              The mathematics of compound interest and sound financial strategies only work if your <strong>behavior</strong> supports them. Human psychology — emotions, mental shortcuts, and biases — often works against long-term wealth building. <strong>Awareness plus simple systems beat willpower alone.</strong>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700 mb-4">
              You can understand the Wealth Engine perfectly (consistent investing at ~10% historical nominal returns), yet still underperform dramatically because of predictable human errors.
            </p>
            <p className="text-lg text-slate-700">
              Behavioral finance explains the gap between <strong>knowing what to do</strong> and <strong>actually doing it</strong>. It turns first-principles knowledge into lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Common Biases Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Most Common Biases & Their Impact</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Bias</th>
                  <th className="px-6 py-4 text-left font-semibold">What It Is</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Real Cost to Your Wealth Engine</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <BiasRow
                  bias="Loss Aversion"
                  whatItIs="Losses hurt ~2× more than gains feel good"
                  cost="Panic-selling during downturns; holding losers too long"
                  example="Selling stocks in a crash instead of staying invested for ~10% historical nominal returns"
                />
                <BiasRow
                  bias="Overconfidence"
                  whatItIs="Overestimating your timing or stock-picking skill"
                  cost="Excessive trading, higher fees, chasing 'hot' ideas"
                  example="Trying to beat low-cost index funds"
                />
                <BiasRow
                  bias="Herd Mentality"
                  whatItIs="Following the crowd (FOMO or panic)"
                  cost="Buying high, selling low"
                  example="Jumping into hot real estate or crowdfunding at peaks"
                />
                <BiasRow
                  bias="Recency Bias"
                  whatItIs="Overweighting recent events"
                  cost="Changing strategy after one bad/good year"
                  example="Abandoning dollar-cost averaging after a market dip"
                />
                <BiasRow
                  bias="Mental Accounting"
                  whatItIs="Treating money differently by 'bucket'"
                  cost="Spending windfalls while carrying high-interest debt"
                  example="Using tax refunds for fun instead of debt payoff"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
            <span className="font-semibold">*</span>
            <p>
              Historical ~10% nominal returns referenced throughout are based on S&P 500 long-term averages.
              See <button onClick={() => onNavigate('wealth-engine')} className="text-emerald-600 hover:text-emerald-700 underline font-medium">The Wealth Engine</button> for full context and caveats.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Benchmark</h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The "Behavior Gap"</h3>
                <p className="text-slate-700 mb-4">
                  Behavioral mistakes create a significant gap between market returns and what individual investors actually earn. Studies consistently show that many investors earn <strong>1–4%+ less per year</strong> than the market itself due to poor timing driven by emotions.
                </p>
                <p className="text-slate-700">
                  Loss aversion and overconfidence are often the biggest drags. Over decades, that gap can cost <strong>hundreds of thousands in lost compounding</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers (and Cautionary Tales)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Positive Achievers</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Investors who <strong>automate contributions and rebalancing</strong> stick closest to the historical ~10% nominal path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>They treat market volatility as <strong>noise, not a signal to act</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">✗ Common Pitfalls</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span>During market declines, many sell due to <strong>loss aversion</strong> and miss the recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span><strong>Overconfident traders</strong> frequently underperform passive index investors after fees and taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span><strong>Herd behavior</strong> fuels bubbles and crashes that hurt late followers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-slate-700 text-lg">
              <strong>The winners design their environment</strong> (automation, rules, accountability) to work with human nature rather than against it.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            1–2 Simple Actionable Vehicles
          </h2>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These strategies help protect your Wealth Engine from behavioral mistakes. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Vehicle 1: Automation & Pre-Commitment Systems</h3>
                  <p className="text-slate-700 mb-4">
                    <strong>Set it and forget it:</strong> Remove daily decision-making where biases thrive.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Automatic paycheck deductions into your 401(k) or IRA (low-cost index funds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Automatic extra debt payments or savings transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Target-date or balanced funds that automatically adjust over time</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-emerald-700">Micro-example:</strong> Set recurring \$300/month auto-transfer from checking into Vanguard VTI inside your Roth IRA on the 1st of each month. You'll never see it, never debate it, and compounding works without emotional interference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Vehicle 2: Rules & Checklists to Counter Biases</h3>
                  <ul className="space-y-3 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>"Wait 30 days" rule</strong> before big purchases or investment changes (counters recency and herd bias)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Portfolio rebalancing schedule</strong> (once or twice a year) instead of emotional reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Written Investment Policy Statement</strong> — a simple one-page document outlining your long-term plan (e.g., "I invest consistently regardless of market headlines"). Review it annually.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Quick self-check:</strong> "Am I making this decision based on fear/greed/recent news, or on the first principles?"</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Keep a one-page note in your phone: "My plan: 80% VTI, 20% bonds. Rebalance Jan 1 only. Ignore daily news." When you feel the urge to sell during a dip, read it first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Key Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Everyone has biases — even professionals. The goal is not perfection but reducing their impact.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Behavioral finance does not replace the math of compounding; it protects it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is general education. Severe emotional or decision-making challenges may benefit from working with a fiduciary advisor or therapist.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects Elsewhere</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Automation helps you stay invested long enough for compounding to work"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Mental accounting keeps people paying minimums on ~21–25% APR cards"
              onClick={() => onNavigate('debt-elimination')}
            />
            <ConnectionCard
              title="Real Estate Paths"
              description="Herd mentality drives buying at peaks in house hacking or crowdfunding"
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Pay-yourself-first overrides the urge to spend first"
            />
          </div>
        </div>
      </section>

      {/* Quick Bias Self-Check Teaser */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Quick Bias Self-Check</h3>
            </div>
            <p className="text-slate-700 mb-6">
              Before making your next financial decision, ask yourself these three questions:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-slate-900">Is this based on recent news or long-term principles?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Recency Bias, Herd Mentality)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-slate-900">Am I reacting to fear of loss or seeking actual gains?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Loss Aversion)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-slate-900">Does this align with my written investment policy?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Overconfidence, Mental Accounting)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Pro tip:</strong> If you answer "no" to any of these, wait 48 hours before acting. Your future self will thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Wealth Engine from Yourself?</h2>
            <p className="text-xl text-emerald-50">
              Master your behavior and the math will take care of the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Return to see the math you're protecting
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Wealth Engine <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('debt-elimination')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingDown className="w-8 h-8 group-hover:text-red-600 transition-colors" />
                <h3 className="font-bold text-lg">Fix the Leaks</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Eliminate debt to stop reverse compounding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Fix the Leaks <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="font-bold text-lg">Real Estate Paths</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Add diversification through house hacking or passive crowdfunding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Explore Options <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-emerald-50 text-sm">
              Remember: The best investment strategy is one you can actually stick to — that's where behavioral finance matters most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function BiasRow({ bias, whatItIs, cost, example }: any) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4 font-bold text-slate-900">{bias}</td>
      <td className="px-6 py-4 text-slate-700">{whatItIs}</td>
      <td className="px-6 py-4 text-red-600 font-medium bg-red-50/30">{cost}</td>
      <td className="px-6 py-4 text-slate-600 text-sm">{example}</td>
    </tr>
  );
}


========================================
FILE: src/app/components/CashFlowMastery.tsx
========================================
import { Droplets, TrendingUp, CheckCircle, ArrowRight, Wallet } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface CashFlowMasteryProps {
  onNavigate: (page: string) => void;
}

export default function CashFlowMastery({ onNavigate }: CashFlowMasteryProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Cash Flow Mastery
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Create Reliable Surplus
          </p>
          <p className="text-base text-slate-600">
            Master the discipline of living below your means to fuel consistent wealth building.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Surplus (Income – Expenses) is the fuel for all wealth building.</strong> You cannot compound effectively if money leaks out faster than it comes in. Live below your means systematically by automating "pay yourself first" so saving and investing happen before lifestyle spending.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Most people spend first and save what's left — which is usually nothing. Mastering cash flow turns sporadic saving into a consistent, automated system that steadily feeds your Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Pay Yourself First vs. Typical Spending</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Income</th>
                  <th className="px-6 py-4 text-left font-semibold">Automated Savings/Investing</th>
                  <th className="px-6 py-4 text-left font-semibold">Remaining for Spending</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Long-Term Impact</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Typical (Spend First)</td>
                  <td className="px-6 py-4 text-slate-700">\$6,000</td>
                  <td className="px-6 py-4 text-red-600 font-medium">\$0–\$300 (whatever is left)</td>
                  <td className="px-6 py-4 text-slate-700">\$5,700+</td>
                  <td className="px-6 py-4 text-red-600 font-bold">Slow or no progress</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-emerald-50/20">
                  <td className="px-6 py-4 font-bold text-slate-900">Pay Yourself First (15–20% Rule)</td>
                  <td className="px-6 py-4 text-slate-700">\$6,000</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">\$900–\$1,200</td>
                  <td className="px-6 py-4 text-slate-700">\$4,800–\$5,100</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Strong compounding</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Takeaway</h3>
            <p className="text-slate-700">
              Automating 15–20%+ of every paycheck before spending creates reliable surplus. Over time, that consistent fuel dramatically accelerates the ~10% historical compounding of your Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Households that consistently save 15–20% or more of income through automation build financial security and wealth far faster than those living paycheck-to-paycheck. Many successful investors credit "pay yourself first" as the foundational habit that allowed their investments to compound over decades.
          </p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Actionable Vehicles</h2>
          <p className="text-lg text-slate-600 mb-8">
            These popular tools help implement systematic cash flow management and pay-yourself-first automation. Research pricing and features to find the best fit.
          </p>

          <div className="grid gap-8">
            {/* Monarch Money */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Monarch Money</h3>
                  <p className="text-slate-700 mb-4">
                    A modern budgeting and net-worth tracking app that helps visualize income, expenses, investments, and shared household finances.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Pricing:</strong> ~\$14.99/month or \$99.99/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Key strengths:</strong> Strong account syncing, custom categories, forecasting, and collaborative features</span>
                    </li>
                  </ul>
                  <p className="text-sm text-emerald-800 bg-emerald-50 p-3 rounded-lg">
                    <strong>Practical note:</strong> Excellent for ongoing monitoring and adjusting your automated savings rate.
                  </p>
                </div>
              </div>
            </div>

            {/* YNAB */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">YNAB (You Need A Budget)</h3>
                  <p className="text-slate-700 mb-4">
                    Focuses on zero-based budgeting ("every dollar has a job") to build disciplined habits and create reliable surplus.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Pricing:</strong> ~\$14.99/month or \$109/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Key strengths:</strong> Emphasizes behavior change, goal tracking, and proactive planning</span>
                    </li>
                  </ul>
                  <p className="text-sm text-emerald-800 bg-emerald-50 p-3 rounded-lg">
                    <strong>Practical note:</strong> Particularly effective for breaking the paycheck-to-paycheck cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-sm text-amber-900">
              <strong>Disclaimer:</strong> These examples are educational only and not personalized recommendations. Always research current pricing, features, and user reviews before subscribing to any financial tool.
            </p>
          </div>
        </div>
      </section>

      {/* How to Execute */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Execute</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">1.</span>
              <p>Set up automatic transfers from every paycheck: 15–20%+ to savings/investing accounts first.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">2.</span>
              <p>Use one of the tools above (or a simple spreadsheet) to track spending in the remaining buckets.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">3.</span>
              <p>Review monthly and increase your savings rate as income grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Caveats</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>Your exact savings rate depends on income, life stage, and obligations — start where you can and build up.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>These are general examples only. This is educational direction, not personalized advice.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>Budgeting tools require consistent use; the real power comes from the automation and habits they support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <WealthEngineIcon className="w-8 h-8" />
              How This Connects to Other Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ConnectionCard
                title="Wealth Engine"
                description="Surplus created here becomes the consistent contributions that drive long-term compounding."
                onClick={() => onNavigate('wealth-engine')}
                color="emerald"
              />
              <ConnectionCard
                title="Debt Elimination"
                description="Strong cash flow makes it easier to attack high-interest debt aggressively."
                onClick={() => onNavigate('debt-elimination')}
                color="red"
              />
              <ConnectionCard
                title="Behavioral Finance"
                description="Automation overrides present bias and mental accounting that lead to overspending."
                onClick={() => onNavigate('behavioral-finance')}
                color="purple"
              />
              <ConnectionCard
                title="Real Estate Paths"
                description="Extra surplus can fund house hacking or crowdfunding investments."
                onClick={() => onNavigate('house-hacking')}
                color="indigo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Build Your Financial Foundation?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start with the core principles: automate your surplus, eliminate high-interest debt, and let compound interest do the heavy lifting.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Explore All Principles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/DebtElimination.tsx
========================================
import { CreditCard, AlertCircle, CheckCircle, ArrowRight, TrendingDown, DollarSign } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface DebtEliminationProps {
  onNavigate: (page: string) => void;
}

export default function DebtElimination({ onNavigate }: DebtEliminationProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingDown className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Debt Elimination
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Stop the Reverse Compound Engine
          </p>
          <p className="text-base text-slate-600">
            High-interest debt destroys wealth faster than most investments grow it. Learn how to minimize interest costs aggressively.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>High-interest debt (especially credit cards) is a reverse compound interest engine that silently destroys wealth.</strong> Every dollar paid in unnecessary interest is money permanently removed from your surplus — the fuel that powers your Wealth Engine. Minimize or eliminate interest costs aggressively so every extra payment reduces principal, not just services the debt.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              At today's average credit card APR of ~20–25%, carrying a balance costs far more than most investments earn. Eliminating this drag frees up cash flow that can be redirected straight into compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">The Real Cost of Minimum Payments vs. Accelerated Payoff</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Scenario (\$8,000 balance at ~22% APR)</th>
                  <th className="px-6 py-4 text-left font-semibold">Minimum Payments Only</th>
                  <th className="px-6 py-4 text-left font-semibold">0% Balance Transfer + Aggressive Payoff (\$400/month)</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Difference</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Time to Pay Off</td>
                  <td className="px-6 py-4 text-red-600 font-medium">20–30+ years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">20–24 months</td>
                  <td className="px-6 py-4 text-slate-700">Saves years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Total Interest Paid</td>
                  <td className="px-6 py-4 text-red-600 font-bold bg-red-50/30">\$8,000 – \$12,000+</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">~\$0 during promo period (plus 3–5% transfer fee)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">Saves thousands</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Monthly Cash Flow After Payoff</td>
                  <td className="px-6 py-4 text-red-600">Still trapped</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">Full \$400 available for investing/savings</td>
                  <td className="px-6 py-4 text-slate-700">Huge acceleration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <TrendingDown className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  High-interest debt at 20–25% APR mathematically works against you faster than the ~10% historical returns of your Wealth Engine can work for you. Acting quickly with a 0% bridge can save thousands and accelerate your surplus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <p className="text-lg text-slate-700">
              Millions of consumers successfully use 0% APR balance transfer offers to escape the debt cycle faster. Those who combine the transfer with a strict payoff plan (and avoid new charges) consistently report faster net-worth growth compared to people who only pay minimums. The key behavior: treat the promo period as a limited-time window to attack the debt aggressively.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-6">
            These are commonly used tools to minimize interest costs and accelerate payoff. Review current offers, eligibility (good-to-excellent credit usually required), fees, and terms carefully — offers change frequently.
          </p>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These tools help eliminate high-interest debt. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Wells Fargo Reflect® Card</h3>
                  <p className="text-slate-700 mb-4">
                    One of the longer 0% intro APR periods on balance transfers, directly neutralizing high-interest credit card debt during the promo window.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>0% intro APR</strong> for up to 21 months on qualifying balance transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Balance transfer fee typically 5% (min \$5); must transfer within 120 days of opening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Practical note:</strong> Transfer high-rate balances quickly, then make payments larger than the old minimum during the promo period. Avoid new purchases if they don't qualify for 0%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">BankAmericard®</h3>
                  <p className="text-slate-700 mb-4">
                    Provides a competitive long 0% intro APR period on balance transfers with a straightforward structure.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>0% intro APR</strong> for up to 21 billing cycles on qualifying balance transfers (made within first 60 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span>Balance transfer fee typically 5%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Practical note:</strong> Pair with a strict payoff plan. Once the debt is cleared, redirect the former minimum payments to your Wealth Engine (e.g., VTI or SCHB).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Check your credit score and current offers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Transfer high-rate balances quickly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Automate payments larger than the old minimum during the 0% window.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>After payoff, roll the freed-up cash flow into investing or emergency savings.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Requires <strong>good-to-excellent credit</strong> (typically 670+ FICO) for the best offers and lowest fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is a <strong>temporary bridge</strong>, not a long-term solution. New spending on the card can erase gains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Post-promo APR can jump to 17–28%+ if any balance remains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Always read the fine print and consider your full financial situation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Freed-up cash flow goes directly into low-cost index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Debt elimination supercharges your surplus by removing a major leak"
              onClick={() => {}}
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Mental accounting and present bias often keep people paying minimums — automation and strict plans help overcome this"
              onClick={() => onNavigate('behavioral-finance')}
            />
            <ConnectionCard
              title="Protection & Liquidity"
              description="Clearing high-interest debt protects your emergency fund and compounding engine"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Stop the Reverse Compounding?</h2>
            <p className="text-xl mb-8 text-emerald-50">
              Every dollar you free from interest can start working <em>for</em> you in the Wealth Engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Back to The Wealth Engine
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('behavioral-finance')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Behavioral Finance
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/RealEstateCrowdfunding.tsx
========================================
import { Building2, CheckCircle, AlertCircle, ArrowRight, Calculator, BookOpen, TrendingUp } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface RealEstateCrowdfundingProps {
  onNavigate: (page: string) => void;
}

export default function RealEstateCrowdfunding({ onNavigate }: RealEstateCrowdfundingProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Real Estate Crowdfunding
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Passive Real Estate Exposure
          </p>
          <p className="text-base text-slate-600">
            Gain diversified real estate income and appreciation without the hassles of direct property management.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Gain diversified real estate ownership and potential income or appreciation without the large capital, active management, or illiquidity of direct property ownership.</strong> This provides an alternative growth and income stream that can complement — not replace — your core Wealth Engine of consistent long-term stock-market compounding.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Real estate can add diversification and passive income, but traditional ownership is capital-intensive and hands-on. Crowdfunding <strong>lowers the barrier dramatically</strong>, letting you participate with small amounts while keeping most of your money working in liquid, high-growth assets.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark / Comparison */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Real Estate Crowdfunding vs. Other Paths</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Return Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Minimum Investment</th>
                  <th className="px-6 py-4 text-left font-semibold">Liquidity</th>
                  <th className="px-6 py-4 text-left font-semibold">Management Effort</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Best For</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">House Hacking (Active)</td>
                  <td className="px-6 py-4 text-slate-700">Mortgage offset + equity growth</td>
                  <td className="px-6 py-4 text-slate-700">3.5%+ down</td>
                  <td className="px-6 py-4 text-slate-700">Medium</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">High</td>
                  <td className="px-6 py-4 text-slate-700">Hands-on cash-flow builders</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-indigo-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Real Estate Crowdfunding</td>
                  <td className="px-6 py-4 text-indigo-600 font-bold bg-emerald-50/30">7–12% (income + growth)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">\$10–\$100</td>
                  <td className="px-6 py-4 text-amber-600 font-medium">Low (years)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">Very Low</td>
                  <td className="px-6 py-4 text-indigo-600 font-bold">Passive diversification</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Core Wealth Engine (VTI/SCHB)</td>
                  <td className="px-6 py-4 text-slate-700">~10% historical nominal</td>
                  <td className="px-6 py-4 text-slate-700">Any</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">High</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">None</td>
                  <td className="px-6 py-4 text-slate-700">Long-term compounding</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-indigo-100 border-2 border-indigo-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-12 h-12 text-indigo-700 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  Crowdfunding offers accessible real estate exposure with <strong>far lower capital and effort</strong> than direct ownership. Returns are not guaranteed and depend on market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <p className="text-lg text-slate-700">
              Many everyday investors have built diversified real estate holdings starting with small, consistent contributions on platforms like <strong>Fundrise and Arrived</strong>. They often use these as a complement to their stock index funds, generating quarterly dividends while maintaining focus on their primary Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-6">
            These platforms make passive real estate investing straightforward. Review current fees, liquidity terms, risks, and performance data carefully.
          </p>

          <div className="mb-6 p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These platforms offer passive real estate exposure. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Fundrise</h3>
                  <p className="text-slate-700 mb-4">
                    A diversified platform offering exposure to residential and commercial real estate through funds and eREITs. It provides broad, hands-off allocation with very low entry barriers.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Minimum:</strong> \$10</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Typical fees:</strong> ~1% total annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Practical note:</strong> Many users automate small monthly contributions. Recommended hold period is often 5+ years.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Arrived</h3>
                  <p className="text-slate-700 mb-4">
                    Focuses on fractional ownership in single-family rental properties, delivering quarterly dividends from rent and potential appreciation.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Minimum:</strong> \$100 per property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Targets:</strong> 3–5%+ rental yields + appreciation (historical blended returns often projected in the 6–10% range)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Practical note:</strong> Build a portfolio gradually across multiple homes. Limited secondary market options exist for some liquidity.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <p className="text-slate-700">
              Allocate a modest portion (5–20%) of your portfolio and consider automating contributions from your monthly surplus. Treat this as a diversifier rather than your primary growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Illiquidity & Risk:</strong> Capital is typically locked for years. Returns are not guaranteed and can be affected by interest rates, property values, and local markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Fees:</strong> Reduce net returns.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Review all platform documents and consider your own risk tolerance and time horizon.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Use any income or gains to fuel low-cost index funds like VTI or SCHB for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="House Hacking"
              description="Choose crowdfunding if active landlord responsibilities don't fit your lifestyle"
              onClick={() => onNavigate('house-hacking')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Low minimums and automation help overcome hesitation or loss aversion"
              onClick={() => onNavigate('behavioral-finance')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Small, consistent investments build alongside your pay-yourself-first surplus"
              onClick={() => {}}
              accentColor="indigo"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Passive Real Estate?</h2>
            <p className="text-xl mb-8 text-indigo-50">
              Add real estate diversification without the landlord hassles—but keep your core Wealth Engine running strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Back to The Wealth Engine
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('house-hacking')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                House Hacking (Active Path)
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('debt-elimination')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Fix the Leaks
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/HouseHacking.tsx
========================================
import { Home, CheckCircle, AlertCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface HouseHackingProps {
  onNavigate: (page: string) => void;
}

export default function HouseHacking({ onNavigate }: HouseHackingProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              House Hacking
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Turn Your Largest Expense Into an Asset
          </p>
          <p className="text-base text-slate-600">
            Convert your biggest monthly cost into cash flow and equity that accelerates your Wealth Engine.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Convert your biggest monthly expense — housing — into a cash-flow-positive asset that builds equity and accelerates your Wealth Engine.</strong> By living in one unit while renting the others, you reduce (or eliminate) your own housing cost while creating surplus that can compound over time.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              In 2026, with elevated home prices in many markets, traditional homeownership often drains cash flow. House hacking flips the script: <strong>your property pays you</strong> while you build long-term equity and wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">The Math of House Hacking</h3>
          <p className="text-slate-600 mb-8">
            Living in one unit of a 2–4 unit property, and let rental income from the others offset your mortgage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Scenario (approx. \$400k property)</th>
                  <th className="px-6 py-4 text-left font-semibold">Traditional Single-Family</th>
                  <th className="px-6 py-4 text-left font-semibold">House Hack (Duplex/Triplex)</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Monthly Benefit</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Down Payment (FHA-eligible)</td>
                  <td className="px-6 py-4 text-slate-700">~\$14,000 (3.5%)</td>
                  <td className="px-6 py-4 text-slate-700">~\$14,000 (3.5%)</td>
                  <td className="px-6 py-4 text-slate-600">Same entry cost</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Monthly Mortgage + Taxes/Insurance</td>
                  <td className="px-6 py-4 text-slate-700">~\$2,400</td>
                  <td className="px-6 py-4 text-slate-700">~\$2,400</td>
                  <td className="px-6 py-4 text-slate-600">—</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Rental Income (after vacancies/maintenance)</td>
                  <td className="px-6 py-4 text-slate-700">\$0</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">\$1,800–\$2,600</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">\$1,800–\$2,600</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Your Net Housing Cost</td>
                  <td className="px-6 py-4 text-red-600 font-bold">~\$2,400</td>
                  <td className="px-6 py-4 text-emerald-600 font-black text-lg">\$0 – \$600</td>
                  <td className="px-6 py-4 text-emerald-600 font-black text-lg">Huge surplus</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-emerald-100 border-2 border-emerald-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-12 h-12 text-emerald-700 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  Rental income can cover <strong>most or all</strong> of your housing expense, freeing hundreds (or thousands) of dollars per month to feed your core compound-interest Wealth Engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <p className="text-lg text-slate-700 mb-4">
              In 2026, house hacking remains one of the most accessible ways for first-time buyers and younger households to break into real estate.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Many report cutting their effective housing costs by <strong>50–100%</strong> while building equity faster than traditional homeowners.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Works especially well in markets with <strong>strong rental demand</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>FHA rules continue to support</strong> owner-occupied 2–4 unit properties with low down payments.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-6">
            These are practical paths many people use to execute house hacking. Research local markets, get pre-approved, and run the numbers carefully — landlord responsibilities and maintenance costs are real.
          </p>

          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These strategies turn housing expense into asset. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">FHA Loan on a 2–4 Unit Property</h3>
                  <p className="text-slate-700 mb-4">
                    Government-backed financing that allows a low down payment while you live in one unit and rent the others. Rental income can help you qualify.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span>As low as <strong>3.5% down</strong> (subject to 2026 FHA limits, which vary by county — higher in high-cost areas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span>You must <strong>occupy one unit for at least one year</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span><strong>Practical note:</strong> Focus on cash-flow-positive properties. Use rental income from the other units to offset or exceed your mortgage. Ideal for duplexes/triplexes/quads in stable rental markets.</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-emerald-700">Micro-example:</strong> Buy a \$380k duplex in a mid-sized market with \$13,300 down (3.5%). Live in Unit A. Rent Unit B for \$1,400/month. Your \$2,200 mortgage becomes an \$800 net housing cost — save \$1,400/month to invest in VTI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Conventional Loan + Roommates or ADU Strategy</h3>
                  <p className="text-slate-700 mb-4">
                    Buy a single-family home or property with an accessory dwelling unit (ADU/granny flat), then rent out spare bedrooms or the ADU.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span>Often <strong>5–20% down</strong> depending on your credit and lender</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span>More flexible than strict multi-unit rules in some areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span><strong>Practical note:</strong> Simpler management for beginners. In 2026, ADUs are increasingly permitted and popular for generating steady side income with lower tenant turnover.</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Buy a 3-bedroom house with a backyard ADU for \$350k. Rent the ADU for \$1,200/month and one bedroom for \$700/month. Your \$2,000 mortgage becomes a \$100 cost — nearly free housing while building equity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Analyze local rental rates vs. property prices</li>
              <li>Get pre-approved and calculate true cash flow (include 20–30% vacancy/maintenance buffer)</li>
              <li>Start small — many successful house hackers begin with a duplex and scale later</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Active involvement:</strong> Expect tenant issues, maintenance, and local landlord regulations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Market risk:</strong> Rental demand and home prices vary widely by location. Not every property will cash flow positively.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Lifestyle fit:</strong> Living with tenants (even in separate units) requires tolerance and good screening.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Consult lenders, real estate professionals, and run detailed numbers for your situation. Past performance and rental yields are not guarantees.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="The Wealth Engine"
              description="Freed-up monthly surplus goes straight into low-cost index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="House hacking supercharges 'pay yourself first' by reducing your largest expense"
              accentColor="emerald"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Lower housing costs help you attack high-interest debt (~21–25% APR cards) faster"
              onClick={() => onNavigate('debt-elimination')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Having skin in the game as both owner and landlord encourages disciplined cash-flow management"
              onClick={() => onNavigate('behavioral-finance')}
              accentColor="emerald"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Turn Housing Into a Wealth Builder?</h2>
            <p className="text-xl text-amber-50">
              Start by analyzing properties in your market and running the cash-flow numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                See where your housing surplus compounds — the math of long-term growth
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('debt-elimination')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="font-bold text-lg">Fix the Leaks First</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                Eliminate high-interest debt before investing in real estate
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Eliminate Debt <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <Home className="w-8 h-8 group-hover:text-indigo-600 transition-colors" />
                <h3 className="font-bold text-lg">Passive Alternative</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                Prefer no landlord duties? Explore real estate crowdfunding instead
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Compare Options <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-amber-100 text-sm">
              Remember: House hacking is active investing — weigh the work vs. passive alternatives like index funds or crowdfunding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/AIEraCareers.tsx
========================================
import { Bot, TrendingUp, CheckCircle, ArrowRight, Zap, Cpu, User, Brain, Wrench } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface AIEraCareersProps {
  onNavigate: (page: string) => void;
}

export default function AIEraCareers({ onNavigate }: AIEraCareersProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Careers in the AI Era
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Wealth-Building Jobs for the Next 25 Years
          </p>
          <p className="text-base text-slate-600">
            Position yourself to leverage AI as a collaborator and capture the productivity gains that drive higher earnings and surplus.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="relative">
                <User className="w-6 h-6 text-blue-600" />
                <Cpu className="w-3 h-3 text-blue-700 absolute -bottom-0.5 -right-0.5 bg-white rounded-sm border border-blue-200" />
              </div>
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              AI will reshape jobs, not eliminate them. It automates routine tasks while creating far more opportunities and boosting productivity in roles that combine AI literacy with irreplaceable human skills (empathy, judgment, creativity, and physical dexterity). <strong>The wealth-building principle is clear: treat AI as a collaborator so you capture higher pay, equity, and entrepreneurial upside that fuels your Wealth Engine.</strong>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Over the next 25 years, AI-driven productivity gains will create net new jobs and accelerate wage growth. Those who adapt proactively will build surplus faster and compound wealth more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Projected U.S. Job Growth & Wage Premiums (2025–2050 Outlook)</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Sector / Role Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Projected Growth (through 2030–2035)</th>
                  <th className="px-6 py-4 text-left font-semibold">Wage Premium from AI Exposure</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Wealth-Building Advantage</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Healthcare (nurses, technicians, AI-assisted diagnosticians)</td>
                  <td className="px-6 py-4 text-slate-700">+5.5 million new roles</td>
                  <td className="px-6 py-4 text-slate-700">High (specialized pay)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Stable demand + entrepreneurship</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">STEM & AI-Native (engineers, data scientists, MLOps)</td>
                  <td className="px-6 py-4 text-slate-700">+23%+ in core tech roles</td>
                  <td className="px-6 py-4 text-slate-700">56% higher wages</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Equity, startups, \$150K–\$300K+</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Skilled Trades & Infrastructure (electricians, HVAC, data-center techs)</td>
                  <td className="px-6 py-4 text-slate-700">Hundreds of thousands of openings</td>
                  <td className="px-6 py-4 text-slate-700">Strong overtime/certification upside</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Short training → rapid high earnings</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600 italic">
            Data synthesized from WEF, McKinsey, PwC, and BLS 2025–2026 projections; AI-exposed roles see skills change 66% faster and command a 56% wage premium.
          </p>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Takeaway</h3>
            <p className="text-slate-700">
              AI-exposed roles see skills change 66% faster and command a 56% wage premium. The biggest winners combine AI tools with human strengths, turning higher earnings into consistent contributions for long-term compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>Healthcare workers using AI for diagnostics advance faster while keeping the human connection that patients value.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>AI/ML engineers routinely earn \$150K–\$300K+ (salary + equity) and launch side businesses with AI-lowered barriers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <p>Skilled tradespeople maintaining AI-powered factories reach six-figure incomes through certifications and overtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Simple Actionable Vehicles (Examples Only)
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            These practical paths help you position yourself for AI-era wealth building. Research programs, costs, and local demand carefully.
          </p>

          <div className="grid gap-8">
            {/* Hybrid AI + Domain Certification */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Hybrid AI + Domain Certification Programs</h3>
                  <p className="text-slate-700 mb-4">
                    Combine short AI literacy courses with domain-specific training in healthcare, trades, or fintech.
                  </p>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Google AI Essentials + healthcare domain certification (3–6 months).
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    <strong>Practical note:</strong> Many programs lead to immediate wage premiums and faster advancement.
                  </p>
                </div>
              </div>
            </div>

            {/* AI-Augmented Side-Hustle */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Augmented Side-Hustle or Entrepreneurship Launch</h3>
                  <p className="text-slate-700 mb-4">
                    Use AI tools to start or scale a small business in your domain (consulting, content, or niche apps).
                  </p>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> AI-assisted freelancing or no-code app for a niche service.
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    <strong>Practical note:</strong> AI dramatically lowers startup costs — funnel early profits into your Wealth Engine (VTI/SCHB).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Execute */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Execute</h2>
          <p className="text-lg text-slate-700 mb-4">
            Assess your skills → dedicate 5–10 hours/week to upskilling → start one small project or certification → automate surplus from higher earnings into investing.
          </p>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Caveats</h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600">•</span>
              <span>Job markets evolve quickly; projections are not guarantees. Focus on adaptable hybrid skills rather than chasing single "hot" roles.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600">•</span>
              <span>These are general examples only. This is educational direction, not personalized career advice. Consider your location, risk tolerance, and personal circumstances.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Higher earnings and entrepreneurial income become larger, consistent contributions to index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              color="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Stronger paychecks make 'pay yourself first' easier and more powerful"
              onClick={() => onNavigate('cash-flow-mastery')}
              color="emerald"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Faster income growth helps crush high-interest debt quicker"
              onClick={() => onNavigate('debt-elimination')}
              color="red"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Lifelong learning counters inertia and overconfidence biases that keep people stuck in declining roles"
              onClick={() => onNavigate('behavioral-finance')}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* AI Career Tools Callout */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Take Action?
              </h2>
              <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                Use our free AI Era Career Tools to assess your current AI literacy, map your skills, and create a concrete 30–90 day action plan.
              </p>
              <button
                onClick={() => onNavigate('ai-career-tools')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore AI Career Tools</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-600 mt-4">
                Includes: Interactive AI Literacy Assessment • Skills Map Worksheet • Free Learning Resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Trades Callout */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-emerald-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Explore Skilled Trades & Blue-Collar Wealth Building
              </h2>
              <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                Discover AI-resistant, high-earning trade paths with shorter training timelines and real entrepreneurship potential — often delivering surplus faster than traditional college routes.
              </p>
              <button
                onClick={() => onNavigate('skilled-trades')}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore Skilled Trades</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-600 mt-4">
                Includes: Trade Opportunity Finder • BLS Projections • \$100K Income Timelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Future-Proof Your Income?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Position yourself in high-growth sectors and funnel increased earnings into your compounding engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <span>The Wealth Engine</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <span>Cash Flow Mastery</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/AICareerTools.tsx
========================================
import { CheckCircle, ArrowRight, FileText, Target, BookOpen, TrendingUp, ClipboardList, Download } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';
import { useState } from 'react';

interface AICareerToolsProps {
  onNavigate: (page: string) => void;
}

export default function AICareerTools({ onNavigate }: AICareerToolsProps) {
  const [answers, setAnswers] = useState<number[]>(Array(12).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "How comfortable are you using AI tools like ChatGPT, Grok, or Claude for everyday tasks (writing, research, brainstorming)?",
    "Can you write an effective, detailed prompt to get useful and accurate output from an AI model?",
    "How familiar are you with basic AI concepts such as machine learning, generative AI, and training data?",
    "Have you used AI to analyze data, create summaries, or automate repetitive work?",
    "How confident are you spotting potential biases, inaccuracies, or hallucinations in AI-generated content?",
    "Do you understand the difference between using AI as a helpful tool versus letting it make important decisions for you?",
    "Have you experimented with AI tools for image, video, or audio generation?",
    "How quickly can you learn and start using a brand-new AI tool when it is released?",
    "How familiar are you with basic privacy, copyright, and ethical considerations when using AI?",
    "Have you used AI tools to help with career-related tasks (resume writing, job search, interview prep)?",
    "How confident are you combining AI tools with your current professional expertise or domain knowledge?",
    "Are you actively experimenting with AI to create side income or improve your work output?"
  ];

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((sum, val) => sum + (val >= 0 ? val : 0), 0);
  };

  const handleSubmit = () => {
    if (answers.every(a => a >= 0)) {
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('assessment-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const getResultsData = (score: number) => {
    if (score <= 12) {
      return {
        level: "Beginner",
        range: "0–12",
        description: "You're just getting started with AI.",
        recommendations: [
          "Start with Google AI Essentials (free)",
          "Take Coursera \\"AI for Everyone\\"",
          "Goal this week: Use AI for one daily task"
        ],
        color: "blue"
      };
    } else if (score <= 24) {
      return {
        level: "Intermediate",
        range: "13–24",
        description: "You have a solid foundation and are ready to apply AI in real work.",
        recommendations: [
          "Focus on domain-specific projects",
          "Combine AI with your current job skills",
          "Try a small side project using AI tools"
        ],
        color: "emerald"
      };
    } else {
      return {
        level: "Advanced",
        range: "25–36",
        description: "You're well-positioned to lead or create value with AI.",
        recommendations: [
          "Explore AI consulting, building small tools, or teaching others",
          "Look for entrepreneurial opportunities",
          "Mentor others or experiment with advanced prompting/agent workflows"
        ],
        color: "purple"
      };
    }
  };

  const score = calculateScore();
  const results = getResultsData(score);
  const allAnswered = answers.every(a => a >= 0);

  return (
    <div className="w-full">{/* Hero */}
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              AI Era Career Tools
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Turn AI Awareness into Action and Surplus
          </p>
          <p className="text-base text-slate-600">
            Free tools to assess your skills, build a plan, and develop hybrid AI + human capabilities that fuel your Wealth Engine.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="relative">
                <ClipboardList className="w-6 h-6 text-blue-600" />
                <TrendingUp className="w-3 h-3 text-blue-700 absolute -bottom-0.5 -right-0.5 bg-white rounded-sm border border-blue-200" />
              </div>
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              The best way to future-proof your income is to honestly assess where you stand today and build a clear, repeatable plan to develop hybrid AI + human skills. <strong>These free tools turn awareness into consistent action and surplus that fuels your Wealth Engine.</strong>
            </p>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Why This Matters</h3>
            <p className="text-slate-700">
              AI is reshaping jobs faster than ever. Regular self-assessment and small, deliberate experiments help you stay adaptable, increase your value, and direct more surplus into long-term compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Available Tools</h2>

          <div className="space-y-6">
            {/* Tool 1: AI Literacy Assessment */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. AI Literacy Assessment</h3>
                  <p className="text-slate-700 mb-4">
                    A quick 12-question self-check to gauge your current AI comfort level and get personalized next-step recommendations. Takes 5–7 minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#assessment"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Take the Interactive AI Literacy Assessment</span>
                    </a>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download Printable PDF Version</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Current Skills Map Worksheet */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Current Skills Map Worksheet</h3>
                  <p className="text-slate-700 mb-4">
                    A simple template to map your existing skills against high-growth AI-era opportunities and create a concrete 30–90 day action plan.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download the Skills Map Worksheet (PDF)</span>
                  </button>
                  <button
                    onClick={() => onNavigate('ai-skills-worksheet')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors mt-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View Worksheet Online</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tool 3: Recommended Free Learning Resources */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Recommended Free Learning Resources</h3>
                  <p className="text-slate-700 mb-4 font-semibold">
                    Start here before paying for anything:
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Google AI Essentials</strong> – Free, short, practical introduction to using AI daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Coursera: AI for Everyone (by Andrew Ng)</strong> – Excellent overview of how AI works and its impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Microsoft Learn: AI Fundamentals</strong> – Clear, structured modules with hands-on practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>freeCodeCamp AI & Prompt Engineering</strong> – Free courses focused on practical prompting skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Get Started (3 Simple Steps)</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Assess</h3>
              <p className="text-slate-700">
                Take the AI Literacy Assessment
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Map</h3>
              <p className="text-slate-700">
                Complete the Skills Map Worksheet
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Act</h3>
              <p className="text-slate-700">
                Pick one free resource and commit to 5–10 hours this month
              </p>
            </div>
          </div>

          <p className="text-slate-700 text-center">
            Repeat this cycle every 6–12 months. Small, consistent actions compound into higher earnings and stronger surplus for your Wealth Engine.
          </p>
        </div>
      </section>

      {/* AI Literacy Assessment Interactive */}
      <section id="assessment" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Literacy Assessment (Full Interactive Version)</h2>
            <p className="text-lg text-slate-700">
              Answer each question honestly.
            </p>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg inline-block">
              <p className="text-sm text-slate-700 font-semibold">
                <strong>Scoring:</strong> 0 = Not at all / Never | 1 = Somewhat / Occasionally | 2 = Comfortable / Regularly | 3 = Very confident / Frequently
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-slate-200">
                <p className="text-slate-900 font-semibold mb-4">
                  {index + 1}. {question}
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {[0, 1, 2, 3].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(index, value)}
                      className={\`p-3 rounded-lg font-semibold transition-all \${
                        answers[index] === value
                          ? 'bg-blue-600 text-white border-2 border-blue-700'
                          : 'bg-slate-50 text-slate-700 border-2 border-slate-300 hover:bg-slate-100'
                      }\`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={\`px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-2 \${
                allAnswered
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }\`}
            >
              <span>Calculate My Score</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {!allAnswered && (
              <p className="text-sm text-slate-600 mt-3">
                Please answer all 12 questions to see your results
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Assessment Results */}
      {showResults && (
        <section id="assessment-results" className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Your Results</h2>

              <div className="text-center mb-8">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl text-white">
                  <p className="text-lg font-semibold mb-2">Your Total Score</p>
                  <p className="text-6xl font-black">{score}</p>
                  <p className="text-2xl font-semibold mt-2">/ 36</p>
                </div>
              </div>

              <div className={\`p-6 rounded-xl border-2 mb-6 \${
                results.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                results.color === 'emerald' ? 'bg-emerald-50 border-emerald-200' :
                'bg-purple-50 border-purple-200'
              }\`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {results.level} ({results.range})
                </h3>
                <p className="text-lg text-slate-700 mb-4">{results.description}</p>

                <h4 className="text-xl font-bold text-slate-900 mb-3">Recommended Next Steps:</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={\`w-5 h-5 mt-0.5 flex-shrink-0 \${
                        results.color === 'blue' ? 'text-blue-600' :
                        results.color === 'emerald' ? 'text-emerald-600' :
                        'text-purple-600'
                      }\`} />
                      <span className="text-slate-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-300 rounded-lg text-center">
                <p className="text-slate-700 mb-4">
                  <strong>Now that you know your level,</strong> download the Current Skills Map Worksheet to turn this insight into a concrete action plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <Download className="w-5 h-5" />
                    <span>Download the Skills Map Worksheet</span>
                  </button>
                  <button
                    onClick={() => onNavigate('ai-skills-worksheet')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>View Worksheet Online</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Important Notes */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 border border-slate-300 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Notes</h2>
            <p className="text-slate-700">
              These are general educational tools only. They are not personalized career advice. Your best results come from combining AI skills with your existing domain knowledge and human strengths (empathy, judgment, creativity, physical dexterity).
            </p>
          </div>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Higher earnings become larger, consistent contributions to index funds (VTI/SCHB)"
              onClick={() => onNavigate('wealth-engine')}
              color="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Better income makes 'pay yourself first' easier and more powerful"
              onClick={() => onNavigate('cash-flow-mastery')}
              color="emerald"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Regular self-assessment builds adaptability and counters inertia"
              onClick={() => onNavigate('behavioral-finance')}
              color="purple"
            />
            <ConnectionCard
              title="AI Era Careers"
              description="Turns concepts into immediate, practical action"
              onClick={() => onNavigate('ai-era-careers')}
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Next Steps
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with the AI Literacy Assessment today.
          </p>
          <p className="text-lg text-blue-100 mb-8">
            Ready to turn AI awareness into surplus?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Return to AI Era Careers</span>
            </button>
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Back to The Wealth Engine</span>
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="text-blue-100 hover:text-white underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Cash Flow Mastery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/AISkillsMapWorksheet.tsx
========================================
import { Download } from 'lucide-react';
import WealthEngineIcon from './shared/WealthEngineIcon';

export default function AISkillsMapWorksheet() {
  return (
    <div className="w-full bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="max-w-4xl mx-auto px-4 py-8 print:hidden">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Print or Save as PDF</span>
        </button>
      </div>

      {/* Worksheet Content - Optimized for printing */}
      <div className="max-w-4xl mx-auto px-8 py-8 print:p-0">
        {/* Header */}
        <div className="mb-8 border-b-4 border-blue-600 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-black text-slate-900 mb-2">
                AI Era Skills Map Worksheet
              </h1>
              <p className="text-lg text-slate-700 font-semibold">
                Turn your current skills into high-growth AI-era opportunities
              </p>
            </div>
            <div className="ml-4">
              <WealthEngineIcon />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-700 font-semibold">Name:</span>
              <div className="flex-1 border-b-2 border-slate-300 pb-1"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 font-semibold">Date:</span>
              <div className="flex-1 border-b-2 border-slate-300 pb-1"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <p className="text-slate-800 leading-relaxed">
            <strong>Instructions:</strong> Print or fill digitally. Be specific. This worksheet helps you map your existing skills and experience against high-growth AI-era sectors and create a clear 30–90 day action plan.
          </p>
        </div>

        {/* Main Worksheet Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Skills Map</h2>
          <div className="border-2 border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                    Current Skills & Experience
                  </th>
                  <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                    Transferable Human Strengths
                  </th>
                  <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                    AI-Augmented Opportunity
                  </th>
                  <th className="p-3 text-left text-sm font-bold border-r border-emerald-500">
                    Next Action (Next 30–90 Days)
                  </th>
                  <th className="p-3 text-left text-sm font-bold">
                    Potential Impact on Monthly Surplus
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="bg-emerald-50 border-b border-slate-300">
                  <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                    <em>(Example) Registered Nurse, 8 years clinical experience</em>
                  </td>
                  <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                    <em>Patient empathy, clinical judgment, calm under pressure</em>
                  </td>
                  <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                    <em>AI-assisted diagnostics + patient education tools</em>
                  </td>
                  <td className="p-3 text-sm text-slate-700 border-r border-slate-300">
                    <em>Complete Google AI Essentials + healthcare AI course</em>
                  </td>
                  <td className="p-3 text-sm text-slate-700">
                    <em>+\$500–\$1,500 potential</em>
                  </td>
                </tr>

                {/* Blank Rows for User Input */}
                {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <tr key={index} className="border-b border-slate-300 h-20">
                    <td className="p-3 border-r border-slate-300 bg-white"></td>
                    <td className="p-3 border-r border-slate-300 bg-white"></td>
                    <td className="p-3 border-r border-slate-300 bg-white"></td>
                    <td className="p-3 border-r border-slate-300 bg-white"></td>
                    <td className="p-3 bg-white"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High-Growth AI-Era Sectors */}
        <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">High-Growth AI-Era Sectors</h2>
          <ul className="space-y-2 text-slate-800">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span><strong>Healthcare & Wellness</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span><strong>STEM & AI-Native Roles</strong> (engineering, data science, MLOps)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span><strong>Skilled Trades & Infrastructure</strong> (data centers, robotics maintenance, energy)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span><strong>Fintech & Financial Services</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span><strong>Education, Training & Creative Fields</strong></span>
            </li>
          </ul>
        </div>

        {/* Reflection Questions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Reflection Questions</h2>
          <div className="space-y-6">
            <div>
              <p className="text-slate-900 font-semibold mb-3">
                1. Which of my current skills are hardest for AI to replace?
              </p>
              <div className="border-2 border-slate-300 rounded-lg p-4 min-h-24 bg-white"></div>
            </div>

            <div>
              <p className="text-slate-900 font-semibold mb-3">
                2. Which sector above excites me most for the next 10–25 years?
              </p>
              <div className="border-2 border-slate-300 rounded-lg p-4 min-h-24 bg-white"></div>
            </div>

            <div>
              <p className="text-slate-900 font-semibold mb-3">
                3. What is one small experiment I can run this month using AI in my field?
              </p>
              <div className="border-2 border-slate-300 rounded-lg p-4 min-h-24 bg-white"></div>
            </div>

            <div>
              <p className="text-slate-900 font-semibold mb-3">
                4. How much additional monthly surplus could I realistically direct toward investing if I increase my income by 10–20%?
              </p>
              <div className="border-2 border-slate-300 rounded-lg p-4 min-h-24 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Footer / Next Steps */}
        <div className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-300 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Next Steps</h2>
          <ul className="space-y-2 text-slate-800">
            <li className="flex items-start gap-2">
              <span className="font-bold text-emerald-600">•</span>
              <span>Pick one Next Action and schedule it this week.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-emerald-600">•</span>
              <span>Revisit this worksheet every 6 months.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-emerald-600">•</span>
              <span>Use your increased surplus to feed your Wealth Engine (consistent investing in low-cost index funds).</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 border-t border-slate-300">
          <p className="text-xs text-slate-500 text-center">
            This is a general educational worksheet. It is not personalized career advice. Results depend on your effort, market conditions, and individual circumstances.
          </p>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{\`
        @media print {
          body {
            margin: 1in;
          }

          .print\\\\:hidden {
            display: none !important;
          }

          .print\\\\:p-0 {
            padding: 0 !important;
          }

          /* Ensure table doesn't break across pages */
          table {
            page-break-inside: auto;
          }

          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }

          /* Ensure sections don't break awkwardly */
          .mb-8 {
            page-break-inside: avoid;
          }
        }
      \`}</style>
    </div>
  );
}


========================================
FILE: src/app/components/SkilledTrades.tsx
========================================
import { Wrench, CheckCircle, ArrowRight, TrendingUp, AlertCircle, Hammer } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface SkilledTradesProps {
  onNavigate: (page: string) => void;
}

export default function SkilledTrades({ onNavigate }: SkilledTradesProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Skilled Trades & Blue-Collar Wealth Building
            </h1>
          </div>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              AI will automate many entry-level and routine white-collar jobs, but it cannot replace human judgment, physical dexterity, or on-site problem-solving. <strong>Skilled trades offer stable, high-earning paths with strong demand, shorter training timelines, and real entrepreneurship potential</strong> — often delivering surplus faster than traditional college routes.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700 mb-4">
              BLS projections show construction and extraction occupations growing 5.6%, installation/maintenance/repair growing 5.3%, with specific roles like wind turbine technicians (+50%) and solar installers (+42%) among the fastest-growing.
            </p>
            <p className="text-lg text-slate-700">
              Many trades already pay six figures with overtime and certifications, and they are <strong>largely AI-resistant</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Top High-Demand Trades (BLS 2023–2033 Projections)</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Trade</th>
                  <th className="px-6 py-4 text-left font-semibold">Projected Growth</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Openings (avg)</th>
                  <th className="px-6 py-4 text-left font-semibold">Median Pay (2023)</th>
                  <th className="px-6 py-4 text-left font-semibold">Time to Earn \$100K Potential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <TradeRow
                  trade="Electricians"
                  growth="+10.8%"
                  openings="~81,000"
                  pay="~\$65,000"
                  time="4–7 years"
                />
                <TradeRow
                  trade="HVAC Technicians"
                  growth="+8%"
                  openings="~40,100"
                  pay="~\$65,000"
                  time="4–6 years"
                />
                <TradeRow
                  trade="Wind Turbine Technicians"
                  growth="+50%"
                  openings="Fastest-growing"
                  pay="~\$62,000"
                  time="3–5 years"
                />
                <TradeRow
                  trade="Solar Photovoltaic Installers"
                  growth="+42%"
                  openings="Fastest-growing"
                  pay="~\$52,000"
                  time="3–5 years"
                />
                <TradeRow
                  trade="Construction Laborers"
                  growth="+8.2%"
                  openings="High volume"
                  pay="~\$48,000"
                  time="5–8 years with specialization"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-slate-700 text-lg font-semibold">
              <strong className="text-emerald-700">Key Takeaway:</strong> Trades often provide faster paths to six-figure income and ownership than many white-collar routes, especially when AI is accelerating demand for physical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl border-2 border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-4">
                  <strong>Mike Rowe and the mikeroweWORKS Foundation</strong> have long highlighted that millions of high-paying trade jobs go unfilled while student debt rises.
                </p>
                <p className="text-slate-700">
                  Many trade workers earn more than their college-educated peers within 5–10 years, own businesses, and build real wealth through consistent surplus and asset ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Simple Actionable Vehicles
          </h2>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These tools help identify high-earning trade paths. Not personalized career advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Opportunity Finder (Interactive Tool)</h3>
                  <p className="text-slate-700 mb-4">
                    Select a trade and your zip code to see local demand, salary ranges, training programs, and projected earnings.
                  </p>
                  <button
                    onClick={() => onNavigate('trade-opportunity-finder')}
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
                  >
                    <span>Launch the Trade Opportunity Finder</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Earnings vary by location, experience, and specialization.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Trades require physical work and ongoing learning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is general guidance, not personalized career advice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premium Report Upsell */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-emerald-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Comprehensive Trades Opportunity Report
              </h2>
              <p className="text-lg text-slate-700 mb-2">
                All 25+ High-Demand Trades • All 50 States + Major Metros
              </p>
              <p className="text-[28px] font-bold text-emerald-600">
                One-Time Price: \$29
              </p>
              <p className="text-sm text-slate-600">(Instant PDF Download)</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What You Get</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Detailed profiles for 25+ in-demand trades (Electrician, HVAC, Plumbing, Welding, Solar Installer, Wind Turbine Technician, Data Center Tech, Heavy Equipment Operator, and more)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>State-by-state and major metro breakdowns (current openings, projected growth through 2033, salary ranges)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Clear timelines to reach \$100K+ earnings with certifications and overtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Side-by-side comparisons: Trade paths vs. traditional white-collar routes (time to earnings, training cost, student debt, AI risk)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span>Exportable tables and personalized planning worksheets</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Why This Report Is Worth \$29</h3>
              <p className="text-slate-700">
                The free Trade Opportunity Finder gives you quick local insights for one trade. This full report gives you the complete national picture so you can compare opportunities across states, evaluate relocation potential, and choose the trade with the strongest long-term wealth-building potential.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Perfect for:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Recent graduates rethinking the traditional college path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Professionals facing AI-driven displacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Anyone wanting a faster, more reliable route to six-figure income and business ownership</span>
                </li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group">
                <span>Get the Full National Trades Report – \$29</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="text-center text-xs text-slate-600">
              <p><strong>Disclaimer:</strong> This is a general educational report based on the latest BLS and industry data. Actual earnings and opportunities vary by location, experience, certifications, and individual effort. Not personalized financial or career advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Steady trade income creates reliable surplus for compounding"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Faster surplus creation than many white-collar starts"
              onClick={() => onNavigate('cash-flow-mastery')}
            />
            <ConnectionCard
              title="AI Era Careers"
              description="Trades are among the most AI-resistant high-earning paths"
              onClick={() => onNavigate('ai-era-careers')}
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Avoids over-reliance on traditional college paths that may be disrupted"
              onClick={() => onNavigate('behavioral-finance')}
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore High-Earning, AI-Resistant Paths?</h2>
            <p className="text-xl text-emerald-50">
              Start with the Trade Opportunity Finder or get the full national data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ai-era-careers')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">AI Era Careers</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Return to explore all AI-era career paths
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Careers <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                See how trade income powers wealth compounding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Wealth Engine <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('cash-flow-mastery')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-bold text-lg">Cash Flow Mastery</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Maximize your trade income surplus
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Cash Flow <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TradeRow({ trade, growth, openings, pay, time }: any) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4 font-bold text-slate-900">{trade}</td>
      <td className="px-6 py-4 text-emerald-600 font-semibold">{growth}</td>
      <td className="px-6 py-4 text-slate-700">{openings}</td>
      <td className="px-6 py-4 text-slate-700 font-medium">{pay}</td>
      <td className="px-6 py-4 text-blue-600 font-medium">{time}</td>
    </tr>
  );
}


========================================
FILE: src/app/components/TradeOpportunityFinder.tsx
========================================
import { useState } from 'react';
import { Wrench, Search, MapPin, TrendingUp, Download, ArrowRight, CheckCircle, AlertCircle, DollarSign, Clock, Shield } from 'lucide-react';

interface TradeOpportunityFinderProps {
  onNavigate: (page: string) => void;
}

// Sample trade data - in production this would come from a database
const TRADES_DATA = [
  {
    id: 'electrician',
    name: 'Electrician',
    category: 'Electrical',
    description: 'Install, maintain, and repair electrical systems',
    nationalOpenings: 81000,
    projectedGrowth: 10.8,
    medianPay: 65000,
    percentile75Pay: 95000,
    timeToSixFigures: '4–7 years',
    aiResistance: 'High',
    aiRationale: 'Requires physical presence, complex problem-solving, and adherence to safety codes',
    trainingPaths: [
      { name: 'Union Apprenticeships (IBEW)', link: 'https://www.ibew.org' },
      { name: 'Independent Electrical Contractors', link: 'https://www.iecnetwork.org' },
      { name: 'Community College Programs', link: '#' },
      { name: 'Trade Schools', link: '#' }
    ]
  },
  {
    id: 'hvac',
    name: 'HVAC Technician',
    category: 'HVAC/Plumbing',
    description: 'Install and repair heating, ventilation, and air conditioning systems',
    nationalOpenings: 40100,
    projectedGrowth: 8.0,
    medianPay: 57300,
    percentile75Pay: 82900,
    timeToSixFigures: '4–6 years',
    aiResistance: 'High',
    aiRationale: 'Physical installation and repair work with site-specific troubleshooting',
    trainingPaths: [
      { name: 'HVAC Excellence Programs', link: '#' },
      { name: 'North American Technician Excellence (NATE)', link: '#' },
      { name: 'Trade Schools & Vocational Programs', link: '#' },
      { name: 'Manufacturer-Specific Training', link: '#' }
    ]
  },
  {
    id: 'wind-turbine',
    name: 'Wind Turbine Technician',
    category: 'Renewable Energy',
    description: 'Install, inspect, and maintain wind turbines',
    nationalOpenings: 2000,
    projectedGrowth: 50.0,
    medianPay: 62000,
    percentile75Pay: 81000,
    timeToSixFigures: '3–5 years',
    aiResistance: 'High',
    aiRationale: 'Requires physical climbing, on-site diagnostics, and hands-on repairs at remote locations',
    trainingPaths: [
      { name: 'Midwest Renewable Energy Association', link: '#' },
      { name: 'Community College Wind Energy Programs', link: '#' },
      { name: 'Technical Training Centers', link: '#' }
    ]
  },
  {
    id: 'solar-installer',
    name: 'Solar Photovoltaic Installer',
    category: 'Renewable Energy',
    description: 'Assemble, install, and maintain solar panel systems',
    nationalOpenings: 3700,
    projectedGrowth: 42.0,
    medianPay: 52000,
    percentile75Pay: 68000,
    timeToSixFigures: '3–5 years',
    aiResistance: 'High',
    aiRationale: 'Physical rooftop installation and custom system design for each property',
    trainingPaths: [
      { name: 'Solar Energy International (SEI)', link: '#' },
      { name: 'North American Board of Certified Energy Practitioners (NABCEP)', link: '#' },
      { name: 'Community College Solar Programs', link: '#' }
    ]
  },
  {
    id: 'plumber',
    name: 'Plumber',
    category: 'HVAC/Plumbing',
    description: 'Install and repair piping systems and fixtures',
    nationalOpenings: 49000,
    projectedGrowth: 6.0,
    medianPay: 61000,
    percentile75Pay: 92000,
    timeToSixFigures: '5–7 years',
    aiResistance: 'High',
    aiRationale: 'Physical work in varied environments with unique site challenges',
    trainingPaths: [
      { name: 'United Association (UA) Plumbers & Pipefitters', link: '#' },
      { name: 'Plumbing-Heating-Cooling Contractors Association', link: '#' },
      { name: 'Trade Schools & Apprenticeships', link: '#' }
    ]
  },
  {
    id: 'welder',
    name: 'Welder',
    category: 'Construction',
    description: 'Join metal parts using specialized equipment',
    nationalOpenings: 47600,
    projectedGrowth: 2.0,
    medianPay: 48000,
    percentile75Pay: 65000,
    timeToSixFigures: '5–8 years',
    aiResistance: 'Medium',
    aiRationale: 'Some automation exists but custom work still requires human skill',
    trainingPaths: [
      { name: 'American Welding Society (AWS)', link: '#' },
      { name: 'Community College Welding Programs', link: '#' },
      { name: 'Union Apprenticeships', link: '#' }
    ]
  }
];

export default function TradeOpportunityFinder({ onNavigate }: TradeOpportunityFinderProps) {
  const [selectedTrade, setSelectedTrade] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (selectedTrade && zipCode.length === 5) {
      setShowResults(true);
    }
  };

  const selectedTradeData = TRADES_DATA.find(t => t.id === selectedTrade);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Trade Opportunity Finder
            </h1>
          </div>
          <p className="text-xl text-slate-700">
            Discover localized trade opportunities with salary data, growth projections, and training paths.
          </p>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-xl border-2 border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Opportunities in Your Area</h2>

            <div className="space-y-6">
              {/* Trade Selection */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  <Wrench className="inline w-4 h-4 mr-2" />
                  Select a Trade
                </label>
                <select
                  value={selectedTrade}
                  onChange={(e) => setSelectedTrade(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none text-slate-900 bg-white"
                >
                  <option value="">Choose a trade...</option>
                  <optgroup label="Electrical">
                    <option value="electrician">Electrician</option>
                  </optgroup>
                  <optgroup label="HVAC/Plumbing">
                    <option value="hvac">HVAC Technician</option>
                    <option value="plumber">Plumber</option>
                  </optgroup>
                  <optgroup label="Renewable Energy">
                    <option value="wind-turbine">Wind Turbine Technician</option>
                    <option value="solar-installer">Solar Photovoltaic Installer</option>
                  </optgroup>
                  <optgroup label="Construction">
                    <option value="welder">Welder</option>
                  </optgroup>
                </select>
              </div>

              {/* Zip Code */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Your Zip Code
                </label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\\D/g, '').slice(0, 5))}
                  placeholder="Enter 5-digit zip code"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-emerald-500 focus:outline-none text-slate-900"
                  maxLength={5}
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={!selectedTrade || zipCode.length !== 5}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 disabled:from-slate-300 disabled:to-slate-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Find Opportunities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && selectedTradeData && (
        <>
          {/* Overview Card */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-emerald-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedTradeData.name}</h2>
                    <p className="text-lg text-slate-600">{selectedTradeData.description}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Results for Zip Code: <span className="font-bold text-emerald-600">{zipCode}</span>
                    </p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-700">Projected Growth</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">+{selectedTradeData.projectedGrowth}%</p>
                    <p className="text-xs text-slate-600">Through 2033</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-slate-700">Median Pay</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">\${(selectedTradeData.medianPay / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-slate-600">National average</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-slate-700">Time to \$100K</span>
                    </div>
                    <p className="text-lg font-bold text-purple-600">{selectedTradeData.timeToSixFigures}</p>
                    <p className="text-xs text-slate-600">With certs + OT</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-semibold text-slate-700">AI Resistance</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-600">{selectedTradeData.aiResistance}</p>
                    <p className="text-xs text-slate-600">Automation risk</p>
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-3">Demand & Earnings</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex justify-between">
                        <span>Annual Job Openings (National):</span>
                        <span className="font-bold">{selectedTradeData.nationalOpenings.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Median Annual Pay:</span>
                        <span className="font-bold">\${selectedTradeData.medianPay.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Top 25% Earn:</span>
                        <span className="font-bold text-emerald-600">\${selectedTradeData.percentile75Pay.toLocaleString()}+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Projected Growth (2023–2033):</span>
                        <span className="font-bold text-emerald-600">+{selectedTradeData.projectedGrowth}%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-3">AI Resistance</h3>
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-emerald-600 mb-1">{selectedTradeData.aiResistance} Resistance</p>
                        <p className="text-sm text-slate-700">{selectedTradeData.aiRationale}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Training Paths */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Training & Certification Paths</h2>
              <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
                <p className="text-slate-700 mb-4">
                  <strong>Getting started:</strong> Most trades require 2–4 years of apprenticeship or vocational training. Here are recommended programs:
                </p>
                <ul className="space-y-3">
                  {selectedTradeData.trainingPaths.map((path, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong>{path.name}</strong>
                        {path.link !== '#' && (
                          <a href={path.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-emerald-600 hover:text-emerald-700 underline text-sm">
                            Learn more →
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison with White-Collar Path */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Factor</th>
                      <th className="px-6 py-4 text-left font-semibold">{selectedTradeData.name}</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical 4-Year College Path</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Training Time</td>
                      <td className="px-6 py-4 text-slate-700">2–4 years (apprenticeship)</td>
                      <td className="px-6 py-4 text-slate-700">4 years (bachelor's degree)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-900">Training Cost</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">\$5K–\$15K (often earn while learning)</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">\$40K–\$200K+ (student debt)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Time to \$100K Income</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{selectedTradeData.timeToSixFigures}</td>
                      <td className="px-6 py-4 text-slate-700">7–12 years (varies widely)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-900">AI Risk</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{selectedTradeData.aiResistance}</td>
                      <td className="px-6 py-4 text-amber-600 font-semibold">Medium to High (varies by field)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-900">Business Ownership Potential</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">High (start contracting business)</td>
                      <td className="px-6 py-4 text-slate-700">Medium (depends on field)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Export & Premium CTA */}
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Export PDF */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border-2 border-blue-200">
                  <Download className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Export This Report</h3>
                  <p className="text-slate-700 mb-4">
                    Download a clean PDF of your {selectedTradeData.name} opportunity analysis for Zip Code {zipCode}.
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    <span>Download PDF Report</span>
                  </button>
                </div>

                {/* Premium Report Upsell */}
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl border-2 border-emerald-200">
                  <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Want the Complete Picture?</h3>
                  <p className="text-slate-700 mb-4">
                    Get detailed profiles for <strong>25+ trades across all 50 states</strong> with side-by-side comparisons, relocation analysis, and planning worksheets.
                  </p>
                  <p className="text-2xl font-bold text-emerald-600 mb-4">One-Time: \$29</p>
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2">
                    <span>Get Full National Report</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Try Another Trade */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <button
                onClick={() => {
                  setShowResults(false);
                  setSelectedTrade('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Try Another Trade</span>
              </button>
            </div>
          </section>
        </>
      )}

      {/* Data Source Note */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Data Sources:</strong> Bureau of Labor Statistics (BLS) 2023–2033 Employment Projections. National averages shown; local conditions vary. Last updated: January 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


========================================
FILE: src/app/components/LegalPrivacy.tsx
========================================
import { useEffect } from 'react';

interface LegalPrivacyProps {
  onNavigate: (page: string) => void;
}

export default function LegalPrivacy({ onNavigate }: LegalPrivacyProps) {
  useEffect(() => {
    // Handle anchor navigation after component mounts
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Legal & Privacy
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Last updated: April 2026
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Please read the following sections carefully. They govern your use of this website and any purchase you make.
          </p>

          {/* Jump Links */}
          <div className="flex flex-wrap gap-4 text-lg">
            <a
              href="#disclaimers"
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('disclaimers')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Disclaimers
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="#privacy-policy"
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('privacy-policy')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Disclaimers Section */}
        <section id="disclaimers" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Disclaimers
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              This website and all its content, including the Moneyscan Blueprint, tools, worksheets, and guidance, are provided for general educational and informational purposes only.
            </p>
            <p>
              Nothing on this site constitutes personalized financial, investment, tax, legal, or professional advice. The information presented — including compound interest illustrations, career guidance, trade data, and calculators — is not tailored to any individual's specific financial situation, risk tolerance, or goals.
            </p>
            <p>
              Past performance is not indicative of future results. Actual investment returns, career outcomes, and earnings will vary significantly based on your personal circumstances, market conditions, location, experience, and effort.
            </p>
            <p>
              You should consult with a qualified financial advisor, tax professional, attorney, or other licensed expert before making any financial, investment, or career decisions.
            </p>
            <p>
              We make no representations or warranties regarding the accuracy, completeness, or suitability of the information provided. Your use of this site and any materials purchased is entirely at your own risk.
            </p>
            <p>
              By accessing or purchasing from this site, you agree that MoneyScan (and its owners/operators) shall not be liable for any losses, damages, or claims arising from your use of the content or tools.
            </p>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Last updated: April 2026
          </p>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              We respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit MoneyScan or purchase the Blueprint.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Information We Collect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>When you purchase the Blueprint:</strong> name, email address, and payment information (processed securely by our payment provider).
                </li>
                <li>
                  <strong>Usage data</strong> (pages visited, tools interacted with) to improve the site and user experience.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To deliver your purchase and provide lifetime updates.</li>
                <li>To send occasional important updates or announcements (you can unsubscribe at any time).</li>
                <li>To analyze site usage and improve our content and tools.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                We Do Not
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell your personal data to third parties.</li>
                <li>Share your information except as necessary to process payments (e.g., with Stripe) or host the website.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Your Rights
              </h3>
              <p>
                You may request access to, correction of, or deletion of your personal data by contacting us. We will respond promptly.
              </p>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-lg text-slate-600">
            If you have any questions about these Disclaimers or Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}


========================================
FILE: src/app/components/CompoundCalculator.tsx
========================================
import { useState } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function CompoundCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState(300);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(10);
  const [showInflationAdjusted, setShowInflationAdjusted] = useState(false);

  const calculateCompound = () => {
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;

    // Future value of series formula
    const futureValue = monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;

    // Inflation adjusted (assume 3% inflation)
    const realRate = ((1 + returnRate/100) / (1 + 0.03)) - 1;
    const realMonthlyRate = realRate / 12;
    const inflationAdjusted = monthlyAmount * (Math.pow(1 + realMonthlyRate, months) - 1) / realMonthlyRate;

    return {
      nominal: Math.round(futureValue),
      real: Math.round(inflationAdjusted),
      contributed: monthlyAmount * months
    };
  };

  const results = calculateCompound();

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-slate-900">Compound Interest Calculator</h3>
        </div>
        <p className="text-sm text-slate-600">
          See the power of consistent investing over time
        </p>
      </div>

      <div className="space-y-6">
        {/* Monthly Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Monthly Investment: \${monthlyAmount.toLocaleString()}
          </label>
          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            value={monthlyAmount}
            onChange={(e) => setMonthlyAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>\$100</span>
            <span>\$2,000</span>
          </div>
        </div>

        {/* Years */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Time Period: {years} years
          </label>
          <input
            type="range"
            min="5"
            max="40"
            step="5"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>5 years</span>
            <span>40 years</span>
          </div>
        </div>

        {/* Return Rate */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Expected Annual Return: {returnRate}%
          </label>
          <input
            type="range"
            min="4"
            max="12"
            step="1"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>4%</span>
            <span>12%</span>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowInflationAdjusted(!showInflationAdjusted)}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <div className={\`w-11 h-6 rounded-full transition-colors \${showInflationAdjusted ? 'bg-emerald-600' : 'bg-slate-300'} relative\`}>
              <div className={\`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform \${showInflationAdjusted ? 'transform translate-x-5' : ''}\`}></div>
            </div>
            <span className="font-medium">Show inflation-adjusted (~3%)</span>
          </button>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border-2 border-emerald-200">
          <div className="text-center mb-4">
            <div className="text-sm font-medium text-slate-600 mb-1">Future Value</div>
            <div className="text-4xl font-bold text-emerald-600">
              \${(showInflationAdjusted ? results.real : results.nominal).toLocaleString()}
            </div>
            {showInflationAdjusted && (
              <div className="text-xs text-slate-500 mt-1">
                (in today's dollars)
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-emerald-200">
            <div>
              <div className="text-xs text-slate-600 mb-1">You Contribute</div>
              <div className="text-lg font-bold text-slate-900">
                \${results.contributed.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-600 mb-1">Growth from Compounding</div>
              <div className="text-lg font-bold text-blue-600">
                \${((showInflationAdjusted ? results.real : results.nominal) - results.contributed).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center">
          Historical S&P 500 average: ~10% nominal / ~7% real (after inflation)
        </div>
      </div>
    </div>
  );
}


========================================
FILE: src/styles/theme.css
========================================
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }

  /**
  * Default typography styles for HTML elements (h1-h4, p, label, button, input).
  * These are in @layer base, so Tailwind utility classes (like text-sm, text-lg) automatically override them.
  */

  html {
    font-size: var(--font-size);
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h4 {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  label {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  button {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  input {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}


========================================
FILE: src/styles/fonts.css
========================================


========================================
END OF COMPLETE SOURCE CODE
========================================`;
    const blob = new Blob([completeCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'moneyscan-complete-code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('✅ Complete code downloaded! This file contains:\n\n- package.json\n- App.tsx\n- All 18 component files\n- All style files\n\nTotal: ' + Math.round(completeCode.length / 1024) + 'KB\n\nCheck your Downloads folder for moneyscan-complete-code.txt');
  };

  return (
    <button
      onClick={downloadAllCode}
      className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all z-50 font-semibold hover:scale-105"
      title="Download complete source code with all components"
    >
      <Download className="w-5 h-5" />
      <span>Download Complete Code</span>
    </button>
  );
}
