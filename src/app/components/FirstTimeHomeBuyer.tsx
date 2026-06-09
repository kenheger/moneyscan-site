import { ArrowRight, Home, DollarSign, Calculator, Shield, CheckCircle, TrendingUp } from 'lucide-react';

interface FirstTimeHomeBuyerProps {
  onNavigate: (page: string) => void;
  hasLeftLanding?: boolean;
}

export default function FirstTimeHomeBuyer({ onNavigate, hasLeftLanding }: FirstTimeHomeBuyerProps) {
  return (
    <div className="w-full bg-white min-h-screen">

      {/* Hero - Light Blue Band Style */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              First Time Home Buyer
            </h1>
          </div>
          <p className="text-lg text-slate-700 mb-2">
            The best strategy for building long-term wealth, when you're starting out is to buy that first home as fast as possible to start building equity and then, systematically trading up.
          </p>
          <p className="text-base text-emerald-700 font-semibold">
            Many Resources to Get You on that Path — Now:
          </p>
        </div>
      </section>

      {/* Ken's Resources - Condensed */}
      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3">
            {/* Down Payment Resource */}
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <h3 className="font-bold text-slate-900 mb-1">Down Payment Resource</h3>
              <p className="text-sm text-slate-700 mb-1">Massive national database tracking over 2,600 local, state, and federal housing programs. Plug in your household income, profession, and target area — it matches you with specific grants, forgivable loans, and tax credits you can actually use.</p>
              <a href="https://www.downpaymentresource.com" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-700 hover:text-emerald-900 font-medium">DownPaymentResource.com →</a>
            </div>

            {/* Fannie Mae */}
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-1">Fannie Mae's Down Payment Assistance Tool</h3>
              <p className="text-sm text-slate-700 mb-1">Powered by Down Payment Resource, this tool lets you cross-reference specific neighborhoods to see exactly what kind of first-time buyer assistance is baked into the area. FHA loans with a 3.5% down payment are still available everywhere when you meet specific parameters like income and credit score.</p>
              <a href="https://www.knowyouroptions.com/down-payment-assistance/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 font-medium">KnowYourOptions.com →</a>
            </div>

            {/* State Housing */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-slate-900 mb-1">Check State Housing Department Websites</h3>
              <p className="text-sm text-slate-700 mb-1">Many states offer specialized low-interest initiatives, lower down payment options, competitive interest rates, and down payment assistance up to $15,000–$20,000 for qualified buyers. See real-time parameters for every program. Target profession perks. Housing Authorities explicitly outline boosted assistance for "PEN" applicants (Protectors, Educators, Nurses/Healthcare workers, and active military).</p>
              <p className="text-sm text-slate-700 mb-1">Example: <a href="https://welcomehome.tdhca.texas.gov" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 font-medium">Texas Housing Authority</a></p>
            </div>

            {/* HUD Homestore */}
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <h3 className="font-bold text-slate-900 mb-1">HUD Homestore</h3>
              <p className="text-sm text-slate-700 mb-1">HUD lists FHA foreclosed properties here. Huge first-time home buyer advantage: owner-occupants have first dibs on these properties for a specific period before any real estate investors can bid. This eliminates corporate competition and lets you hunt for properties with built-in equity margins.</p>
              <a href="https://www.hudhomestore.com" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-700 hover:text-emerald-900 font-medium">HUDHomestore.com →</a>
            </div>

            {/* Cosmetic Fixer-Uppers */}
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-1">Target Cosmetic Fixer-Uppers</h3>
              <p className="text-sm text-slate-700 mb-1">Look for structurally sound homes that need cosmetic work (flooring, paint, outdated kitchens/bathrooms). Buying a home that scares off turnkey buyers allows you to purchase at a discount. You and your friends can possibly do much of the finishing work yourselves — increasing your equity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Down Payment Options - Condensed */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-4">Down Payment Options</h2>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 border-t-4 border-emerald-500">
              <h3 className="font-bold text-slate-900 mb-2">Conventional</h3>
              <p className="text-2xl font-black text-emerald-600 mb-2">3%*</p>
              <p className="text-xs text-slate-600 mb-2">Fannie Mae Home Ready / Freddie Mac Home Possible programs for first-time buyers. PMI required if down payment &lt; 20%.</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Credit score: 620+</li>
                <li>✓ Income limits apply</li>
                <li>✓ PMI: 0.5%–1% of loan annually</li>
                <li className="text-xs text-slate-400 mt-1">* Traditional conventional = 20% (no PMI)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border-t-4 border-blue-500">
              <h3 className="font-bold text-slate-900 mb-2">FHA</h3>
              <p className="text-2xl font-black text-blue-600 mb-2">3.5%</p>
              <p className="text-xs text-slate-600 mb-2">Federal Housing Administration. Easier credit requirements. Higher upfront MIP fee.</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Credit score: 580+</li>
                <li>✓ DTI: case-by-case</li>
                <li>✓ Upfront MIP: 1.75% of loan</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border-t-4 border-amber-500">
              <h3 className="font-bold text-slate-900 mb-2">VA / USDA</h3>
              <p className="text-2xl font-black text-amber-600 mb-2">0%</p>
              <p className="text-xs text-slate-600 mb-2">Veterans (VA) or rural buyers (USDA). No down payment. VA funding fee or USDA guarantee fee.</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ VA: veteran or surviving spouse</li>
                <li>✓ USDA: rural property</li>
                <li>✓ No down payment required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* First Steps - Condensed */}
      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-4">Your First Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
              <div className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Check Your Credit Score</h3>
                <p className="text-sm text-slate-600">Get your free credit report at AnnualCreditReport.com. Aim for 620+ for conventional, 580+ for FHA. Fix any errors.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Get Pre-Approved</h3>
                <p className="text-sm text-slate-600">Talk to 2-3 lenders. Get a pre-approval letter — it tells sellers you're serious and shows how much house you can afford.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <div className="w-7 h-7 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Determine Your Budget</h3>
                <p className="text-sm text-slate-600">The rule: your mortgage (PITI) should be ≤ 28% of gross income. Use the 36% rule for all debt. Don't forget closing costs (2-5% of purchase price).</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
              <div className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Find a Real Estate Agent</h3>
                <p className="text-sm text-slate-600">Buyers' agents are free — they get paid by the seller. Interview 2-3. Look for someone who explains the process clearly and responds quickly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg md:col-span-2">
              <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Start Shopping</h3>
                <p className="text-sm text-slate-600">Make a list of must-haves vs nice-to-haves. Visit homes in person. When you find the one, move fast — good homes sell fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources - Condensed */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 text-center mb-3">Helpful Resources</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-pre-approval-en-1957/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900 text-sm">CFPB: Understanding Pre-Approval</p>
              <p className="text-xs text-slate-500">Official guide from the Consumer Financial Protection Bureau</p>
            </a>
            <a href="https://www.hud.gov/program_offices/housing/sfh/info/ homeownershipvouchers" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900 text-sm">HUD Down Payment Assistance</p>
              <p className="text-xs text-slate-500">Federal and state down payment assistance programs</p>
            </a>
            <a href="https://www.nerdwallet.com/mortgage/mortgage-calculator" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900 text-sm">Mortgage Calculators</p>
              <p className="text-xs text-slate-500">NerdWallet's free mortgage calculators</p>
            </a>
            <a href="https://www.va.gov/housing-assistance/home-loans/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded border border-slate-200 hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-900 text-sm">VA Home Loans</p>
              <p className="text-xs text-slate-500">For veterans and service members</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs">
            Contact: <a href="mailto:info@moneyscan.com" className="text-emerald-400 hover:text-emerald-300">info@moneyscan.com</a>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © 2026 Moneyscan LLC. Educational only — not personalized advice.
          </p>
        </div>
      </footer>
    </div>
  );
}