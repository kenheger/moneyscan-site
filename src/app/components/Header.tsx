import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

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

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => hasLeftLanding && handleNavigate('home')}
            className={`flex items-center ${hasLeftLanding ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            disabled={!hasLeftLanding}
          >
            <img
              src={logoImage}
              alt="MONEYSCAN"
              className={`h-12 w-auto ${hasLeftLanding ? '' : 'opacity-50'}`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigate('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('wealth-engine')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'wealth-engine'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Wealth Engine
            </button>
            <button
              onClick={() => handleNavigate('cash-flow-mastery')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'cash-flow-mastery'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Cash Flow Mastery
            </button>
            <button
              onClick={() => handleNavigate('debt-elimination')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'debt-elimination'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Debt Elimination
            </button>
            <button
              onClick={() => handleNavigate('real-estate-paths')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'real-estate-paths'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => handleNavigate('ai-era-careers')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'ai-era-careers'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              AI Era Careers
            </button>
            <button
              onClick={() => handleNavigate('tools-hub')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'tools-hub'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
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
              onClick={() => handleNavigate('real-estate-paths')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Real Estate Paths
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
