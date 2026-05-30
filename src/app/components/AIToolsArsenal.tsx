import { useState } from 'react';
import { Search, Sparkles, Briefcase, TrendingUp, Wallet, Shield, BookOpen, ArrowRight } from 'lucide-react';

interface AIToolsArsenalProps {
  onNavigate: (page: string) => void;
}

interface Tool {
  name: string;
  category: string;
  description: string;
  price: string;
  link: string;
  useCase: string[];
}

const tools: Tool[] = [
  // Career & Resume
  { name: "Teal", category: "Career", description: "Track job applications, optimize resumes with AI", price: "Free / $12/mo", link: "https://www.tealhq.com", useCase: ["Resume", "Job Tracking", "Networking"] },
  { name: "Resumewordly", category: "Career", description: "AI resume builder with keyword optimization", price: "$19/mo", link: "https://www.resumewordly.com", useCase: ["Resume", "Cover Letter"] },
  { name: "Interviewing.io", category: "Career", description: "Mock interviews with real engineers from top companies", price: "$19/mo", link: "https://interviewing.io", useCase: ["Practice", "Feedback"] },
  { name: "Jobscan", category: "Career", description: "Match your resume to job descriptions", price: "Free / $30/mo", link: "https://www.jobscan.co", useCase: ["Resume", "ATS Check"] },
  
  // Productivity
  { name: "ChatGPT", category: "Productivity", description: "General AI assistant for writing, analysis, brainstorms", price: "Free / $20/mo", link: "https://chat.openai.com", useCase: ["Writing", "Analysis", "Research"] },
  { name: "Claude", category: "Productivity", description: "Anthropic's AI - great for long documents and analysis", price: "Free / $20/mo", link: "https://claude.ai", useCase: ["Writing", "Analysis", "Coding"] },
  { name: "Notion AI", category: "Productivity", description: "AI embedded in Notion for notes and docs", price: "Included in $10/mo", link: "https://www.notion.so/product/ai", useCase: ["Notes", "Summaries", "Writing"] },
  { name: "Copilot", category: "Productivity", description: "Microsoft's AI across Office apps", price: "$10/mo", link: "https://copilot.microsoft.com", useCase: ["Email", "Docs", "Spreadsheets"] },
  
  // Investing
  { name: "Betterment", category: "Investing", description: "Robo-advisor - automated portfolio rebalancing", price: "0.25% / yr", link: "https://www.betterment.com", useCase: ["Roth IRA", "Auto-Invest"] },
  { name: "Wealthfront", category: "Investing", description: "Robo-advisor with direct indexing available", price: "0.25% / yr", link: "https://www.wealthfront.com", useCase: ["Roth IRA", "Tax-Loss Harvesting"] },
  { name: "M1 Finance", category: "Investing", description: "Free trading + automated investing", price: "Free", link: "https://www.m1finance.com", useCase: ["Auto-Invest", "Pie Investing"] },
  { name: "Public", category: "Investing", description: "Fractional shares with dividend reinvesting", price: "Free", link: "https://public.com", useCase: ["Stock Picking", "Dividends"] },
  
  // Real Estate
  { name: "Arrived", category: "Real Estate", description: "Fractional ownership of rental properties", price: "Variable", link: "https://www.arrivedhomes.com", useCase: ["Fractional", "Rental Income"] },
  { name: "Zillow", category: "Real Estate", description: "Primary real estate marketplace", price: "Free", link: "https://www.zillow.com", useCase: ["Home Search", "Estimates"] },
  { name: "RentPrep", category: "Real Estate", description: "Rent to own directory and coaching", price: "$149 one-time", link: "https://www.rentprep.com", useCase: ["Rent to Own", "Education"] },
  
  // Budgeting & Cash Flow
  { name: "YNAB", category: "Budgeting", description: "Zero-based budgeting method", price: "$14.99/mo", link: "https://www.youneedabudget.com", useCase: ["Budget", "Planning"] },
  { name: "Monarch Money", category: "Budgeting", description: "Modern budgeting and net worth tracking", price: "$15/mo", link: "https://www.monarchmoney.com", useCase: ["Budget", "Tracking"] },
  { name: "Rocket Money", category: "Budgeting", description: "Find and cancel hidden subscriptions", price: "Free / 30% savings", link: "https://www.rocketmoney.com", useCase: ["Subscriptions", "Bill Negotiation"] },
  { name: "PocketGuard", category: "Budgeting", description: "Simple budgeting - \"spend what's left\"", price: "Free / $7.99/mo", link: "https://www.pocketguard.com", useCase: ["Budget", "Spending"] },
  { name: "Undebt.it", category: "Budgeting", description: "Debt payoff planning", price: "Free", link: "https://www.undebt.it", useCase: ["Debt", "Payoff Plan"] },
  
  // Tax & Legal
  { name: "TurboTax", category: "Tax", description: "DIY tax filing", price: "Free / $120+", link: "https://turbotax.intuit.com", useCase: ["Tax Filing"] },
  { name: "FreeTaxUSA", category: "Tax", description: "Affordable tax filing", price: "Free federal / $15 state", link: "https://www.freetaxusa.com", useCase: ["Tax Filing"] },
  { name: "Credit Karma Tax", category: "Tax", description: "Free tax filing", price: "Free", link: "https://www.creditkarma.com/tax", useCase: ["Tax Filing"] },
  
  // Side Income
  { name: "Upwork", category: "Side Income", description: "Freelance marketplace", price: "Free", link: "https://www.upwork.com", useCase: ["Freelancing", "Contracting"] },
  { name: "Fiverr", category: "Side Income", description: "Services marketplace", price: "Free", link: "https://www.fiverr.com", useCase: ["Gig Work", "Services"] },
  { name: "Teachable", category: "Side Income", description: "Create and sell online courses", price: "Free / $39/mo", link: "https://www.teachable.com", useCase: ["Courses", "Digital Products"] },
  { name: " Gumroad", category: "Side Income", description: "Sell digital products and memberships", price: "10% fee", link: "https://www.gumroad.com", useCase: ["Digital Products", "Memberships"] },
];

