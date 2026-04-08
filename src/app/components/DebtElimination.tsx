import { CreditCard, AlertCircle, CheckCircle, ArrowRight, TrendingDown, DollarSign } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface DebtEliminationProps {
  onNavigate: (page: string) => void;
}

export default function DebtElimination({ onNavigate }: DebtEliminationProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingDown className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Debt Elimination
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Stop the Reverse Compound Engine
          </p>
          <p className="text-base text-slate-600">
            High-interest debt destroys wealth faster than most investments grow it. Learn how to minimize interest costs aggressively.
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
              <strong>High-interest debt (especially credit cards) is a reverse compound interest engine that silently destroys wealth.</strong> Every dollar paid in unnecessary interest is money permanently removed from your surplus — the fuel that powers your Wealth Engine. Minimize or eliminate interest costs aggressively so every extra payment reduces principal, not just services the debt.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              At today's average credit card APR of ~20–25%, carrying a balance costs far more than most investments earn. Eliminating this drag frees up cash flow that can be redirected straight into compounding.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">The Real Cost of Minimum Payments vs. Accelerated Payoff</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Scenario ($8,000 balance at ~22% APR)</th>
                  <th className="px-6 py-4 text-left font-semibold">Minimum Payments Only</th>
                  <th className="px-6 py-4 text-left font-semibold">0% Balance Transfer + Aggressive Payoff ($400/month)</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Difference</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Time to Pay Off</td>
                  <td className="px-6 py-4 text-red-600 font-medium">20–30+ years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">20–24 months</td>
                  <td className="px-6 py-4 text-slate-700">Saves years</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Total Interest Paid</td>
                  <td className="px-6 py-4 text-red-600 font-bold bg-red-50/30">$8,000 – $12,000+</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">~$0 during promo period (plus 3–5% transfer fee)</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">Saves thousands</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Monthly Cash Flow After Payoff</td>
                  <td className="px-6 py-4 text-red-600">Still trapped</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">Full $400 available for investing/savings</td>
                  <td className="px-6 py-4 text-slate-700">Huge acceleration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <TrendingDown className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  High-interest debt at 20–25% APR mathematically works against you faster than the ~10% historical returns of your Wealth Engine can work for you. Acting quickly with a 0% bridge can save thousands and accelerate your surplus.
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
              Millions of consumers successfully use 0% APR balance transfer offers to escape the debt cycle faster. Those who combine the transfer with a strict payoff plan (and avoid new charges) consistently report faster net-worth growth compared to people who only pay minimums. The key behavior: treat the promo period as a limited-time window to attack the debt aggressively.
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
            These are commonly used tools to minimize interest costs and accelerate payoff. Review current offers, eligibility (good-to-excellent credit usually required), fees, and terms carefully — offers change frequently.
          </p>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These tools help eliminate high-interest debt. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Wells Fargo Reflect® Card</h3>
                  <p className="text-slate-700 mb-4">
                    One of the longer 0% intro APR periods on balance transfers, directly neutralizing high-interest credit card debt during the promo window.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>0% intro APR</strong> for up to 21 months on qualifying balance transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Balance transfer fee typically 5% (min $5); must transfer within 120 days of opening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span><strong>Practical note:</strong> Transfer high-rate balances quickly, then make payments larger than the old minimum during the promo period. Avoid new purchases if they don't qualify for 0%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">BankAmericard®</h3>
                  <p className="text-slate-700 mb-4">
                    Provides a competitive long 0% intro APR period on balance transfers with a straightforward structure.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>0% intro APR</strong> for up to 21 billing cycles on qualifying balance transfers (made within first 60 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span>Balance transfer fee typically 5%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Practical note:</strong> Pair with a strict payoff plan. Once the debt is cleared, redirect the former minimum payments to your Wealth Engine (e.g., VTI or SCHB).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Check your credit score and current offers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Transfer high-rate balances quickly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>Automate payments larger than the old minimum during the 0% window.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">•</span>
                <span>After payoff, roll the freed-up cash flow into investing or emergency savings.</span>
              </li>
            </ul>
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
                <span>Requires <strong>good-to-excellent credit</strong> (typically 670+ FICO) for the best offers and lowest fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is a <strong>temporary bridge</strong>, not a long-term solution. New spending on the card can erase gains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Post-promo APR can jump to 17–28%+ if any balance remains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Always read the fine print and consider your full financial situation.</span>
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
              description="Freed-up cash flow goes directly into low-cost index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Debt elimination supercharges your surplus by removing a major leak"
              onClick={() => {}}
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Mental accounting and present bias often keep people paying minimums — automation and strict plans help overcome this"
              onClick={() => onNavigate('behavioral-finance')}
            />
            <ConnectionCard
              title="Protection & Liquidity"
              description="Clearing high-interest debt protects your emergency fund and compounding engine"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-emerald-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Resources</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Better Credit Card Options</h3>
              <p className="text-slate-700 mb-3">
                Looking for a credit card with lower interest rates and no balance transfer fees? Some credit unions offer excellent alternatives to big-bank cards — like the Five Star Platinum Visa with 0% balance transfer fees, no annual fee, and 13–17.99% APR.
              </p>
              <p className="text-slate-600 text-sm mb-3">
                Five Star Credit Union serves members nationwide and offers digital banking entirely online.
              </p>
              <a
                href="https://www.fivestarcu.com/personal/platinum-visa-credit-card"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1"
              >
                Learn More About Five Star Platinum Visa →
              </a>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Help for Medical Debt</h3>
              <p className="text-slate-700 mb-3">
                Medical debt is the #1 cause of bankruptcy in America. But hospitals are required by law to offer financial assistance — and most people don't know it exists.
              </p>
              <p className="text-slate-600 text-sm mb-3">
                Dollar For is a free nonprofit that helps you find out if you qualify for hospital charity care. They've already erased over $26 million in medical debt for over 1,500 patients.
              </p>
              <a
                href="https://forms.dollarfor.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1"
              >
                Check If You Qualify at Dollar For →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Stop the Reverse Compounding?</h2>
            <p className="text-xl mb-8 text-emerald-50">
              Every dollar you free from interest can start working <em>for</em> you in the Wealth Engine.
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
                onClick={() => onNavigate('behavioral-finance')}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Behavioral Finance
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
