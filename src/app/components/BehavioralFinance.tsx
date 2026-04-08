import { Brain, AlertCircle, CheckCircle, ArrowRight, TrendingDown, Eye, TrendingUp } from 'lucide-react';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface BehavioralFinanceProps {
  onNavigate: (page: string) => void;
}

export default function BehavioralFinance({ onNavigate }: BehavioralFinanceProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              Behavioral Finance
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Why Smart People Sabotage Their Wealth
          </p>
          <p className="text-base text-slate-600">
            Discover how psychological biases derail even the best financial plans and how to protect your Wealth Engine from your own mind.
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
              The mathematics of compound interest and sound financial strategies only work if your <strong>behavior</strong> supports them. Human psychology — emotions, mental shortcuts, and biases — often works against long-term wealth building. <strong>Awareness plus simple systems beat willpower alone.</strong>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700 mb-4">
              You can understand the Wealth Engine perfectly (consistent investing at ~10% historical nominal returns), yet still underperform dramatically because of predictable human errors.
            </p>
            <p className="text-lg text-slate-700">
              Behavioral finance explains the gap between <strong>knowing what to do</strong> and <strong>actually doing it</strong>. It turns first-principles knowledge into lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Common Biases Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Most Common Biases & Their Impact</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Bias</th>
                  <th className="px-6 py-4 text-left font-semibold">What It Is</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Real Cost to Your Wealth Engine</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <BiasRow
                  bias="Loss Aversion"
                  whatItIs="Losses hurt ~2× more than gains feel good"
                  cost="Panic-selling during downturns; holding losers too long"
                  example="Selling stocks in a crash instead of staying invested for ~10% historical nominal returns"
                />
                <BiasRow
                  bias="Overconfidence"
                  whatItIs="Overestimating your timing or stock-picking skill"
                  cost="Excessive trading, higher fees, chasing 'hot' ideas"
                  example="Trying to beat low-cost index funds"
                />
                <BiasRow
                  bias="Herd Mentality"
                  whatItIs="Following the crowd (FOMO or panic)"
                  cost="Buying high, selling low"
                  example="Jumping into hot real estate or crowdfunding at peaks"
                />
                <BiasRow
                  bias="Recency Bias"
                  whatItIs="Overweighting recent events"
                  cost="Changing strategy after one bad/good year"
                  example="Abandoning dollar-cost averaging after a market dip"
                />
                <BiasRow
                  bias="Mental Accounting"
                  whatItIs="Treating money differently by 'bucket'"
                  cost="Spending windfalls while carrying high-interest debt"
                  example="Using tax refunds for fun instead of debt payoff"
                />
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
            <span className="font-semibold">*</span>
            <p>
              Historical ~10% nominal returns referenced throughout are based on S&P 500 long-term averages.
              See <button onClick={() => onNavigate('wealth-engine')} className="text-emerald-600 hover:text-emerald-700 underline font-medium">The Wealth Engine</button> for full context and caveats.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Benchmark</h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The "Behavior Gap"</h3>
                <p className="text-slate-700 mb-4">
                  Behavioral mistakes create a significant gap between market returns and what individual investors actually earn. Studies consistently show that many investors earn <strong>1–4%+ less per year</strong> than the market itself due to poor timing driven by emotions.
                </p>
                <p className="text-slate-700">
                  Loss aversion and overconfidence are often the biggest drags. Over decades, that gap can cost <strong>hundreds of thousands in lost compounding</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Achievers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real-World Achievers (and Cautionary Tales)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
              <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Positive Achievers</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Investors who <strong>automate contributions and rebalancing</strong> stick closest to the historical ~10% nominal path</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>They treat market volatility as <strong>noise, not a signal to act</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <AlertCircle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">✗ Common Pitfalls</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span>During market declines, many sell due to <strong>loss aversion</strong> and miss the recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span><strong>Overconfident traders</strong> frequently underperform passive index investors after fees and taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-red-600">•</span>
                  <span><strong>Herd behavior</strong> fuels bubbles and crashes that hurt late followers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-slate-700 text-lg">
              <strong>The winners design their environment</strong> (automation, rules, accountability) to work with human nature rather than against it.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Vehicles */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            1–2 Simple Actionable Vehicles
          </h2>

          <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These strategies help protect your Wealth Engine from behavioral mistakes. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Vehicle 1: Automation & Pre-Commitment Systems</h3>
                  <p className="text-slate-700 mb-4">
                    <strong>Set it and forget it:</strong> Remove daily decision-making where biases thrive.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Automatic paycheck deductions into your 401(k) or IRA (low-cost index funds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Automatic extra debt payments or savings transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>Target-date or balanced funds that automatically adjust over time</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-emerald-700">Micro-example:</strong> Set recurring $300/month auto-transfer from checking into Vanguard VTI inside your Roth IRA on the 1st of each month. You'll never see it, never debate it, and compounding works without emotional interference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Vehicle 2: Rules & Checklists to Counter Biases</h3>
                  <ul className="space-y-3 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>"Wait 30 days" rule</strong> before big purchases or investment changes (counters recency and herd bias)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Portfolio rebalancing schedule</strong> (once or twice a year) instead of emotional reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Written Investment Policy Statement</strong> — a simple one-page document outlining your long-term plan (e.g., "I invest consistently regardless of market headlines"). Review it annually.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">•</span>
                      <span><strong>Quick self-check:</strong> "Am I making this decision based on fear/greed/recent news, or on the first principles?"</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Keep a one-page note in your phone: "My plan: 80% VTI, 20% bonds. Rebalance Jan 1 only. Ignore daily news." When you feel the urge to sell during a dip, read it first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caveats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Key Caveats
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Everyone has biases — even professionals. The goal is not perfection but reducing their impact.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>Behavioral finance does not replace the math of compounding; it protects it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>This is general education. Severe emotional or decision-making challenges may benefit from working with a fiduciary advisor or therapist.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How This Connects Elsewhere</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ConnectionCard
              title="Wealth Engine"
              description="Automation helps you stay invested long enough for compounding to work"
              onClick={() => onNavigate('wealth-engine')}
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Mental accounting keeps people paying minimums on ~21–25% APR cards"
              onClick={() => onNavigate('debt-elimination')}
            />
            <ConnectionCard
              title="Real Estate Paths"
              description="Herd mentality drives buying at peaks in house hacking or crowdfunding"
              onClick={() => onNavigate('real-estate-crowdfunding')}
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="Pay-yourself-first overrides the urge to spend first"
            />
          </div>
        </div>
      </section>

      {/* Quick Bias Self-Check Teaser */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Quick Bias Self-Check</h3>
            </div>
            <p className="text-slate-700 mb-6">
              Before making your next financial decision, ask yourself these three questions:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-slate-900">Is this based on recent news or long-term principles?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Recency Bias, Herd Mentality)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-slate-900">Am I reacting to fear of loss or seeking actual gains?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Loss Aversion)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-slate-900">Does this align with my written investment policy?</p>
                  <p className="text-sm text-slate-600 mt-1">(Checks for: Overconfidence, Mental Accounting)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Pro tip:</strong> If you answer "no" to any of these, wait 48 hours before acting. Your future self will thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Wealth Engine from Yourself?</h2>
            <p className="text-xl text-emerald-50">
              Master your behavior and the math will take care of the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Return to see the math you're protecting
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                View Wealth Engine <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('debt-elimination')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingDown className="w-8 h-8 group-hover:text-red-600 transition-colors" />
                <h3 className="font-bold text-lg">Fix the Leaks</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Eliminate debt to stop reverse compounding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Fix the Leaks <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-emerald-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="font-bold text-lg">Real Estate Paths</h3>
              </div>
              <p className="text-sm text-emerald-50 group-hover:text-slate-600">
                Add diversification through house hacking or passive crowdfunding
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Explore Options <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-emerald-50 text-sm">
              Remember: The best investment strategy is one you can actually stick to — that's where behavioral finance matters most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function BiasRow({ bias, whatItIs, cost, example }: any) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4 font-bold text-slate-900">{bias}</td>
      <td className="px-6 py-4 text-slate-700">{whatItIs}</td>
      <td className="px-6 py-4 text-red-600 font-medium bg-red-50/30">{cost}</td>
      <td className="px-6 py-4 text-slate-600 text-sm">{example}</td>
    </tr>
  );
}
