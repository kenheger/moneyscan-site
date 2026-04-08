import { TrendingUp, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import CompoundCalculator from './CompoundCalculator';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';

interface WealthEngineProps {
  onNavigate: (page: string) => void;
}

export default function WealthEngine({ onNavigate }: WealthEngineProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              The Wealth Engine
            </h1>
          </div>
          <p className="text-2xl text-slate-600 mb-4">
            Compound Interest and Long-Term Investing
          </p>
          <p className="text-sm text-slate-500">
            Meta: Master the first principle of wealth building: consistent contributions plus long-term compounding growth.
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
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Wealth is built through the mathematics of compound interest.</strong> Small, consistent contributions allowed to grow over long periods become the engine that creates financial freedom.
            </p>
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-slate-700 mb-4">
              Every dollar you save or invest has two jobs:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
              <li>Survive today</li>
              <li><strong>Work for you tomorrow</strong> — growing exponentially instead of being spent once</li>
            </ol>
            <p className="text-slate-700">
              This is the only principle that turns time into your greatest financial ally.
            </p>

            <div className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-3">Simple Illustration</h4>
              <p className="text-slate-700">
                Imagine putting away <strong>$300 per month</strong> instead of spending it. Over decades, that money doesn't just add up — it <strong>multiplies</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <CompoundCalculator />
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Benchmark: The Math You Can Count On</h2>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-xl border border-emerald-200">
              <p className="text-lg text-slate-800">
                <strong>Historical Performance:</strong> Broad U.S. stock market indexes (represented by the S&P 500) have delivered an average annual total return of approximately <strong>10% nominally</strong> (including dividends) over the past 90+ years, or roughly <strong>7% after inflation</strong>.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Contribution</th>
                  <th className="px-6 py-4 text-left font-semibold">Time Period</th>
                  <th className="px-6 py-4 text-left font-semibold">At ~7% Real Return</th>
                  <th className="px-6 py-4 text-left font-semibold">At ~10% Nominal Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">$200</td>
                  <td className="px-6 py-4 text-slate-700">20 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~$82,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~$95,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">$300</td>
                  <td className="px-6 py-4 text-slate-700">30 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~$300,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~$415,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">$500</td>
                  <td className="px-6 py-4 text-slate-700">40 years</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">~$1,050,000</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">~$1,650,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              Key Takeaway
            </h4>
            <p className="text-slate-700">
              <strong>Time + Consistency + Reasonable Growth Rate = Life-changing results.</strong> You don't need to pick winning stocks or time the market. You need to start and stay in the game.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-slate-700 mb-4">
              Millions of everyday investors have built substantial wealth by simply:
            </p>
            <ul className="space-y-3">
              {['Investing regularly in low-cost broad-market funds', 'Ignoring daily market noise', 'Leaving the money alone for decades'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 mt-6">
              This approach has survived the Great Depression, multiple recessions, wars, inflation spikes, and market crashes — and still delivered strong long-term results for patient investors.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Simple Actionable Vehicles <span className="text-slate-500 text-xl">(Examples Only)</span>
          </h2>
          <p className="text-slate-600 mb-8">
            These popular, low-cost options help many people execute the principle of consistent, diversified long-term investing:
          </p>

          <div className="space-y-6">
            <VehicleCard
              name="Vanguard Total Stock Market ETF (VTI)"
              description="Provides broad exposure to nearly the entire U.S. stock market (large-, mid-, and small-cap stocks) with an ultra-low expense ratio of 0.03%. A simple, set-it-and-forget-it core holding for compounding."
              features={[
                'Expense ratio: 0.03% (very low — about $3 per year on a $10,000 investment)',
                'High liquidity and diversification across thousands of stocks',
                'Practical note: Hold it inside a 401(k), IRA, or taxable brokerage; automate monthly contributions'
              ]}
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              gradient="from-emerald-500 to-blue-600"
            />

            <VehicleCard
              name="Schwab U.S. Broad Market ETF (SCHB)"
              description="Another ultra-low-cost total market ETF that delivers similar broad U.S. stock exposure (tracking the Dow Jones U.S. Broad Stock Market Index)."
              features={[
                'Expense ratio: 0.03%',
                'Strong asset base and tight tracking to the broad market',
                'Practical note: Ideal if you already have a Schwab account; pair with automatic investing'
              ]}
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              gradient="from-blue-500 to-emerald-600"
            />
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <p className="text-slate-700">
              Open or use an existing tax-advantaged account (401(k) with employer match first, then IRA), select one of these (or a similar total-market fund), and set up recurring investments from your paycheck. Increase the amount over time as income grows.
            </p>
          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Context & Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Risk:</strong> Stocks can drop sharply in the short term (20–50% declines have happened multiple times). This strategy works because you invest for the long term (10+ years).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Past vs Future:</strong> Historical ~10% nominal returns are not a guarantee of future results.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Inflation:</strong> Always think in real (after-inflation) terms — roughly 7% has been a realistic long-term expectation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Personal Factors:</strong> Your age, risk tolerance, job stability, and goals matter. This is general education, not personalized advice.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects to Other Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Creates the monthly contributions that feed the engine"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Stops high-interest leaks (21–25% APR credit cards) that destroy compounding"
              onClick={() => onNavigate('debt-elimination')}
            />
            <ConnectionCard
              title="Protection & Liquidity"
              description="Builds an emergency fund so you never have to sell investments at a loss"
            />
            <ConnectionCard
              title="Real Estate Paths"
              description="Provides additional surplus or alternative forms of growth and control"
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Put the Wealth Engine to Work?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Start by calculating what consistent investing could mean for you, then explore how to protect and accelerate it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('debt-elimination')}
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Fix the Leaks (Debt)
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
      </section>
    </div>
  );
}
