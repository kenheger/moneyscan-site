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
import AIToolFluency from './components/AIToolFluency';
import AISkillsMapWorksheet from './components/AISkillsMapWorksheet';
import ToolsHub from './components/ToolsHub';
import Moneyscan from './components/Moneyscan';
import SkilledTrades from './components/SkilledTrades';
import TradeOpportunityFinder from './components/TradeOpportunityFinder';
import RealEstatePaths from './components/RealEstatePaths';
import FirstTimeHomeBuyer from './components/FirstTimeHomeBuyer';
import LegalPrivacy from './components/LegalPrivacy';
import EntrepreneurshipPage from './components/EntrepreneurshipPage';
import WealthGoalCalculator from './components/WealthGoalCalculator';
import PromptsVault from './components/PromptsVault';
import CompoundInterest from './components/CompoundInterest';
import CompoundInterestTool from './components/CompoundInterestTool';
import DebtEliminationPage from './components/DebtEliminationPage';
import BudgetingPage from './components/BudgetingPage';
import TaxStrategies from './components/TaxStrategies';
import TaxAdvantagesChildren from './components/TaxAdvantagesChildren';
import BuildYourOwnHome from './components/BuildYourOwnHome';
import Adulting101 from './components/Adulting101';
import JobHeatmap from './components/JobHeatmap';
import AIToolsArsenal from './components/AIToolsArsenal';
import WealthBlindSpots from './components/WealthBlindSpots';
import AILiteracyAssessment from './components/AILiteracyAssessment';
import EssentialSkills from './components/EssentialSkills';
import HousingMap from './components/HousingMap';
import MidCareerAI from './components/MidCareerAI';
import EquitiesInvesting from './components/EquitiesInvesting';

