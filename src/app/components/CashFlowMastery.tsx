import { Droplets, TrendingUp, CheckCircle, ArrowRight, Wallet } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface CashFlowMasteryProps {
  onNavigate: (page: string) => void;
}

export default function CashFlowMastery({ onNavigate }: CashFlowMasteryProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Cash Flow Mastery
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Create Reliable Surplus
          </p>
          <p className="text-base text-slate-600">
            Master the discipline of living below your means to fuel consistent wealth building.
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
              <strong>Surplus (Income – Expenses) is the fuel for all wealth building.</strong> You cannot compound effectively if money leaks out faster than it comes in. Live below your means systematically by automating "pay yourself first" so saving and investing happen before lifestyle spending.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              Most people spend first and save what's left — which is usually nothing. Mastering cash flow turns sporadic saving into a consistent, automated system that steadily feeds your Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">Pay Yourself First vs. Typical Spending</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Approach</th>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Income</th>
                  <th className="px-6 py-4 text-left font-semibold">Automated Savings/Investing</th>
                  <th className="px-6 py-4 text-left font-semibold">Remaining for Spending</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Long-Term Impact</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Typical (Spend First)</td>
                  <td className="px-6 py-4 text-slate-700">$6,000</td>
                  <td className="px-6 py-4 text-red-600 font-medium">$0–$300 (whatever is left)</td>
                  <td className="px-6 py-4 text-slate-700">$5,700+</td>
                  <td className="px-6 py-4 text-red-600 font-bold">Slow or no progress</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-emerald-50/20">
                  <td className="px-6 py-4 font-bold text-slate-900">Pay Yourself First (15–20% Rule)</td>
                  <td className="px-6 py-4 text-slate-700">$6,000</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">$900–$1,200</td>
                  <td className="px-6 py-4 text-slate-700">$4,800–$5,100</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/50">Strong compounding</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Takeaway</h3>
            <p className="text-slate-700">
              Automating 15–20%+ of every paycheck before spending creates reliable surplus. Over time, that consistent fuel dramatically accelerates the ~10% historical compounding of your Wealth Engine.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Households that consistently save 15–20% or more of income through automation build financial security and wealth far faster than those living paycheck-to-paycheck. Many successful investors credit "pay yourself first" as the foundational habit that allowed their investments to compound over decades.
          </p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Actionable Vehicles</h2>
          <p className="text-lg text-slate-600 mb-8">
            These popular tools help implement systematic cash flow management and pay-yourself-first automation. Research pricing and features to find the best fit.
          </p>

          <div className="grid gap-8">
            {/* Monarch Money */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Monarch Money</h3>
                  <p className="text-slate-700 mb-4">
                    A modern budgeting and net-worth tracking app that helps visualize income, expenses, investments, and shared household finances.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Pricing:</strong> ~$14.99/month or $99.99/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Key strengths:</strong> Strong account syncing, custom categories, forecasting, and collaborative features</span>
                    </li>
                  </ul>
                  <p className="text-sm text-emerald-800 bg-emerald-50 p-3 rounded-lg">
                    <strong>Practical note:</strong> Excellent for ongoing monitoring and adjusting your automated savings rate.
                  </p>
                </div>
              </div>
            </div>

            {/* YNAB */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">YNAB (You Need A Budget)</h3>
                  <p className="text-slate-700 mb-4">
                    Focuses on zero-based budgeting ("every dollar has a job") to build disciplined habits and create reliable surplus.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Pricing:</strong> ~$14.99/month or $109/year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Key strengths:</strong> Emphasizes behavior change, goal tracking, and proactive planning</span>
                    </li>
                  </ul>
                  <p className="text-sm text-emerald-800 bg-emerald-50 p-3 rounded-lg">
                    <strong>Practical note:</strong> Particularly effective for breaking the paycheck-to-paycheck cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-sm text-amber-900">
              <strong>Disclaimer:</strong> These examples are educational only and not personalized recommendations. Always research current pricing, features, and user reviews before subscribing to any financial tool.
            </p>
          </div>
        </div>
      </section>

      {/* How to Execute */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Execute</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">1.</span>
              <p>Set up automatic transfers from every paycheck: 15–20%+ to savings/investing accounts first.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">2.</span>
              <p>Use one of the tools above (or a simple spreadsheet) to track spending in the remaining buckets.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">3.</span>
              <p>Review monthly and increase your savings rate as income grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Caveats</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>Your exact savings rate depends on income, life stage, and obligations — start where you can and build up.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>These are general examples only. This is educational direction, not personalized advice.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">•</span>
              <p>Budgeting tools require consistent use; the real power comes from the automation and habits they support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Connects */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <WealthEngineIcon className="w-8 h-8" />
              How This Connects to Other Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ConnectionCard
                title="Wealth Engine"
                description="Surplus created here becomes the consistent contributions that drive long-term compounding."
                onClick={() => onNavigate('wealth-engine')}
                color="emerald"
              />
              <ConnectionCard
                title="Debt Elimination"
                description="Strong cash flow makes it easier to attack high-interest debt aggressively."
                onClick={() => onNavigate('debt-elimination')}
                color="red"
              />
              <ConnectionCard
                title="Behavioral Finance"
                description="Automation overrides present bias and mental accounting that lead to overspending."
                onClick={() => onNavigate('behavioral-finance')}
                color="purple"
              />
              <ConnectionCard
                title="Real Estate Paths"
                description="Extra surplus can fund house hacking or crowdfunding investments."
                onClick={() => onNavigate('house-hacking')}
                color="indigo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Build Your Financial Foundation?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start with the core principles: automate your surplus, eliminate high-interest debt, and let compound interest do the heavy lifting.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Explore All Principles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