const categories = ["All", "Career", "Productivity", "Investing", "Real Estate", "Budgeting", "Tax", "Side Income"];

export default function AIToolsArsenal({ onNavigate }: AIToolsArsenalProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.useCase.some(u => u.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || tool.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI Tools Arsenal
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Curated, ranked, and mapped to your wealth-building goals.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            30+ tools across career, investing, real estate, budgeting, and side income. Filter by category or search for what you need.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search tools, use cases..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    category === cat
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 mb-4">{filteredTools.length} tools found</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{tool.name}</h3>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                    {tool.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {tool.useCase.map((use, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {use}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-emerald-600">{tool.price}</span>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Visit <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Start Bundles</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <button onClick={() => {setCategory("Career"); setSearch("");}} className="bg-white rounded-lg p-4 border border-blue-200 text-left hover:border-blue-400 transition-colors">
              <Briefcase className="w-5 h-5 text-blue-600 mb-2" />
              <h3 className="font-bold text-slate-900">Career Tools</h3>
              <p className="text-xs text-slate-500">Resume, interview, job search</p>
            </button>
            <button onClick={() => {setCategory("Investing"); setSearch("");}} className="bg-white rounded-lg p-4 border border-emerald-200 text-left hover:border-emerald-400 transition-colors">
              <TrendingUp className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="font-bold text-slate-900">Investing Tools</h3>
              <p className="text-xs text-slate-500">Robo-advisors, fractional</p>
            </button>
            <button onClick={() => {setCategory("Budgeting"); setSearch("");}} className="bg-white rounded-lg p-4 border border-purple-200 text-left hover:border-purple-400 transition-colors">
              <Wallet className="w-5 h-5 text-purple-600 mb-2" />
              <h3 className="font-bold text-slate-900">Budgeting Tools</h3>
              <p className="text-xs text-slate-500">Budget, debt payoff</p>
            </button>
            <button onClick={() => {setCategory("Side Income"); setSearch("");}} className="bg-white rounded-lg p-4 border border-amber-200 text-left hover:border-amber-400 transition-colors">
              <BookOpen className="w-5 h-5 text-amber-600 mb-2" />
              <h3 className="font-bold text-slate-900">Side Income</h3>
              <p className="text-xs text-slate-500">Freelancing, courses</p>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-700 mb-4">
            Tools are only as good as how you use them. Start with one, master it, then add another.
          </p>
          <button 
            onClick={() => onNavigate('adulting-101')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            See How to Use These <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}