import { ArrowRight, Home, DollarSign, Calculator, Shield, CheckCircle, TrendingUp } from 'lucide-react';
import logoImage from '../../imports/Moneyscan_Logo_Final.jpg';

interface FirstTimeHomeBuyerProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function FirstTimeHomeBuyer({ onNavigate, hasLeftLanding }: FirstTimeHomeBuyerProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Minimal Header */}
      <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="MONEYSCAN"
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={() => hasLeftLanding && onNavigate('real-estate-paths')}
              disabled={!hasLeftLanding}
              className={`text-sm transition-colors ${hasLeftLanding ? 'text-slate-600 hover:text-emerald-600 cursor-pointer' : 'text-slate-300 cursor-not-allowed'}`}
            >
              Back to Real Estate Paths
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl mb-6">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              First-Time Home Buyer
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
              Everything you need to buy your first home — without the confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Why Buy Now */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Buying a Home Still Makes Sense</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Mortgage rates are down</strong> from the 2023 peak — if you bought in 2022-2023, refinancing could save you thousands.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Inventory is rising</strong> — more homes for sale means more negotiating power for buyers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Prices are stabilizing</strong> — the wild 2020-2022 increases have cooled in most markets.</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Down payment programs</strong> — as low as 3% (conventional) or 3.5% (FHA) with grants available.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Tax benefits</strong> — mortgage interest deduction, property tax deduction, capital gains exclusion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span><strong>Wealth building</strong> — forced savings through equity + appreciation over time.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Down Payment Options */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Down Payment Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conventional</h3>
              <p className="text-3xl font-black text-emerald-600 mb-4">3%</p>
              <p className="text-slate-600 text-sm mb-4">Fannie Mae/Freddie Mac loans for buyers with decent credit. PMI required if down payment &lt; 20%.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Credit score: 620+</li>
                <li>✓ DTI: typically &lt; 43%</li>
                <li>✓ PMI: 0.5%–1% of loan annually</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">FHA</h3>
              <p className="text-3xl font-black text-blue-600 mb-4">3.5%</p>
              <p className="text-slate-600 text-sm mb-4">Federal Housing Administration. Easier credit requirements. Higher upfront MIP fee.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Credit score: 580+</li>
                <li>✓ DTI: case-by-case</li>
                <li>✓ Upfront MIP: 1.75% of loan</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">VA / USDA</h3>
              <p className="text-3xl font-black text-amber-600 mb-4">0%</p>
              <p className="text-slate-600 text-sm mb-4">Veterans (VA) or rural buyers (USDA). No down payment. VA funding fee or USDA guarantee fee.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ VA: veteran or surviving spouse</li>
                <li>✓ USDA: rural property</li>
                <li>✓ No down payment required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* First Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Your First Steps</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Check Your Credit Score</h3>
                <p className="text-slate-700">Get your free credit report at AnnualCreditReport.com. Aim for 620+ for conventional, 580+ for FHA. Fix any errors.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Pre-Approved</h3>
                <p className="text-slate-700">Talk to 2-3 lenders. Get a pre-approval letter — it tells sellers you're serious and shows how much house you can afford.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Determine Your Budget</h3>
                <p className="text-slate-700">The rule: your mortgage (PITI) should be ≤ 28% of gross income. Use the 36% rule for all debt. Don't forget closing costs (2-5% of purchase price).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Find a Real Estate Agent</h3>
                <p className="text-slate-700">Buyers' agents are free — they get paid by the seller. Interview 2-3. Look for someone who explains the process clearly and responds quickly.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Start Shopping</h3>
                <p className="text-slate-700">Make a list of must-haves vs nice-to-haves. Visit homes in person. When you find the one, move fast — good homes sell fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common First-Time Buyer Mistakes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-red-600 mb-3">Don't Do This:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Skip the inspection to "win" the bid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Max out your budget — leave room for repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Forget about property taxes & insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Buy before selling (if you have a home to sell)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-emerald-600 mb-3">Do This Instead:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Always get an inspection — negotiate repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Buy at 75% of what you're approved for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Factor in 1-2% of home value for annual costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>List first or use a bridge loan if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Helpful Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-pre-approval-en-1957/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900">CFPB: Understanding Pre-Approval</p>
              <p className="text-sm text-slate-600">Official guide from the Consumer Financial Protection Bureau</p>
            </a>
            <a href="https://www.hud.gov/program_offices/housing/sfh/info/ homeownershipvouchers" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900">HUD Down Payment Assistance</p>
              <p className="text-sm text-slate-600">Federal and state down payment assistance programs</p>
            </a>
            <a href="https://www.nerdwallet.com/mortgage/mortgage-calculator" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900">Mortgage Calculators</p>
              <p className="text-sm text-slate-600">NerdWallet's free mortgage calculators</p>
            </a>
            <a href="https://www.va.gov/housing-assistance/home-loans/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900">VA Home Loans</p>
              <p className="text-sm text-slate-600">For veterans and service members</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA to Other Pages */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Explore More Real Estate Paths?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('house-hacking')}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              House Hacking
            </button>
            <button
              onClick={() => onNavigate('real-estate-crowdfunding')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Real Estate Crowdfunding
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Contact: <a href="mailto:info@moneyscan.com" className="text-emerald-400 hover:text-emerald-300">info@moneyscan.com</a>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © 2026 Moneyscan LLC. Educational only — not personalized advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
