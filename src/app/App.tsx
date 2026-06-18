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
import GigEconomyPage from './components/GigEconomy';
import AICareerTools from './components/AICareerTools';
import AIToolFluency from './components/AIToolFluency';
import AutomationWorkflows from './components/AutomationWorkflows';
import AILearningTools from './components/AILearningTools';
import PromptEngineering from './components/PromptEngineering';
import AISkillsMapWorksheet from './components/AISkillsMapWorksheet';
import ToolsHub from './components/ToolsHub';
import Moneyscan from './components/Moneyscan';
import SkilledTrades from './components/SkilledTrades';
import TradeOpportunityFinder from './components/TradeOpportunityFinder';
import RealEstatePaths from './components/RealEstatePaths';
import RealEstateTraditional from './components/RealEstateTraditional';
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
import EssentialSkills from './components/EssentialSkills';
import HousingMap from './components/HousingMap';
import MidCareerAI from './components/MidCareerAI';
import EquitiesInvesting from './components/EquitiesInvesting';
import RealEstateDynamics from './components/RealEstateDynamics';
import RealEstateCornerstone from './components/RealEstateCornerstone';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';


type Page = 'moneyscan' | 'home' | 'wealth-engine' | 'behavioral-finance' | 'debt-elimination' | 'real-estate-crowdfunding' | 'house-hacking' | 'real-estate-paths' | 'real-estate-traditional' | 'real-estate-cornerstone' | 'first-time-home-buyer' | 'cash-flow-mastery' | 'ai-era-careers' | 'ai-career-tools' | 'ai-skills-worksheet' | 'tools-hub' | 'skilled-trades' | 'trade-opportunity-finder' | 'legal-privacy' | 'wealth-goal' | 'prompts-vault' | 'compound-interest' | 'compound-interest-tool' | 'debt-elimination-page' | 'budgeting-page' | 'entrepreneurship-page' | 'tax-strategies' | 'tax-advantages-children' | 'build-your-own-home' | 'building-capital' | 'job-heatmap' | 'ai-tools-arsenal' | 'wealth-blind-spots' | 'essential-skills' | 'housing-map' | 'mid-career-ai' | 'equities-investing' | 'ai-tool-fluency' | 'automation-workflows' | 'ai-learning-tools' | 'prompt-engineering' | 'gig-economy' | 'landing-page' | 'thank-you' ;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing-page');
  const [hasLeftLanding, setHasLeftLanding] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [pageHistory, setPageHistory] = useState<Page[]>(['moneyscan']);
  const [initialized, setInitialized] = useState(false);

  // Check for payment success return from Stripe
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      // Unlock access and clean URL
      localStorage.setItem('moneyscan_unlocked', 'true');
      window.history.replaceState({}, '', '/#thank-you');
      setCurrentPage('thank-you');
    }
    
    // Special preview access for developer - use ?preview=1 to unlock
    if (params.get('preview') === '1') {
      localStorage.setItem('moneyscan_unlocked', 'true');
      window.history.replaceState({}, '', '/#home');
      setCurrentPage('home');
    }
    
    // Check if already paid on load - redirect to home if so
    const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
    if (hasAccess && window.location.hash === '#landing-page') {
      setCurrentPage('home');
    }
  }, []);

  // NEW BUILD
