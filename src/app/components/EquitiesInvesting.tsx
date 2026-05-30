import { TrendingUp, Shield, AlertTriangle, PiggyBank, ArrowRight, Bot, Cpu, Globe, Users, BarChart3, Search, Zap, Eye, Calculator } from 'lucide-react';

interface EquitiesInvestingPageProps {
  onNavigate: (page: string) => void;
}

const traditionalPlatforms = [
  {
    name: "The Motley Fool (Stock Advisor)",
    strategy: "High-growth, long-term buy-and-hold (tech + disruptive innovators). 15-25 stocks held 5+ years.",
    trackRecord: "Flagship service has massively beaten S&P 500 over longhaul. Early picks like Netflix, Amazon, Nvidia.",
    catch: "Extremely volatile. Growth-heavy picks experience massive drawdowns in downturns. Stomach-churning near retirement."
  },
  {
    name: "Zacks Investment Research",
    strategy: "Quantitative, short-to-medium-term. Earnings estimate revisions. 'Zacks Rank' #1 (Strong Buy) to #5 (Strong Sell).",
    trackRecord: "#1 list has strong short-term rolling track record beating market. Removes emotion, relies on analyst math.",
    catch: "Requires active management and frequent churning. Not passive. Transaction costs and short-term taxes eat returns."
  },
  {
    name: "Seeking Alpha (Premium / Alpha Picks)",
    strategy: "Hybrid crowd-sourced + quantitative. Network of analysts + 'Quant Rating' system.",
    trackRecord: "Alpha Picks uses objective quant metrics (value, growth, profitability, momentum). Strong early performance.",
    catch: "Volume causes 'analysis paralysis.' Opposing analysts give conflicting takes on same stock same day."
  },
  {
    name: "George Gilder (Gilder Technology Report)",
    strategy: "Deep-tech futurism, telecommunications, cryptography, microchip shifts.",
    trackRecord: "Brilliant at predicting macro/tech shifts years ahead (fiber optics, blockchain).",
    catch: "Timelines extremely long. Micro-cap/niche tech picks highly speculative and illiquid for retail."
  },
  {
    name: "Morningstar",
    strategy: "'Economic Moat' focus (competitive advantage) + 'Fair Value' calculation.",
    trackRecord: "Authority on funds/ETFs — expense ratios, manager history. Portfolio X-Ray excellent for $50K+ portfolios.",
    catch: "Poor real-time charting, momentum. Built for slow, methodical value investing — not day trading."
  }
];

const aiPlatforms = [
  { name: "FinChat.io / Roam", description: "Bloomberg Terminal for retail. Custom LLMs on financial data, SEC filings, earnings calls. Ask questions, get instant visualizations." },
  { name: "Composer.trade", description: "AI-assisted algorithmic trading. Natural language strategy builder with backtesting. Bypass advisory fees entirely." },
  { name: "Kavout / Danelfin", description: "Machine learning predictive scores. Danelfin analyzes 900+ indicators daily for 'Smart Score' — institutional analytics in retail dashboard." }
];

export default function EquitiesInvestingPage({ onNavigate }: EquitiesInvestingPageProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Equities Investing — Historically & In the AI Era
            </h1>
          </div>
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Traditional platforms vs emerging AI applications. What's changed, what hasn't, and how to think about it.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-slate-700">
              <strong>We do not provide investment advice.</strong> However, the power of compound interest is a first principle for measuring any investment strategy.{' '}
              <button onClick={() => onNavigate('compound-interest')} className="text-blue-600 hover:underline font-semibold">
                See Compound Interest page →
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Platforms */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-bold text-slate-900">Traditional Investment Platforms</h2>
          </div>
          
          <div className="space-y-3">
            {traditionalPlatforms.map((platform, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{platform.name}</h3>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Strategy</span>
                    <p className="text-slate-600">{platform.strategy}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block mb-1">Track Record</span>
                    <p className="text-slate-600">{platform.trackRecord}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-700 block mb-1">The Catch</span>
                    <p className="text-slate-600">{platform.catch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-4">
            <h2 className="font-bold text-slate-900 mb-2">The Emerging AI Challengers</h2>
            <p className="text-sm text-slate-700 mb-3">
              Traditional services: curated human analysts or static formulas → monthly newsletter picks. 
              AI platforms: hyper-personalized, real-time portfolio management + institutional-grade data processing directly to retail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-3">
              {aiPlatforms.map((platform, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 border border-indigo-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold text-slate-900">{platform.name}</span>
                  </div>
                  <p className="text-xs text-slate-600">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Key Differences */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The Ultimate Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">1. Cracking the "Data PDF" Wall</h3>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Drop raw 10-K filings, earnings transcripts, fund prospectuses into an LLM. Ask: "Filter stocks in this ETF with margin contraction over 3 quarters" — get answer in 3 seconds.
              </p>
              <p className="text-xs text-slate-500">Bypasses static financial screeners. Retail investors now access what institutions pay millions for.</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">2. Personalized Portfolio "X-Rays"</h3>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Future AI connects to your accounts via API, shows asset overlap, simulates macroeconomic shocks tied to YOUR life goals.
              </p>
              <p className="text-xs text-slate-500">"Simulate my portfolio if inflation spikes 1.5% next quarter → auto-suggest rebalancing."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 inline-block">
            <h3 className="font-bold text-emerald-800 mb-2">The Bottom Line</h3>
            <p className="text-sm text-slate-700 max-w-2xl">
              Traditional: human curation + rigid formulas. AI tools flip the model — you become your own hedge fund, analyzing raw data in real time and executing automated, emotionless strategies. The key is not predicting the future. It is having the right tools to process the present.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}