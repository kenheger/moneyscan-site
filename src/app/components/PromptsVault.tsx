import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Search, Lock, Zap, Lightbulb, Shield, Home, DollarSign, TrendingUp, FileText, Brain, Hash } from 'lucide-react';

interface Prompt {
  id: number;
  title: string;
  category: string;
  prompt: string;
  expectedOutput: string;
}

const prompts: Prompt[] = [
  {
    id: 1,
    title: "Budget Reality Check",
    category: "Foundation",
    prompt: `Act as a fiduciary family wealth advisor. Our household: [ages, city, combined income, monthly expenses breakdown, # of kids]. Create a zero-based budget, flag 5 optimization opportunities, and project net worth in 5/10 years assuming 7% investment return.`,
    expectedOutput: "Zero-based budget spreadsheet, top 5 optimization opportunities with savings estimates, 5/10 year net worth projection under 7% compound growth"
  },
  {
    id: 2,
    title: "Emergency Fund & Savings Plan",
    category: "Foundation",
    prompt: `Build a customized emergency fund and savings plan for a family with [income, current savings, monthly expenses, risk factors like job stability in your City]. Include timeline, automation steps, and high-yield options.`,
    expectedOutput: "Target emergency fund amount, monthly savings schedule, automated transfer instructions, high-yield savings account recommendations"
  },
  {
    id: 3,
    title: "Debt Elimination Accelerator",
    category: "Foundation",
    prompt: `Analyze our debts: [list with balances, rates]. Create the optimal payoff plan (snowball/avalanche hybrid) while protecting investing. Show monthly cash flow impact.`,
    expectedOutput: "Debt payoff timeline comparing snowball vs. avalanche, monthly cash flow improvement chart, recommended extra payment allocation"
  },
  {
    id: 4,
    title: "Compound Growth Simulator",
    category: "Growth",
    prompt: `Calculate the power of compound interest for [monthly contribution, starting amount, expected return %, time horizon, inflation adjustment]. Provide visual description and what lifestyle it enables for a family.`,
    expectedOutput: "Year-by-year growth table, inflation-adjusted projections, lifestyle enabled at each milestone (e.g., 'college fund full', 'early retirement possible')"
  },
  {
    id: 5,
    title: "Portfolio Health Scan",
    category: "Investing",
    prompt: `Review my current portfolio: [asset allocation details]. Simulate performance across optimistic/base/pessimistic scenarios over 10 years. Suggest AI-era adjustments including tokenized assets.`,
    expectedOutput: "3 scenario projections (optimistic/base/pessimistic), historical comparison, tokenized asset recommendations with risk ratings, rebalancing suggestions"
  },
  {
    id: 6,
    title: "Real Estate Decision Engine",
    category: "Investing",
    prompt: `Compare buying a [$X property in your City] for rental vs. investing the down payment in a diversified portfolio or tokenized real estate. Include cash flow, taxes, liquidity, and inheritance implications for a family.`,
    expectedOutput: "Side-by-side comparison table, cap rate analysis, 10-year projected returns, tax efficiency scores, liquidity ratings, inheritance ease"
  },
  {
    id: 7,
    title: "Tax Optimization Scan",
    category: "Tax",
    prompt: `As a tax-aware family with [income bracket, assets], list top 5 legal strategies for 2026-2027. Include Roth conversions, 529 contributions, and any state-specific opportunities.`,
    expectedOutput: "Top 5 strategies ranked by savings potential, implementation timeline, estimated tax savings, 2026-2027 specific opportunities"
  },
  {
    id: 8,
    title: "Multi-Generational Simulation",
    category: "Estate",
    prompt: `Model our family wealth transfer: [current net worth, ages, goals]. Simulate 3 generations with inflation, taxes, and tokenized asset options. Highlight risks and mitigation steps.`,
    expectedOutput: "3-generation wealth flow diagram, inflation impact table, estate tax projections, tokenized asset role in diversification, risk mitigation checklist"
  },
  {
    id: 9,
    title: "Spending Leak Detector",
    category: "Behavior",
    prompt: `Analyze last 3 months expenses: [paste summary]. Identify behavioral leaks and create a 90-day reset plan with weekly actions for the whole family.`,
    expectedOutput: "Spending leak ranked list with root causes, 90-day reset calendar, weekly action items assigned to family members, progress追踪"
  },
  {
    id: 10,
    title: "AI-Era Opportunity Scanner",
    category: "Opportunities",
    prompt: `Identify 2026+ opportunities in tokenized assets, AI investments, and alternative income for a family with [risk tolerance, investable capital]. Rank by liquidity, return potential, and family suitability. Include platforms and risks.`,
    expectedOutput: "Ranked opportunity list with scores (liquidity, returns, suitability), platform recommendations, risk assessments, minimum investment thresholds"
  }
];