const navigateTo = useCallback((page: Page) => {
    // Paywall check - all pages free by default, access check only needed for products
    const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
    const freePages: Page[] = []; // All pages free, access handled separately
    
    if (!hasAccess && freePages.length > 0 && !freePages.includes(page)) {
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

  // Handle URL hash changes - only after initialization
  useEffect(() => {
    if (!initialized) return;
    
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Page;
      if (hash && hash !== currentPage) {
        const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
        const freePages: string[] = []; // All pages free by default
        if (hasAccess || freePages.length === 0) {
          setCurrentPage(hash);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage, initialized]);

  // Initialize with current page
  useEffect(() => {
    const hasAccess = localStorage.getItem('moneyscan_unlocked') === 'true';
    const freePages = ['moneyscan', 'legal-privacy', 'prompts-vault', 'wealth-goal', 'compound-interest', 'compound-interest-tool', 'home', 'wealth-engine', 'real-estate-paths', 'debt-elimination-page', 'budgeting-page', 'ai-era-careers', 'ai-career-tools', 'ai-skills-worksheet', 'cash-flow-mastery', 'house-hacking', 'entrepreneurship-page', 'tax-strategies', 'tax-advantages-children', 'build-your-own-home', 'first-time-home-buyer', 'housing-map', 'mid-career-ai', 'equities-investing', 'ai-tool-fluency', 'automation-workflows', 'ai-learning-tools', 'prompt-engineering', 'gig-economy', 'real-estate-dynamics', 'real-estate-cornerstone', 'real-estate-traditional', 'landing-page', 'tools-hub', 'skilled-trades', 'trade-opportunity-finder', 'essential-skills', 'job-heatmap', 'ai-tools-arsenal', 'thank-you'];
    
    // Check for hash in URL - only accept known hashes, otherwise default to landing-page
    const hash = window.location.hash.slice(1) as Page;
    const knownHashes = ['landing-page', 'home', 'moneyscan', 'thank-you', 'legal-privacy', 'prompts-vault', 'wealth-goal', 'compound-interest', 'compound-interest-tool', 'wealth-engine', 'real-estate-paths', 'debt-elimination-page', 'budgeting-page', 'ai-era-careers', 'ai-career-tools', 'ai-skills-worksheet', 'cash-flow-mastery', 'house-hacking', 'entrepreneurship-page', 'tax-strategies', 'tax-advantages-children', 'build-your-own-home', 'first-time-home-buyer', 'housing-map', 'mid-career-ai', 'equities-investing', 'ai-tool-fluency', 'automation-workflows', 'ai-learning-tools', 'prompt-engineering', 'gig-economy', 'real-estate-dynamics', 'real-estate-cornerstone', 'real-estate-traditional', 'tools-hub', 'skilled-trades', 'trade-opportunity-finder', 'essential-skills', 'job-heatmap', 'ai-tools-arsenal'];
    
    if (hash && knownHashes.includes(hash)) {
      // Known hash - navigate to it
      if (!hasAccess && freePages.length > 0 && !freePages.includes(hash)) {
        setCurrentPage(hasAccess ? hash : 'moneyscan');
        window.history.replaceState({}, '', '/');
      } else {
        setCurrentPage(hash);
        setPageHistory(['moneyscan', hash]);
        setHistoryIndex(1);
      }
    } else {
      // No hash or unknown hash - default to landing-page
      setCurrentPage('landing-page');
      setPageHistory(['landing-page']);
      setHistoryIndex(0);
      // Clear invalid hash from URL
      if (hash) {
        window.history.replaceState({}, '', '/');
      }
    }
    // Mark as initialized - now safe to process hash changes
    setInitialized(true);
  }, []);

  // Show minimal header only on Moneyscan page (handled within Moneyscan component)
  const showHeader = currentPage !== 'moneyscan' && currentPage !== 'landing-page';
  const showFooter = currentPage !== 'moneyscan' && currentPage !== 'landing-page';

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
        {currentPage === 'real-estate-traditional' && <RealEstateTraditional onNavigate={navigateTo} />}
        {currentPage === 'first-time-home-buyer' && <FirstTimeHomeBuyer onNavigate={navigateTo} hasLeftLanding={hasLeftLanding} />}
        {currentPage === 'ai-era-careers' && <AIEraCareers onNavigate={navigateTo} />}
        {currentPage === 'gig-economy' && <GigEconomyPage onNavigate={navigateTo} />}
        {currentPage === 'ai-career-tools' && <AICareerTools onNavigate={navigateTo} />}
        {currentPage === 'ai-tool-fluency' && <AIToolFluency onNavigate={navigateTo} />}
        {currentPage === 'automation-workflows' && <AutomationWorkflows onNavigate={navigateTo} />}
        {currentPage === 'ai-learning-tools' && <AILearningTools onNavigate={navigateTo} />}
        {currentPage === 'prompt-engineering' && <PromptEngineering onNavigate={navigateTo} />}
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
        {currentPage === 'building-capital' && <Adulting101 onNavigate={navigateTo} />}
        {currentPage === 'job-heatmap' && <JobHeatmap onNavigate={navigateTo} />}
        {currentPage === 'ai-tools-arsenal' && <AIToolsArsenal onNavigate={navigateTo} />}
        {currentPage === 'wealth-blind-spots' && <WealthBlindSpots onNavigate={navigateTo} />}
                {currentPage === 'essential-skills' && <EssentialSkills onNavigate={navigateTo} />}
        {currentPage === 'housing-map' && <HousingMap onNavigate={navigateTo} />}
        {currentPage === 'mid-career-ai' && <MidCareerAI onNavigate={navigateTo} />}
        {currentPage === 'equities-investing'  && <EquitiesInvesting onNavigate={navigateTo} />}
        {currentPage === 'real-estate-dynamics' && <RealEstateDynamics onNavigate={navigateTo} />}
        {currentPage === 'real-estate-cornerstone' && <RealEstateCornerstone onNavigate={navigateTo} />}
        {currentPage === 'landing-page' && <LandingPage onNavigate={navigateTo} stripeCheckoutUrl="https://buy.stripe.com/cNidRb0ONcy6caR1kSfMA06?success_url=https://moneyscan.com/%3Fpayment%3Dsuccess" />}
        {currentPage === 'thank-you' && <ThankYouPage onNavigate={navigateTo} />}

      </main>

      {/* Footer */}
      {showFooter && <footer className="bg-slate-900 text-slate-300 mt-20">
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
                  <a href="#essential-skills" className="hover:text-emerald-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#ai-era-careers" className="hover:text-emerald-400 transition-colors">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#housing-map" className="hover:text-emerald-400 transition-colors">
                    Housing
                  </a>
                </li>
                <li>
                  <a href="#skilled-trades" className="hover:text-emerald-400 transition-colors">
                    Trades
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Mid Career */}
            <div>
              <h3 className="font-semibold text-white mb-3">Mid Career</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mid-career-ai" className="hover:text-emerald-400 transition-colors">
                    Defense
                  </a>
                </li>
                <li>
                  <a href="#equities-investing" className="hover:text-emerald-400 transition-colors">
                    Investing
                  </a>
                </li>
                <li>
                  <a href="#real-estate-cornerstone" className="hover:text-emerald-400 transition-colors">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#tax-strategies" className="hover:text-emerald-400 transition-colors">
                    Taxes
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: AI Tools */}
            <div>
              <h3 className="font-semibold text-white mb-3">AI Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#ai-learning-tools" className="hover:text-emerald-400 transition-colors">
                    AI Learning
                  </a>
                </li>
                <li>
                  <a href="#essential-skills" className="hover:text-emerald-400 transition-colors">
                    Essentials
                  </a>
                </li>
                <li>
                  <a href="#ai-tools-arsenal" className="hover:text-emerald-400 transition-colors">
                    Arsenal
                  </a>
                </li>
                <li>
                  <a href="#prompts-vault" className="hover:text-emerald-400 transition-colors">
                    Prompts
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal + Contact */}
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#legal-privacy" className="hover:text-emerald-400 transition-colors">Disclaimers</a>
                </li>
                <li>
                  <a href="#legal-privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
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
      }
    </div>
  );
}
// deploy 1780851001
// force new build 1780851827
// rebuild Sat Jun 13 11:58:14 EDT 2026
