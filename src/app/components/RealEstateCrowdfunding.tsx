import { Building2, CheckCircle, AlertCircle, ArrowRight, Calculator, BookOpen, TrendingUp } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface RealEstateCrowdfundingProps {
  onNavigate: (page: string) => void;
}

export default function RealEstateCrowdfunding({ onNavigate }: RealEstateCrowdfundingProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Real Estate Crowdfunding
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Passive Real Estate Exposure
          </p>
          <p className="text-base text-slate-600">
            Gain diversified real estate income and appreciation without the hassles of direct property management.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Gain diversified real estate ownership and potential income or appreciation without the large capital, active management, or illiquidity of direct property ownership.</strong> This provides an alternative growth and income stream that can complement — not replace — your core Wealth Engine of consistent long-term stock-market compounding.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Real estate can add diversification and passive income, but traditional ownership is capital-intensive and hands-on. Crowdfunding <strong>lowers the barrier dramatically</strong>, letting you participate with small amounts while keeping most of your money working in liquid, high-growth assets.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark / Comparison */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Real Estate Crowdfunding vs. Other Paths</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Return Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Minimum Investment</th>
                  <th className="px-6 py-4 text-left font-semibold">Liquidity</th>
                  <th className="px-6 py-4 text-left font-semibold">Management Effort</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Best For</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">House Hacking (Active)</td>
                  <td className="px-6 py-4 text-slate-700">Mortgage offset + equity growth</td>
                  <td className="px-6 py-4 text-slate-700">3.5%+ down</td>
                  <td className="px-6 py-4 text-slate-700">Medium</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">High</td>
                  <td className="px-6 py-4 text-slate-700">Hands-on cash-flow builders</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-indigo-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Real Estate Crowdfunding</td>
                  <td className="px-6 py-4 text-indigo-600 font-bold bg-emerald-50/30">7–12% (income + growth)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">$10–$100</td>
                  <td className="px-6 py-4 text-amber-600 font-medium">Low (years)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">Very Low</td>
                  <td className="px-6 py-4 text-indigo-600 font-bold">Passive diversification</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Core Wealth Engine (VTI/SCHB)</td>
                  <td className="px-6 py-4 text-slate-700">~10% historical nominal</td>
                  <td className="px-6 py-4 text-slate-700">Any</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">High</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">None</td>
                  <td className="px-6 py-4 text-slate-700">Long-term compounding</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-indigo-100 border-2 border-indigo-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-12 h-12 text-indigo-700 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  Crowdfunding offers accessible real estate exposure with <strong>far lower capital and effort</strong> than direct ownership. Returns are not guaranteed and depend on market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <p className="text-lg text-slate-700">
              Many everyday investors have built diversified real estate holdings starting with small, consistent contributions on platforms like <strong>Fundrise and Arrived</strong>. They often use these as a complement to their stock index funds, generating quarterly dividends while maintaining focus on their primary Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-6">
            These platforms make passive real estate investing straightforward. Review current fees, liquidity terms, risks, and performance data carefully.
          </p>

          <div className="mb-6 p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These platforms offer passive real estate exposure. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Fundrise</h3>
                  <p className="text-slate-700 mb-4">
                    A diversified platform offering exposure to residential and commercial real estate through funds and eREITs. It provides broad, hands-off allocation with very low entry barriers.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Minimum:</strong> $10</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Typical fees:</strong> ~1% total annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span><strong>Practical note:</strong> Many users automate small monthly contributions. Recommended hold period is often 5+ years.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Arrived</h3>
                  <p className="text-slate-700 mb-4">
                    Focuses on fractional ownership in single-family rental properties, delivering quarterly dividends from rent and potential appreciation.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Minimum:</strong> $100 per property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Targets:</strong> 3–5%+ rental yields + appreciation (historical blended returns often projected in the 6–10% range)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600">•</span>
                      <span><strong>Practical note:</strong> Build a portfolio gradually across multiple homes. Limited secondary market options exist for some liquidity.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <p className="text-slate-700">
              Allocate a modest portion (5–20%) of your portfolio and consider automating contributions from your monthly surplus. Treat this as a diversifier rather than your primary growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Illiquidity & Risk:</strong> Capital is typically locked for years. Returns are not guaranteed and can be affected by interest rates, property values, and local markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Fees:</strong> Reduce net returns.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Review all platform documents and consider your own risk tolerance and time horizon.</span>
              </li>
            </ul>
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
              description="Use any income or gains to fuel low-cost index funds like VTI or SCHB for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="House Hacking"
              description="Choose crowdfunding if active landlord responsibilities don't fit your lifestyle"
              onClick={() => onNavigate('house-hacking')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Low minimums and automation help overcome hesitation or loss aversion"
              onClick={() => onNavigate('behavioral-finance')}
              accentColor="indigo"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Small, consistent investments build alongside your pay-yourself-first surplus"
              onClick={() => {}}
              accentColor="indigo"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Passive Real Estate?</h2>
            <p className="text-xl mb-8 text-indigo-50">
              Add real estate diversification without the landlord hassles—but keep your core Wealth Engine running strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('wealth-engine')}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg flex items-center justify-center gap-2"
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
