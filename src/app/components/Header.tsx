import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
  hasLeftLanding?: boolean;
}

export default function Header({ onNavigate, currentPage, hasLeftLanding }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  // Nav items matching the 7 across
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Keystones', page: 'essential-skills' },
    { label: 'Early Career', page: 'ai-era-careers' },
    { label: 'Mid Career', page: 'mid-career-ai' },
    { label: 'Tax Strategies', page: 'tax-strategies' },
    { label: 'Tools to Use', page: 'tools-hub' },
    { label: 'AI Tools Arsenal', page: 'ai-tools-arsenal' },
  ];

  const getPageKey = (page: string) => {
    // Map sub-pages to their category for highlighting
    const categoryMap: Record<string, string> = {
      'wealth-engine': 'keystones',
      'compound-interest': 'keystones',
      'compound-interest-tool': 'keystones',
      'budgeting-page': 'keystones',
      'debt-elimination': 'keystones',
      'debt-elimination-page': 'keystones',
      'job-heatmap': 'early-career',
      'housing-map': 'early-career',
      'skilled-trades': 'early-career',
      'entrepreneurship-page': 'early-career',
      'first-time-home-buyer': 'early-career',
      'mid-career-ai': 'mid-career',
      'ai-career-tools': 'keystones',
      'ai-skills-worksheet': 'mid-career',
      'essential-skills': 'keystones',
      'real-estate-paths': 'mid-career',
      'build-your-own-home': 'mid-career',
      'equities-investing': 'mid-career',
      'tax-strategies': 'tax-strategies',
      'tax-advantages-children': 'tax-strategies',
      'tools-hub': 'tools',
      'wealth-goal': 'tools',
      'trade-opportunity-finder': 'tools',
      'ai-tools-arsenal': 'ai-arsenal',
      'prompts-vault': 'ai-arsenal',
    };
    return categoryMap[page] || page;
  };

  const isActive = (page: string) => currentPage === page || getPageKey(page || '') === currentPage?.toLowerCase().replace(' ', '-');

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center cursor-pointer"
          >
            <img
              src={logoImage}
              alt="MONEYSCAN"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation - 7 across */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={`#${item.page}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  currentPage === item.page || (currentPage && getPageKey(currentPage) === item.label.toLowerCase().replace(' ', '-'))
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  className={`px-4 py-3 rounded-lg text-left font-medium ${
                    currentPage === item.page
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}