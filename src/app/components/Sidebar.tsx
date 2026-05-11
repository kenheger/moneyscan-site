import { useState } from 'react';
import { ChevronRight, ChevronDown, PanelLeftClose, TrendingUp, Building, Briefcase, Scan, DollarSign, CreditCard, GraduationCap, HeartPulse, Wallet, Brain, Wrench, Users, Rocket, Sparkles } from 'lucide-react';

interface SidebarItem {
  label: string;
  page?: string;
  icon?: React.ReactNode;
  children?: { label: string; page: string }[];
}

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  collapsed: boolean;
  onToggle: () => void;
}

const menuStructure: SidebarItem[] = [
  {
    label: 'Wealth',
    icon: <TrendingUp className="w-4 h-4" />,
    children: [
      { label: 'Compounding', page: 'compound-interest' },
      { label: 'Real Estate', page: 'real-estate-paths' },
      { label: 'Portfolio', page: 'wealth-goal' },
      { label: 'Tax Optimization', page: 'wealth-engine' },
    ],
  },
  {
    label: 'Debt',
    icon: <CreditCard className="w-4 h-4" />,
    children: [
      { label: 'Credit Cards', page: 'debt-elimination-page' },
      { label: 'Student Loans', page: 'debt-elimination-page' },
      { label: 'Medical', page: 'debt-elimination-page' },
      { label: 'Budgeting', page: 'budgeting-page' },
    ],
  },
  {
    label: 'Careers',
    icon: <Brain className="w-4 h-4" />,
    children: [
      { label: 'AI Impact', page: 'ai-era-careers' },
      { label: 'Skills', page: 'ai-skills-worksheet' },
      { label: 'Trades', page: 'skilled-trades' },
      { label: 'Entrepreneurship', page: 'house-hacking' },
    ],
  },
  {
    label: 'Scans',
    icon: <Scan className="w-4 h-4" />,
    children: [
      { label: 'AI Prompts', page: 'prompts-vault' },
    ],
  },
];

export default function Sidebar({ onNavigate, currentPage, collapsed, onToggle }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Wealth']);

  const toggleSection = (label: string) => {
    setExpandedSections(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const isActive = (page: string) => currentPage === page;

  if (collapsed) {
    return (
      <div className="w-16 bg-slate-900 min-h-screen flex flex-col border-r border-slate-800">
        <div className="p-3 border-b border-slate-800">
          <button
            onClick={onToggle}
            className="w-full flex justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Show Sidebar"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 py-4 flex flex-col items-center gap-2">
          {menuStructure.map(item => (
            <div key={item.label} className="relative group">
              <button
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title={item.label}
              >
                {item.icon}
              </button>
              <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-slate-900 min-h-screen flex flex-col border-r border-slate-800">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg">MONEYSCAN</span>
        </div>
        <button
          onClick={onToggle}
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          title="Hide Sidebar"
        >
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuStructure.map(section => (
          <div key={section.label} className="mb-1">
            <button
              onClick={() => toggleSection(section.label)}
              className="w-full px-4 py-2 flex items-center justify-between text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                {section.icon}
                <span className="font-medium">{section.label}</span>
              </div>
              {expandedSections.includes(section.label) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedSections.includes(section.label) && section.children && (
              <div className="ml-4 border-l border-slate-700">
                {section.children.map(child => (
                  <button
                    key={child.page}
                    onClick={() => onNavigate(child.page)}
                    className={`w-full px-4 py-2 flex items-center gap-2 text-sm transition-colors ${
                      isActive(child.page)
                        ? 'text-emerald-400 bg-slate-800 border-r-2 border-emerald-400'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <ChevronRight className="w-3 h-3" />
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <p className="text-xs text-slate-500">
          © 2026 Moneyscan LLC
        </p>
      </div>
    </div>
  );
}