const categories = [
  { id: "Foundation", label: "Foundation", icon: Home, color: "bg-emerald-100 text-emerald-700" },
  { id: "Growth", label: "Growth", icon: TrendingUp, color: "bg-blue-100 text-blue-700" },
  { id: "Investing", label: "Investing", icon: DollarSign, color: "bg-amber-100 text-amber-700" },
  { id: "Tax", label: "Tax", icon: Shield, color: "bg-purple-100 text-purple-700" },
  { id: "Estate", label: "Estate", icon: FileText, color: "bg-rose-100 text-rose-700" },
  { id: "Behavior", label: "Behavior", icon: Brain, color: "bg-indigo-100 text-indigo-700" },
  { id: "Opportunities", label: "AI Opportunities", icon: Zap, color: "bg-orange-100 text-orange-700" }
];

export default function PromptsVault({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = prompts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.prompt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryInfo = (catId: string) => categories.find(c => c.id === catId) || categories[0];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI Prompts Vault
            </h1>
          </div>
          <p className="text-lg text-slate-600 mb-3">
            Battle-tested AI prompts for wealth building
          </p>
          <p className="text-xs text-slate-500">
            Customize the [bracketed] sections with your details. Each prompt outputs structured, actionable results.
          </p>
          
          {/* Pro Tip */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <div className="font-medium text-amber-700 text-xs">Pro Tip</div>
                <div className="text-slate-600 text-xs">
                  Always add: <span className="text-amber-700 font-mono">"Provide base case, risks, assumptions, and what data is missing."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1 text-sm border border-slate-300 rounded-lg"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-2 py-1 rounded text-xs font-medium ${!selectedCategory ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${selectedCategory === cat.id ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  <cat.icon className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prompts List */}
      <section className="py-4 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {filteredPrompts.map(prompt => {
              const catInfo = getCategoryInfo(prompt.category);
              const isExpanded = expandedPrompt === prompt.id;
              
              return (
                <div
                  key={prompt.id}
                  className={`bg-white rounded border transition-all ${isExpanded ? 'border-amber-300' : 'border-slate-200'}`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedPrompt(isExpanded ? null : prompt.id)}
                    className="w-full p-3 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded flex items-center justify-center ${catInfo.color}`}>
                        <catInfo.icon className="w-3 h-3" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-500">{prompt.category}</div>
                        <div className="text-sm font-bold text-slate-900">{prompt.title}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-3 pb-3 border-t border-slate-100">
                      {/* Prompt */}
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-semibold text-slate-700">Prompt</h4>
                          <button
                            onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                            className="flex items-center gap-1 text-xs text-amber-600"
                          >
                            {copiedId === prompt.id ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <div className="bg-slate-50 rounded p-2 text-xs text-slate-700 font-mono">
                          {prompt.prompt}
                        </div>
                      </div>

                      {/* Expected Output */}
                      <div className="mt-2">
                        <h4 className="text-xs font-semibold text-slate-700 mb-1">Expected Output</h4>
                        <div className="bg-blue-50 rounded p-2 text-xs text-blue-800">
                          {prompt.expectedOutput}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-6">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500 text-sm">No prompts found</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-4 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-lg font-bold text-white mb-2">
            Want personalized AI sessions?
          </h2>
          <p className="text-amber-100 text-xs mb-3">
            Access these prompts plus guided AI chat.
          </p>
          <button
            onClick={() => onNavigate('moneyscan')}
            className="px-4 py-2 bg-white text-amber-600 rounded font-bold text-sm"
          >
            Unlock Full Access →
          </button>
        </div>
      </section>
    </div>
  );
}