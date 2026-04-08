import { Home, CheckCircle, AlertCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';
import VehicleCard from './shared/VehicleCard';
import ConnectionCard from './shared/ConnectionCard';
import WealthEngineIcon from './shared/WealthEngineIcon';

interface HouseHackingProps {
  onNavigate: (page: string) => void;
}

export default function HouseHacking({ onNavigate }: HouseHackingProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center border-2 border-white">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              House Hacking
            </h1>
          </div>
          <p className="text-2xl font-bold text-slate-700 mb-4">
            Turn Your Largest Expense Into an Asset
          </p>
          <p className="text-base text-slate-600">
            Convert your biggest monthly cost into cash flow and equity that accelerates your Wealth Engine.
          </p>
        </div>
      </section>

      {/* First Principle */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              First Principle
              <div className="ml-auto">
                <WealthEngineIcon />
              </div>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Convert your biggest monthly expense — housing — into a cash-flow-positive asset that builds equity and accelerates your Wealth Engine.</strong> By living in one unit while renting the others, you reduce (or eliminate) your own housing cost while creating surplus that can compound over time.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
            <p className="text-lg text-slate-700">
              In 2026, with elevated home prices in many markets, traditional homeownership often drains cash flow. House hacking flips the script: <strong>your property pays you</strong> while you build long-term equity and wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Table */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Benchmark / Illustration</h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">The Math of House Hacking</h3>
          <p className="text-slate-600 mb-8">
            Living in one unit of a 2–4 unit property, and let rental income from the others offset your mortgage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Scenario (approx. $400k property)</th>
                  <th className="px-6 py-4 text-left font-semibold">Traditional Single-Family</th>
                  <th className="px-6 py-4 text-left font-semibold">House Hack (Duplex/Triplex)</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Monthly Benefit</span>
                      <WealthEngineIcon className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Down Payment (FHA-eligible)</td>
                  <td className="px-6 py-4 text-slate-700">~$14,000 (3.5%)</td>
                  <td className="px-6 py-4 text-slate-700">~$14,000 (3.5%)</td>
                  <td className="px-6 py-4 text-slate-600">Same entry cost</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Monthly Mortgage + Taxes/Insurance</td>
                  <td className="px-6 py-4 text-slate-700">~$2,400</td>
                  <td className="px-6 py-4 text-slate-700">~$2,400</td>
                  <td className="px-6 py-4 text-slate-600">—</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Rental Income (after vacancies/maintenance)</td>
                  <td className="px-6 py-4 text-slate-700">$0</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">$1,800–$2,600</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold bg-emerald-50/30">$1,800–$2,600</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Your Net Housing Cost</td>
                  <td className="px-6 py-4 text-red-600 font-bold">~$2,400</td>
                  <td className="px-6 py-4 text-emerald-600 font-black text-lg">$0 – $600</td>
                  <td className="px-6 py-4 text-emerald-600 font-black text-lg">Huge surplus</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-emerald-100 border-2 border-emerald-300 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-12 h-12 text-emerald-700 flex-shrink-0" />
                <WealthEngineIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Takeaway</h3>
                <p className="text-slate-700">
                  Rental income can cover <strong>most or all</strong> of your housing expense, freeing hundreds (or thousands) of dollars per month to feed your core compound-interest Wealth Engine.
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
            <p className="text-lg text-slate-700 mb-4">
              In 2026, house hacking remains one of the most accessible ways for first-time buyers and younger households to break into real estate.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Many report cutting their effective housing costs by <strong>50–100%</strong> while building equity faster than traditional homeowners.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Works especially well in markets with <strong>strong rental demand</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>FHA rules continue to support</strong> owner-occupied 2–4 unit properties with low down payments.
                </span>
              </li>
            </ul>
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
            These are practical paths many people use to execute house hacking. Research local markets, get pre-approved, and run the numbers carefully — landlord responsibilities and maintenance costs are real.
          </p>

          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
            <p className="text-sm text-slate-700">
              <strong>Examples only</strong> — These strategies turn housing expense into asset. Not personalized advice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">FHA Loan on a 2–4 Unit Property</h3>
                  <p className="text-slate-700 mb-4">
                    Government-backed financing that allows a low down payment while you live in one unit and rent the others. Rental income can help you qualify.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span>As low as <strong>3.5% down</strong> (subject to 2026 FHA limits, which vary by county — higher in high-cost areas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span>You must <strong>occupy one unit for at least one year</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">•</span>
                      <span><strong>Practical note:</strong> Focus on cash-flow-positive properties. Use rental income from the other units to offset or exceed your mortgage. Ideal for duplexes/triplexes/quads in stable rental markets.</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-emerald-700">Micro-example:</strong> Buy a $380k duplex in a mid-sized market with $13,300 down (3.5%). Live in Unit A. Rent Unit B for $1,400/month. Your $2,200 mortgage becomes an $800 net housing cost — save $1,400/month to invest in VTI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Conventional Loan + Roommates or ADU Strategy</h3>
                  <p className="text-slate-700 mb-4">
                    Buy a single-family home or property with an accessory dwelling unit (ADU/granny flat), then rent out spare bedrooms or the ADU.
                  </p>
                  <ul className="space-y-2 text-slate-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span>Often <strong>5–20% down</strong> depending on your credit and lender</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span>More flexible than strict multi-unit rules in some areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">•</span>
                      <span><strong>Practical note:</strong> Simpler management for beginners. In 2026, ADUs are increasingly permitted and popular for generating steady side income with lower tenant turnover.</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-blue-700">Micro-example:</strong> Buy a 3-bedroom house with a backyard ADU for $350k. Rent the ADU for $1,200/month and one bedroom for $700/month. Your $2,000 mortgage becomes a $100 cost — nearly free housing while building equity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3">How to Execute:</h4>
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Analyze local rental rates vs. property prices</li>
              <li>Get pre-approved and calculate true cash flow (include 20–30% vacancy/maintenance buffer)</li>
              <li>Start small — many successful house hackers begin with a duplex and scale later</li>
            </ol>
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
                <span><strong>Active involvement:</strong> Expect tenant issues, maintenance, and local landlord regulations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Market risk:</strong> Rental demand and home prices vary widely by location. Not every property will cash flow positively.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span><strong>Lifestyle fit:</strong> Living with tenants (even in separate units) requires tolerance and good screening.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-600">•</span>
                <span>These are general examples only. This is educational direction, not personalized advice. Consult lenders, real estate professionals, and run detailed numbers for your situation. Past performance and rental yields are not guarantees.</span>
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
              title="The Wealth Engine"
              description="Freed-up monthly surplus goes straight into low-cost index funds (VTI/SCHB) for long-term compounding"
              onClick={() => onNavigate('wealth-engine')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="Cash Flow Mastery"
              description="House hacking supercharges 'pay yourself first' by reducing your largest expense"
              accentColor="emerald"
            />
            <ConnectionCard
              title="Debt Elimination"
              description="Lower housing costs help you attack high-interest debt (~21–25% APR cards) faster"
              onClick={() => onNavigate('debt-elimination')}
              accentColor="emerald"
            />
            <ConnectionCard
              title="Behavioral Finance"
              description="Having skin in the game as both owner and landlord encourages disciplined cash-flow management"
              onClick={() => onNavigate('behavioral-finance')}
              accentColor="emerald"
            />
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Turn Housing Into a Wealth Builder?</h2>
            <p className="text-xl text-amber-50">
              Start by analyzing properties in your market and running the cash-flow numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => onNavigate('wealth-engine')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 group-hover:text-emerald-600 transition-colors" />
                <h3 className="font-bold text-lg">The Wealth Engine</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                See where your housing surplus compounds — the math of long-term growth
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('debt-elimination')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="font-bold text-lg">Fix the Leaks First</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                Eliminate high-interest debt before investing in real estate
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Eliminate Debt <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="group bg-white/10 backdrop-blur border-2 border-white/50 hover:bg-white hover:text-amber-600 p-6 rounded-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <Home className="w-8 h-8 group-hover:text-indigo-600 transition-colors" />
                <h3 className="font-bold text-lg">Passive Alternative</h3>
              </div>
              <p className="text-sm text-amber-100 group-hover:text-slate-600">
                Prefer no landlord duties? Explore real estate crowdfunding instead
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                Compare Options <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-amber-100 text-sm">
              Remember: House hacking is active investing — weigh the work vs. passive alternatives like index funds or crowdfunding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
