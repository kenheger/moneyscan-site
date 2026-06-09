import { Building2, TrendingUp, Shield, DollarSign, ArrowRight, CheckCircle, Home, MapPin, Users, Building } from 'lucide-react';

interface RealEstateDynamicsProps {
  onNavigate: (page: string) => void;
}

export default function RealEstateDynamics({ onNavigate }: RealEstateDynamicsProps) {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header - Light Blue Band */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Real Estate — Cornerstone of Wealth Building — With an AI Twist
            </h1>
          </div>
          <p className="text-lg text-slate-600 italic mb-3">
            Historically, real estate has been a powerful source of wealth creation. That remains true in the AI Era, but there are a few new investment wrinkles to be aware of — assisted by AI, traditional plays, and one that remains rather hidden.
          </p>
        </div>
      </section>

      {/* Emerging Real Estate Plays */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Emerging Real Estate Plays</h2>
          
          {/* Fractional Real Estate */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">(The Private Housing Portfolio Opportunity) — Fractional Real Estate</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
                <h4 className="font-bold text-slate-900 mb-2">What It Is</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Buy shares of individual rental properties — not REITs, not crypto tokens — actual houses in specific ZIP codes. You own a slice, get rental income, and benefit from appreciation.
                </p>
                <div className="bg-white rounded p-3 border border-emerald-100">
                  <p className="text-xs font-semibold text-slate-600 mb-1">Platform: Arrived</p>
                  <p className="text-xs text-slate-500">Founded 2018. $60M+ raised. 170+ properties exited.</p>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
                <h4 className="font-bold text-slate-900 mb-2">Why It's Different in 2026</h4>
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
              <p className="text-sm text-slate-600">
                <a href="https://arrived.dev/6e342e" target="_blank" className="text-blue-600 underline">Arrived</a> — Get started with $100. Browse properties, select your stake, own a piece of the American housing market.
              </p>
            </div>
          </div>

          {/* Workforce Housing - Roots */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Workforce Housing — With Tenant Participation</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
                <h4 className="font-bold text-slate-900 mb-2">What It Is</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Investors and Renters work together for mutual benefit. The Roots REIT pools capital from all investors to purchase and manage income-generating residential properties. Renters benefit directly from "Live in it Like You Own It®" program.
                </p>
                <div className="bg-white rounded p-3 border border-purple-100">
                  <p className="text-xs font-semibold text-slate-600 mb-1">Platform: Roots</p>
                  <p className="text-xs text-slate-500">Founded 2021. $102 Million Invested.</p>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
                <h4 className="font-bold text-slate-900 mb-2">Why It's Different</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Cash outs up to $100K each quarter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>12%-17% annual returns since inception</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Atlanta, Augusta, Oklahoma City, Nashville</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Renters benefit directly — $1.7 million in savings</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-purple-600" />
                <h4 className="font-bold text-slate-900">How to Start</h4>
              </div>
              <p className="text-sm text-slate-600">
                <a href="https://www.investwithroots.com/" target="_blank" className="text-blue-600 underline">Roots</a> — Get started with as little as $100, and own a piece of the only real estate fund that builds wealth for investors and renters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOFTY.ai - Liquidity Exchange */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* LOFTY.ai */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">LOFTY.ai — Crowdfunded RE with a Liquidity Exchange</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50/50">
                <h4 className="font-bold text-slate-900 mb-2">What It Is</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Young tech-led company building "the NASDAQ for Real Estate" using blockchain. Offers fractional investment in properties ($50 minimum) that can be traded like stocks on their secondary market — with payouts in crypto.
                </p>
                <div className="bg-white rounded p-3 border border-indigo-100">
                  <p className="text-xs font-semibold text-slate-600 mb-1">Platform: LOFTY.ai</p>
                  <p className="text-xs text-slate-500">Founded 2018. $100+ million invested.</p>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
                <h4 className="font-bold text-slate-900 mb-2">Why It's Different</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>100+ rental properties across 40 markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Rental income paid to your account daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>All properties listed with pictures and financials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Buy shares and sell anytime on Lofty marketplace</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900">How to Start</h4>
              </div>
              <p className="text-sm text-slate-600">
                <a href="https://lofty.ai" target="_blank" className="text-blue-600 underline">LOFTY.ai</a> — Crowdfunded real estate with a liquidity market, powered by cryptocurrency payouts. Starts at $50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">What's Next</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <button 
              onClick={() => onNavigate('real-estate-traditional')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-400 transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">Traditional Real Estate</span>
              </div>
              <p className="text-xs text-slate-500">Unlock home equity for investment</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}