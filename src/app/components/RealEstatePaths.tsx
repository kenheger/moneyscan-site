import { Building2, CheckCircle, ArrowRight, TrendingUp, Users, Home, Wrench, DollarSign, MapPin, Clock, Shield } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface RealEstateCrowdfundingProps {
  onNavigate: (page: string) => void;
}

export default function RealEstateCrowdfunding({ onNavigate }: RealEstateCrowdfundingProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Real Estate Rewired
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Three Ways to Build Wealth Through Property
          </p>
          <p className="text-base text-slate-600">
            From passive shares to active builds — AI has opened doors that were locked to everyday investors a decade ago.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>You don't need to be a landlord to own real estate — or wait for a lucky flip.</strong> AI-powered platforms now let you build a diversified property portfolio with as little as $100, or invest in structures that align tenants and investors for mutual benefit. The old barriers are gone. What's left are three distinct paths — pick yours.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters Now</h3>
            <p className="text-lg text-slate-700">
              Real estate has historically been one of the slowest wealth-building engines — because the barriers were massive. AI changes that equation: instant data on markets, fractional ownership of individual properties, and new structures that align tenant behavior with investor returns. <strong>The game has changed. Most people haven't noticed.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* THREE SPECIAL OPTIONS */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Three Distinct Paths</h2>
          <p className="text-slate-600 mb-8">Pick the one that fits your capital, time, and risk tolerance.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* OPTION 1: FRACTIONAL HOUSING - Arrived */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-emerald-500 overflow-hidden">
              <div className="bg-emerald-500 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Option 1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fractional Housing</h3>
                <p className="text-emerald-600 font-semibold mb-4">Build a 20-House Portfolio from Your Couch</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span><strong>Min:</strong> $100 per property</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span><strong>Target:</strong> 6-10% (rent + appreciation)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span><strong>Liquidity:</strong> Multi-year hold</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span><strong>Locations:</strong> You pick — coast to coast</span>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-700 font-medium mb-2">The $20K Example:</p>
                  <p className="text-sm text-slate-600">
                    $20K at $1K/house = 20 properties nationwide. Get photos and updates on each one. Quarterly dividends. You're a silent partner — they handle the landlord work.
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  <strong>Platform:</strong> Arrived (Reg A+). Backed by Bezos + others.
                </div>
              </div>
            </div>

            {/* OPTION 2: WORKFORCE HOUSING - Roots */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-500 overflow-hidden">
              <div className="bg-blue-500 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Option 2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Workforce Housing</h3>
                <p className="text-blue-600 font-semibold mb-4">Investor Returns Tied to Tenant Behavior</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span><strong>Min:</strong> Varies by offering</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span><strong>Target:</strong> 12-15% annual</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span><strong>Liquidity:</strong> Illiquid (years)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span><strong>Focus:</strong> Southeast + Oklahoma</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-700 font-medium mb-2">The Twist:</p>
                  <p className="text-sm text-slate-600">
                    "Live in It and Win It" — tenants earn equity by paying rent on time. Lower vacancies, lower turnover, higher distributions. Everyone wins.
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  <strong>Platform:</strong> Roots (Reg A+ REIT)
                </div>
              </div>
            </div>

            {/* OPTION 3: BUILD YOUR OWN */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-amber-500 overflow-hidden">
              <div className="bg-amber-500 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm uppercase tracking-wide">Option 3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your Own</h3>
                <p className="text-amber-600 font-semibold mb-4">The Classic Wealth Path — Rewired</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    <span><strong>Min:</strong> 3.5%+ down payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <span><strong>Target:</strong> Mortgage offset + equity</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span><strong>Liquidity:</strong> Sell or refi</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4 text-slate-600" />
                    <span><strong>Control:</strong> Full — if you want it</span>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-slate-700 font-medium mb-2">Old School Works — If You:</p>
                  <p className="text-sm text-slate-600">
                    Want max control, have handyman skills or a team, and can handle tenants. House hacking, BRs,Seller financing — the playbook still works.
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  <strong>More:</strong> See House Hacking page for the active path
                </div>
              </div>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left font-semibold">Target Return</th>
                  <th className="px-6 py-4 text-left font-semibold">Min Investment</th>
                  <th className="px-6 py-4 text-left font-semibold">Liquidity</th>
                  <th className="px-6 py-4 text-left font-semibold">Effort Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Fractional Housing (Arrived)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">6-10%</td>
                  <td className="px-6 py-4 text-slate-700">$100/property</td>
                  <td className="px-6 py-4 text-amber-600">Years</td>
                  <td className="px-6 py-4 text-emerald-600">Very Low</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-blue-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Workforce Housing (Roots)</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">12-15%</td>
                  <td className="px-6 py-4 text-slate-700">Varies</td>
                  <td className="px-6 py-4 text-amber-600">Illiquid</td>
                  <td className="px-6 py-4 text-emerald-600">None</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Build Your Own</td>
                  <td className="px-6 py-4 text-slate-700">Mortgage offset + equity</td>
                  <td className="px-6 py-4 text-slate-700">3.5%+ down</td>
                  <td className="px-6 py-4 text-slate-600">Medium</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">High</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-100">
                  <td className="px-6 py-4 font-bold text-slate-900">Core Wealth Engine (VTI/SCHB)</td>
                  <td className="px-6 py-4 text-slate-700">~10% historical</td>
                  <td className="px-6 py-4 text-slate-700">Any</td>
                  <td className="px-6 py-4 text-emerald-600">High</td>
                  <td className="px-6 py-4 text-emerald-600">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BLIND SPOT ALERT */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Blind Spot: Most Investors Don't See These</h3>
                <p className="text-slate-700 mb-4">
                  Fractional housing and workforce housing aren't in most advisors' playbooks — because they're new. But the data exists now. The platforms exist now. The old playbook was: save for a down payment, buy one house, hope appreciation happens. <strong>The new reality: build a national portfolio for the price of a used car.</strong>
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>This isn't financial advice.</strong> These are emerging platforms. Research thoroughly, understand the illiquidity and risks, and don't invest money you can't afford to lock up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Use any real estate gains to fuel low-cost index funds like VTI or SCHB for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="House Hacking"
              description="Go active if you want full control and have the time/skills for property management"
              onClick={() => onNavigate('house-hacking')}
              accentColor="amber"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Use rental income from fractional shares to fund your pay-yourself-first surplus"
              onClick={() => onNavigate('cashflow')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Small $100 starts overcome inertia and loss aversion — automate and forget"
              onClick={() => onNavigate('behavioral-finance')}
              accentColor="blue"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Pick Your Path?</h2>
            <p className="text-xl mb-8 text-emerald-50">
              Start with $100 on Arrived — just to see how it feels. Or dig deeper on Roots. Just don't wait for "the right time."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Back to The Wealth Engine
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('house-hacking')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                House Hacking (Active Path)
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('debt-elimination')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Fix the Leaks
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}