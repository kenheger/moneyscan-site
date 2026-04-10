import { useState, useEffect, useCallback } from 'react';
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
import RealEstatePaths from './components/RealEstatePaths';
import FirstTimeHomeBuyer from './components/FirstTimeHomeBuyer';
import LegalPrivacy from './components/LegalPrivacy';

type Page = 'home' | 'old-home' | 'wealth-engine' | 'behavioral-finance' | 'debt-elimination' | 'real-estate-crowdfunding' | 'house-hacking' | 'real-estate-paths' | 'first-time-home-buyer' | 'cash-flow-mastery' | 'ai-era-careers' | 'ai-career-tools' | 'ai-skills-worksheet' | 'tools-hub' | 'moneyscan' | 'skilled-trades' | 'trade-opportunity-finder' | 'legal-privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('moneyscan');
  const [hasLeftLanding, setHasLeftLanding] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [pageHistory, setPageHistory] = useState<Page[]>(['moneyscan']);

  const navigateTo = useCallback((page: Page) => {
    // Mark that user has left the landing page
    if (currentPage === 'moneyscan' && page !== 'moneyscan') {
      setHasLeftLanding(true);
    }
    setCurrentPage(page);
    setPageHistory(prev => [...prev, page]);
    setHistoryIndex(prev => prev + 1);
    // Push to browser history
    window.history.pushState({ page, index: historyIndex + 1 }, '', `#${page}`);
    window.scrollTo(0, 0);
  }, [currentPage, historyIndex]);

  // Handle browser back button
  useEffect(() => {
    const handlePopstate = (e: PopStateEvent) => {
      if (e.state && typeof e.state.index === 'number') {
        const idx = e.state.index;
        // Go back in history - restore the page at that index
        if (idx >= 0 && idx < pageHistory.length) {
          setCurrentPage(pageHistory[idx]);
          setHistoryIndex(idx);
        } else if (pageHistory.length > 1) {
          // Default to previous page
          setCurrentPage(pageHistory[pageHistory.length - 2]);
          setHistoryIndex(pageHistory.length - 2);
        }
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, [pageHistory]);

  // Initialize with current page
  useEffect(() => {
    // Check for hash in URL
    const hash = window.location.hash.slice(1) as Page;
    if (hash && hash !== currentPage) {
      setCurrentPage(hash);
      setPageHistory(['moneyscan', hash]);
      setHistoryIndex(1);
    }
  }, []);

  // Show minimal header only on Moneyscan page (handled within Moneyscan component)
  const showHeader = currentPage !== 'moneyscan';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header - Show on all pages except Moneyscan */}
      {showHeader && <Header onNavigate={navigateTo} currentPage={currentPage} hasLeftLanding={hasLeftLanding} />}

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
        {currentPage === 'real-estate-paths' && <RealEstatePaths onNavigate={navigateTo} hasLeftLanding={hasLeftLanding} />}
        {currentPage === 'first-time-home-buyer' && <FirstTimeHomeBuyer onNavigate={navigateTo} hasLeftLanding={hasLeftLanding} />}
        {currentPage === 'ai-era-careers' && <AIEraCareers onNavigate={navigateTo} />}
        {currentPage === 'ai-career-tools' && <AICareerTools onNavigate={navigateTo} />}
        {currentPage === 'ai-skills-worksheet' && <AISkillsMapWorksheet onNavigate={navigateTo} />}
        {currentPage === 'tools-hub' && <ToolsHub onNavigate={navigateTo} />}
        {currentPage === 'moneyscan' && <Moneyscan onNavigate={navigateTo} hasLeftLanding={hasLeftLanding} />}
        {currentPage === 'skilled-trades' && <SkilledTrades onNavigate={navigateTo} stripeCheckoutUrl="https://buy.stripe.com/test_14AaEY4k83xK3ek91OeZ200" />}
        {currentPage === 'trade-opportunity-finder' && <TradeOpportunityFinder onNavigate={navigateTo} stripeCheckoutUrl="https://buy.stripe.com/test_14AaEY4k83xK3ek91OeZ200" />}
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
                    $49 Blueprint
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
                  <button onClick={() => navigateTo('real-estate-paths')} className="hover:text-emerald-400 transition-colors">
                    Real Estate Paths
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

            <div>
              <h3 className="font-semibold text-white mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:info@moneyscan.com" className="hover:text-emerald-400 transition-colors">
                    info@moneyscan.com
                  </a>
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