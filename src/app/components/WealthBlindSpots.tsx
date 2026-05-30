import { AlertTriangle, Home, TrendingUp, Shield, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

interface WealthBlindSpotsProps {
  onNavigate: (page: string) => void;
}

export default function WealthBlindSpots({ onNavigate }: WealthBlindSpotsProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Wealth Blind Spots
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            What established adults don't know they may be missing.
          </p>
          <p className="text-sm font-semibold text-slate-700">
            You've built a career. Now it's time to leverage assets you didn't know you had.
          </p>
        </div>
      </section>

      {/* Quick Tip Banner */}
      <section className="bg-orange-50 border-b border-orange-100 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-orange-200">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">The Hidden Wealth Lever</h3>
              <p className="text-sm text-slate-700">
                Most Americans over 35 have significantly more home equity than they realize — but it's "locked up." There are legal ways to access it without selling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blind Spot 1: Fractional Real Estate */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Fractional Real Estate — You Can Own a Share of a House</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h3 className="font-bold text-slate-900 mb-2">What It Is</h3>
              <p className="text-sm text-slate-700 mb-3">
                Buy shares of individual rental properties — not REITs, not crypto tokens — actual houses in specific ZIP codes. You own a slice, get rental income, and benefit from appreciation.
              </p>
              <div className="bg-white rounded p-3 border border-emerald-100">
                <p className="text-xs font-semibold text-slate-600 mb-1">Platform: Arrived</p>
                <p className="text-xs text-slate-500">Founded 2018. $60M+ raised. 170+ properties exited.</p>
              </div>
            </div>

            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h3 className="font-bold text-slate-900 mb-2">Why It's Different in 2026</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>SEC-regulated with public filings on EDGAR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Monthly secondary market for exits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>18.6% average total return on exits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Bezos + Benioff + Zillow co-founder backed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <h4 className="font-bold text-slate-900">How to Start</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              Minimums typically $100-250 per property. Browse specific houses in growth markets (Phoenix, Atlanta, Charlotte, Nashville), see rental income projections, buy with as little as $100.
            </p>
            <a 
              href="https://www.arrivedhomes.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800"
            >
              Browse Properties on Arrived <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Blind Spot 2: Tax-Advantaged Accounts */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Tax-Advantaged Accounts You May Not Be Maxing</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">Backdoor Roth IRA</h3>
              <p className="text-sm text-slate-700 mb-3">
                Earn too much for a Roth? Contribute to traditional IRA, then convert. Legal loophole that's been tested.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">2026 limit: $7,000/yr</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">HSA as Investment</h3>
              <p className="text-sm text-slate-700 mb-3">
                Health Savings Account = triple tax advantage. Invest the money instead of spending it. It becomes a stealth retirement account.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">2026: $4,300 individual</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-white">
              <h3 className="font-bold text-slate-900 mb-2">Mega Backdoor Roth</h3>
              <p className="text-sm text-slate-700 mb-3">
                401k allows after-tax contributions. Convert to Roth before growth. Some employers allow this — ask HR.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">Potential: $30K+/yr extra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blind Spot 3: Home Equity */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Home Equity — The Locked Vault</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
              <h3 className="font-bold text-slate-900 mb-2">HELOCs & Cash-Out Refis</h3>
              <p className="text-sm text-slate-700 mb-3">
                If you've owned 5+ years, you may have 50-70% equity. Access it at 6-8% for investments that return more.
              </p>
              <div className="bg-white rounded p-3 border border-amber-100">
                <p className="text-xs font-semibold text-slate-600">Warning:</p>
                <p className="text-xs text-slate-500">Don't borrow against primary for speculation. Only for income-producing assets.</p>
              </div>
            </div>

            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-slate-900 mb-2">Reverse Mortgages (65+)</h3>
              <p className="text-sm text-slate-700 mb-3">
                If 65+, a reverse mortgage lets you turn equity into cash without monthly payments. You still own the home.
              </p>
              <p className="text-xs text-blue-600 font-semibold">Consult a fee-only fiduciary first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blind Spot 4: Side Income */}
      <section className="py-6 bg-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Your "Lateral Career" — Side Income Streams</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-slate-900 mb-2">Consulting</h3>
              <p className="text-sm text-slate-700 mb-2">
                Your career expertise = billing rate. LinkedIn, Contra, or directly to former employers.
              </p>
              <p className="text-xs text-purple-600 font-semibold">Often $100-300/hr</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-slate-900 mb-2">Digital Products</h3>
              <p className="text-sm text-slate-700 mb-2">
                Templates, spreadsheets, guides. One-time build, ongoing passive income.
              </p>
              <p className="text-xs text-purple-600 font-semibold">Gumroad, Teachable</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-slate-900 mb-2">Coaching/Mentoring</h3>
              <p className="text-sm text-slate-700 mb-2">
                Career coaching, interview prep, industry mentorship. Your network = their opportunity.
              </p>
              <p className="text-xs text-purple-600 font-semibold">Typically $100-250/session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Summary */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The Wealth Blind Spots Playbook</h2>
          
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-800 text-sm">Start Small</h3>
              <p className="text-xs text-slate-600 mt-1">$100 on Arrived = your first fractional property</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-800 text-sm">Max Tax Accounts</h3>
              <p className="text-xs text-slate-600 mt-1">Backdoor Roth + HSA before taxable investing</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="font-bold text-amber-800 text-sm">Unlock Equity</h3>
              <p className="text-xs text-slate-600 mt-1">Don't let home equity sit — deploy it legally</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-800 text-sm">Monetize Skills</h3>
              <p className="text-xs text-slate-600 mt-1">One side income stream = compounding wealth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-700 mb-4">
            You've built the foundation. Now optimize what you already have.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => onNavigate('job-heatmap')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
              Job Heatmap <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('ai-tools-arsenal')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all"
            >
              AI Tools Arsenal <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}