type Page = 'moneyscan' | 'home' | 'wealth-engine' | 'behavioral-finance' | 'debt-elimination' | 'real-estate-crowdfunding' | 'house-hacking' | 'real-estate-paths' | 'first-time-home-buyer' | 'cash-flow-mastery' | 'ai-era-careers' | 'ai-career-tools' | 'ai-skills-worksheet' | 'tools-hub' | 'skilled-trades' | 'trade-opportunity-finder' | 'legal-privacy' | 'wealth-goal' | 'prompts-vault' | 'compound-interest' | 'compound-interest-tool' | 'debt-elimination-page' | 'budgeting-page' | 'entrepreneurship-page' | 'tax-strategies' | 'tax-advantages-children' | 'build-your-own-home' | 'adulting-101' | 'job-heatmap' | 'ai-tools-arsenal' | 'wealth-blind-spots' | 'ai-literacy-assessment' | 'essential-skills' | 'housing-map' | 'mid-career-ai' | 'equities-investing' | 'ai-tool-fluency';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('moneyscan');
  const [hasLeftLanding, setHasLeftLanding] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [pageHistory, setPageHistory] = useState<Page[]>(['moneyscan']);

  // Check for payment success return from Stripe
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      // Unlock access and clean URL
      localStorage.setItem('moneyscan_unlocked', 'true');
      window.history.replaceState({}, '', '/');
      setCurrentPage('home');
    }
  }, []);

  const navigateTo = useCallback((page: Page) => {
    // Paywall check - only allow free pages or if user has paid
    const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
    const freePages: Page[] = ['moneyscan', 'legal-privacy', 'prompts-vault', 'wealth-goal', 'compound-interest', 'compound-interest-tool', 'home', 'wealth-engine', 'real-estate-paths', 'debt-elimination-page', 'budgeting-page', 'ai-era-careers', 'ai-career-tools', 'ai-skills-worksheet', 'skilled-trades', 'cash-flow-mastery', 'house-hacking', 'entrepreneurship-page', 'tax-strategies', 'tax-advantages-children', 'build-your-own-home', 'first-time-home-buyer', 'housing-map', 'mid-career-ai', 'equities-investing', 'ai-tool-fluency'];
    
    if (!hasAccess && !freePages.includes(page)) {
      // Redirect to paywall
      setCurrentPage('moneyscan');
      window.scrollTo(0, 0);
      return;
    }
    
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
    const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
    const freePages: Page[] = ['moneyscan', 'legal-privacy', 'prompts-vault', 'wealth-goal', 'compound-interest', 'compound-interest-tool', 'home', 'wealth-engine', 'real-estate-paths', 'debt-elimination-page', 'budgeting-page', 'ai-era-careers', 'ai-career-tools', 'ai-skills-worksheet', 'skilled-trades', 'cash-flow-mastery', 'house-hacking', 'entrepreneurship-page', 'tax-strategies', 'tax-advantages-children', 'build-your-own-home', 'adulting-101', 'job-heatmap', 'ai-tools-arsenal', 'wealth-blind-spots', 'ai-literacy-assessment', 'essential-skills', 'first-time-home-buyer', 'housing-map', 'mid-career-ai', 'equities-investing', 'ai-tool-fluency'];
    
    // Check for hash in URL
    const hash = window.location.hash.slice(1) as Page;
    if (hash && hash !== currentPage) {
      // If trying to access paid page without access, go to paywall
      if (!hasAccess && !freePages.includes(hash)) {
        setCurrentPage('moneyscan');
        window.history.replaceState({}, '', '/');
      } else {
        setCurrentPage(hash);
        setPageHistory(['moneyscan', hash]);
        setHistoryIndex(1);
      }
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
        {currentPage === 'ai-tool-fluency' && <AIToolFluency onNavigate={navigateTo} />}
        {currentPage === 'ai-skills-worksheet' && <AISkillsMapWorksheet onNavigate={navigateTo} />}
        {currentPage === 'tools-hub' && <ToolsHub onNavigate={navigateTo} />}
        {currentPage === 'moneyscan' && <Moneyscan onNavigate={navigateTo} hasLeftLanding={hasLeftLanding} stripeCheckoutUrl="https://buy.stripe.com/cNidRb0ONcy6caR1kSfMA06" />}
        {currentPage === 'skilled-trades' && <SkilledTrades onNavigate={navigateTo} stripeCheckoutUrl="https://buy.stripe.com/9B6fZj9lj55EcaRd3AfMA05" />}
        {currentPage === 'trade-opportunity-finder' && <TradeOpportunityFinder onNavigate={navigateTo} stripeCheckoutUrl="https://buy.stripe.com/9B6fZj9lj55EcaRd3AfMA05" />}
        {currentPage === 'wealth-goal' && <WealthGoalCalculator onNavigate={navigateTo} />}
        {currentPage === 'prompts-vault' && <PromptsVault onNavigate={navigateTo} />}
        {currentPage === 'compound-interest' && <CompoundInterest onNavigate={navigateTo} />}
        {currentPage === 'compound-interest-tool' && <CompoundInterestTool onNavigate={navigateTo} />}
        {currentPage === 'debt-elimination-page' && <DebtEliminationPage onNavigate={navigateTo} />}
        {currentPage === 'budgeting-page' && <BudgetingPage onNavigate={navigateTo} />}
        {currentPage === 'legal-privacy' && <LegalPrivacy onNavigate={navigateTo} />}
        {currentPage === 'entrepreneurship-page' && <EntrepreneurshipPage onNavigate={navigateTo} />}
        {currentPage === 'tax-strategies' && <TaxStrategies onNavigate={navigateTo} />}
        {currentPage === 'tax-advantages-children' && <TaxAdvantagesChildren onNavigate={navigateTo} />}
        {currentPage === 'build-your-own-home' && <BuildYourOwnHome onNavigate={navigateTo} />}
        {currentPage === 'adulting-101' && <Adulting101 onNavigate={navigateTo} />}
        {currentPage === 'job-heatmap' && <JobHeatmap onNavigate={navigateTo} />}
        {currentPage === 'ai-tools-arsenal' && <AIToolsArsenal onNavigate={navigateTo} />}
        {currentPage === 'wealth-blind-spots' && <WealthBlindSpots onNavigate={navigateTo} />}
        {currentPage === 'ai-literacy-assessment' && <AILiteracyAssessment onNavigate={navigateTo} />}
        {currentPage === 'essential-skills' && <EssentialSkills onNavigate={navigateTo} />}
        {currentPage === 'housing-map' && <HousingMap onNavigate={navigateTo} />}
        {currentPage === 'mid-career-ai' && <MidCareerAI onNavigate={navigateTo} />}
        {currentPage === 'equities-investing'  && <EquitiesInvesting onNavigate={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">Moneyscan</span>
              </div>
              <p className="text-sm text-slate-400">
                A first-principles guide to creating wealth in the AI era. Covering investing, cash flow, debt elimination, and the tools reshaping financial opportunity.
              </p>
            </div>

            {/* Column 2: Early Career */}
            <div>
              <h3 className="font-semibold text-white mb-3">Early Career</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('ai-skills-worksheet')} className="hover:text-emerald-400 transition-colors">
                    Skills
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('job-heatmap')} className="hover:text-emerald-400 transition-colors">
                    Jobs
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('housing-map')} className="hover:text-emerald-400 transition-colors">
                    Housing
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('skilled-trades')} className="hover:text-emerald-400 transition-colors">
                    Trades
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Mid Career */}
            <div>
              <h3 className="font-semibold text-white mb-3">Mid Career</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('mid-career-ai')} className="hover:text-emerald-400 transition-colors">
                    Defense
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('equities-investing')} className="hover:text-emerald-400 transition-colors">
                    Investing
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('real-estate-paths')} className="hover:text-emerald-400 transition-colors">
                    Housing
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('tax-strategies')} className="hover:text-emerald-400 transition-colors">
                    Taxes
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: AI Tools */}
            <div>
              <h3 className="font-semibold text-white mb-3">AI Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('ai-literacy-assessment')} className="hover:text-emerald-400 transition-colors">
                    Scoring
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('ai-skills-worksheet')} className="hover:text-emerald-400 transition-colors">
                    Essentials
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('ai-tools-arsenal')} className="hover:text-emerald-400 transition-colors">
                    Arsenal
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('prompts-vault')} className="hover:text-emerald-400 transition-colors">
                    Prompts
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal + Contact */}
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigateTo('legal-privacy')} className="hover:text-emerald-400 transition-colors">Disclaimers</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('legal-privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
                </li>
                <li>
                  <a href="mailto:info@moneyscan.com" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400">
            <p>
              © 2026 Moneyscan LLC. Educational only — not personalized advice.
              Past performance is no guarantee of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}