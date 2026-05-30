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
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl mb-6">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              BUY THAT FIRST HOME!
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-4">
              The best strategy for building long-term wealth, when you're starting out is to buy that first home as fast as possible to start building equity and then, systematically trading up.
            </p>
            <p className="text-lg md:text-xl text-emerald-700 font-semibold">
              Many Resources to Get You on that Path — Now:
            </p>
          </div>
        </div>
      </section>

      {/* Ken's Resources */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {/* Down Payment Resource */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="font-bold text-slate-900 mb-2">Down Payment Resource</h3>
              <p className="text-sm text-slate-700 mb-2">Massive national database tracking over 2,600 local, state, and federal housing programs. Plug in your household income, profession, and target area — it matches you with specific grants, forgivable loans, and tax credits you can actually use.</p>
              <a href="https://www.downpaymentresource.com" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-700 hover:text-emerald-900 font-medium">DownPaymentResource.com →</a>
            </div>

            {/* Fannie Mae */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Fannie Mae's Down Payment Assistance Tool</h3>
              <p className="text-sm text-slate-700 mb-2">Powered by Down Payment Resource, this tool lets you cross-reference specific neighborhoods to see exactly what kind of first-time buyer assistance is baked into the area. FHA loans with a 3.5% down payment are still available everywhere when you meet specific parameters like income and credit score.</p>
              <a href="https://www.knowyouroptions.com/down-payment-assistance/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 font-medium">KnowYourOptions.com →</a>
            </div>

            {/* State Housing */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-bold text-slate-900 mb-2">Check State Housing Department Websites</h3>
              <p className="text-sm text-slate-700 mb-2">Many states offer specialized low-interest initiatives, lower down payment options, competitive interest rates, and down payment assistance up to $15,000–$20,000 for qualified buyers. See real-time parameters for every program. Target profession perks. Housing Authorities explicitly outline boosted assistance for "PEN" applicants (Protectors, Educators, Nurses/Healthcare workers, and active military).</p>
              <p className="text-sm text-slate-700 mb-2">Example: <a href="https://welcomehome.tdhca.texas.gov" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 font-medium">Texas Housing Authority</a></p>
            </div>

            {/* HUD Homestore */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="font-bold text-slate-900 mb-2">HUD Homestore</h3>
              <p className="text-sm text-slate-700 mb-2">HUD lists FHA foreclosed properties here. Huge first-time home buyer advantage: owner-occupants have first dibs on these properties for a specific period before any real estate investors can bid. This eliminates corporate competition and lets you hunt for properties with built-in equity margins.</p>
              <a href="https://www.hudhomestore.com" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-700 hover:text-emerald-900 font-medium">HUDHomestore.com →</a>
            </div>

            {/* Cosmetic Fixer-Uppers */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-2">Target Cosmetic Fixer-Uppers</h3>
              <p className="text-sm text-slate-700 mb-2">Look for structurally sound homes that need cosmetic work (flooring, paint, outdated kitchens/bathrooms). Buying a home that scares off turnkey buyers allows you to purchase at a discount. You and your friends can possibly do much of the finishing work yourselves — increasing your equity.</p>
            </div>

            {/* House Hacking */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-bold text-slate-900 mb-2">House Hacking</h3>
              <p className="text-sm text-slate-700 mb-2">Buy a duplex, triplex, or a single-family home with a rentable basement or accessory dwelling unit (ADU). Letting a tenant cover half of your mortgage completely changes your debt-to-income math.</p>
              <button onClick={() => onNavigate('house-hacking')} className="text-sm text-amber-700 hover:text-amber-900 font-medium">See House Hacking Page →</button>
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
              <p className="text-3xl font-black text-emerald-600 mb-4">3%*</p>
              <p className="text-slate-600 text-sm mb-4">Fannie Mae Home Ready / Freddie Mac Home Possible programs for first-time buyers. PMI required if down payment &lt; 20%.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Credit score: 620+</li>
                <li>✓ Income limits apply</li>
                <li>✓ PMI: 0.5%–1% of loan annually</li>
                <li className="text-xs text-slate-500 mt-2">* Traditional conventional = 20% (no PMI)</li>
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
